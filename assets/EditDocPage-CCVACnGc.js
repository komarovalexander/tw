import{n as d,h as i,j as t,A as u,q as x,l as s,s as h,k as f}from"./index-BxDbMNEb.js";import{S as y}from"./Form-T35bNCPm.js";import{u as g}from"./mutations-BunW464f.js";import{r as j}from"./utils-OwBwJajN.js";import{C as v}from"./index-BpSVB_M0.js";import{S}from"./index-YNiot2cl.js";import{R as b}from"./FileTextOutlined-BvyJInPu.js";import{a as q}from"./index--HtfbhnO.js";import{S as r}from"./Section-SJLvK9QN.js";import"./index-Bo3ni7my.js";import"./constants-CpRb2ZiY.js";import"./lodash-D46oaUE3.js";import"./index-CM4guuWM.js";import"./LinkMemo-0Fhy8DMD.js";import"./PlusOutlined-CBtwrO11.js";import"./AntdIcon-B6Ov8dml.js";import"./PlusOutlined-ByZyTB3m.js";import"./index-Cdh3gAt9.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:C,Text:k}=q,A=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"roles",label:"Роли для доступа",type:"select",multiple:!0,options:j,placeholder:"Выберите роли, которые могут видеть этот документ",tooltip:"Если роли не выбраны, документ будет доступен всем пользователям"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

Пример структуры:
# Заголовок 1
## Заголовок 2
### Заголовок 3

**Жирный текст**
*Курсив*

- Список
- Элементов

1. Нумерованный
2. Список`,tooltip:"Поддерживается Markdown разметка для форматирования"}],E=({docId:e})=>{const a=d(),n=i["/profile"](),o=i["/docs/get"]({docId:e},{enabled:!!e}),l=g["/docs/update"](),c=async p=>{try{await l.mutateAsync({...p,_id:e}),x.removeQueries({queryKey:["/docs"]}),o.refetch(),a(s.docs.root())}catch(m){h.error("Ошибка при обновлении документа"),console.error("Error updating doc:",m)}};return t.jsx(u,{queries:[n,o],children:t.jsx("div",{style:{maxWidth:"900px",margin:"0 auto"},children:t.jsx(v,{children:t.jsxs(S,{direction:"vertical",size:"large",style:{width:"100%"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[t.jsx(b,{style:{fontSize:"48px",color:"#1890ff",marginBottom:"16px"}}),t.jsx(C,{level:3,children:"Редактирование документа"}),t.jsx(k,{type:"secondary",children:"Внесите необходимые изменения в документ"})]}),t.jsx(y,{config:A,initialValues:o==null?void 0:o.data,onFinish:c,okText:"Сохранить изменения",layout:"vertical"})]})})})})},O=()=>{const{docId:e}=f();return t.jsxs(r,{children:[t.jsx(r.Header,{title:"Редактировать документ",back:s.docs.root()}),t.jsx(r.Content,{children:t.jsx(E,{docId:e})})]})};export{O as default};
