(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(e,t,n){e.exports={item:"Circle_item__E-pue",itemGreen:"Circle_itemGreen__2Xwhz",hide:"Circle_hide__13Cmw",show:"Circle_show__3HZHR",itemApp:"Circle_itemApp__2BzC-",itemAppGreen:"Circle_itemAppGreen__2m9Oy",newDog:"Circle_newDog__3Vj9H",click:"Circle_click__3z7T7"}},18:function(e,t,n){e.exports=n.p+"static/media/dog.75fa68d4.mp3"},19:function(e,t,n){e.exports=n.p+"static/media/error.f71584f3.mp3"},20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(6),i=n.n(a),o=(n(25),n(7)),l=n(9),u=n(8),s=n(10),m=(n(26),n(4)),p=n(16);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(){return{type:"PLUS_CLICK"}},k={dogArray:[{id:1,checkClick:!1},{id:2,checkClick:!1},{id:3,checkClick:!1},{id:4,checkClick:!1},{id:5,checkClick:!1},{id:6,checkClick:!1},{id:7,checkClick:!1},{id:8,checkClick:!1},{id:9,checkClick:!1}],counterClick:0,level:0},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLUS_CLICK":return h({},e,{counterClick:e.counterClick+1});case"RANDOM_SHOW":return h({},e,{dogArray:e.dogArray.map((function(e){return e.id===t.randomNumber?h({},e,{checkClick:!0}):h({},e,{checkClick:!1})}))});case"FINISH":return h({},e,{counterClick:e.counterClick=0});case"LEVEL_PLUS":return h({},e,{level:e.level+1});case"LEVEL_DOWN":return h({},e,{level:e.level=0});default:return h({},e)}return e},C=n(17),b=n(1),w=n.n(b),y=n(18),g=n.n(y),E=n(19),O=n.n(E),S=new Audio(g.a),_=new Audio(O.a),j=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(s.a)(t,e),Object(C.a)(t,[{key:"onClick",value:function(e){e?(this.props.plusClickAction(),S.currentTime=0,S.play()):(_.currentTime=0,_.play())}},{key:"render",value:function(){var e=this,t=!0===this.props.checkClick?"".concat(w.a.show):"".concat(w.a.hide);return r.a.createElement("div",{className:this.props.checkClick?"".concat(w.a.item," ").concat(w.a.itemGreen):w.a.item,onClick:function(){return e.onClick(e.props.checkClick)}},r.a.createElement("div",{className:t}))}}]),t}(r.a.Component),A=Object(m.b)(null,{plusClickAction:f})(j),N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).getRandomImageIndex=function(){return Math.floor(9*Math.random())},n.state={start:!1,backCount:3,finish:!1,wait:0},n.gameStart=function(){n.setState({start:!0,wait:6}),n.setTimeoutStart(1).then((function(){return n.setTimeoutStart(1)})).then((function(){return n.setTimeoutStart(1)})).then((function(){return n.setTimeoutStart(1)})).then((function(){n.mySetTimout(1.3,n.state.wait).then((function(){return n.mySetTimout(1.1,n.state.wait)})).then((function(){return n.mySetTimout(.9,n.state.wait)})).then((function(){n.gameEnd()}))}))},n.gameEnd=function(){n.setState({backCount:3,finish:!0,wait:0}),n.props.finish(),n.props.levelDown(),setTimeout((function(){n.setState({finish:!1}),n.setState({start:!1}),console.log("finish")}),1e3)},n.gameStop=function(){n.setState({backCount:3,finish:!1,wait:0}),n.props.finish(),n.props.levelDown()},n.setTimeoutStart=function(e){return new Promise((function(t){setTimeout((function(){n.setState({backCount:n.state.backCount-1}),t()}),1e3*e)}))},n.mySetTimout=function(e,t){return new Promise((function(c){n.props.levelPlus();var r=setInterval((function(){n.props.randomShow(n.getRandomImageIndex())}),1e3*e);setTimeout((function(){clearInterval(r),c()}),1e3*t)}))},n.render=function(){var e=n.props.dogArray.map((function(e){return r.a.createElement(A,{key:e.id,id:e.id,checkClick:e.checkClick})}));return r.a.createElement("div",null,n.state.finish?r.a.createElement("div",{className:"App"},"Finish"):n.state.start?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"counter"},r.a.createElement("div",null,0!==n.props.level?"Level: ".concat(n.props.level):"Start: ".concat(n.state.backCount)),r.a.createElement("div",null,"Score: ".concat(n.props.counterClick))),r.a.createElement("div",null,e),r.a.createElement("button",{className:"button",onClick:n.gameStop},"Stop")):r.a.createElement("div",{className:"App"},r.a.createElement("div",null,"The game has 3 levels of 6 seconds!"),r.a.createElement("div",null,"Hit the target:"),r.a.createElement("div",null,"+ 1 point"),r.a.createElement("div",{className:"".concat(w.a.itemApp," ").concat(w.a.itemAppGreen)},r.a.createElement("div",{className:w.a.click})),r.a.createElement("div",null,"Past:"),r.a.createElement("div",{className:"".concat(w.a.itemApp)},r.a.createElement("div",{className:w.a.newDog})),r.a.createElement("button",{className:"button",onClick:n.gameStart},"Start")))},n}return Object(s.a)(t,e),t}(r.a.Component),P=Object(m.b)((function(e){return{dogArray:e.ReducerGame.dogArray,counterClick:e.ReducerGame.counterClick,level:e.ReducerGame.level}}),{plusClickAction:f,randomShow:function(e){return{type:"RANDOM_SHOW",randomNumber:e}},finish:function(){return{type:"FINISH"}},levelPlus:function(){return{type:"LEVEL_PLUS"}},levelDown:function(){return{type:"LEVEL_DOWN"}}})(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(5),L=Object(T.b)({ReducerGame:v}),D=Object(T.c)(L);i.a.render(r.a.createElement(m.a,{store:D},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.645e98a2.chunk.js.map