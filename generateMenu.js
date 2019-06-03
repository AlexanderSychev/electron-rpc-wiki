'use strict';

const glob = require('glob');
const path = require('path');
const fs = require('fs');

const DOCS_DIR = path.join(__dirname, 'docs');

/**
 * @param {string} itemFile
 * @param {string} versionDir
 * @param {string} to
 * @returns {string}
 */
function resolveNavLinkTo(itemFile, versionDir, to) {
    const dirname = path.dirname(itemFile);
    const basename = path.basename(itemFile, '.json');
    return `/${path.relative(versionDir, path.join(dirname, to))}`;
}

/**
 * @param {string} itemFile
 * @param {string} versionDir
 * @returns {Object}
 */
function mapMenuItem(itemFile, versionDir) {
    let { subItems, to, ...restItem } = require(itemFile);
    if (subItems && subItems.length > 0) {
        subItems = subItems.map(subPath => {
            const subFile = require.resolve(path.join(path.dirname(itemFile), subPath));
            return mapMenuItem(subFile, versionDir);
        });
    }
    return {
        ...restItem,
        subItems,
        to: to ? resolveNavLinkTo(itemFile, versionDir, to) : undefined,
    };
}

function main() {
    const versionsDirs = glob.sync(path.join(DOCS_DIR, 'v*'));
    for (const versionDir of versionsDirs) {
        const roots = [
            ...glob.sync(path.join(versionDir, 'index.json')),
            ...glob.sync(path.join(versionDir, '*', 'index.json')),
        ];
        const menuItems = roots.map(root => mapMenuItem(root, versionDir));
        fs.writeFileSync(path.join(versionDir, 'menu.json'), JSON.stringify(menuItems), 'utf-8');
    }
}

main();
