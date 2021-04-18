/* eslint-disable max-lines */

'use strict'; // ALWAYS


module.exports = {

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },

    extends: '@azhder/eslint-config-azder',

    rules: require('./rules/react.rules.js'),

    settings: {
        react: require('./settings/react.settings.js'),
    },

};


