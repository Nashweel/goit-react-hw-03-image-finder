(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},12:function(e,t,a){e.exports={Button:"Button_Button__3R1xi",buttonConteiner:"Button_buttonConteiner__wvJrc"}},23:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__1C-z-"}},26:function(e,t,a){e.exports={spinnerConteiner:"Loader_spinnerConteiner__1wxmh"}},31:function(e,t,a){},32:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(22),c=a.n(o),l=(a(31),a(13)),i=a(4),s=a(5),u=a(7),h=a(6),m=(a(32),a(23)),d=a.n(m),g=a(0),b=function(e){var t=e.url,a=e.alt;return Object(g.jsx)("img",{src:t,alt:a,className:d.a.ImageGalleryItem_image})},p=a(10),j=a.n(p),f=function(e){var t=e.images,a=e.openModal;return Object(g.jsx)("ul",{className:j.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,o=e.largeImageURL;return Object(g.jsx)("li",{className:j.a.ImageGalleryItem,onClick:function(){a(o,r)},children:Object(g.jsx)(b,{url:n,alt:r})},t)}))})},y=a(24),v=a.n(y),O=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,o=e.pageSize,c=void 0===o?12:o;return v.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=").concat("21185221-d49bba1554bfecf624305df2b","&image_type=photo&orientation=horizontal&per_page=").concat(c)).then((function(e){return e.data.hits}))},_=a(8),S=a.n(_),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleNameChange=function(t){e.setState({value:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.value.trim()&&(e.props.changeQuery(e.state.value),e.setState({value:""}))},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:S.a.Searchbar,children:Object(g.jsxs)("form",{className:S.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:S.a.SearchFormButton,children:Object(g.jsx)("span",{className:S.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:S.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,value:this.state.picsName,placeholder:"Search images and photos",onChange:this.handleNameChange})]})})}}]),a}(n.Component),I=a(11),w=a.n(I),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleBackdropClick=function(t){t.currentTarget!==t.target&&"Escape"!==t.code||e.props.closeModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleBackdropClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleBackdropClick)}},{key:"render",value:function(){return Object(g.jsx)("div",{className:w.a.Overlay,onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{className:w.a.Modal,children:this.props.children})})}}]),a}(n.Component),k=a(12),M=a.n(k),B=function(e){var t=e.onClick;return Object(g.jsx)("div",{className:M.a.buttonConteiner,children:Object(g.jsx)("button",{type:"button",className:M.a.Button,onClick:t,children:"Load more"})})},F=a(25),N=a.n(F),L=a(26),G=a.n(L),Q=function(){return Object(g.jsx)("div",{className:G.a.spinnerConteiner,children:Object(g.jsx)(N.a,{type:"Grid",color:"#00BFFF",height:100,width:100})})},A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",currentPage:1,images:[],isLoading:!1,showModal:!1,modalImg:"",modalAlt:"",error:null},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,a=t.currentPage,n={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),O(n).then((function(t){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),currentPage:e.currentPage+1}})),e.scrollWindow()})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.openModal=function(t,a){e.setState((function(e){return{showModal:!e.showModal,modalImg:t,modalAlt:a}}))},e.closeModal=function(){e.setState((function(e){return{showModal:!e.showModal,modalImg:"",modalAlt:""}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"scrollWindow",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.images,n=e.isLoading,r=e.showModal,o=e.modalImg,c=e.modalAlt,l=a.length>0&&!n;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(x,{changeQuery:this.onChangeQuery}),t&&Object(g.jsx)("h1",{style:{color:"#ff0000",textAlign:"center"},children:"Something going wrong"}),Object(g.jsx)(f,{images:a,openModal:this.openModal}),n&&Object(g.jsx)(Q,{}),l&&Object(g.jsx)(B,{onClick:this.fetchImages}),r&&Object(g.jsx)(C,{closeModal:this.closeModal,children:Object(g.jsx)("img",{src:o,alt:c})})]})}}]),a}(n.Component);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}}},[[72,1,2]]]);
//# sourceMappingURL=main.522afcbb.chunk.js.map