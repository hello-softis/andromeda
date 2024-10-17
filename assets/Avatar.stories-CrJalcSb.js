import{j as a}from"./jsx-runtime-Nms4Y4qS.js";/* empty css              */import{A as n,a as d,b as g,L as u}from"./index-5nC-JSu0.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";const I={title:"Data Display/Avatar",component:n,args:{name:"Michael Johnson",src:"https://github.com/.png",size:"lg",label:"creator",theme:"default"},argTypes:{name:{control:"text"},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg","xl"]},label:{control:"text"},theme:{control:{type:"inline-radio"},options:["default","creator","educator","moderator","company"]}},decorators:[e=>a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:a.jsx(e,{})})]},A=e=>{const t=e.split(" ");if(t.length===1){const o=t[0].charAt(0).toUpperCase(),x=t[0].charAt(1)?t[0].charAt(1).toUpperCase():"";return o+x}return t.map(o=>o.charAt(0).toUpperCase()).slice(0,2).join("")},r={render:e=>a.jsxs(n,{theme:e.theme,size:e.size,children:[a.jsx(d,{alt:e.name,src:e.src}),a.jsx(g,{children:A(e.name||"")})]})},s={args:{theme:"creator"},render:e=>a.jsxs(n,{theme:e.theme,size:e.size,children:[a.jsx(d,{alt:e.name,src:e.src}),a.jsx(g,{children:A(e.name||"")}),a.jsx(u,{children:e.label.toUpperCase()})]})};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <AvatarRoot theme={args.theme} size={args.size}>
      <AvatarImage alt={args.name} src={args.src} />
      <AvatarFallback>{getInitials(args.name || '')}</AvatarFallback>
    </AvatarRoot>
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    theme: 'creator'
  },
  render: args => <AvatarRoot theme={args.theme} size={args.size}>
      <AvatarImage alt={args.name} src={args.src} />
      <AvatarFallback>{getInitials(args.name || '')}</AvatarFallback>
      <Label>{args.label.toUpperCase()}</Label>
    </AvatarRoot>
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const L=["Default","WithLabel"];export{r as Default,s as WithLabel,L as __namedExportsOrder,I as default};
