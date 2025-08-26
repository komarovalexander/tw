import{f as d,b as i,j as t,A as u,q as x,l as s,s as f,e as h}from"./index-DNKWA5Yr.js";import{S as y}from"./Form-D6wtKShT.js";import{u as j}from"./mutations-CQULGnre.js";import{C as g}from"./index-CxpwT6HY.js";import{S as v}from"./index-W_ny5PPo.js";import{R as S}from"./FileTextOutlined-CWED3IKs.js";import{a as b}from"./index-DIb9G4xh.js";import{S as o}from"./Section-DZgd0l12.js";import"./index-m8A0DcBp.js";import"./constants-DGI46l0S.js";import"./lodash-D9xTtuOY.js";import"./index-CuObybE2.js";import"./LinkMemo-BRO3f-b5.js";import"./PlusOutlined-hM5DK3jI.js";import"./AntdIcon-CjrMuquu.js";import"./PlusOutlined-ByZyTB3m.js";import"./index-ecki3Kb8.js";import"./gapSize-U1swVQyS.js";import"./CheckOutlined-DDIQGtSX.js";const{Title:q,Text:A}=b,C=[{name:"title",label:"Название документа",type:"text",required:!0,placeholder:"Введите название документа",tooltip:"Краткое и понятное название документа"},{name:"content",label:"Содержание документа",type:"textArea",required:!0,placeholder:`Введите содержание документа...

Пример структуры:
# Заголовок 1
## Заголовок 2
### Заголовок 3

**Жирный текст**
*Курсив*

- Список
- Элементов

1. Нумерованный
2. Список`,tooltip:"Поддерживается Markdown разметка для форматирования"}],k=({docId:e})=>{const a=d(),n=i["/profile"](),r=i["/docs/get"]({docId:e},{enabled:!!e}),c=j["/docs/update"](),l=async m=>{try{await c.mutateAsync({...m,_id:e}),x.removeQueries({queryKey:["/docs"]}),r.refetch(),a(s.docs.root())}catch(p){f.error("Ошибка при обновлении документа"),console.error("Error updating doc:",p)}};return t.jsx(u,{queries:[n,r],children:t.jsx("div",{style:{maxWidth:"900px",margin:"0 auto"},children:t.jsx(g,{children:t.jsxs(v,{direction:"vertical",size:"large",style:{width:"100%"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[t.jsx(S,{style:{fontSize:"48px",color:"#1890ff",marginBottom:"16px"}}),t.jsx(q,{level:3,children:"Редактирование документа"}),t.jsx(A,{type:"secondary",children:"Внесите необходимые изменения в документ"})]}),t.jsx(y,{config:C,initialValues:r==null?void 0:r.data,onFinish:l,okText:"Сохранить изменения",layout:"vertical"})]})})})})},I=()=>{const{docId:e}=h();return t.jsxs(o,{children:[t.jsx(o.Header,{title:"Редактировать документ",back:s.docs.root()}),t.jsx(o.Content,{children:t.jsx(k,{docId:e})})]})};export{I as default};
