(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(t,e,a){t.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__xL0QY",image:"ImageGalleryItem_image__2PQ_z"}},13:function(t,e,a){t.exports={buttonBox:"Button_buttonBox__3yQ2X",Button:"Button_Button__3tSWf"}},27:function(t,e,a){t.exports={ImageGallery:"ImageGallery_ImageGallery__1shV4"}},28:function(t,e,a){t.exports={Notify:"Notify_Notify__wCWBu"}},29:function(t,e,a){t.exports={App:"App_App__27-DI"}},35:function(t,e,a){},76:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(1),o=a.n(r),c=a(23),s=a.n(c),i=(a(35),a(14)),u=a(4),l=a(5),h=a(7),m=a(6),g=a(24),p=a.n(g),b=a(11),d=a.n(b),f=a(25),j=a(26),y=a.n(j),v=function(){var t=Object(f.a)(d.a.mark((function t(e,a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=").concat("19032904-74cd0d38bd211043e9b213612","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),_=a(8),O=a.n(_),x=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={searchQuery:""},t.changeInput=function(e){t.setState({searchQuery:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.searchQuery)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state.searchQuery;return Object(n.jsx)("header",{className:O.a.Searchbar,children:Object(n.jsxs)("form",{className:O.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:O.a.button,children:Object(n.jsx)("span",{className:O.a.label,children:"Search"})}),Object(n.jsx)("input",{className:O.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"\u041f\u043e\u0441\u043a \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0438 \u0444\u043e\u0442\u043e",value:t,onChange:this.changeInput})]})})}}]),a}(r.Component),S=a(12),k=a.n(S),w=function(t){var e=t.image;return Object(n.jsx)("li",{className:k.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:e.webformatURL,alt:e.tags,"data-imageurl":e.largeImageURL,className:k.a.image})})},I=a(27),N=a.n(I),B=function(t){var e=t.images,a=t.toggleModal;return Object(n.jsx)("ul",{className:N.a.ImageGallery,onClick:function(t){t.target!==t.currentTarget&&a({status:!0,src:t.target.dataset.imageurl,alt:t.target.alt})},children:e.map((function(t){return Object(n.jsx)(w,{image:t},t.id)}))})},M=a(28),C=a.n(M),Q=function(t){var e=t.message;return Object(n.jsx)("p",{className:C.a.Notify,children:e})},L=a(9),A=a.n(L),E=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).checkEvent=function(e){"Escape"!==e.key&&e.target!==e.currentTarget||t.props.toggleModal({status:!1})},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.checkEvent)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.checkEvent)}},{key:"render",value:function(){var t=this.props,e=t.src,a=t.alt;return Object(n.jsx)("div",{className:A.a.Overlay,onClick:this.checkEvent,children:Object(n.jsx)("div",{className:A.a.Modal,children:Object(n.jsx)("img",{className:A.a.img,src:e,alt:a})})})}}]),a}(r.Component),G=a(13),D=a.n(G),H=function(t){var e=t.onClick;return Object(n.jsx)("div",{className:D.a.buttonBox,children:Object(n.jsx)("button",{type:"button",className:D.a.Button,onClick:e,children:"Load more"})})},P=a(29),T=a.n(P),U=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={images:[],totalHits:0,searchQuery:"",page:1,isLoading:!1,error:null,emptyNotify:!1,showPopup:!1,showButton:!1,targetImage:null},t.onSubmit=function(e){t.setState({searchQuery:e})},t.onButtonMoreClick=function(){t.setState((function(t){return{page:t.page+1}}))},t.checkButtonAndNotify=function(){var e=t.state,a=e.totalHits;a>e.images.length?t.setState({showButton:!0}):t.setState({showButton:!1}),a?t.setState({emptyNotify:!1}):t.setState({emptyNotify:!0})},t.toggleModal=function(e){var a=e.status,n=e.src,r=e.alt;a?t.setState({targetImage:{src:n,alt:r},showPopup:!0}):t.setState({targetImage:null,showPopup:!1})},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.searchImages()}},{key:"componentDidUpdate",value:function(t,e){e.searchQuery!==this.state.searchQuery&&(this.setState({page:1}),this.searchImages()),e.page!==this.state.page&&this.searchImages()}},{key:"searchImages",value:function(){var t=this,e=this.state,a=e.searchQuery,n=e.page;this.setState({isLoading:!0}),v(a,n).then((function(e){1===n?t.setState({totalHits:e.totalHits,images:e.hits}):(t.setState((function(t){return{images:[].concat(Object(i.a)(t.images),Object(i.a)(e.hits))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})),t.checkButtonAndNotify()})).catch((function(e){return t.setState({error:e})})).finally((function(){return t.setState({isLoading:!1})}))}},{key:"render",value:function(){var t=this.state,e=t.images,a=t.isLoading,r=t.error,o=t.emptyNotify,c=t.showPopup,s=t.targetImage,i=t.showButton;return Object(n.jsxs)("div",{className:T.a.App,children:[Object(n.jsx)(x,{onSubmit:this.onSubmit}),r&&Object(n.jsx)(Q,{message:"\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(r.message)}),a&&Object(n.jsx)(p.a,{type:"BallTriangle",color:"#e91616",height:80,width:80}),e.length>0&&Object(n.jsx)(B,{images:e,toggleModal:this.toggleModal}),o&&Object(n.jsx)(Q,{message:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0435\u0449\u0435 \u0440\u0430\u0437."}),c&&Object(n.jsx)(E,{src:s.src,alt:s.alt,toggleModal:this.toggleModal}),i&&Object(n.jsx)(H,{onClick:this.onButtonMoreClick})]})}}]),a}(r.Component);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root"))},8:function(t,e,a){t.exports={Searchbar:"Searchbar_Searchbar__erTUV",SearchForm:"Searchbar_SearchForm__3jqMC",button:"Searchbar_button__1Zwva",label:"Searchbar_label__2k_rC",input:"Searchbar_input__2J61u"}},9:function(t,e,a){t.exports={Overlay:"Modal_Overlay__x45tN",Modal:"Modal_Modal__xk9QW"}}},[[76,1,2]]]);
//# sourceMappingURL=main.d02ba143.chunk.js.map