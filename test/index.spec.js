'use strict'; // ALWAYS


const eslint = require('eslint');
const react = require('eslint-plugin-react');
const {it, describe} = require('@jest/globals');
const own = require('../index.js').rules;

describe('rules', () => {

    it('from eslint are shadowed by own rules', () => {
        for (const key of (new eslint.Linter()).getRules().keys()) {
            expect([key, own[key]]).not.toEqual([key, void 0]);
        }
    });

    it.skip('from react are shadowed by own rules', () => {
        for (const key of Object.keys(react.rules).map(k => `react/${k}`)) {
            expect([key, own[key]]).not.toEqual([key, void 0]);
        }
    });

});
