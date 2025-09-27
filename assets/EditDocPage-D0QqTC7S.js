import{h as i,j as t,A as m,q as d,s,k as u,l as x}from"./index-Dfx602zI.js";import{S as h}from"./Form-51gc8liF.js";import{u as f}from"./mutations-BhjoiuK0.js";import{r as y}from"./utils-OwBwJajN.js";import{C as j}from"./index-h-IFdYeS.js";import{S as g}from"./index-B1oJv1S5.js";import{R as S}from"./FileTextOutlined-1PXINX0M.js";import{a as b}from"./index-C_kNFYk-.js";import{S as o}from"./Section-D6M0UGPn.js";import"./index-CbB0ldb8.js";import"./constants-CpRb2ZiY.js";import"./lodash-C42a6uEx.js";import"./index-DBZF5IqX.js";import"./LinkMemo-C2lxf2GG.js";import"./PlusOutlined-gIdODIYI.js";import"./AntdIcon-Cl-_UG5A.js";import"./PlusOutlined-ByZyTB3m.js";import"./index-4iwYQJrd.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:q,Text:v}=b,C=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"roles",label:"Роли для доступа",type:"select",multiple:!0,options:y,placeholder:"Выберите роли, которые могут видеть этот документ",tooltip:"Если роли не выбраны, документ будет доступен всем пользователям"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

Пример структуры:
# Заголовок 1
## Заголовок 2
### Заголовок 3

**Жирный текст**
*Курсив*

- Список
- Элементов

1. Нумерованный
2. Список`,tooltip:"Поддерживается Markdown разметка для форматирования"}],k=({docId:e})=>{const a=i["/profile"](),r=i["/docs/get"]({docId:e},{enabled:!!e}),n=f["/docs/update"](),l=async c=>{try{await n.mutateAsync({...c,_id:e}),d.removeQueries({queryKey:["/docs"]}),r.refetch(),s.success("Документ успешно сохранен")}catch(p){s.error("Ошибка при обновлении документа"),console.error("Error updating doc:",p)}};return t.jsx(m,{queries:[a,r],children:t.jsx("div",{style:{maxWidth:"900px",margin:"0 auto"},children:t.jsx(j,{children:t.jsxs(g,{direction:"vertical",size:"large",style:{width:"100%"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[t.jsx(S,{style:{fontSize:"48px",color:"#1890ff",marginBottom:"16px"}}),t.jsx(q,{level:3,children:"Редактирование документа"}),t.jsx(v,{type:"secondary",children:"Внесите необходимые изменения в документ"})]}),t.jsx(h,{config:C,initialValues:r==null?void 0:r.data,onFinish:l,okText:"Сохранить изменения",layout:"vertical"})]})})})})},J=()=>{const{docId:e}=u();return t.jsxs(o,{children:[t.jsx(o.Header,{title:"Редактировать документ",back:x.docs.root()}),t.jsx(o.Content,{children:t.jsx(k,{docId:e})})]})};export{J as default};
