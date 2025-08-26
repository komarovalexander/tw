import{f as d,b as i,j as t,A as u,q as x,l as s,s as f,e as h}from"./index-D-Jyt9Ku.js";import{S as y}from"./Form-BEBel_qK.js";import{u as j}from"./mutations-C8ORz45P.js";import{C as g}from"./index-vQfexbwf.js";import{S as v}from"./index-CYLCrvTC.js";import{R as S}from"./FileTextOutlined-DNVq1rVw.js";import{a as b}from"./index-CzSh6R24.js";import{S as r}from"./Section-BMikqu1X.js";import"./index-Cp9HtOab.js";import"./constants-DGI46l0S.js";import"./lodash-Df5bMP7K.js";import"./index-C8sH1Oid.js";import"./LinkMemo-BGBKgflV.js";import"./PlusOutlined-BZjmOOj-.js";import"./AntdIcon-DqOcUiuX.js";import"./PlusOutlined-ByZyTB3m.js";import"./index-DJFiVfAv.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:q,Text:A}=b,C=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

Пример структуры:
# Заголовок 1
## Заголовок 2
### Заголовок 3

**Жирный текст**
*Курсив*

- Список
- Элементов

1. Нумерованный
2. Список`,tooltip:"Поддерживается Markdown разметка для форматирования"}],k=({docId:o})=>{const a=d(),n=i["/profile"](),e=i["/docs/get"]({docId:o},{enabled:!!o}),c=j["/docs/update"](),l=async m=>{try{await c.mutateAsync({...m}),x.removeQueries({queryKey:["/docs"]}),e.refetch(),a(s.docs.root())}catch(p){f.error("Ошибка при обновлении документа"),console.error("Error updating doc:",p)}};return t.jsx(u,{queries:[n,e],children:t.jsx("div",{style:{maxWidth:"900px",margin:"0 auto"},children:t.jsx(g,{children:t.jsxs(v,{direction:"vertical",size:"large",style:{width:"100%"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[t.jsx(S,{style:{fontSize:"48px",color:"#1890ff",marginBottom:"16px"}}),t.jsx(q,{level:3,children:"Редактирование документа"}),t.jsx(A,{type:"secondary",children:"Внесите необходимые изменения в документ"})]}),t.jsx(y,{config:C,initialValues:e==null?void 0:e.data,onFinish:l,okText:"Сохранить изменения",layout:"vertical"})]})})})})},J=()=>{const{docId:o}=h();return t.jsxs(r,{children:[t.jsx(r.Header,{title:"Редактировать документ",back:s.docs.root()}),t.jsx(r.Content,{children:t.jsx(k,{docId:o})})]})};export{J as default};
