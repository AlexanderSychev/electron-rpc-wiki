'use strict';

const path = require('path');

const { glob, readdir, stat, readJson, omit, writeFile } = require('./utils');

const DOCS_DIR = path.resolve(__dirname, '../docs');

const VERSIONS_PATTERN = path.join(DOCS_DIR, 'v*');

/**
 * @param {string} filePath
 * @returns {string}
 */
const extractLocale = filePath => filePath.slice(-8).slice(0, 5);

/**
 * @param {string} baseFullPath
 */
const getMarkdownFiles = async baseFullPath => {
    /** @type {[string, string]} */
    const founded = (await glob(`${baseFullPath}.*.md`)).map(file => [extractLocale(file), file]);
    const result = {};
    for (const [locale, file] of founded) {
        result[locale] = path.relative(DOCS_DIR, file);
    }
    return result;
};

/**
 * @param {string} pagePath
 */
const mapPage = async (pagePath, versionDir) => {
    let result = null;

    const { name: filename, dir: dirname } = path.parse(pagePath);

    const { name, isNotRoot, tags, redirectTo, exact, sortIndex = 0 } = await readJson(pagePath);
    const files = !redirectTo ? await getMarkdownFiles(path.join(dirname, filename)) : undefined;
    let to = '/' + path.relative(versionDir, dirname);
    if (filename !== 'index') {
        to = path.join(to, filename);
    }
    result = {
        name,
        files,
        tags,
        isNotRoot,
        to,
        exact,
        sortIndex,
        redirectTo: redirectTo ? path.resolve(to, redirectTo) : undefined,
    };

    return result;
};

/**
 * @param {*[]} items
 * @return {*[]}
 */
const sortItems = items => items.sort((a, b) => a.sortIndex - b.sortIndex);

const mapDir = async (dir, versionDir = dir) => {
    const subs = (await readdir(dir)).filter(sub => !sub.endsWith('.md')).map(sub => path.join(dir, sub));

    /** @type {string} */
    let index = null;
    /** @type {string[]} */
    let concretes = [];
    /** @type {string[]} */
    let subdirs = [];

    for (const sub of subs) {
        const statistics = await stat(sub);
        if (statistics.isDirectory()) {
            subdirs.push(sub);
        } else if (path.basename(sub, '.json') === 'index') {
            index = sub;
        } else {
            concretes.push(sub);
        }
    }

    const concretesDatas = await Promise.all(concretes.map(concrete => mapPage(concrete, versionDir)));
    const subdirsDatas = await Promise.all(subdirs.map(subdir => mapDir(subdir, versionDir)));

    if (index) {
        const indexData = await mapPage(index, versionDir);
        if (indexData.isNotRoot) {
            return sortItems([omit(indexData, 'isNotRoot'), ...concretesDatas, ...subdirsDatas]);
        } else {
            indexData.subItems = sortItems([...concretesDatas, ...subdirsDatas]);
            return omit(indexData, 'isNotRoot');
        }
    } else {
        return sortItems([...concretesDatas, ...subdirsDatas]);
    }
};

const buildIndex = (tree, index, currentPath = []) => {
    tree.forEach((item, i) => {
        const cp = currentPath.concat(i);
        index[item.to] = cp;
        if (item.subItems && item.subItems.length > 0) {
            buildIndex(item.subItems, index, cp);
        }
    });
};

const main = async () => {
    const versionsDirs = await glob(VERSIONS_PATTERN);

    const result = {};

    for (const versionDir of versionsDirs) {
        const splited = versionDir.split(path.sep);
        const version = splited[splited.length - 1].slice(1);
        const data = await mapDir(versionDir);
        const tree = Array.isArray(data) ? data : [data];
        const index = {};
        buildIndex(tree, index);
        result[version] = { tree, index };
    }

    await writeFile(path.join(DOCS_DIR, 'sitemap.json'), JSON.stringify(result), 'utf-8');
};

main().then(
    () => process.exit(0),
    err => {
        console.error(err);
        process.exit(1);
    }
);
