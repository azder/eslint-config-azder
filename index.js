/* eslint-disable max-lines */
/** @see http://eslint.org/docs/rules/ */

'use strict'; // ALWAYS

const {OFF, WRN, ERR} = require('./constants.js');

const simplex = (
    (level, array) => Object.fromEntries(
        array.map(
            key => [
                key,
                [level],
            ],
        ),
    )
);

const complex = (
    (level, object) => Object.fromEntries(
        Object
            .entries(object)
            .map(
                ([key, val]) => [
                    key,
                    (
                        Array.isArray(val)
                            ? [level, ...val]
                            : [level, val]
                    ),
                ],
            ),
    )
);


module.exports = {

    parserOptions: {
        ecmaVersion: 2020,
        // sourceType:   'module', // or 'script'
        ecmaFeatures: {
            globalReturn:  false,
            jsx:           false,
            impliedStrict: false,
        },
    },

    env: {
        browser: true,
        node:    true,
    },

    extends: [],

    rules: {
        ...simplex(OFF, require('./rules/eslint/off.simple.js')),
        ...simplex(WRN, require('./rules/eslint/warning.simple.js')),
        ...complex(WRN, require('./rules/eslint/warning.complex.js')),
        ...simplex(ERR, require('./rules/eslint/error.simple.js')),
        ...complex(ERR, require('./rules/eslint/error.complex.js')),
        // ...require('./rules/react.rules.js'),
    },

    settings: {
        // react: require('./settings/react.settings.js'),
    },

};


