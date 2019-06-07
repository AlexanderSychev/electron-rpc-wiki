const globOriginal = require('glob');
const fs = require('fs');

/**
 * @param {string} pattern
 * @param {*} options
 * @returns {Promise<string>}
 */
exports.glob = (pattern, options) =>
    new Promise((resolve, reject) =>
        globOriginal(pattern, options, (err, matches) => {
            if (err) {
                reject(err);
            } else {
                resolve(matches);
            }
        })
    );

/**
 * @param {string} path
 * @returns {Promise<string[]>}
 */
exports.readdir = path =>
    new Promise((resolve, reject) =>
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        })
    );

/**
 * @param {string} path
 * @returns {Promise<Stats>}
 */
exports.stat = path =>
    new Promise((resolve, reject) =>
        fs.stat(path, (err, stats) => {
            if (err) {
                reject(err);
            } else {
                resolve(stats);
            }
        })
    );

/**
 * @param {string} path
 * @returns {Promise<Object>}
 */
exports.readJson = path =>
    new Promise((resolve, reject) =>
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const parsed = JSON.parse(data);
                resolve(parsed);
            }
        })
    );

/**
 * @param {Object} obj
 * @param {...any} omittedProps
 * @returns {Object}
 */
exports.omit = (obj, ...omittedProps) => {
    const keys = Object.keys(obj);
    const result = {};
    for (const key of keys) {
        if (!omittedProps.includes(key)) {
            result[key] = obj[key];
        }
    }
    return result;
};

/**
 * @param {*} path
 * @param {*} data
 * @param {*} options
 * @returns {Promise<void>}
 */
exports.writeFile = (path, data, options) =>
    new Promise((resolve, reject) =>
        fs.writeFile(path, data, options, err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    );
