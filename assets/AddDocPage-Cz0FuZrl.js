import{v as p,o as d,j as t,A as x,w as u,l as s,x as f}from"./index-CVezgX7l.js";import{S as h}from"./Form-BEv9TvIO.js";import{u as y}from"./mutations-C3WzgRty.js";import{r as g}from"./utils-OwBwJajN.js";import{C as j}from"./index-Cc2hUg72.js";import{S as v}from"./index-BD_cV6W5.js";import{R as S}from"./FileTextOutlined-Bi8sGrqi.js";import{T as A}from"./index-CewPA2Ka.js";import{S as r}from"./Section-CQ1IvGfV.js";import"./canUseDom-DI3fFXJc.js";import"./focus-CRK-cTMS.js";import"./constants-CaESF5K5.js";import"./lodash-D3ZMZmsH.js";import"./index-EFarL7fk.js";import"./LinkMemo-DKpqzjfM.js";import"./PlusOutlined-DP2F480l.js";import"./PlusOutlined-ByZyTB3m.js";import"./AntdIcon-BiJuY8NK.js";import"./index-wcN9Kpx6.js";import"./LeftOutlined-D0sgJC_x.js";import"./Dropdown-CuXhlJsB.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:C,Text:T}=A,b=()=>{const a=p(),o=d["/profile"](),n=y["/docs/add"](),l=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"roles",label:"Роли для доступа",type:"select",multiple:!0,options:g,placeholder:"Выберите роли, которые могут видеть этот документ",tooltip:"Если роли не выбраны, документ будет доступен всем пользователям"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

Пример структуры:
# Заголовок 1
## Заголовок 2
### Заголовок 3

**Жирный текст**
*Курсив*

- Список
- Элементов

1. Нумерованный
2. Список`,tooltip:"Поддерживается Markdown разметка для форматирования"}],c=async m=>{var i;try{const e=(i=o==null?void 0:o.data)==null?void 0:i.login;await n.mutateAsync({...m,createdBy:e}),u.removeQueries({queryKey:["/docs"]}),a(s.docs.root())}catch(e){f.error("Ошибка при создании документа"),console.error("Error creating doc:",e)}};return t.jsx(x,{queries:[o],children:t.jsx("div",{style:{maxWidth:"900px",margin:"0 auto"},children:t.jsx(j,{children:t.jsxs(v,{direction:"vertical",size:"large",style:{width:"100%"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[t.jsx(S,{style:{fontSize:"48px",color:"#1890ff",marginBottom:"16px"}}),t.jsx(C,{level:3,children:"Создание нового документа"}),t.jsx(T,{type:"secondary",children:"Заполните форму ниже для создания нового документа в системе"})]}),t.jsx(h,{config:l,onFinish:c,okText:"Создать документ",cancelText:"Отмена",layout:"vertical"})]})})})})},X=()=>t.jsxs(r,{children:[t.jsx(r.Header,{title:"Добавить документ",back:s.docs.root()}),t.jsx(r.Content,{children:t.jsx(b,{})})]});export{X as default};
