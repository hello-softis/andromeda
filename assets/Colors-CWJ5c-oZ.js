import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import{ak as d,ae as l}from"./index-BrEU7NPJ.js";import{c}from"./index-OTu9hyW7.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzD1UOoL.js";import"../sb-preview/runtime.js";import"./index-BneYb4WH.js";import"./index-B8XB3FuZ.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";function a(){const e=Object.entries(c).reduce((n,[s,o])=>(n[o]||(n[o]=[]),n[o].push(s),n),{});return t.jsx("div",{className:"grid",children:Object.entries(e).map(([n,s])=>{const o=d(n,"#F5F5FA")<3.5?"text-gray-900":"text-gray-50";return t.jsx("div",{className:"p-8",style:{backgroundColor:n},children:s.length===1?t.jsxs("div",{className:`flex justify-between font-mono ${o}`,children:[t.jsxs("strong",{children:["$",s[0]]}),t.jsx("span",{children:n})]}):t.jsxs("div",{className:`flex justify-between items-center font-mono ${o}`,children:[t.jsxs("strong",{children:["$",s[0]]}),t.jsx("strong",{children:s[1]}),t.jsx("span",{children:n})]})},n)})})}a.__docgenInfo={description:"",methods:[],displayName:"ColorsGrid"};function r(e){const n={p:"p",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Tokens/Colors"}),`
`,t.jsx("div",{className:"sb-container",children:t.jsxs("div",{className:"sb-section-title",children:[t.jsx("h1",{children:"Colors"}),t.jsx(n.p,{children:"Color tokens allow for the standardization of colors throughout the application, ensuring visual consistency and facilitating design maintenance."})]})}),`
`,t.jsx(a,{}),`
`,t.jsx("div",{className:"copy",align:"center",children:t.jsx(n.p,{children:"© 2024 Softis. All rights reserved."})}),`
`,t.jsx("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-container h1 {
    color: #C6ADFF;
  }

  .sb-section-title h1 {
    color: #C6ADFF;
  }

  .copy {
    margin-top: 48px;
  }
  `})]})}function N(e={}){const{wrapper:n}={...i(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(r,{...e})}):r(e)}export{N as default};
