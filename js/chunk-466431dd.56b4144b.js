(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-466431dd"],{"07ac":function(t,e,n){var r=n("23e7"),a=n("6f53").values;r({target:"Object",stat:!0},{values:function(t){return a(t)}})},"1d11":function(t,e,n){"use strict";n("ea84")},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("6b75");function a(t){if(Array.isArray(t))return Object(r["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=n("06c5");function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||c(t)||Object(o["a"])(t)||i()}},"35d6":function(t,e,n){"use strict";n("a07b")},"45fc":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").some,c=n("a640"),o=n("ae40"),i=c("some"),u=o("some");r({target:"Array",proto:!0,forced:!i||!u},{some:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5794:function(t,e,n){"use strict";var r=n("7a23"),a=Object(r["N"])("data-v-05dd3a1d");Object(r["u"])("data-v-05dd3a1d");var c={class:"row text-caption wrap"},o=Object(r["g"])("div",{class:"icon"},"info",-1),i={key:1,class:"no-select"};Object(r["s"])();var u=a((function(t,e,n,a,u,d){return Object(r["r"])(),Object(r["d"])("div",c,[o,t.any?(Object(r["r"])(!0),Object(r["d"])(r["a"],{key:0},Object(r["y"])(t.translated,(function(t,e){return Object(r["r"])(),Object(r["d"])(r["a"],{key:e},[t.length?(Object(r["r"])(!0),Object(r["d"])(r["a"],{key:0},Object(r["y"])(t,(function(t){return Object(r["r"])(),Object(r["d"])("p",{key:t+"--"+e,class:"colored-dot-"+e},Object(r["C"])(t),3)})),128)):Object(r["e"])("",!0)],64)})),128)):(Object(r["r"])(),Object(r["d"])("p",i,"…"))])})),d=(n("4de4"),n("4160"),n("d81d"),n("45fc"),n("4fad"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("2909")),s=n("3835"),b=n("b85c"),f=Object(r["h"])({name:"Context",props:{translation:{type:Object,default:function(){return{}}},blocks:{type:Array,default:function(){return[]}}},setup:function(t){var e=Object(r["k"])("context",{}),n=Object(r["b"])((function(){var e,n={},r=Object(b["a"])(t.blocks);try{for(r.s();!(e=r.n()).done;){var a=e.value.state,c=null===a||void 0===a?void 0:a.conditions;c&&Object.entries(c).forEach((function(t){var e=Object(s["a"])(t,2),r=e[0],a=e[1];return Object.entries(a).forEach((function(t){var e=Object(s["a"])(t,1),a=e[0];n[r]||(n[r]=new Set),n[r].add(a)}))}))}}catch(o){r.e(o)}finally{r.f()}return n}));function a(t,e){return(null===t||void 0===t?void 0:t[e])||e}var c=Object(r["b"])((function(){return Object.entries(e.value).map((function(e){var r=Object(s["a"])(e,2),c=r[0],o=r[1];return Object(d["a"])(o).filter((function(t){var e;return!(null!==(e=n.value[c])&&void 0!==e&&e.has(t))})).map((function(e){var n;return a(null===(n=t.translation)||void 0===n?void 0:n[c],e)}))}))})),o=Object(r["b"])((function(){return c.value.some((function(t){return null===t||void 0===t?void 0:t.length}))}));return{translated:c,any:o}}});n("35d6");f.render=u,f.__scopeId="data-v-05dd3a1d";e["a"]=f},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),c="["+a+"]",o=RegExp("^"+c+c+"*"),i=RegExp(c+c+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},"5db7":function(t,e,n){"use strict";var r=n("23e7"),a=n("a2bf"),c=n("7b0b"),o=n("50c4"),i=n("1c0b"),u=n("65f0");r({target:"Array",proto:!0},{flatMap:function(t){var e,n=c(this),r=o(n.length);return i(t),e=u(n,0),e.length=a(e,n,n,r,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},6754:function(t,e,n){"use strict";n("b12c")},"72e9":function(t,e,n){"use strict";var r=n("7a23"),a=Object(r["N"])("data-v-99446652"),c=a((function(t,e,n,a,c,o){var i=Object(r["A"])("VState");return t.state?Object(r["M"])((Object(r["r"])(),Object(r["d"])("button",{key:0,class:["small",{disabled:t.disabled,glossed:t.glossed}],onClick:e[2]||(e[2]=function(){return t.move&&t.move.apply(t,arguments)})},[Object(r["g"])(i,{glossed:t.glossed,state:t.state,onText:e[1]||(e[1]=function(e){return t.text=e})},null,8,["glossed","state"])],2)),[[r["I"],t.text]]):Object(r["e"])("",!0)})),o=(n("5db7"),n("c975"),n("d81d"),n("73d9"),n("b64b"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("2909")),i=n("3835"),u=n("af66"),d=n("7ec3"),s=Object(r["h"])({name:"Block",components:{VState:u["a"]},props:{block:{type:Array,default:void 0},glossed:Boolean},emits:["update"],setup:function(t,e){var n=e.emit,a=Object(r["x"])(),c=Object(r["x"])("");Object(r["J"])([a,c],(function(t){var e=Object(i["a"])(t,2),r=e[0],a=e[1];return n("update",{state:r,text:a})}),{immediate:!0});var u=Object(r["b"])((function(){var e;return!(null!==(e=a.value)&&void 0!==e&&e.transition)||t.block.length<2})),s=Object(r["k"])("context",{});function b(t){var e;Object(r["D"])(t)!==Object(r["D"])(a.value)&&(Object(d["a"])(s,null===(e=a.value)||void 0===e?void 0:e.conditions,!1),Object(d["a"])(s,null===t||void 0===t?void 0:t.conditions,!0),a.value=t)}var f=Object(r["b"])((function(){var e=t.block.flatMap((function(t){var e=t.conditions;return Object.keys(e)}));return Object(o["a"])(new Set(e)).map((function(t){return s.value[t]}))}));function l(){var e,n;if(!u.value){var c,o=null===(e=a.value)||void 0===e?void 0:e.transition,i=t.block;if("next"===o){var f=a.value?i.indexOf(Object(r["D"])(a.value)):-1;c=i[(f+1)%i.length]}else o&&(c=Object(d["d"])(o,i,s.value));b(c),Object(d["b"])(null===(n=c)||void 0===n?void 0:n.conditions,s.value)[0]<0&&(a.value=void 0)}}return Object(r["J"])(f,(function(){return b(Object(d["d"])(void 0,t.block,s.value))}),{immediate:!0,deep:!0}),{move:l,state:a,disabled:u,text:c}}});n("1d11");s.render=c,s.__scopeId="data-v-99446652";e["a"]=s},"73d9":function(t,e,n){var r=n("44d2");r("flatMap")},"7ec3":function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return u}));n("4160"),n("d81d"),n("4fad"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0");var r=n("3835");function a(){return{texts:[{plain:"new state"}],conditions:{}}}function c(t,e){e&&(t.value={},e.forEach((function(e){var n=e.entity;return t.value[n]=new Set})))}function o(t,e){if(!t)return[1,0];for(var n=0,a=0,c=0,o=Object.entries(t);c<o.length;c++)for(var i=Object(r["a"])(o[c],2),u=i[0],d=i[1],s=0,b=Object.entries(d);s<b.length;s++){var f,l=Object(r["a"])(b[s],2),v=l[0],O=l[1],j=null===(f=e[u])||void 0===f?void 0:f.has(v);if(!O&&!j)return[-1,0];j&&(n+=1),a+=1}return[n/(a||1),a]}function i(t,e,n){var a,c,i=-1,u=0,d=null!==(a=null===t||void 0===t?void 0:t.map((function(t){return e[t]})))&&void 0!==a?a:e;return d.forEach((function(t){var e=o(t.conditions,n),a=Object(r["a"])(e,2),d=a[0],s=a[1];(1===i?1===d&&s>u:d>i)&&(c=t,i=d,u=s)})),c}function u(t,e,n){e&&t.value&&Object.entries(e).forEach((function(e){var a=Object(r["a"])(e,2),c=a[0],o=a[1];return Object.entries(o).forEach((function(e){var a=Object(r["a"])(e,2),o=a[0],i=a[1],u=t.value[c];i&&u&&(n?u.add(o):u.delete(o))}))}))}},a07b:function(t,e,n){},a2bf:function(t,e,n){"use strict";var r=n("e8b5"),a=n("50c4"),c=n("0366"),o=function(t,e,n,i,u,d,s,b){var f,l=u,v=0,O=!!s&&c(s,b,3);while(v<i){if(v in n){if(f=O?O(n[v],v,e):n[v],d>0&&r(f))l=o(t,e,f,a(f.length),l,d-1)-1;else{if(l>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[l]=f}l++}v++}return l};t.exports=o},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),c=n("94ca"),o=n("6eeb"),i=n("5135"),u=n("c6b6"),d=n("7156"),s=n("c04e"),b=n("d039"),f=n("7c73"),l=n("241c").f,v=n("06cf").f,O=n("9bf2").f,j=n("58a8").trim,p="Number",y=a[p],h=y.prototype,m=u(f(h))==p,g=function(t){var e,n,r,a,c,o,i,u,d=s(t,!1);if("string"==typeof d&&d.length>2)if(d=j(d),e=d.charCodeAt(0),43===e||45===e){if(n=d.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+d}for(c=d.slice(2),o=c.length,i=0;i<o;i++)if(u=c.charCodeAt(i),u<48||u>a)return NaN;return parseInt(c,r)}return+d};if(c(p,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var x,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(m?b((function(){h.valueOf.call(n)})):u(n)!=p)?d(new y(g(e)),n,k):g(e)},I=r?l(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;I.length>E;E++)i(y,x=I[E])&&!i(k,x)&&O(k,x,v(y,x));k.prototype=h,h.constructor=k,o(a,p,k)}},af66:function(t,e,n){"use strict";var r=n("7a23"),a=Object(r["N"])("data-v-21b3fbef");Object(r["u"])("data-v-21b3fbef");var c={class:"segments"},o={class:"row dashes"};Object(r["s"])();var i=a((function(t,e,n,a,i,u){var d;return Object(r["r"])(),Object(r["d"])("div",{class:["display row",{glossed:t.canGloss,"text-faded":null===(d=t.state)||void 0===d?void 0:d.implicit}]},[Object(r["g"])("div",c,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(t.types,(function(e,n){return Object(r["r"])(),Object(r["d"])("p",{key:e,class:"text-"+e},[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(t.texts[n],(function(e,n){return Object(r["r"])(),Object(r["d"])("span",{key:n,class:t.textColors[n]},Object(r["C"])(e),3)})),128))],2)})),128))]),Object(r["g"])("div",o,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(t.dashColors,(function(t,e){return Object(r["r"])(),Object(r["d"])("p",{key:e,class:t},null,2)})),128))])],2)})),u=(n("4de4"),n("c975"),n("a15b"),n("d81d"),n("45fc"),n("4fad"),n("b64b"),n("07ac"),n("3835")),d=Object(r["h"])({name:"State",props:{state:{type:Object,default:function(){return{}}},glossed:{type:Boolean,default:!1}},emits:["text"],setup:function(t,e){var n=e.emit,a=Object(r["k"])("context",{}),c=Object(r["b"])((function(){return Object.keys(a.value)})),o=Object(r["b"])((function(){return t.glossed&&t.state.texts.some((function(t){var e=t.ipa,n=t.gloss;return e||n}))})),i=Object(r["b"])((function(){return o.value?["ipa","gloss"]:["plain"]})),d=Object(r["b"])((function(){return i.value.map((function(e){var n;return null===(n=t.state.texts)||void 0===n?void 0:n.map((function(t){return t[e]}))}))}));Object(r["J"])(d,(function(t){if(t){var e=t.map((function(t){return null===t||void 0===t?void 0:t.join("")})),r=1===e.length?e[0]:e.join("\n");n("text",r)}}),{immediate:!0,deep:!0});var s=Object(r["b"])((function(){return t.state.texts.map((function(t){var e=t.entity;return null!==e&&void 0!==e?e:""})).map((function(t){return c.value.indexOf(t)})).map((function(t){return"colored-"+t}))})),b=Object(r["b"])((function(){return t.state.transition&&t.state.conditions?Object.entries(t.state.conditions).filter((function(t){var e=Object(u["a"])(t,2),n=e[1];return Object.values(n).some((function(t){return t}))})).map((function(t){var e=Object(u["a"])(t,1),n=e[0];return c.value.indexOf(n)})).map((function(t){return"colored-back-"+t})):[]}));return{types:i,texts:d,canGloss:o,textColors:s,dashColors:b}}});n("6754");d.render=i,d.__scopeId="data-v-21b3fbef";e["a"]=d},b12c:function(t,e,n){},b64b:function(t,e,n){var r=n("23e7"),a=n("7b0b"),c=n("df75"),o=n("d039"),i=o((function(){c(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(t){return c(a(t))}})},c975:function(t,e,n){"use strict";var r=n("23e7"),a=n("4d64").indexOf,c=n("a640"),o=n("ae40"),i=[].indexOf,u=!!i&&1/[1].indexOf(1,-0)<0,d=c("indexOf"),s=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!d||!s},{indexOf:function(t){return u?i.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},ea84:function(t,e,n){}}]);