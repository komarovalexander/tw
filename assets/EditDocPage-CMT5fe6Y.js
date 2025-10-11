import{h as i,j as t,A as c,q as m,s as d,k as u,l as x}from"./index-D2cSK_ni.js";import{S as h}from"./Form-JZiIJSN9.js";import{u as f}from"./mutations-CYcSb-2H.js";import{r as y}from"./utils-OwBwJajN.js";import{C as j}from"./index-4pk5aDlv.js";import{S as g}from"./index-DNr6LM5R.js";import{R as S}from"./FileTextOutlined-xkFuyDZ-.js";import{a as b}from"./index-Djv50ScX.js";import{S as o}from"./Section-53FDeyg9.js";import"./index-C1K8rYre.js";import"./constants-DW0TnkXc.js";import"./lodash-CVUhccBy.js";import"./index-DYPRAe8K.js";import"./LinkMemo-C6JR8DNh.js";import"./PlusOutlined-YYHksE02.js";import"./AntdIcon-Cb7OfO-y.js";import"./PlusOutlined-ByZyTB3m.js";import"./index-Du0Bb_bR.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:q,Text:v}=b,C=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"roles",label:"Роли для доступа",type:"select",multiple:!0,options:y,placeholder:"Выберите роли, которые могут видеть этот документ",tooltip:"Если роли не выбраны, документ будет доступен всем пользователям"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

Пример структуры:
# Заголовок 1
## Заголовок 2
### Заголовок 3

**Жирный текст**
*Курсив*

- Список
- Элементов

1. Нумерованный
2. Список`,tooltip:"Поддерживается Markdown разметка для форматирования"}],k=({docId:e})=>{const s=i["/profile"](),r=i["/docs/get"]({docId:e},{enabled:!!e}),a=f["/docs/update"](),n=async l=>{try{await a.mutateAsync({...l,_id:e}),m.removeQueries({queryKey:["/docs"]}),r.refetch()}catch(p){d.error("Ошибка при обновлении документа"),console.error("Error updating doc:",p)}};return t.jsx(c,{queries:[s,r],children:t.jsx("div",{style:{maxWidth:"900px",margin:"0 auto"},children:t.jsx(j,{children:t.jsxs(g,{direction:"vertical",size:"large",style:{width:"100%"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[t.jsx(S,{style:{fontSize:"48px",color:"#1890ff",marginBottom:"16px"}}),t.jsx(q,{level:3,children:"Редактирование документа"}),t.jsx(v,{type:"secondary",children:"Внесите необходимые изменения в документ"})]}),t.jsx(h,{config:C,initialValues:r==null?void 0:r.data,onFinish:n,okText:"Сохранить изменения",layout:"vertical"})]})})})})},J=()=>{const{docId:e}=u();return t.jsxs(o,{children:[t.jsx(o.Header,{title:"Редактировать документ",back:x.docs.root()}),t.jsx(o.Content,{children:t.jsx(k,{docId:e})})]})};export{J as default};
