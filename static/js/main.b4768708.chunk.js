(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__1trdd",input:"Filter_input__2_XQ3"}},13:function(t,e,n){t.exports={container:"Container_container__3p0cH"}},2:function(t,e,n){t.exports={form:"ContactForm_form__2i9ZW",label:"ContactForm_label__2sG-J",input:"ContactForm_input__-6VAB",btn:"ContactForm_btn__1JSKh"}},29:function(t,e,n){},3:function(t,e,n){t.exports={list:"ContactList_list__cDAih",item:"ContactList_item__XQreX",btn:"ContactList_btn__3LOwT"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),i=n.n(r),o=n(15),s=n(5),l=n(6),u=n(8),b=n(7),m=n(12),d=n.n(m),h=n(13),j=n.n(h),f=n(0);var p=function(t){var e=t.children;return Object(f.jsx)("div",{className:j.a.container,children:e})},C=n(14),O=n(2),v=n.n(O),_=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(C.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:v.a.label,children:["Name",Object(f.jsx)("input",{className:v.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,placeholder:"First Name Last Name"})]}),Object(f.jsxs)("label",{className:v.a.label,children:["Number",Object(f.jsx)("input",{className:v.a.input,type:"text",name:"number",value:n,onChange:this.handleChange,placeholder:"111-11-11"})]}),Object(f.jsx)("button",{className:v.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),x=_,g=n(10),N=n.n(g);var y=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:N.a.label,children:["Find contacts by name",Object(f.jsx)("input",{className:N.a.input,type:"text",value:e,onChange:n})]})},S=n(3),w=n.n(S);var F=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{className:w.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:w.a.item,children:[Object(f.jsxs)("p",{className:w.a.info,children:[a,": ",c]}),Object(f.jsx)("button",{className:w.a.btn,type:"button",onClick:function(){return n(e)}})]},e)}))})},k=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:d.a.generate(),name:n,number:a},r=t.state.contacts;r.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):r.find((function(t){return t.number===a}))?alert("".concat(a," is already in contacts.")):""===n.trim()||""===a.trim()?alert("Enter the contact's name and number phone!"):/\d{3}[-]\d{2}[-]\d{2}/g.test(a)?t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(o.a)(e))}})):alert("Enter the correct number phone!")},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=this.getVisibleContacts();return Object(f.jsxs)(p,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(x,{onSubmit:this.addContact}),Object(f.jsx)("h2",{children:"Contacts"}),n.length>1&&Object(f.jsx)(y,{value:e,onChange:this.changeFilter}),n.length>0?Object(f.jsx)(F,{contacts:a,onDeleteContact:this.deleteContact}):Object(f.jsx)("p",{children:"Your phonebook is empty. Please add contact."})]})}}]),n}(a.Component),L=k;n(29);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.b4768708.chunk.js.map