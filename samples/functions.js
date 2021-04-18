// @formatter:off

const a =()=>{} // eslint-disable-line arrow-spacing,semi,strict,no-empty-function,no-unused-vars

const b = function(){} // eslint-disable-line semi,no-unused-vars,func-names,space-before-function-paren,eol-last,no-empty-function

// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
const c = a=>void(1) // eslint-disable-line no-shadow,no-unused-vars,arrow-spacing,semi

let d = ()=>{ // eslint-disable-line arrow-spacing,no-unused-vars,prefer-const
    // noinspection JSUnnecessarySemicolon
            ; // eslint-disable-line no-extra-semi,indent
} // eslint-disable-line semi,eol-last


// eslint-disable-next-line eol-last
// @formatter:on
