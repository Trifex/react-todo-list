(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{12:function(e,t,n){e.exports=n(28)},17:function(e,t,n){},18:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),r=n.n(o),l=(n(17),n(18),n(9)),c=n(11),s=n(1),m=n(2),u=n(3),d=n(4),f=n(6),p=n(10),h=n.n(p),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={text:""},e.handleChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit({text:e.state.text,complete:!1,id:h.a.generate()}),e.setState({text:""})},e}return Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{name:"text",value:this.state.text,onChange:this.handleChange,placeholder:"Add an item"}),i.a.createElement("button",{onClick:this.handleSubmit},"Add Item"))}}]),n}(i.a.Component),b=(n(27),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{class:"todo-container"},i.a.createElement("div",{class:"todo-item"+(this.props.item.complete?" complete":""),onClick:this.props.toggleComplete},this.props.item.text),i.a.createElement("button",{onClick:this.props.delete},"x"))}}]),n}(i.a.Component)),E=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={items:[],filter:"all"},e.addItem=function(t){e.setState({items:[t].concat(Object(c.a)(e.state.items))})},e.toggleComplete=function(t){e.setState({items:e.state.items.map((function(e){return e.id===t?Object(l.a)({},e,{complete:!e.complete}):e}))})},e.deleteItem=function(t){e.setState({items:e.state.items.filter((function(e){return e.id!==t}))})},e.deleteCompletedItems=function(){e.setState({items:e.state.items.filter((function(e){return!e.complete}))})},e.filterItems=function(t){e.setState({filter:t})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=[];return t="active"===this.state.filter?this.state.items.filter((function(e){return!e.complete})):"complete"===this.state.filter?this.state.items.filter((function(e){return e.complete})):this.state.items,i.a.createElement("div",null,i.a.createElement("div",null,"Active Items:"," ",this.state.items.filter((function(e){return!e.complete})).length),i.a.createElement(v,{onSubmit:this.addItem}),t.map((function(t){return i.a.createElement(b,{toggleComplete:function(){return e.toggleComplete(t.id)},delete:function(){return e.deleteItem(t.id)},item:t})})),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return e.filterItems("all")}},"All Items"),i.a.createElement("button",{onClick:function(){return e.filterItems("active")}},"Active Items"),i.a.createElement("button",{onClick:function(){return e.filterItems("complete")}},"Completed Items")),i.a.createElement("div",null,this.state.items.some((function(e){return e.complete}))?i.a.createElement("button",{onClick:this.deleteCompletedItems},"Remove All Completed Items"):null))}}]),n}(i.a.Component);var g=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Todo List"),i.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.760e8746.chunk.js.map