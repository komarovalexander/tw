import{f as d,b as p,j as t,A as x,q as u,l as s,s as f}from"./index-DNKWA5Yr.js";import{S as h}from"./Form-D6wtKShT.js";import{u as y}from"./mutations-CQULGnre.js";import{C as g}from"./index-CxpwT6HY.js";import{S as j}from"./index-W_ny5PPo.js";import{R as v}from"./FileTextOutlined-CWED3IKs.js";import{a as S}from"./index-DIb9G4xh.js";import{S as r}from"./Section-DZgd0l12.js";import"./index-m8A0DcBp.js";import"./constants-DGI46l0S.js";import"./lodash-D9xTtuOY.js";import"./index-CuObybE2.js";import"./LinkMemo-BRO3f-b5.js";import"./PlusOutlined-hM5DK3jI.js";import"./AntdIcon-CjrMuquu.js";import"./PlusOutlined-ByZyTB3m.js";import"./index-ecki3Kb8.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:A,Text:q}=S,b=()=>{const a=d(),e=p["/profile"](),n=y["/docs/add"](),c=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

Пример структуры:
# Заголовок 1
## Заголовок 2
### Заголовок 3

**Жирный текст**
*Курсив*

- Список
- Элементов

1. Нумерованный
2. Список`,tooltip:"Поддерживается Markdown разметка для форматирования"}],l=async m=>{var i;try{const o=(i=e==null?void 0:e.data)==null?void 0:i.login;await n.mutateAsync({...m,createdBy:o}),u.removeQueries({queryKey:["/docs"]}),a(s.docs.root())}catch(o){f.error("Ошибка при создании документа"),console.error("Error creating doc:",o)}};return t.jsx(x,{queries:[e],children:t.jsx("div",{style:{maxWidth:"900px",margin:"0 auto"},children:t.jsx(g,{children:t.jsxs(j,{direction:"vertical",size:"large",style:{width:"100%"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[t.jsx(v,{style:{fontSize:"48px",color:"#1890ff",marginBottom:"16px"}}),t.jsx(A,{level:3,children:"Создание нового документа"}),t.jsx(q,{type:"secondary",children:"Заполните форму ниже для создания нового документа в системе"})]}),t.jsx(h,{config:c,onFinish:l,okText:"Создать документ",cancelText:"Отмена",layout:"vertical"})]})})})})},G=()=>t.jsxs(r,{children:[t.jsx(r.Header,{title:"Добавить документ",back:s.docs.root()}),t.jsx(r.Content,{children:t.jsx(b,{})})]});export{G as default};
