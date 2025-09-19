import{f as p,b as d,j as t,A as x,q as u,l as s,s as f}from"./index-f9vQvGlK.js";import{S as h}from"./Form-DMSIJU4u.js";import{u as y}from"./mutations-CvQ4B7xO.js";import{r as g}from"./utils-OwBwJajN.js";import{C as j}from"./index-CD7Z0g0a.js";import{S as v}from"./index-0FysYcoL.js";import{R as S}from"./FileTextOutlined-BBu4wy0J.js";import{a as A}from"./index-DkkOVP5S.js";import{S as r}from"./Section-BhaQNQN_.js";import"./index-TCc_hY_O.js";import"./constants-DGI46l0S.js";import"./lodash-CPRSiAuV.js";import"./index-B3eZzrCJ.js";import"./LinkMemo-BeDWLqvT.js";import"./PlusOutlined-CesiX-Ki.js";import"./AntdIcon-BMZsmzEQ.js";import"./PlusOutlined-ByZyTB3m.js";import"./index-a_-7QhB3.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:b,Text:q}=A,C=()=>{const a=p(),e=d["/profile"](),n=y["/docs/add"](),l=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"roles",label:"Роли для доступа",type:"select",multiple:!0,options:g,placeholder:"Выберите роли, которые могут видеть этот документ",tooltip:"Если роли не выбраны, документ будет доступен всем пользователям"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

Пример структуры:
# Заголовок 1
## Заголовок 2
### Заголовок 3

**Жирный текст**
*Курсив*

- Список
- Элементов

1. Нумерованный
2. Список`,tooltip:"Поддерживается Markdown разметка для форматирования"}],c=async m=>{var i;try{const o=(i=e==null?void 0:e.data)==null?void 0:i.login;await n.mutateAsync({...m,createdBy:o}),u.removeQueries({queryKey:["/docs"]}),a(s.docs.root())}catch(o){f.error("Ошибка при создании документа"),console.error("Error creating doc:",o)}};return t.jsx(x,{queries:[e],children:t.jsx("div",{style:{maxWidth:"900px",margin:"0 auto"},children:t.jsx(j,{children:t.jsxs(v,{direction:"vertical",size:"large",style:{width:"100%"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[t.jsx(S,{style:{fontSize:"48px",color:"#1890ff",marginBottom:"16px"}}),t.jsx(b,{level:3,children:"Создание нового документа"}),t.jsx(q,{type:"secondary",children:"Заполните форму ниже для создания нового документа в системе"})]}),t.jsx(h,{config:l,onFinish:c,okText:"Создать документ",cancelText:"Отмена",layout:"vertical"})]})})})})},O=()=>t.jsxs(r,{children:[t.jsx(r.Header,{title:"Добавить документ",back:s.docs.root()}),t.jsx(r.Content,{children:t.jsx(C,{})})]});export{O as default};
