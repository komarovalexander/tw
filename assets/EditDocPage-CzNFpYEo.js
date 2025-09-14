import{f as d,b as i,j as t,A as u,q as x,l as s,s as f,e as h}from"./index-lDAesX3o.js";import{S as y}from"./Form-Djkm3kxt.js";import{u as g}from"./mutations-_MgSFMff.js";import{r as j}from"./utils-OwBwJajN.js";import{C as v}from"./index-DgjERpWR.js";import{S}from"./index-BpC4GpRr.js";import{R as b}from"./FileTextOutlined-DrxQeg2h.js";import{a as q}from"./index-BrV5S-KS.js";import{S as r}from"./Section-CDvH8WRd.js";import"./index-CjDmXN8b.js";import"./constants-DGI46l0S.js";import"./lodash-bSAfHH5Q.js";import"./index-BExjrcVg.js";import"./LinkMemo-CtoUdjjd.js";import"./PlusOutlined-DgMXlb8R.js";import"./AntdIcon-c1k9o2Uq.js";import"./PlusOutlined-ByZyTB3m.js";import"./index-DNnyHmhe.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:C,Text:A}=q,k=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"roles",label:"Роли для доступа",type:"select",multiple:!0,options:j,placeholder:"Выберите роли, которые могут видеть этот документ",tooltip:"Если роли не выбраны, документ будет доступен всем пользователям"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

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
