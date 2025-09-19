import{f as d,b as i,j as t,A as u,q as x,l as s,s as f,e as h}from"./index-CZrFx1PE.js";import{S as y}from"./Form-D9xRsc_4.js";import{u as g}from"./mutations-DnreaG68.js";import{r as j}from"./utils-OwBwJajN.js";import{C as v}from"./index-PZbzHJMz.js";import{S}from"./index-DprLPdY9.js";import{R as b}from"./FileTextOutlined-C3hZhBAx.js";import{a as q}from"./index-BILkBBrI.js";import{S as r}from"./Section-Bf3WXe5m.js";import"./index-3yWXLQUi.js";import"./constants-DGI46l0S.js";import"./lodash-DWQkqwiz.js";import"./index-DpTbUHId.js";import"./LinkMemo-B0TTu8Pv.js";import"./PlusOutlined-CjAPOmhM.js";import"./AntdIcon-BGEuSVkB.js";import"./PlusOutlined-ByZyTB3m.js";import"./index-BO9GWmWq.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:C,Text:A}=q,k=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"roles",label:"Роли для доступа",type:"select",multiple:!0,options:j,placeholder:"Выберите роли, которые могут видеть этот документ",tooltip:"Если роли не выбраны, документ будет доступен всем пользователям"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

Пример структуры:
# Заголовок 1
## Заголовок 2
### Заголовок 3

**Жирный текст**
*Курсив*

- Список
- Элементов

1. Нумерованный
2. Список`,tooltip:"Поддерживается Markdown разметка для форматирования"}],E=({docId:e})=>{const a=d(),n=i["/profile"](),o=i["/docs/get"]({docId:e},{enabled:!!e}),l=g["/docs/update"](),c=async p=>{try{await l.mutateAsync({...p,_id:e}),x.removeQueries({queryKey:["/docs"]}),o.refetch(),a(s.docs.root())}catch(m){f.error("Ошибка при обновлении документа"),console.error("Error updating doc:",m)}};return t.jsx(u,{queries:[n,o],children:t.jsx("div",{style:{maxWidth:"900px",margin:"0 auto"},children:t.jsx(v,{children:t.jsxs(S,{direction:"vertical",size:"large",style:{width:"100%"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[t.jsx(b,{style:{fontSize:"48px",color:"#1890ff",marginBottom:"16px"}}),t.jsx(C,{level:3,children:"Редактирование документа"}),t.jsx(A,{type:"secondary",children:"Внесите необходимые изменения в документ"})]}),t.jsx(y,{config:k,initialValues:o==null?void 0:o.data,onFinish:c,okText:"Сохранить изменения",layout:"vertical"})]})})})})},O=()=>{const{docId:e}=h();return t.jsxs(r,{children:[t.jsx(r.Header,{title:"Редактировать документ",back:s.docs.root()}),t.jsx(r.Content,{children:t.jsx(E,{docId:e})})]})};export{O as default};
