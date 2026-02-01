import{o as i,j as t,A as m,w as c,x as d,u,l as x}from"./index-CVezgX7l.js";import{S as f}from"./Form-BEv9TvIO.js";import{u as h}from"./mutations-C3WzgRty.js";import{r as y}from"./utils-OwBwJajN.js";import{C as j}from"./index-Cc2hUg72.js";import{S as g}from"./index-BD_cV6W5.js";import{R as S}from"./FileTextOutlined-Bi8sGrqi.js";import{T as b}from"./index-CewPA2Ka.js";import{S as r}from"./Section-CQ1IvGfV.js";import"./canUseDom-DI3fFXJc.js";import"./focus-CRK-cTMS.js";import"./constants-CaESF5K5.js";import"./lodash-D3ZMZmsH.js";import"./index-EFarL7fk.js";import"./LinkMemo-DKpqzjfM.js";import"./PlusOutlined-DP2F480l.js";import"./PlusOutlined-ByZyTB3m.js";import"./AntdIcon-BiJuY8NK.js";import"./index-wcN9Kpx6.js";import"./LeftOutlined-D0sgJC_x.js";import"./Dropdown-CuXhlJsB.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:v,Text:C}=b,q=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"roles",label:"Роли для доступа",type:"select",multiple:!0,options:y,placeholder:"Выберите роли, которые могут видеть этот документ",tooltip:"Если роли не выбраны, документ будет доступен всем пользователям"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

Пример структуры:
# Заголовок 1
## Заголовок 2
### Заголовок 3

**Жирный текст**
*Курсив*

- Список
- Элементов

1. Нумерованный
2. Список`,tooltip:"Поддерживается Markdown разметка для форматирования"}],A=({docId:e})=>{const s=i["/profile"](),o=i["/docs/get"]({docId:e},{enabled:!!e}),a=h["/docs/update"](),n=async l=>{try{await a.mutateAsync({...l,_id:e}),c.removeQueries({queryKey:["/docs"]}),o.refetch()}catch(p){d.error("Ошибка при обновлении документа"),console.error("Error updating doc:",p)}};return t.jsx(m,{queries:[s,o],children:t.jsx("div",{style:{maxWidth:"900px",margin:"0 auto"},children:t.jsx(j,{children:t.jsxs(g,{direction:"vertical",size:"large",style:{width:"100%"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[t.jsx(S,{style:{fontSize:"48px",color:"#1890ff",marginBottom:"16px"}}),t.jsx(v,{level:3,children:"Редактирование документа"}),t.jsx(C,{type:"secondary",children:"Внесите необходимые изменения в документ"})]}),t.jsx(f,{config:q,initialValues:o==null?void 0:o.data,onFinish:n,okText:"Сохранить изменения",layout:"vertical"})]})})})})},U=()=>{const{docId:e}=u();return t.jsxs(r,{children:[t.jsx(r.Header,{title:"Редактировать документ",back:x.docs.root()}),t.jsx(r.Content,{children:t.jsx(A,{docId:e})})]})};export{U as default};
