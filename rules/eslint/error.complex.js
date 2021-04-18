/* eslint-disable quote-props */
'use strict'; // ALWAYS


module.exports = Object.freeze({
    'indent':                           4, // eslint-recommended: "off",
    'quotes':                           'single', // eslint-recommended: "off",
    'curly':                            'all', // eslint-recommended: "off",
    'strict':                           'global', // eslint-recommended: "off",
    'max-params':                       4, // eslint-recommended: "off",
    'semi':                             'always', // eslint-recommended: "off",
    'yoda':                             'always', // eslint-recommended: "off",
    'object-curly-spacing':             'never', // eslint-recommended: "off",
    'quote-props':                      'as-needed', // eslint-recommended: "off",
    'brace-style':                      ['1tbs', {allowSingleLine: true}], // eslint-recommended: "off",
    'func-style':                       ['expression', {allowArrowFunctions: true}], // eslint-recommended: "off",
    'key-spacing':                      {beforeColon: false, afterColon: true, mode: 'minimum'}, // eslint-recommended: "off",
    'no-shadow':                        {builtinGlobals: true}, // eslint-recommended: "off",
    'no-use-before-define':             {functions: true, classes: true}, // eslint-recommended: "off",
    'one-var':                          {initialized: 'never', uninitialized: 'always'}, // eslint-recommended: "off",
    'no-eval':                          {allowIndirect: true}, // eslint-recommended: "off",
    'array-bracket-newline':            'consistent', // eslint-recommended: "off",
    'function-paren-newline':           'consistent', // eslint-recommended: "off",
    'nonblock-statement-body-position': 'beside', // eslint-recommended: "off",
    'object-curly-newline':             {consistent: true}, // eslint-recommended: "off",
    'no-restricted-syntax':             ['WithStatement', 'FunctionDeclaration', 'SwitchStatement'], // eslint-recommended: "off",
    'spaced-comment':                   [
        'always',
        {
            line:  {
                exceptions: ['-', '+'],
                markers:    ['=', '!', 'noinspection'],
            },
            block: {
                exceptions: ['-', '+'],
                markers:    ['=', '!'],
                balanced:   false,
            },
        },
    ], // eslint-recommended: "off",
    'comma-dangle':                     [
        {
            arrays:    'always-multiline',
            objects:   'always-multiline',
            imports:   'always-multiline',
            exports:   'always-multiline',
            functions: 'ignore',
        },
    ], // eslint-recommended: "off",
});
