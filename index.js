/** @see http://eslint.org/docs/rules/ */

'use strict'; // ALWAYS

const OFF = 0;
const WRN = 1;
const ERR = 2;

const ALWAYS = 'always';
const MALWAYS = 'always-multiline';
const NEVER = 'never';

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

        indent:                 [ERR, 4],
        quotes:                 [ERR, 'single'],
        curly:                  [ERR, 'all'],
        strict:                 [ERR, 'global'],
        'max-params':           [ERR, 4],
        semi:                   [ERR, ALWAYS],
        yoda:                   [ERR, ALWAYS],
        'object-curly-spacing': [ERR, NEVER],
        'quote-props':          [ERR, 'as-needed'],
        'brace-style':          [ERR, '1tbs', {allowSingleLine: true}],
        'func-style':           [ERR, 'expression', {allowArrowFunctions: true}],
        'key-spacing':          [ERR, {beforeColon: false, afterColon: true, mode: 'minimum'}],
        'no-shadow':            [ERR, {builtinGlobals: true}],
        'no-use-before-define': [ERR, {functions: true, classes: true}],
        'one-var':              [ERR, {var: ALWAYS, let: NEVER, const: NEVER}],
        'no-eval':              [ERR, {allowIndirect: true}],
        'spaced-comment':       [ERR, ALWAYS, {
            line:  {
                exceptions: ['-', '+'],
                markers:    ['=', '!', 'noinspection'],
            },
            block: {
                exceptions: ['-', '+'],
                markers:    ['=', '!'],
                balanced:   false,
            },
        }],
        'comma-dangle':         [ERR, {
            arrays:    MALWAYS,
            objects:   MALWAYS,
            imports:   MALWAYS,
            exports:   MALWAYS,
            functions: 'ignore',
        }],

        // switched on

        camelcase:                    ERR,
        complexity:                   ERR,
        eqeqeq:                       ERR,
        radix:                        ERR,
        'use-isnan':                  ERR,
        'consistent-return':          ERR,
        'valid-typeof':               ERR,
        'no-cond-assign':             ERR,
        'no-dupe-keys':               ERR,
        'no-func-assign':             ERR,
        'no-extra-semi':              ERR,
        'no-obj-calls':               ERR,
        'no-debugger':                ERR,
        'no-irregular-whitespace':    ERR,
        'no-prototype-builtins':      ERR,
        'default-case':               ERR,
        'dot-notation':               ERR,
        'guard-for-in':               ERR,
        'no-alert':                   ERR,
        'no-caller':                  ERR,
        'no-eq-null':                 ERR,
        'no-extend-native':           ERR,
        'no-fallthrough':             ERR,
        'no-implied-eval':            ERR,
        'no-labels':                  ERR,
        'no-loop-func':               ERR,
        'no-multi-str':               ERR,
        'no-global-assign':           ERR,
        'no-redeclare':               ERR,
        'no-script-url':              ERR,
        'no-sequences':               ERR,
        'no-with':                    ERR,
        'vars-on-top':                ERR,
        'no-delete-var':              ERR,
        'no-label-var':               ERR,
        'no-shadow-restricted-names': ERR,
        'new-cap':                    ERR,
        'new-parens':                 ERR,
        'no-array-constructor':       ERR,
        'no-lonely-if':               ERR,
        'no-mixed-spaces-and-tabs':   ERR,
        'no-new-object':              ERR,
        'no-var':                     ERR,
        'no-plusplus':                ERR,
        'no-floating-decimal':        ERR,
        'no-else-return':             ERR,

        // non strict

        'no-console':             WRN,
        'no-unreachable':         WRN,
        'no-extra-bind':          WRN,
        'no-lone-blocks':         WRN,
        'no-multi-spaces':        WRN,
        'no-new':                 WRN,
        'no-new-func':            WRN,
        'no-new-wrappers':        WRN,
        'no-octal':               WRN,
        'no-octal-escape':        WRN,
        'no-self-compare':        WRN,
        'wrap-iife':              WRN,
        'no-catch-shadow':        WRN,
        'no-undef':               WRN,
        'no-undef-init':          WRN,
        'no-undefined':           WRN,
        'no-unused-vars':         WRN,
        'handle-callback-err':    WRN,
        'no-new-require':         WRN,
        'no-path-concat':         WRN,
        'comma-style':            WRN,
        'consistent-this':        WRN,
        'eol-last':               WRN,
        'func-names':             WRN,
        'no-underscore-dangle':   WRN,
        'generator-star-spacing': WRN,
        'no-bitwise':             WRN,
        'arrow-spacing':          WRN,

        // switched off

        'no-process-env':            OFF,
        'no-proto':                  OFF,
        'no-return-assign':          OFF,
        'no-unused-expressions':     OFF,
        'no-void':                   OFF,
        'no-warning-comments':       OFF,
        'no-mixed-requires':         OFF,
        'no-process-exit':           OFF,
        'no-sync':                   OFF,
        'max-nested-callbacks':      OFF,
        'no-inline-comments':        OFF,
        'no-multiple-empty-lines':   OFF,
        'no-nested-ternary':         OFF,
        'no-space-before-semi':      OFF,
        'no-spaced-func':            OFF,
        'no-ternary':                OFF,
        'no-trailing-spaces':        OFF,
        'no-wrap-func':              OFF,
        'operator-assignment':       OFF,
        'padded-blocks':             OFF,
        'sort-vars':                 OFF,
        'space-after-function-name': OFF,
        'space-after-keywords':      OFF,
        'space-before-blocks':       OFF,
        'space-in-brackets':         OFF,
        'space-in-parens':           OFF,
        'space-infix-ops':           OFF,
        'space-return-throw-case':   OFF,
        'space-unary-ops':           OFF,
        'wrap-regex':                OFF,
        'max-depth':                 OFF,
        'max-len':                   OFF,
        'max-statements':            OFF,

    },
};
