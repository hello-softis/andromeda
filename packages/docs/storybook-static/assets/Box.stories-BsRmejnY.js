/* empty css              */import{j as Se}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";var ce=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,M=e=>!e||typeof e!="object"||Object.keys(e).length===0,je=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function be(e,t){e.forEach(function(r){Array.isArray(r)?be(r,t):t.push(r)})}function ge(e){let t=[];return be(e,t),t}var me=(...e)=>ge(e).filter(Boolean),he=(e,t)=>{let r={},n=Object.keys(e),a=Object.keys(t);for(let o of n)if(a.includes(o)){let s=e[o],l=t[o];typeof s=="object"&&typeof l=="object"?r[o]=he(s,l):Array.isArray(s)||Array.isArray(l)?r[o]=me(l,s):r[o]=l+" "+s}else r[o]=e[o];for(let o of a)n.includes(o)||(r[o]=t[o]);return r},de=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim();const le="-";function Me(e){const t=Pe(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;function a(s){const l=s.split(le);return l[0]===""&&l.length!==1&&l.shift(),ye(l,t)||Ge(s)}function o(s,l){const d=r[s]||[];return l&&n[s]?[...d,...n[s]]:d}return{getClassGroupId:a,getConflictingClassGroupIds:o}}function ye(e,t){var s;if(e.length===0)return t.classGroupId;const r=e[0],n=t.nextPart.get(r),a=n?ye(e.slice(1),n):void 0;if(a)return a;if(t.validators.length===0)return;const o=e.join(le);return(s=t.validators.find(({validator:l})=>l(o)))==null?void 0:s.classGroupId}const ue=/^\[(.+)\]$/;function Ge(e){if(ue.test(e)){const t=ue.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}function Pe(e){const{theme:t,prefix:r}=e,n={nextPart:new Map,validators:[]};return Ve(Object.entries(e.classGroups),r).forEach(([o,s])=>{oe(s,n,o,t)}),n}function oe(e,t,r,n){e.forEach(a=>{if(typeof a=="string"){const o=a===""?t:pe(t,a);o.classGroupId=r;return}if(typeof a=="function"){if(Re(a)){oe(a(n),t,r,n);return}t.validators.push({validator:a,classGroupId:r});return}Object.entries(a).forEach(([o,s])=>{oe(s,pe(t,o),r,n)})})}function pe(e,t){let r=e;return t.split(le).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r}function Re(e){return e.isThemeGetter}function Ve(e,t){return t?e.map(([r,n])=>{const a=n.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,l])=>[t+s,l])):o);return[r,a]}):e}function Te(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,n=new Map;function a(o,s){r.set(o,s),t++,t>e&&(t=0,n=r,r=new Map)}return{get(o){let s=r.get(o);if(s!==void 0)return s;if((s=n.get(o))!==void 0)return a(o,s),s},set(o,s){r.has(o)?r.set(o,s):a(o,s)}}}const xe="!";function $e(e){const{separator:t,experimentalParseClassName:r}=e,n=t.length===1,a=t[0],o=t.length;function s(l){const d=[];let k=0,b=0,A;for(let m=0;m<l.length;m++){let j=l[m];if(k===0){if(j===a&&(n||l.slice(m,m+o)===t)){d.push(l.slice(b,m)),b=m+o;continue}if(j==="/"){A=m;continue}}j==="["?k++:j==="]"&&k--}const S=d.length===0?l:l.substring(b),G=S.startsWith(xe),R=G?S.substring(1):S,C=A&&A>b?A-b:void 0;return{modifiers:d,hasImportantModifier:G,baseClassName:R,maybePostfixModifierPosition:C}}return r?function(d){return r({className:d,parseClassName:s})}:s}function Ie(e){if(e.length<=1)return e;const t=[];let r=[];return e.forEach(n=>{n[0]==="["?(t.push(...r.sort(),n),r=[]):r.push(n)}),t.push(...r.sort()),t}function Ne(e){return{cache:Te(e.cacheSize),parseClassName:$e(e),...Me(e)}}const Ee=/\s+/;function Oe(e,t){const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:a}=t,o=new Set;return e.trim().split(Ee).map(s=>{const{modifiers:l,hasImportantModifier:d,baseClassName:k,maybePostfixModifierPosition:b}=r(s);let A=!!b,S=n(A?k.substring(0,b):k);if(!S){if(!A)return{isTailwindClass:!1,originalClassName:s};if(S=n(k),!S)return{isTailwindClass:!1,originalClassName:s};A=!1}const G=Ie(l).join(":");return{isTailwindClass:!0,modifierId:d?G+xe:G,classGroupId:S,originalClassName:s,hasPostfixModifier:A}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:l,classGroupId:d,hasPostfixModifier:k}=s,b=l+d;return o.has(b)?!1:(o.add(b),a(d,k).forEach(A=>o.add(l+A)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Le(){let e=0,t,r,n="";for(;e<arguments.length;)(t=arguments[e++])&&(r=ve(t))&&(n&&(n+=" "),n+=r);return n}function ve(e){if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=ve(e[n]))&&(r&&(r+=" "),r+=t);return r}function ne(e,...t){let r,n,a,o=s;function s(d){const k=t.reduce((b,A)=>A(b),e());return r=Ne(k),n=r.cache.get,a=r.cache.set,o=l,l(d)}function l(d){const k=n(d);if(k)return k;const b=Oe(d,r);return a(d,b),b}return function(){return o(Le.apply(null,arguments))}}function w(e){const t=r=>r[e]||[];return t.isThemeGetter=!0,t}const we=/^\[(?:([a-z-]+):)?(.+)\]$/i,We=/^\d+\/\d+$/,_e=new Set(["px","full","screen"]),Be=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ue=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Fe=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Je=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,qe=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function T(e){return E(e)||_e.has(e)||We.test(e)}function I(e){return W(e,"length",er)}function E(e){return!!e&&!Number.isNaN(Number(e))}function D(e){return W(e,"number",E)}function J(e){return!!e&&Number.isInteger(Number(e))}function Ke(e){return e.endsWith("%")&&E(e.slice(0,-1))}function c(e){return we.test(e)}function N(e){return Be.test(e)}const Ze=new Set(["length","size","percentage"]);function He(e){return W(e,Ze,ke)}function Xe(e){return W(e,"position",ke)}const Qe=new Set(["image","url"]);function Ye(e){return W(e,Qe,tr)}function De(e){return W(e,"",rr)}function q(){return!0}function W(e,t,r){const n=we.exec(e);return n?n[1]?typeof t=="string"?n[1]===t:t.has(n[1]):r(n[2]):!1}function er(e){return Ue.test(e)&&!Fe.test(e)}function ke(){return!1}function rr(e){return Je.test(e)}function tr(e){return qe.test(e)}function se(){const e=w("colors"),t=w("spacing"),r=w("blur"),n=w("brightness"),a=w("borderColor"),o=w("borderRadius"),s=w("borderSpacing"),l=w("borderWidth"),d=w("contrast"),k=w("grayscale"),b=w("hueRotate"),A=w("invert"),S=w("gap"),G=w("gradientColorStops"),R=w("gradientColorStopPositions"),C=w("inset"),m=w("margin"),j=w("opacity"),y=w("padding"),X=w("saturate"),O=w("scale"),Q=w("sepia"),Y=w("skew"),_=w("space"),B=w("translate"),L=()=>["auto","contain","none"],U=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto",c,t],i=()=>[c,t],p=()=>["",T,I],u=()=>["auto",E,c],g=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],f=()=>["solid","dashed","dotted","double","none"],h=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],x=()=>["start","end","center","between","around","evenly","stretch"],v=()=>["","0",c],z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],V=()=>[E,D],P=()=>[E,c];return{cacheSize:500,separator:":",theme:{colors:[q],spacing:[T,I],blur:["none","",N,c],brightness:V(),borderColor:[e],borderRadius:["none","","full",N,c],borderSpacing:i(),borderWidth:p(),contrast:V(),grayscale:v(),hueRotate:P(),invert:v(),gap:i(),gradientColorStops:[e],gradientColorStopPositions:[Ke,I],inset:F(),margin:F(),opacity:V(),padding:i(),saturate:V(),scale:V(),sepia:v(),skew:P(),space:i(),translate:i()},classGroups:{aspect:[{aspect:["auto","square","video",c]}],container:["container"],columns:[{columns:[N]}],"break-after":[{"break-after":z()}],"break-before":[{"break-before":z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...g(),c]}],overflow:[{overflow:U()}],"overflow-x":[{"overflow-x":U()}],"overflow-y":[{"overflow-y":U()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[C]}],"inset-x":[{"inset-x":[C]}],"inset-y":[{"inset-y":[C]}],start:[{start:[C]}],end:[{end:[C]}],top:[{top:[C]}],right:[{right:[C]}],bottom:[{bottom:[C]}],left:[{left:[C]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",J,c]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",c]}],grow:[{grow:v()}],shrink:[{shrink:v()}],order:[{order:["first","last","none",J,c]}],"grid-cols":[{"grid-cols":[q]}],"col-start-end":[{col:["auto",{span:["full",J,c]},c]}],"col-start":[{"col-start":u()}],"col-end":[{"col-end":u()}],"grid-rows":[{"grid-rows":[q]}],"row-start-end":[{row:["auto",{span:[J,c]},c]}],"row-start":[{"row-start":u()}],"row-end":[{"row-end":u()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",c]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",c]}],gap:[{gap:[S]}],"gap-x":[{"gap-x":[S]}],"gap-y":[{"gap-y":[S]}],"justify-content":[{justify:["normal",...x()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...x(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...x(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[_]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[_]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",c,t]}],"min-w":[{"min-w":[c,t,"min","max","fit"]}],"max-w":[{"max-w":[c,t,"none","full","min","max","fit","prose",{screen:[N]},N]}],h:[{h:[c,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[c,t,"auto","min","max","fit"]}],"font-size":[{text:["base",N,I]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",D]}],"font-family":[{font:[q]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",c]}],"line-clamp":[{"line-clamp":["none",E,D]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",T,c]}],"list-image":[{"list-image":["none",c]}],"list-style-type":[{list:["none","disc","decimal",c]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[j]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[j]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...f(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",T,I]}],"underline-offset":[{"underline-offset":["auto",T,c]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:i()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",c]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",c]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[j]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...g(),Xe]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",He]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ye]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[R]}],"gradient-via-pos":[{via:[R]}],"gradient-to-pos":[{to:[R]}],"gradient-from":[{from:[G]}],"gradient-via":[{via:[G]}],"gradient-to":[{to:[G]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[j]}],"border-style":[{border:[...f(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[j]}],"divide-style":[{divide:f()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...f()]}],"outline-offset":[{"outline-offset":[T,c]}],"outline-w":[{outline:[T,I]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:p()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[j]}],"ring-offset-w":[{"ring-offset":[T,I]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",N,De]}],"shadow-color":[{shadow:[q]}],opacity:[{opacity:[j]}],"mix-blend":[{"mix-blend":[...h(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":h()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[n]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",N,c]}],grayscale:[{grayscale:[k]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[A]}],saturate:[{saturate:[X]}],sepia:[{sepia:[Q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[k]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[A]}],"backdrop-opacity":[{"backdrop-opacity":[j]}],"backdrop-saturate":[{"backdrop-saturate":[X]}],"backdrop-sepia":[{"backdrop-sepia":[Q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",c]}],duration:[{duration:P()}],ease:[{ease:["linear","in","out","in-out",c]}],delay:[{delay:P()}],animate:[{animate:["none","spin","ping","pulse","bounce",c]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[J,c]}],"translate-x":[{"translate-x":[B]}],"translate-y":[{"translate-y":[B]}],"skew-x":[{"skew-x":[Y]}],"skew-y":[{"skew-y":[Y]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",c]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",c]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":i()}],"scroll-mx":[{"scroll-mx":i()}],"scroll-my":[{"scroll-my":i()}],"scroll-ms":[{"scroll-ms":i()}],"scroll-me":[{"scroll-me":i()}],"scroll-mt":[{"scroll-mt":i()}],"scroll-mr":[{"scroll-mr":i()}],"scroll-mb":[{"scroll-mb":i()}],"scroll-ml":[{"scroll-ml":i()}],"scroll-p":[{"scroll-p":i()}],"scroll-px":[{"scroll-px":i()}],"scroll-py":[{"scroll-py":i()}],"scroll-ps":[{"scroll-ps":i()}],"scroll-pe":[{"scroll-pe":i()}],"scroll-pt":[{"scroll-pt":i()}],"scroll-pr":[{"scroll-pr":i()}],"scroll-pb":[{"scroll-pb":i()}],"scroll-pl":[{"scroll-pl":i()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",c]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[T,I,D]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function or(e,{cacheSize:t,prefix:r,separator:n,experimentalParseClassName:a,extend:o={},override:s={}}){Z(e,"cacheSize",t),Z(e,"prefix",r),Z(e,"separator",n),Z(e,"experimentalParseClassName",a);for(const l in s)nr(e[l],s[l]);for(const l in o)sr(e[l],o[l]);return e}function Z(e,t,r){r!==void 0&&(e[t]=r)}function nr(e,t){if(t)for(const r in t)Z(e,r,t[r])}function sr(e,t){if(t)for(const r in t){const n=t[r];n!==void 0&&(e[r]=(e[r]||[]).concat(n))}}function ir(e,...t){return typeof e=="function"?ne(se,e,...t):ne(()=>or(se(),e),...t)}const lr=ne(se);var ar={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Ae=e=>e||void 0,H=(...e)=>Ae(ge(e).filter(Boolean).join(" ")),te=null,$={},ie=!1,K=(...e)=>t=>t.twMerge?((!te||ie)&&(ie=!1,te=M($)?lr:ir({...$,extend:{theme:$.theme,classGroups:$.classGroups,conflictingClassGroupModifiers:$.conflictingClassGroupModifiers,conflictingClassGroups:$.conflictingClassGroups,...$.extend}})),Ae(te(H(e)))):H(e),fe=(e,t)=>{for(let r in t)e.hasOwnProperty(r)?e[r]=H(e[r],t[r]):e[r]=t[r];return e},cr=(e,t)=>{let{extend:r=null,slots:n={},variants:a={},compoundVariants:o=[],compoundSlots:s=[],defaultVariants:l={}}=e,d={...ar,...t},k=r!=null&&r.base?H(r.base,e==null?void 0:e.base):e==null?void 0:e.base,b=r!=null&&r.variants&&!M(r.variants)?he(a,r.variants):a,A=r!=null&&r.defaultVariants&&!M(r.defaultVariants)?{...r.defaultVariants,...l}:l;!M(d.twMergeConfig)&&!je(d.twMergeConfig,$)&&(ie=!0,$=d.twMergeConfig);let S=M(r==null?void 0:r.slots),G=M(n)?{}:{base:H(e==null?void 0:e.base,S&&(r==null?void 0:r.base)),...n},R=S?G:fe({...r==null?void 0:r.slots},M(G)?{base:e==null?void 0:e.base}:G),C=M(r==null?void 0:r.compoundVariants)?o:me(r==null?void 0:r.compoundVariants,o),m=y=>{if(M(b)&&M(n)&&S)return K(k,y==null?void 0:y.class,y==null?void 0:y.className)(d);if(C&&!Array.isArray(C))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof C}`);if(s&&!Array.isArray(s))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);let X=(i,p,u=[],g)=>{let f=u;if(typeof p=="string")f=f.concat(de(p).split(" ").map(h=>`${i}:${h}`));else if(Array.isArray(p))f=f.concat(p.reduce((h,x)=>h.concat(`${i}:${x}`),[]));else if(typeof p=="object"&&typeof g=="string"){for(let h in p)if(p.hasOwnProperty(h)&&h===g){let x=p[h];if(x&&typeof x=="string"){let v=de(x);f[g]?f[g]=f[g].concat(v.split(" ").map(z=>`${i}:${z}`)):f[g]=v.split(" ").map(z=>`${i}:${z}`)}else Array.isArray(x)&&x.length>0&&(f[g]=x.reduce((v,z)=>v.concat(`${i}:${z}`),[]))}}return f},O=(i,p=b,u=null,g=null)=>{var f;let h=p[i];if(!h||M(h))return null;let x=(f=g==null?void 0:g[i])!=null?f:y==null?void 0:y[i];if(x===null)return null;let v=ce(x),z=Array.isArray(d.responsiveVariants)&&d.responsiveVariants.length>0||d.responsiveVariants===!0,V=A==null?void 0:A[i],P=[];if(typeof v=="object"&&z)for(let[re,ae]of Object.entries(v)){let ze=h[ae];if(re==="initial"){V=ae;continue}Array.isArray(d.responsiveVariants)&&!d.responsiveVariants.includes(re)||(P=X(re,ze,P,u))}let Ce=v!=null&&typeof v!="object"?v:ce(V),ee=h[Ce||"false"];return typeof P=="object"&&typeof u=="string"&&P[u]?fe(P,ee):P.length>0?(P.push(ee),P):ee},Q=()=>b?Object.keys(b).map(i=>O(i,b)):null,Y=(i,p)=>{if(!b||typeof b!="object")return null;let u=new Array;for(let g in b){let f=O(g,b,i,p),h=i==="base"&&typeof f=="string"?f:f&&f[i];h&&(u[u.length]=h)}return u},_={};for(let i in y)y[i]!==void 0&&(_[i]=y[i]);let B=(i,p)=>{var u;let g=typeof(y==null?void 0:y[i])=="object"?{[i]:(u=y[i])==null?void 0:u.initial}:{};return{...A,..._,...g,...p}},L=(i=[],p)=>{let u=[];for(let{class:g,className:f,...h}of i){let x=!0;for(let[v,z]of Object.entries(h)){let V=B(v,p);if(Array.isArray(z)){if(!z.includes(V[v])){x=!1;break}}else if(V[v]!==z){x=!1;break}}x&&(g&&u.push(g),f&&u.push(f))}return u},U=i=>{let p=L(C,i);if(!Array.isArray(p))return p;let u={};for(let g of p)if(typeof g=="string"&&(u.base=K(u.base,g)(d)),typeof g=="object")for(let[f,h]of Object.entries(g))u[f]=K(u[f],h)(d);return u},F=i=>{if(s.length<1)return null;let p={};for(let{slots:u=[],class:g,className:f,...h}of s){if(!M(h)){let x=!0;for(let v of Object.keys(h)){let z=B(v,i)[v];if(z===void 0||(Array.isArray(h[v])?!h[v].includes(z):h[v]!==z)){x=!1;break}}if(!x)continue}for(let x of u)p[x]=p[x]||[],p[x].push([g,f])}return p};if(!M(n)||!S){let i={};if(typeof R=="object"&&!M(R))for(let p of Object.keys(R))i[p]=u=>{var g,f;return K(R[p],Y(p,u),((g=U(u))!=null?g:[])[p],((f=F(u))!=null?f:[])[p],u==null?void 0:u.class,u==null?void 0:u.className)(d)};return i}return K(k,Q(),L(C),y==null?void 0:y.class,y==null?void 0:y.className)(d)},j=()=>{if(!(!b||typeof b!="object"))return Object.keys(b)};return m.variantKeys=j(),m.extend=r,m.base=k,m.slots=R,m.variants=b,m.defaultVariants=A,m.compoundSlots=s,m.compoundVariants=C,m};cr({base:"rounded-lg px-5 py-2 font-medium flex items-center gap-2 justify-center text-white",variants:{colors:{primary:"bg-softis-light",secondary:"bg-comet-900"},sizes:{default:"py-2 font-default",full:"w-full h-11"}},defaultVariants:{colors:"primary",sizes:"default"}});function dr({children:e}){return Se.jsx("div",{children:e})}const br={title:"Surfaces/Box",component:dr},gr=[];export{gr as __namedExportsOrder,br as default};
