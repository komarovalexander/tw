import{q as i,j as t,A as m,w as c,x as d,u,l as x}from"./index-nt8VQFQf.js";import{S as f}from"./Form-CHX-rFQd.js";import{u as h}from"./mutations-LMNcDaj5.js";import{r as y}from"./utils-OwBwJajN.js";import{C as j}from"./index-DRQRmSdD.js";import{S as g}from"./index-U9LSQthm.js";import{R as S}from"./FileTextOutlined-CJtSQeFr.js";import{T as b}from"./index-CY7nfmCO.js";import{S as o}from"./Section-CWi4sbvu.js";import"./canUseDom-CBHbuwnM.js";import"./focus-DzYiJ_hi.js";import"./constants-CaESF5K5.js";import"./lodash-C048-8-s.js";import"./index-Di4w0pcf.js";import"./LinkMemo-Cd_9fsqO.js";import"./PlusOutlined-QEDM6wo8.js";import"./PlusOutlined-ByZyTB3m.js";import"./AntdIcon-DK7TMF1d.js";import"./index-kMLe6pxR.js";import"./LeftOutlined-D0sgJC_x.js";import"./Dropdown-BeyW4HQ0.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:q,Text:v}=b,C=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"roles",label:"Роли для доступа",type:"select",multiple:!0,options:y,placeholder:"Выберите роли, которые могут видеть этот документ",tooltip:"Если роли не выбраны, документ будет доступен всем пользователям"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

Пример структуры:
# Заголовок 1
## Заголовок 2
### Заголовок 3

**Жирный текст**
*Курсив*

- Список
- Элементов

1. Нумерованный
2. Список`,tooltip:"Поддерживается Markdown разметка для форматирования"}],A=({docId:e})=>{const s=i["/profile"](),r=i["/docs/get"]({docId:e},{enabled:!!e}),a=h["/docs/update"](),n=async l=>{try{await a.mutateAsync({...l,_id:e}),c.removeQueries({queryKey:["/docs"]}),r.refetch()}catch(p){d.error("Ошибка при обновлении документа"),console.error("Error updating doc:",p)}};return t.jsx(m,{queries:[s,r],children:t.jsx("div",{style:{maxWidth:"900px",margin:"0 auto"},children:t.jsx(j,{children:t.jsxs(g,{direction:"vertical",size:"large",style:{width:"100%"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[t.jsx(S,{style:{fontSize:"48px",color:"#1890ff",marginBottom:"16px"}}),t.jsx(q,{level:3,children:"Редактирование документа"}),t.jsx(v,{type:"secondary",children:"Внесите необходимые изменения в документ"})]}),t.jsx(f,{config:C,initialValues:r==null?void 0:r.data,onFinish:n,okText:"Сохранить изменения",layout:"vertical"})]})})})})},U=()=>{const{docId:e}=u();return t.jsxs(o,{children:[t.jsx(o.Header,{title:"Редактировать документ",back:x.docs.root()}),t.jsx(o.Content,{children:t.jsx(A,{docId:e})})]})};export{U as default};
