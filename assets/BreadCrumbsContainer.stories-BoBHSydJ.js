import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{d as t,b as e}from"./index-CllzlCCi.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DxjWwZXO.js";import"./extends-CF3RwP-h.js";const I={title:"Form/Breadcrumb/BreadcrumbContainer",component:t,args:{disabled:!1},argTypes:{disabled:{control:"boolean"}},decorators:[a=>r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:r.jsx(a,{})})]},n={args:{disabled:!1},render:a=>r.jsxs(t,{...a,children:[r.jsx(e,{link:"/component",children:"Component"}),r.jsx(e,{link:"/form",children:"Form"}),r.jsx(e,{link:"/breadcrumb",isCurrentPage:!0,children:"Breadcrumb"})]})},m={args:{disabled:!0},render:a=>r.jsxs(t,{...a,children:[r.jsx(e,{link:"/component",children:"Component"}),r.jsx(e,{link:"/form",children:"Form"}),r.jsx(e,{link:"/breadcrumb",isCurrentPage:!0,children:"Breadcrumb"})]})};var s,d,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: args => <BreadCrumb {...args}>
      <BreadCrumbItem link="/component">Component</BreadCrumbItem>
      <BreadCrumbItem link="/form">Form</BreadCrumbItem>
      <BreadCrumbItem link="/breadcrumb" isCurrentPage={true}>Breadcrumb</BreadCrumbItem>
    </BreadCrumb>
}`,...(o=(d=n.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var i,u,c;m.parameters={...m.parameters,docs:{...(i=m.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <BreadCrumb {...args}>
      <BreadCrumbItem link="/component">Component</BreadCrumbItem>
      <BreadCrumbItem link="/form">Form</BreadCrumbItem>
      <BreadCrumbItem link="/breadcrumb" isCurrentPage={true}>Breadcrumb</BreadCrumbItem>
    </BreadCrumb>
}`,...(c=(u=m.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const x=["Default","Inactive"];export{n as Default,m as Inactive,x as __namedExportsOrder,I as default};
