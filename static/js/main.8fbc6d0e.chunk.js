(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{22:function(e,t,s){},23:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s.n(r),a=s(12),c=s.n(a),i=(s(22),s(23),s(13)),l=s(14),o=s(17),u=s(16),h=s(15),d=s.n(h),j=function(){return d.a.get("https://randomuser.me/api/?results=30")},f=s(0);var m=function(e){return Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"mb-3",children:Object(f.jsx)("form",{className:"form-inline",onSubmit:e.handleFormSubmit,children:Object(f.jsx)("input",{value:e.value,onChange:e.handleInputChange,type:"search",className:"form-control mt-2",id:"searchInput",placeholder:"Search for an Employee"})})})})};var b=function(e){return Object(f.jsxs)("table",{class:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",onClick:e.sortUserFirst,children:"First Name"}),Object(f.jsx)("th",{scope:"col",onClick:e.sortUserLast,children:"Last Name"}),Object(f.jsx)("th",{scope:"col",children:"Email"})]})}),Object(f.jsx)("tbody",{children:e.state.filteredUsers.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.name.first}),Object(f.jsx)("td",{children:e.name.last}),Object(f.jsx)("td",{children:e.email})]},e.login.uuid)}))})]})},p=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={search:"",users:[],filteredUsers:[]},e.handleInputChange=function(t){var s=t.target.value;e.setState({search:s}),e.filterUser(s.toLowerCase().trim())},e.handleFormSubmit=function(e){e.preventDefault()},e.filterUser=function(t){t?e.setState({filteredUsers:e.state.users.filter((function(e){return e.name.first.toLowerCase().includes(t)||e.name.last.toLowerCase().includes(t)}))}):e.setState({filteredUsers:e.state.users})},e.sortUserFirst=function(t){e.setState({filteredUsers:e.state.filteredUsers.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0}))})},e.sortUserLast=function(t){e.setState({filteredUsers:e.state.filteredUsers.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0}))})},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;j().then((function(t){return e.setState({users:t.data.results,filteredUsers:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(m,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(f.jsx)(b,{state:this.state,filterUser:this.filterUser,sortUserFirst:this.sortUserFirst,sortUserLast:this.sortUserLast})]})}}]),s}(r.Component);var O=function(){return Object(f.jsx)("div",{class:"jumbotron jumbotron-fluid",children:Object(f.jsxs)("div",{class:"container",children:[Object(f.jsx)("h1",{class:"display-4",children:"Employee Directory"}),Object(f.jsx)("p",{class:"lead",children:"Sort employees alphabetically by clicking the first or last name column or search for an employee by name using the search bar."})]})})};var x=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(O,{}),Object(f.jsx)(p,{})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),r(e),n(e),a(e),c(e)}))};s(43);c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),v()}},[[44,1,2]]]);
//# sourceMappingURL=main.8fbc6d0e.chunk.js.map