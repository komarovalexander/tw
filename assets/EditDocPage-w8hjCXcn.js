import{f as d,b as i,j as t,A as u,q as x,l as s,s as f,e as h}from"./index-DrMS14eB.js";import{S as y}from"./Form-tJEr0JKV.js";import{u as g}from"./mutations-C8DWKesO.js";import{r as j}from"./utils-OwBwJajN.js";import{C as v}from"./index-jwKMzNw9.js";import{S}from"./index-DZgwFlhw.js";import{R as b}from"./FileTextOutlined-DTQCkelO.js";import{a as q}from"./index-CymKF7Fy.js";import{S as r}from"./Section-CAfr5GhG.js";import"./index-Cw2Pb5WI.js";import"./constants-DGI46l0S.js";import"./lodash-0bF3NFpY.js";import"./index-DRcriwUq.js";import"./LinkMemo-CY5B8eUT.js";import"./PlusOutlined-DDLy8JNu.js";import"./AntdIcon-dM5CrB2y.js";import"./PlusOutlined-ByZyTB3m.js";import"./index-BGWDAQ36.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:C,Text:A}=q,k=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"roles",label:"Роли для доступа",type:"select",multiple:!0,options:j,placeholder:"Выберите роли, которые могут видеть этот документ",tooltip:"Если роли не выбраны, документ будет доступен всем пользователям"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

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
