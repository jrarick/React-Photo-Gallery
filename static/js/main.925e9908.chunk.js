(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(63)},35:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=(a(35),a(6)),s=a(7),i=a(9),u=a(8),h=a(10),m=a(12),p=a(11),d=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t="/search/"+a.userInput.value;a.props.history.push(t)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",name:"search",placeholder:"Search",ref:function(t){return e.userInput=t},required:!0}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))}}]),t}(r.a.Component),f=Object(p.e)(d),E=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/search/cats"},"Cats")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/search/dogs"},"Dogs")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/search/birds"},"Birds"))))}}]),t}(r.a.Component),b=function(e){function t(e){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.loadedPhotos.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("img",{src:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),alt:e.title}))});return r.a.createElement("div",{className:"photo-container"},r.a.createElement("ul",null,e))}}]),t}(r.a.Component);var v=function(){return r.a.createElement("li",{className:"not-found"},r.a.createElement("h3",null,"No Results Found"),r.a.createElement("p",null,"You search did not return any results. Please try again."))},j=a(29),g=a.n(j),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={loadedPhotos:[],loading:!0},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.performSearch()}},{key:"performSearch",value:function(){var e=this;g.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("28d5e6212417ba0d75d27423689fa833","&tags=").concat(this.props.userInput,"&per_page=16&format=json&nojsoncallback=1")).then(function(t){e.setState({loadedPhotos:t.data.photos.photo,loading:!1})}).catch(function(e){console.log("Could not fetch data",e)})}},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,"Results"),r.a.createElement("p",null,"Loading, please wait")):0===this.state.loadedPhotos.length?r.a.createElement(v,null):r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,"Results"),r.a.createElement("ul",null,r.a.createElement(b,{loadedPhotos:this.state.loadedPhotos})))}},{key:"componentDidUpdate",value:function(e){this.props.userInput!==e.userInput&&(this.setState({loadedPhotos:[],loading:!0}),this.performSearch(this.props.userInput))}}]),t}(r.a.Component);var y=function(){return r.a.createElement("li",{className:"not-found"},r.a.createElement("h3",null,"Error"),r.a.createElement("p",null,"The page you are looking for does not exist!"))},k=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{basename:"/react-flickr-gallery"},r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{path:"/",component:f}),r.a.createElement(p.a,{path:"/",component:E}),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/search/:userInput",render:function(e){return r.a.createElement(O,{userInput:e.match.params.userInput})}}),r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(O,{userInput:"treehouse"})}}),r.a.createElement(p.a,{component:y}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.925e9908.chunk.js.map