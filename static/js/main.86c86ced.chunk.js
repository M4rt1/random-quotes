(this["webpackJsonprandom-quotes"]=this["webpackJsonprandom-quotes"]||[]).push([[0],{25:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n.n(s),c=n(9),u=n.n(c),i=(n(25),n(10)),a=n(11),r=n(3),d=n(19),l=n(18),b=n(12),h=(n(28),n(29),n(50)),j=(n(30),n(1)),f=function(e){var t=e.buttonDisplayName,n=e.clickHandler;return Object(j.jsx)("button",{onClick:n,id:"new-quote",children:t})},x=(n(32),function(e){return Object(j.jsxs)(j.Fragment,{children:[e.selectedQuote?Object(j.jsxs)(h.a,{children:[Object(j.jsxs)("p",{id:"text",children:[Object(j.jsx)("i",{class:"fas fa-quote-left"})," ",e.selectedQuote.quote]})," - ",Object(j.jsx)("p",{id:"author",children:e.selectedQuote.author})]}):null,Object(j.jsx)(f,{buttonDisplayName:"Next Quote",clickHandler:e.assignNewQuoteIndex})]})}),O=(n(37),function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("a",{href:'https://twitter.com/intent/tweet?text="'.concat(e.tweet,'"-').concat(e.author,"&hashtag=randomquote"),id:"tweet-quote",target:"_blank",rel:"noreferrer",class:"fab fa-twitter-square"})})}),g=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={quotes:[],selectedQuoteIndex:null},s.componentDidMount=s.componentDidMount.bind(Object(r.a)(s)),s.selectQuoteIndex=s.selectQuoteIndex.bind(Object(r.a)(s)),s.assignNewQuoteIndex=s.assignNewQuoteIndex.bind(Object(r.a)(s)),s}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(e){return e.json()})).then((function(t){return e.setState({quotes:t},e.assignNewQuoteIndex)}))}},{key:"selectedQuote",get:function(){return this.state.quotes.length&&Number.isInteger(this.state.selectedQuoteIndex)?this.state.quotes[this.state.selectedQuoteIndex]:"OOOPS WHERE IS MY LIST"}},{key:"selectQuoteIndex",value:function(){if(this.state.quotes.length)return Object(b.random)(0,this.state.quotes.length-1)}},{key:"assignNewQuoteIndex",value:function(){this.setState({selectedQuoteIndex:this.selectQuoteIndex()})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",id:"quote-box",children:[Object(j.jsx)(x,{selectedQuote:this.selectedQuote,assignNewQuoteIndex:this.assignNewQuoteIndex}),Object(j.jsx)("br",{}),Object(j.jsx)(O,{tweet:this.selectedQuote.quote,author:this.selectedQuote.author})]})}}]),n}(s.Component),Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),s(e),o(e),c(e),u(e)}))};u.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),Q()}},[[38,1,2]]]);
//# sourceMappingURL=main.86c86ced.chunk.js.map