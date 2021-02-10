(this["webpackJsonpquizz-react"]=this["webpackJsonpquizz-react"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(27)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t){Array.prototype.remove=function(){for(var e,t,n=arguments,r=n.length;r&&this.length;)for(e=n[--r];-1!==(t=this.indexOf(e));)this.splice(t,1);return this}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(4),c=n.n(s),o=(n(15),n(16),n(7)),i=n(5),l=n(6),u=n(9),h=n(8),w=(n(17),function(e){return a.a.createElement("h1",null,e.question)}),d=(n(18),n(2)),A=n.n(d),m=function(e){console.log("AnswerState:"+e.answerState);var t=Object.keys(e.answer).map((function(t,n){return a.a.createElement("li",{className:0==e.answerState?e.checkList(t)?"check":"":e.checkList(t)?e.verifyAnswer(t)?"correct":"incorrect":"",onClick:function(){return e.pushAnswer(t)},key:t},a.a.createElement(A.a.Context,{input:"ascii",onLoad:function(){return console.log("Loaded MathJax script!")},onError:function(e,t){console.warn(t),console.log("Encountered a MathJax error, re-attempting a typeset!"),e.Hub.Queue(e.Hub.Typeset())},script:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML",options:{asciimath2jax:{useMathMLspacing:!0,delimiters:[["$$","$$"]],preview:"none"}}},a.a.createElement(A.a.Text,{text:e.answer[t]})))}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{disabled:0!=e.answerState,className:"Answers"},t),a.a.createElement("div",null,1==e.answerState?"Correct Answer!":-1==e.answerState?"Incorrect Answer!":-2==e.answerState?"Missing Answer":""))},p=(n(25),n(26),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={questions:{1:"What is the phenomenon when the 50-day SMA crosses above the 200-day SMA called?",2:"What is the formula for calculating the EMA?",3:"Select all correct statements. "},answers:{1:{1:"a.  Death cross",2:"b.  Death crossover",3:"c.  Golden cross",4:"d.  Golden crossover"},2:{1:"a.    $$(A_1+A_2+\u22ef+A_n)/n$$, with $$A_n$$ being the price of an asset at period n, and n being the number of periods.",2:"b.    $$(\u3016(A\u3017_n\xd7W_1)+(A_(n-1)\xd7W_2)+\u22ef+(A_1\xd7W_n))/(\u2211W)$$, with $$A_n$$ being the price of an asset at period n, n being the most recent period, and W being the assigned weight for each period such that the most recent period has the highest weight.",3:"c.    $$A_n\xd7W+\u3016EMA\u3017_(n-1)\xd7(1-W)$$, with $$A_n$$ being the price of an asset at period n, n being the current period, and W being the smoothing multiplier."},3:{1:"a.SMA puts more weight to more current data, whereas EMA weighs every data point equally.",2:"b.EMA reacts to changes in market condition more quickly than SMA.",3:"c.EMA is more prone to generating false signal than SMA.",4:"d.SMA is more suitable for intraday trading than EMA. ",5:"e.Both SMA and EMA works well in sideway markets. ",6:"f.Both SMA and EMA are lagging indicators. "}},correctAnswers:{1:["3"],2:["3"],3:["2","3","6"]},correctAnswer:0,clickedAnswer:[],step:1,score:0,answerState:0},e.pushAnswer=function(t){if(e.state.clickedAnswer.includes(t)){var n=e.state.clickedAnswer.remove(t);e.setState({clickedAnswer:n})}else e.setState({clickedAnswer:[].concat(Object(o.a)(e.state.clickedAnswer),[t])})},e.checkList=function(t){return!!e.state.clickedAnswer.includes(t)},e.verifyAnswer=function(t){return!!e.state.correctAnswers[e.state.step].includes(t)},e.checkAnswer=function(t){var n=e.state,r=n.correctAnswers,a=n.step,s=n.score,c=n.answerState,o=1,i=1;console.log(t[0]),console.log(r[a].includes(t[0]));var l=t.length;if(l>0&&l!=r[a].length)o=0,i=-2;else if(0===l)o=0,i=-1;else for(var u=0;u<l;u++)if(!r[a].includes(t[u])){o=0,i=-1;break}e.setState({score:s+o,correctAnswer:r[a],answerState:c+i},(function(){return console.log(e.state.answerState)}))},e.nextStep=function(t){e.setState({answerState:0,step:t+1,correctAnswer:0,clickedAnswer:[]})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.questions,r=t.answers,s=t.correctAnswer,c=t.clickedAnswer,o=t.step,i=t.score,l=t.answerState;return a.a.createElement("div",{className:"Content"},o<=Object.keys(n).length?a.a.createElement(a.a.Fragment,null,a.a.createElement(w,{question:n[o]}),a.a.createElement(m,{answerState:l,answer:r[o],step:o,pushAnswer:this.pushAnswer,checkAnswer:this.checkAnswer,checkList:this.checkList,correctAnswer:s,clickedAnswer:c,verifyAnswer:this.verifyAnswer}),a.a.createElement("button",{className:"CheckAnswer",onClick:function(){return e.checkAnswer(c)}}," Check Result"),a.a.createElement("button",{className:"NextStep",disabled:0==l,onClick:function(){return e.nextStep(o)}},"Next")):a.a.createElement("div",{className:"finalPage"},a.a.createElement("h1",null,"You have completed the quiz!"),a.a.createElement("p",null,"Your score is: ",i," of ",Object.keys(n).length),a.a.createElement("p",null,"Thank you!")))}}]),n}(r.Component));var f=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.0001191d.chunk.js.map