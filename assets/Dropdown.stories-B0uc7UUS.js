import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{D as w,c as I,e as k,f as g,g as T,h as C,i as b,T as o,j as s,k as f,l as d,m as c,n as y,o as n,p as R,q as i}from"./index-5nC-JSu0.js";import{T as a}from"./index-CHgwAXer.js";import{r as l}from"./index-BwDkhjyp.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";const S={title:"Overlay/Dropdown",component:w,argTypes:{children:{control:{disable:!0}}},decorators:[t=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:e.jsx(I,{className:"w-full h-full flex items-center justify-center",children:e.jsx(t,{})})})]},r={render:t=>{const[h,D]=l.useState("banana"),[u,j]=l.useState(!1);return e.jsxs(w,{...t,children:[e.jsx(k,{children:e.jsx(g,{children:"LABEL"})}),e.jsx(T,{children:e.jsxs(C,{children:[e.jsx(b,{children:e.jsx(o,{className:"!text-grey-300",children:"Item 01"})}),e.jsx(s,{}),e.jsxs(f,{children:[e.jsx(d,{children:e.jsx(c,{size:"xs",children:"Group"})}),e.jsxs(y,{checked:u,onCheckedChange:j,children:[e.jsx(o,{className:"!text-grey-300",children:"Item 02"}),e.jsx(n,{children:e.jsx(a,{size:16,color:"white"})})]})]}),e.jsx(s,{}),e.jsx(d,{children:e.jsx(c,{size:"xs",children:"Group"})}),e.jsxs(R,{value:h,onValueChange:D,children:[e.jsxs(i,{value:"banana",children:[e.jsx(o,{className:"!text-grey-300",children:"Item 03"}),e.jsx(n,{children:e.jsx(a,{size:16,color:"white"})})]}),e.jsx(s,{}),e.jsxs(i,{value:"jack",children:[e.jsx(o,{className:"!text-grey-300",children:"Item 04"}),e.jsx(n,{children:e.jsx(a,{size:16,color:"white"})})]})]})]})})]})}};var p,x,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [person, setPerson] = useState<string>('banana');
    const [bookmarksChecked, setBookmarksChecked] = useState<boolean>(false);
    return <DropdownRoot {...args}>
      <DropdownTrigger>
          <Button>LABEL</Button>
        </DropdownTrigger>
        <DropdownPortal>
          <DropdownContent>
            <DropdownItem>
              <Text className="!text-grey-300">Item 01</Text>
            </DropdownItem>
            <DropdownSeparator />
            <DropdownGroup>
              <DropdownLabel>
                <Title size="xs">Group</Title>
              </DropdownLabel>
              <DropdownCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
                <Text className="!text-grey-300">Item 02</Text>
                <DropdownItemIndicator>
                  <Tick02Icon size={16} color="white" />
                </DropdownItemIndicator>
              </DropdownCheckboxItem>
            </DropdownGroup>
            <DropdownSeparator />
            <DropdownLabel>
              <Title size="xs">Group</Title>
            </DropdownLabel>
            <DropdownRadioGroup value={person} onValueChange={setPerson}>
              <DropdownRadioItem value="banana">
                <Text className="!text-grey-300">Item 03</Text>
                <DropdownItemIndicator>
                  <Tick02Icon size={16} color="white" />
                </DropdownItemIndicator>
              </DropdownRadioItem>
              <DropdownSeparator />
              <DropdownRadioItem value="jack">
                <Text className="!text-grey-300">Item 04</Text>
                <DropdownItemIndicator>
                  <Tick02Icon size={16} color="white" />
                </DropdownItemIndicator>
              </DropdownRadioItem>
            </DropdownRadioGroup>
          </DropdownContent>
        </DropdownPortal>
      </DropdownRoot>;
  }
}`,...(m=(x=r.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,S as default};
