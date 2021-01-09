(this["webpackJsonpchess-tactics"]=this["webpackJsonpchess-tactics"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),o=n(15),i=n.n(o),a=(n(23),n(4)),s=n.n(a),u=n(6),l=n(3),f=(n(25),n(16)),d=n.n(f),h=n(26);function v(e){return new h(e).turn()}function b(e,t){var n=new h(e),c=n.move(t);return c?{fullMove:c,fen:n.fen()}:null}function j(e,t,n){if(0===n.length)return null;var c=b(e,t);return c&&c.fullMove.san===n[0]?{fen:c.fen,solution:n.slice(1)}:null}var p=function(e){var t=e.tactic,n=e.onIncorrect,o=e.onCorrect,i=e.onSolve,a=Object(r.useState)(t.fen),s=Object(l.a)(a,2),u=s[0],f=s[1],h=Object(r.useState)(t.solution),p=Object(l.a)(h,2),O=p[0],m=p[1];Object(r.useEffect)((function(){setTimeout((function(){var e=b(t.fen,t.blunderMove);e&&f(e.fen)}),100)}),[t]);return Object(c.jsx)(d.a,{transitionDuration:200,position:u,width:400,orientation:"b"===v(t.fen)?"white":"black",onDrop:function(e){return function(e){var t=j(u,e,O);if(t)if(f(t.fen),m(t.solution),t.solution.length>0){o();var c=j(t.fen,t.solution[0],t.solution);c&&(f(c.fen),m(c.solution))}else i();else n()}({from:e.sourceSquare,to:e.targetSquare,promotion:"q"})}})},O=n(17),m=n.n(O),x="https://cors-everywhere-proxy.herokuapp.com/https://chessblunders.org/api/";function g(){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("".concat(x,"/blunder/get"),{type:"explore"});case 2:return t=e.sent,n=t.data.data,e.abrupt("return",{id:n.id,fen:n.fenBefore,blunderMove:n.blunderMove,solution:n.forcedLine});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)("sideToPlay"),a=Object(l.a)(i,2),f=a[0],d=a[1],h=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g();case 3:t=e.sent,o((function(e){return e.concat(t)})),d("sideToPlay"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error loading tactic",{error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();if(Object(r.useEffect)((function(){h(),h()}),[]),0===n.length)return Object(c.jsx)("div",{className:"overlay-loading",children:"Loading..."});var b=n[0],j=v(b.fen);return Object(c.jsxs)("div",{className:"flex-center",children:[Object(c.jsx)("h1",{children:"Tactics Trainer"}),Object(c.jsx)(p,{tactic:b,onCorrect:function(){d("correct"),setTimeout((function(){return d("sideToPlay")}),1e3)},onIncorrect:function(){d("incorrect"),setTimeout((function(){return d("sideToPlay")}),1e3)},onSolve:function(){d("solved"),o((function(e){return e.slice(1)})),h()}},b.id),"sideToPlay"===f&&Object(c.jsxs)("div",{className:"tactic-hint",children:["b"===j?"White":"Black"," to move"]}),"correct"===f&&Object(c.jsx)("div",{className:"tactic-hint tactic-hint-success",children:"Correct!"}),"incorrect"===f&&Object(c.jsx)("div",{className:"tactic-hint tactic-hint-error",children:"Incorrect!"}),"solved"===f&&Object(c.jsx)("div",{className:"tactic-hint tactic-hint-success",children:"Solved!"})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(c.jsx)(T,{}),document.getElementById("root")),w()}},[[47,1,2]]]);
//# sourceMappingURL=main.6dca1487.chunk.js.map