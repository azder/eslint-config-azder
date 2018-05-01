/* eslint-disable max-lines */
/** @see http://eslint.org/docs/rules/ */

'use strict'; // ALWAYS

const OFF = 0;
const WRN = 1;
const ERR = 2;

const ALWAYS = 'always';
const MALWAYS = 'always-multiline';
const NEVER = 'never';

const ASNEEDED = 'as-needed';
const CONSISTENT = 'consistent';
const IGNORE = 'ignore';
const BEFORE = 'before';
const AFTER = 'after';
const BESIDE = 'beside';


const INDENT = 4;
const PARAMS = 4;


module.exports = {

    parserOptions: {
        ecmaVersion:  2016,
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

    extends: 'eslint:recommended',

    rules: {

        // configured

        indent:                             [ERR, INDENT], // eslint-recommended: "off",
        quotes:                             [ERR, 'single'], // eslint-recommended: "off",
        curly:                              [ERR, 'all'], // eslint-recommended: "off",
        strict:                             [ERR, 'global'], // eslint-recommended: "off",
        'max-params':                       [ERR, PARAMS], // eslint-recommended: "off",
        semi:                               [ERR, ALWAYS], // eslint-recommended: "off",
        yoda:                               [ERR, ALWAYS], // eslint-recommended: "off",
        'object-curly-spacing':             [ERR, NEVER], // eslint-recommended: "off",
        'quote-props':                      [ERR, ASNEEDED], // eslint-recommended: "off",
        'brace-style':                      [ERR, '1tbs', {allowSingleLine: true}], // eslint-recommended: "off",
        'func-style':                       [ERR, 'expression', {allowArrowFunctions: true}], // eslint-recommended: "off",
        'key-spacing':                      [ERR, {beforeColon: false, afterColon: true, mode: 'minimum'}], // eslint-recommended: "off",
        'no-shadow':                        [ERR, {builtinGlobals: true}], // eslint-recommended: "off",
        'no-use-before-define':             [ERR, {functions: true, classes: true}], // eslint-recommended: "off",
        'one-var':                          [ERR, {var: ALWAYS, let: NEVER, const: NEVER}], // eslint-recommended: "off",
        'no-eval':                          [ERR, {allowIndirect: true}], // eslint-recommended: "off",
        'array-bracket-newline':            [ERR, CONSISTENT], // eslint-recommended: "off",
        'function-paren-newline':           [ERR, CONSISTENT], // eslint-recommended: "off",
        'nonblock-statement-body-position': [ERR, BESIDE], // eslint-recommended: "off",
        'object-curly-newline':             [ERR, {[CONSISTENT]: true}], // eslint-recommended: "off",
        'arrow-body-style':                 [WRN, ASNEEDED], // eslint-recommended: "off",
        'arrow-parens':                     [WRN, ASNEEDED], // eslint-recommended: "off",
        'comma-spacing':                    [WRN, {before: false, after: true}], // eslint-recommended: "off",
        'computed-property-spacing':        [WRN, NEVER], // eslint-recommended: "off",
        'dot-location':                     [WRN, 'property'], // eslint-recommended: "off",
        'func-call-spacing':                [WRN, NEVER], // eslint-recommended: "off",
        'implicit-arrow-linebreak':         [WRN, BESIDE], // eslint-recommended: "off",
        'init-declarations':                [WRN, NEVER, {ignoreForLoopInit: false}], // eslint-recommended: "off",
        'lines-between-class-members':      [WRN, ALWAYS, {exceptAfterSingleLine: false}], // eslint-recommended: "off",
        'max-lines':                        [WRN, {max: 200, skipBlankLines: true, skipComments: true}], // eslint-recommended: "off",
        'multiline-ternary':                [WRN, MALWAYS], // eslint-recommended: "off",
        'newline-per-chained-call':         [WRN, {ignoreChainWithDepth: 3}], // eslint-recommended: "off",
        'operator-linebreak':               [WRN, 'none', {overrides: {'?': BEFORE, ':': BEFORE}}], // eslint-recommended: "off",
        'rest-spread-spacing':              [WRN, NEVER], // eslint-recommended: "off",
        'generator-star-spacing':           [WRN, {[BEFORE]: true, [AFTER]: false}], // eslint-recommended: "off",


        'no-magic-numbers': [
            WRN,
            {
                [IGNORE]:           [0, 1],
                ignoreArrayIndexes: true,
            },
        ], // eslint-recommended: "off",

        'no-restricted-syntax': [
            ERR,
            'WithStatement',
            'FunctionDeclaration',
            'SwitchStatement',
        ], // eslint-recommended: "off",

        'spaced-comment': [
            ERR,
            ALWAYS,
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

        'comma-dangle': [
            ERR,
            {
                arrays:    MALWAYS,
                objects:   MALWAYS,
                imports:   MALWAYS,
                exports:   MALWAYS,
                functions: IGNORE,
            },
        ], // eslint-recommended: "off",
        // switched on

        camelcase:                    ERR, // eslint-recommended: "off",
        complexity:                   ERR, // eslint-recommended: "off",
        eqeqeq:                       ERR, // eslint-recommended: "off",
        radix:                        ERR, // eslint-recommended: "off",
        'use-isnan':                  ERR, // eslint-recommended: "error",
        'consistent-return':          ERR, // eslint-recommended: "off",
        'valid-typeof':               ERR, // eslint-recommended: "error",
        'no-cond-assign':             ERR, // eslint-recommended: "error",
        'no-dupe-keys':               ERR, // eslint-recommended: "error",
        'no-func-assign':             ERR, // eslint-recommended: "error",
        'no-extra-semi':              ERR, // eslint-recommended: "error",
        'no-obj-calls':               ERR, // eslint-recommended: "error",
        'no-debugger':                ERR, // eslint-recommended: "error",
        'no-irregular-whitespace':    ERR, // eslint-recommended: "error",
        'no-prototype-builtins':      ERR, // eslint-recommended: "off",
        'default-case':               ERR, // eslint-recommended: "off",
        'dot-notation':               ERR, // eslint-recommended: "off",
        'guard-for-in':               ERR, // eslint-recommended: "off",
        'no-alert':                   ERR, // eslint-recommended: "off",
        'no-caller':                  ERR, // eslint-recommended: "off",
        'no-eq-null':                 ERR, // eslint-recommended: "off",
        'no-extend-native':           ERR, // eslint-recommended: "off",
        'no-fallthrough':             ERR, // eslint-recommended: "error",
        'no-implied-eval':            ERR, // eslint-recommended: "off",
        'no-labels':                  ERR, // eslint-recommended: "off",
        'no-loop-func':               ERR, // eslint-recommended: "off",
        'no-multi-str':               ERR, // eslint-recommended: "off",
        'no-global-assign':           ERR, // eslint-recommended: "error",
        'no-redeclare':               ERR, // eslint-recommended: "error",
        'no-script-url':              ERR, // eslint-recommended: "off",
        'no-sequences':               ERR, // eslint-recommended: "off",
        'no-with':                    ERR, // eslint-recommended: "off",
        'vars-on-top':                ERR, // eslint-recommended: "off",
        'no-delete-var':              ERR, // eslint-recommended: "error",
        'no-label-var':               ERR, // eslint-recommended: "off",
        'no-shadow-restricted-names': ERR, // eslint-recommended: "error",
        'new-cap':                    ERR, // eslint-recommended: "off",
        'new-parens':                 ERR, // eslint-recommended: "off",
        'no-array-constructor':       ERR, // eslint-recommended: "off",
        'no-lonely-if':               ERR, // eslint-recommended: "off",
        'no-mixed-spaces-and-tabs':   ERR, // eslint-recommended: "error",
        'no-new-object':              ERR, // eslint-recommended: "off",
        'no-var':                     ERR, // eslint-recommended: "off",
        'no-plusplus':                ERR, // eslint-recommended: "off",
        'no-floating-decimal':        ERR, // eslint-recommended: "off",
        'no-else-return':             ERR, // eslint-recommended: "off",
        'constructor-super':          ERR, // eslint-recommended: "error",
        'getter-return':              ERR, // eslint-recommended: "off",
        'no-buffer-constructor':      ERR, // eslint-recommended: "off",
        'no-case-declarations':       ERR, // eslint-recommended: "error",
        'no-class-assign':            ERR, // eslint-recommended: "error",
        'no-compare-neg-zero':        ERR, // eslint-recommended: "error",
        'no-const-assign':            ERR, // eslint-recommended: "error",
        'no-constant-condition':      ERR, // eslint-recommended: "error",
        'no-control-regex':           ERR, // eslint-recommended: "error",
        'no-dupe-args':               ERR, // eslint-recommended: "error",
        'no-dupe-class-members':      ERR, // eslint-recommended: "error",
        'no-duplicate-case':          ERR, // eslint-recommended: "error",
        'no-empty':                   ERR, // eslint-recommended: "error",
        'no-empty-character-class':   ERR, // eslint-recommended: "error",
        'no-empty-pattern':           ERR, // eslint-recommended: "error",
        'no-ex-assign':               ERR, // eslint-recommended: "error",
        'no-extra-boolean-cast':      ERR, // eslint-recommended: "error",
        'no-inner-declarations':      ERR, // eslint-recommended: "error",
        'no-invalid-regexp':          ERR, // eslint-recommended: "error",
        'no-new-symbol':              ERR, // eslint-recommended: "error",
        'no-regex-spaces':            ERR, // eslint-recommended: "error",
        'no-self-assign':             ERR, // eslint-recommended: "error",
        'no-sparse-arrays':           ERR, // eslint-recommended: "error",
        'no-this-before-super':       ERR, // eslint-recommended: "error",
        'no-unexpected-multiline':    ERR, // eslint-recommended: "error",
        'no-unsafe-finally':          ERR, // eslint-recommended: "error",
        'no-unsafe-negation':         ERR, // eslint-recommended: "error",
        'no-unused-labels':           ERR, // eslint-recommended: "error",
        'no-useless-escape':          ERR, // eslint-recommended: "error",
        'prefer-rest-params':         ERR, // eslint-recommended: "off",
        'prefer-spread':              ERR, // eslint-recommended: "off",
        'prefer-template':            ERR, // eslint-recommended: "off",
        'require-yield':              ERR, // eslint-recommended: "error",
        'semi-spacing':               ERR, // eslint-recommended: "off",
        'semi-style':                 ERR, // eslint-recommended: "off",
        'symbol-description':         ERR, // eslint-recommended: "off",
        'template-tag-spacing':       ERR, // eslint-recommended: "off",

        // non strict

        'no-console':                    WRN, // eslint-recommended: "error",
        'no-unreachable':                WRN, // eslint-recommended: "error",
        'no-extra-bind':                 WRN, // eslint-recommended: "off",
        'no-lone-blocks':                WRN, // eslint-recommended: "off",
        'no-multi-spaces':               WRN, // eslint-recommended: "off",
        'no-new':                        WRN, // eslint-recommended: "off",
        'no-new-func':                   WRN, // eslint-recommended: "off",
        'no-new-wrappers':               WRN, // eslint-recommended: "off",
        'no-octal':                      WRN, // eslint-recommended: "error",
        'no-octal-escape':               WRN, // eslint-recommended: "off",
        'no-self-compare':               WRN, // eslint-recommended: "off",
        'wrap-iife':                     WRN, // eslint-recommended: "off",
        'no-catch-shadow':               WRN, // eslint-recommended: "off",
        'no-undef':                      WRN, // eslint-recommended: "error",
        'no-undef-init':                 WRN, // eslint-recommended: "off",
        'no-undefined':                  WRN, // eslint-recommended: "off",
        'no-unused-vars':                WRN, // eslint-recommended: "error",
        'handle-callback-err':           WRN, // eslint-recommended: "off",
        'no-new-require':                WRN, // eslint-recommended: "off",
        'no-path-concat':                WRN, // eslint-recommended: "off",
        'comma-style':                   WRN, // eslint-recommended: "off",
        'consistent-this':               WRN, // eslint-recommended: "off",
        'eol-last':                      WRN, // eslint-recommended: "off",
        'func-names':                    WRN, // eslint-recommended: "off",
        'no-underscore-dangle':          WRN, // eslint-recommended: "off",
        'no-bitwise':                    WRN, // eslint-recommended: "off",
        'arrow-spacing':                 WRN, // eslint-recommended: "off",
        'accessor-pairs':                WRN, // eslint-recommended: "off",
        'block-scoped-var':              WRN, // eslint-recommended: "off",
        'class-methods-use-this':        WRN, // eslint-recommended: "off",
        'keyword-spacing':               WRN, // eslint-recommended: "off",
        'max-statements-per-line':       WRN, // eslint-recommended: "off",
        'no-div-regex':                  WRN, // eslint-recommended: "off",
        'no-empty-function':             WRN, // eslint-recommended: "off",
        'no-implicit-globals':           WRN, // eslint-recommended: "off",
        'no-invalid-this':               WRN, // eslint-recommended: "off",
        'no-negated-condition':          WRN, // eslint-recommended: "off",
        'no-negated-in-lhs':             WRN, // eslint-recommended: "off",
        'no-return-await':               WRN, // eslint-recommended: "off",
        'no-unmodified-loop-condition':  WRN, // eslint-recommended: "off",
        'no-unneeded-ternary':           WRN, // eslint-recommended: "off",
        'no-useless-call':               WRN, // eslint-recommended: "off",
        'no-useless-computed-key':       WRN, // eslint-recommended: "off",
        'no-useless-concat':             WRN, // eslint-recommended: "off",
        'no-useless-rename':             WRN, // eslint-recommended: "off",
        'no-whitespace-before-property': WRN, // eslint-recommended: "off",
        'object-shorthand':              WRN, // eslint-recommended: "off",
        'prefer-arrow-callback':         WRN, // eslint-recommended: "off",
        'prefer-const':                  WRN, // eslint-recommended: "off",
        'prefer-destructuring':          WRN, // eslint-recommended: "off",
        'prefer-numeric-literals':       WRN, // eslint-recommended: "off",
        'require-await':                 WRN, // eslint-recommended: "off",
        'switch-colon-spacing':          WRN, // eslint-recommended: "off",
        'yield-star-spacing':            WRN, // eslint-recommended: "off",


        // switched off

        'no-process-env':                  OFF, // eslint-recommended: "off",
        'no-proto':                        OFF, // eslint-recommended: "off",
        'no-return-assign':                OFF, // eslint-recommended: "off",
        'no-unused-expressions':           OFF, // eslint-recommended: "off",
        'no-void':                         OFF, // eslint-recommended: "off",
        'no-warning-comments':             OFF, // eslint-recommended: "off",
        'no-mixed-requires':               OFF, // eslint-recommended: "off",
        'no-process-exit':                 OFF, // eslint-recommended: "off",
        'no-sync':                         OFF, // eslint-recommended: "off",
        'max-nested-callbacks':            OFF, // eslint-recommended: "off",
        'no-inline-comments':              OFF, // eslint-recommended: "off",
        'no-multiple-empty-lines':         OFF, // eslint-recommended: "off",
        'no-nested-ternary':               OFF, // eslint-recommended: "off",
        'no-space-before-semi':            OFF, // eslint-recommended is missing this one,
        'no-spaced-func':                  OFF, // eslint-recommended: "off",
        'no-ternary':                      OFF, // eslint-recommended: "off",
        'no-trailing-spaces':              OFF, // eslint-recommended: "off",
        'no-wrap-func':                    OFF, // eslint-recommended is missing this one,
        'operator-assignment':             OFF, // eslint-recommended: "off",
        'padded-blocks':                   OFF, // eslint-recommended: "off",
        'sort-vars':                       OFF, // eslint-recommended: "off",
        'space-after-function-name':       OFF, // eslint-recommended is missing this one,
        'space-after-keywords':            OFF, // eslint-recommended is missing this one,
        'space-before-blocks':             OFF, // eslint-recommended: "off",
        'space-in-brackets':               OFF, // eslint-recommended is missing this one,
        'space-in-parens':                 OFF, // eslint-recommended: "off",
        'space-infix-ops':                 OFF, // eslint-recommended: "off",
        'space-return-throw-case':         OFF, // eslint-recommended is missing this one,
        'space-unary-ops':                 OFF, // eslint-recommended: "off",
        'wrap-regex':                      OFF, // eslint-recommended: "off",
        'max-depth':                       OFF, // eslint-recommended: "off",
        'max-len':                         OFF, // eslint-recommended: "off",
        'max-statements':                  OFF, // eslint-recommended: "off",
        'array-bracket-spacing':           OFF, // eslint-recommended: "off",
        'array-callback-return':           OFF, // eslint-recommended: "off",
        'array-element-newline':           OFF, // eslint-recommended: "off",
        'block-spacing':                   OFF, // eslint-recommended: "off",
        'callback-return':                 OFF, // eslint-recommended: "off",
        'capitalized-comments':            OFF, // eslint-recommended: "off",
        'for-direction':                   OFF, // eslint-recommended: "off",
        'func-name-matching':              OFF, // eslint-recommended: "off",
        'global-require':                  OFF, // eslint-recommended: "off",
        'id-blacklist':                    OFF, // eslint-recommended: "off",
        'id-length':                       OFF, // eslint-recommended: "off",
        'id-match':                        OFF, // eslint-recommended: "off",
        'indent-legacy':                   OFF, // eslint-recommended: "off",
        'jsx-quotes':                      OFF, // eslint-recommended: "off",
        'line-comment-position':           OFF, // eslint-recommended: "off",
        'linebreak-style':                 OFF, // eslint-recommended: "off",
        'lines-around-comment':            OFF, // eslint-recommended: "off",
        'lines-around-directive':          OFF, // eslint-recommended: "off",
        'multiline-comment-style':         OFF, // eslint-recommended: "off",
        'newline-after-var':               OFF, // eslint-recommended: "off",
        'newline-before-return':           OFF, // eslint-recommended: "off",
        'no-await-in-loop':                OFF, // eslint-recommended: "off",
        'no-continue':                     OFF, // eslint-recommended: "off",
        'no-duplicate-imports':            OFF, // eslint-recommended: "off",
        'no-extra-label':                  OFF, // eslint-recommended: "off",
        'no-extra-parens':                 OFF, // eslint-recommended: "off",
        'no-implicit-coercion':            OFF, // eslint-recommended: "off",
        'no-iterator':                     OFF, // eslint-recommended: "off",
        'no-mixed-operators':              OFF, // eslint-recommended: "off",
        'no-multi-assign':                 OFF, // eslint-recommended: "off",
        'no-native-reassign':              OFF, // eslint-recommended: "off",
        'no-param-reassign':               OFF, // eslint-recommended: "off",
        'no-restricted-globals':           OFF, // eslint-recommended: "off",
        'no-restricted-imports':           OFF, // eslint-recommended: "off",
        'no-restricted-modules':           OFF, // eslint-recommended: "off",
        'no-restricted-properties':        OFF, // eslint-recommended: "off",
        'no-tabs':                         OFF, // eslint-recommended: "off",
        'no-template-curly-in-string':     OFF, // eslint-recommended: "off",
        'no-throw-literal':                OFF, // eslint-recommended: "off",
        'no-useless-constructor':          OFF, // eslint-recommended: "off",
        'no-useless-return':               OFF, // eslint-recommended: "off",
        'object-property-newline':         OFF, // eslint-recommended: "off",
        'one-var-declaration-per-line':    OFF, // eslint-recommended: "off",
        'padding-line-between-statements': OFF, // eslint-recommended: "off",
        'prefer-promise-reject-errors':    OFF, // eslint-recommended: "off",
        'prefer-reflect':                  OFF, // eslint-recommended: "off",
        'require-jsdoc':                   OFF, // eslint-recommended: "off",
        'sort-imports':                    OFF, // eslint-recommended: "off",
        'sort-keys':                       OFF, // eslint-recommended: "off",
        'template-curly-spacing':          OFF, // eslint-recommended: "off",
        'unicode-bom':                     OFF, // eslint-recommended: "off",
        'valid-jsdoc':                     OFF, // eslint-recommended: "off",
        'no-confusing-arrow':              OFF, // eslint-recommended: "off",

    },
};
