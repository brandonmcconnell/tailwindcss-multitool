!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).tailwindcssMulti=t()}(this,function(){function e(e){var t={exports:{}};return e(t,t.exports),t.exports}var t=e(function(e,t){function n(e,t){return{handler:e,config:t}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),n.withOptions=function(e,t=(()=>({}))){const n=function(n){return{__options:n,handler:e(n),config:t(n)}};return n.__isOptionsFunction=!0,n.__pluginFunction=e,n.__configFunction=t,n};const i=n}),n=e(function(e,n){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return u}});const u=/*#__PURE__*/i(t).default});return(0,(n.__esModule?n:{default:n}).default)(function(e){(0,e.matchUtilities)({multi:function(e){var t;if(!e[0])return{};var n=[e[0],e.slice(-1)[0]],i=["'",'"',"`"].includes(e[0]);if(i&&(e.length<3||n[0]!==n[1]))throw new Error("Invalid multi value: `"+e+"`. Quoted values must use matching quotes (e.g. `multi-['...']` or `multi-[\"...\"]`).");var u=e.slice.apply(e,i?[1,-1]:[]).split(/;(?![^[]*\])/).filter(function(e){return e.trim().length}).map(function(e){return e.replace(/_/g,"\\_").replace(/ /g,"_")}).join(" ");return u.trim()?((t={})["@apply "+u]={},t):{}}})})});
//# sourceMappingURL=index.umd.js.map
