/* eslint-disable quote-props */
'use strict'; // ALWAYS


module.exports = Object.freeze({

    'arrow-body-style':            'as-needed', // eslint-recommended: "off",
    'arrow-parens':                'as-needed', // eslint-recommended: "off",
    'comma-spacing':               {before: false, after: true}, // eslint-recommended: "off",
    'computed-property-spacing':   'never', // eslint-recommended: "off",
    'dot-location':                'property', // eslint-recommended: "off",
    'func-call-spacing':           'never', // eslint-recommended: "off",
    'implicit-arrow-linebreak':    'beside', // eslint-recommended: "off",
    'lines-between-class-members': ['always', {exceptAfterSingleLine: false}], // eslint-recommended: "off",
    'max-lines':                   {
        'max':            200,
        'skipBlankLines': true,
        'skipComments':   true,
    }, // eslint-recommended: "off",
    'multiline-ternary':           'always-multiline', // eslint-recommended: "off",
    'newline-per-chained-call':    {ignoreChainWithDepth: 3}, // eslint-recommended: "off",
    'operator-linebreak':          [
        'none',
        {'overrides': {'?': 'before', ':': 'before'}},
    ], // eslint-recommended: "off",
    'rest-spread-spacing':         'never', // eslint-recommended: "off",
    'generator-star-spacing':      {before: false, after: true}, // eslint-recommended: "off",
    'grouped-accessor-pairs':      'getBeforeSet',
    'max-lines-per-function':      40,
    'no-magic-numbers':            {
        'ignore':             [0, 1],
        'ignoreArrayIndexes': true,
    }, // eslint-recommended: "off",
    'prefer-regex-literals':       {disallowRedundantWrapping: true},
    'space-before-function-paren': {
        'anonymous':  'always',
        'named':      'never',
        'asyncArrow': 'always',
    },

});
