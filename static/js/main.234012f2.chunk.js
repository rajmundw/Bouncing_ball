(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),l=n(1),o=n.n(l),s=n(2),r=n(3),u=n(5),c=n(4),m=n(6),d=(n(15),n(17),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(u.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(i)))).state={ballClass:"ball",buttonText:"Bounce the ball",title:"Press to bounce",animationStatus:"running",innerWidth:window.innerWidth},n.moveBallHandler=function(){"ball"===n.state.ballClass?n.setState({ballClass:"bouncing",buttonText:"Stop Bounce",title:"Click to stop"},function(){document.querySelector(".ball-container").children[0].classList="".concat(n.state.ballClass),document.querySelector("button").innerText="".concat(n.state.buttonText),document.querySelector("button").setAttribute("title","".concat(n.state.title))}):"paused"===n.state.animationStatus?n.setState({buttonText:"Stop Bounce",title:"Click to stop",animationStatus:"running"},function(){document.querySelector("button").innerText="".concat(n.state.buttonText),document.querySelector("button").setAttribute("title","".concat(n.state.title)),document.querySelector(".ball-container").children[0].style.animationPlayState="".concat(n.state.animationStatus)}):window.innerWidth>768?n.setState({buttonText:"Bounce the ball / Reset bouncing",title:"Press to continue/Double click to reset",animationStatus:"paused"},function(){document.querySelector("button").innerText="".concat(n.state.buttonText),document.querySelector("button").setAttribute("title","".concat(n.state.title)),document.querySelector(".ball-container").children[0].style.animationPlayState="".concat(n.state.animationStatus)}):n.setState({buttonText:"Bounce the ball",title:"Press to continue",animationStatus:"paused"},function(){document.querySelector("button").innerText="".concat(n.state.buttonText),document.querySelector("button").setAttribute("title","".concat(n.state.title)),document.querySelector(".ball-container").children[0].style.animationPlayState="".concat(n.state.animationStatus)})},n.moveBallHandler2=function(){"paused"===n.state.animationStatus&&n.setState({ballClass:"ball",buttonText:"Bounce the ball",title:"Press to bounce",animationStatus:"running"},function(){document.querySelector(".ball-container").children[0].classList="".concat(n.state.ballClass),document.querySelector("button").innerText="".concat(n.state.buttonText),document.querySelector("button").setAttribute("title","".concat(n.state.title)),document.querySelector(".ball-container").children[0].style.animationPlayState="".concat(n.state.animationStatus)})},n}return Object(m.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("resize",function(){t.setState({innerWidth:window.innerWidth})})}},{key:"shouldComponentUpdate",value:function(t,e){return this.state.innerWidth<=768&&e.innerWidth>768||this.state.innerWidth>768&&e.innerWidth<=768||this.state.animationStatus!==e.animationStatus&&window.innerWidth<=768}},{key:"componentDidUpdate",value:function(){2===document.querySelectorAll("button").length?document.querySelectorAll("button")[0].innerText="Bounce the ball":1===document.querySelectorAll("button").length&&"paused"===this.state.animationStatus&&(document.querySelectorAll("button")[0].innerText="Bounce the ball / Reset bouncing",document.querySelectorAll("button")[0].setAttribute("title","Press to continue/Double click to reset"))}},{key:"render",value:function(){return window.innerWidth>768?i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"ball-container"},i.a.createElement("div",{className:"ball"})),i.a.createElement("div",{className:"text-container"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem ex. Sed venenatis congue blandit. Cras tempor porttitor nisi a luctus. Vivamus sit amet magna ut est viverra luctus quis vel erat. Duis nec aliquet magna. Mauris vehicula placerat nulla quis scelerisque. Etiam quis erat lacus. Ut eros dolor, varius congue ante nec, dignissim placerat enim. Aliquam sit amet eros at nisl ultricies iaculis ut in nibh."),i.a.createElement("button",{title:this.state.title,onDoubleClick:this.moveBallHandler2,onClick:this.moveBallHandler,type:"button",id:"bounce"},this.state.buttonText))):"paused"===this.state.animationStatus?i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"ball-container"},i.a.createElement("div",{className:"ball"})),i.a.createElement("div",{className:"text-container"},i.a.createElement("p",{className:"order-sm-1 order-md-1 order-lg-1 order-xl-1 order-2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem ex. Sed venenatis congue blandit. Cras tempor porttitor nisi a luctus. Vivamus sit amet magna ut est viverra luctus quis vel erat. Duis nec aliquet magna. Mauris vehicula placerat nulla quis scelerisque. Etiam quis erat lacus. Ut eros dolor, varius congue ante nec, dignissim placerat enim. Aliquam sit amet eros at nisl ultricies iaculis ut in nibh."),i.a.createElement("div",{className:" order-sm-2 order-md-2 order-lg-2 order-xl-2 order-1 buttons-container"},i.a.createElement("button",{style:{marginRight:"10px"},title:this.state.title,onClick:this.moveBallHandler,type:"button",id:"bounce"},this.state.buttonText),i.a.createElement("button",{title:this.state.title,onClick:this.moveBallHandler2,type:"button",id:"bounce"},"Reset")))):i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"ball-container"},i.a.createElement("div",{className:"ball"})),i.a.createElement("div",{className:"text-container"},i.a.createElement("p",{className:"order-2 order-sm-1 order-md-1 order-lg-1 order-xl-1"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem ex. Sed venenatis congue blandit. Cras tempor porttitor nisi a luctus. Vivamus sit amet magna ut est viverra luctus quis vel erat. Duis nec aliquet magna. Mauris vehicula placerat nulla quis scelerisque. Etiam quis erat lacus. Ut eros dolor, varius congue ante nec, dignissim placerat enim. Aliquam sit amet eros at nisl ultricies iaculis ut in nibh."),i.a.createElement("button",{className:"order-1 order-sm-2 order-md-2 order-lg-2 order-xl-2",title:this.state.title,onClick:this.moveBallHandler,type:"button",id:"bounce"},this.state.buttonText)))}}]),e}(a.Component));o.a.render(i.a.createElement(d,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(19)}},[[7,2,1]]]);
//# sourceMappingURL=main.234012f2.chunk.js.map