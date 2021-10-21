(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),s=a.n(c),o=(a(30),a(4)),i=a(5),l=a(7),u=a(6),h=(a(31),a(8),a(0)),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:""},e.handleSearchOnChange=function(t){e.setState({searchValue:t.target.value})},e.handleSearchSubmit=function(t){t.preventDefault(),console.log("before fetch",e.state.searchValue),e.props.onSubmit(e.state.searchValue),e.setState({searchValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSearchSubmit,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,value:this.state.searchValue,placeholder:"Search images and photos",onChange:this.handleSearchOnChange})]})})}}]),a}(n.Component),g=p,d=a(15),b=a(13),j=a.n(b),f=a(24),m=a(14),O=a.n(m),y=function(){function e(t,a){Object(o.a)(this,e),this.BASE_URL=a,this.API_KEY=t,this._searchQuery="",this._page=1,this.perPage=12,this.imageType="photo",this.imageOrient="horizontal"}return Object(i.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"resetPage",value:function(){return this._page=1}},{key:"searchPhotos",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O.a.defaults.baseURL=this.BASE_URL,console.log("searchQ:",this.searchQuery,"page:",this.page),t="?q=".concat(this.searchQuery,"&page=").concat(this.page,"&key=").concat(this.API_KEY,"&image_type=").concat(this.imageType,"&orientation=").concat(this.imageOrient,"&per_page=").concat(this.perPage),e.prev=3,e.next=6,O.a.get(t);case 6:return a=e.sent,n=a.data.hits,e.abrupt("return",n);case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",e.t0.message);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),v=function(e){var t=e.pictUrl,a=e.photographer,n=e.onClick;return Object(h.jsx)("li",{className:"ImageGalleryItem",children:Object(h.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image",onClick:n})})};function S(e){var t=e.onClick;return e.results.length>0&&Object(h.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}a(52);var k=a(25),w=a.n(k),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsx)(w.a,{type:"Bars",color:"#00BFFF",height:80,width:80,timeout:3e3})}}]),a}(n.Component),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleEscape=function(t){"Escape"===t.code&&e.props.onClick()},e.handleClose=function(t){t.currentTarget===t.target&&e.props.onClick()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscape)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscape)}},{key:"render",value:function(){return Object(c.createPortal)(Object(h.jsx)("div",{className:"Overlay",onClick:this.handleClose,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:this.props.largePic,alt:""})})}),document.getElementById("modalRoot"))}}]),a}(n.Component),V=new y("23235889-ad2e782c3a775466fc04cd861","https://pixabay.com/api/"),E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchResults:[],showModal:!1,status:"init",bigUrlState:""},e.handleClick=function(){V.page=1,console.log("page",V.page),V.searchPhotos().then((function(t){e.setState((function(e){return{searchResults:[].concat(Object(d.a)(e.searchResults),Object(d.a)(t)),status:"success"}})),e.scrolling()})).catch((function(t){console.log(t),e.setState({status:"error"})}))},e.scrolling=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.closeModal=function(){e.setState({showModal:!1,bigUrlState:""})},e.openModal=function(t){e.setState({showModal:!0,bigUrlState:t})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.searchValue!==this.props.searchValue&&(console.log("get fetch"),this.setState({status:"pending"}),V.resetPage(),V.searchQuery=this.props.searchValue,V.searchPhotos().then((function(e){console.log(e),a.setState({searchResults:e,status:"success"}),a.scrolling()})).catch((function(e){console.log(e),a.setState({status:"error"})})))}},{key:"render",value:function(){var e=this.state,t=e.searchResults,a=e.status,n=e.showModal,r=this.closeModal,c=this.handleClick,s=this.openModal;return"init"===a?null:"pending"===a?Object(h.jsx)(x,{}):"success"===a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("ul",{className:"ImageGallery",children:[t.length>0&&t.map((function(e){return Object(h.jsx)(v,{onClick:s,pictUrl:e.webformatURL,photographer:e.user},e.id)})),n&&Object(h.jsx)(C,{onClick:r,largePic:t.largeImageURL})]}),Object(h.jsx)(S,{type:"button",onClick:c,results:t})]}):"error"===a&&0===t.length?alert("Sorry, we have not find such word... Lets try again!"):void 0}}]),a}(n.Component),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:"",page:1},e.getSearchValue=function(t){return e.setState({searchValue:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.getSearchValue,t=this.state,a=t.searchValue,n=t.page;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(g,{onSubmit:e}),Object(h.jsx)(E,{searchValue:a,page:n})]})}}]),a}(n.Component),N=_;s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))},8:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.4be51788.chunk.js.map