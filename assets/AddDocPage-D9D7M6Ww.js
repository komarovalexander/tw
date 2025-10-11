import{n as p,h as d,j as t,A as x,q as u,l as s,s as h}from"./index-D2cSK_ni.js";import{S as f}from"./Form-JZiIJSN9.js";import{u as y}from"./mutations-CYcSb-2H.js";import{r as g}from"./utils-OwBwJajN.js";import{C as j}from"./index-4pk5aDlv.js";import{S as v}from"./index-DNr6LM5R.js";import{R as S}from"./FileTextOutlined-xkFuyDZ-.js";import{a as A}from"./index-Djv50ScX.js";import{S as r}from"./Section-53FDeyg9.js";import"./index-C1K8rYre.js";import"./constants-DW0TnkXc.js";import"./lodash-CVUhccBy.js";import"./index-DYPRAe8K.js";import"./LinkMemo-C6JR8DNh.js";import"./PlusOutlined-YYHksE02.js";import"./AntdIcon-Cb7OfO-y.js";import"./PlusOutlined-ByZyTB3m.js";import"./index-Du0Bb_bR.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:q,Text:C}=A,b=()=>{const a=p(),e=d["/profile"](),n=y["/docs/add"](),l=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"roles",label:"Роли для доступа",type:"select",multiple:!0,options:g,placeholder:"Выберите роли, которые могут видеть этот документ",tooltip:"Если роли не выбраны, документ будет доступен всем пользователям"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

Пример структуры:
# Заголовок 1
## Заголовок 2
### Заголовок 3

**Жирный текст**
*Курсив*

- Список
- Элементов

1. Нумерованный
2. Список`,tooltip:"Поддерживается Markdown разметка для форматирования"}],c=async m=>{var i;try{const o=(i=e==null?void 0:e.data)==null?void 0:i.login;await n.mutateAsync({...m,createdBy:o}),u.removeQueries({queryKey:["/docs"]}),a(s.docs.root())}catch(o){h.error("Ошибка при создании документа"),console.error("Error creating doc:",o)}};return t.jsx(x,{queries:[e],children:t.jsx("div",{style:{maxWidth:"900px",margin:"0 auto"},children:t.jsx(j,{children:t.jsxs(v,{direction:"vertical",size:"large",style:{width:"100%"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[t.jsx(S,{style:{fontSize:"48px",color:"#1890ff",marginBottom:"16px"}}),t.jsx(q,{level:3,children:"Создание нового документа"}),t.jsx(C,{type:"secondary",children:"Заполните форму ниже для создания нового документа в системе"})]}),t.jsx(f,{config:l,onFinish:c,okText:"Создать документ",cancelText:"Отмена",layout:"vertical"})]})})})})},O=()=>t.jsxs(r,{children:[t.jsx(r.Header,{title:"Добавить документ",back:s.docs.root()}),t.jsx(r.Content,{children:t.jsx(b,{})})]});export{O as default};
