(this.webpackJsonpinfernalconverter=this.webpackJsonpinfernalconverter||[]).push([[0],{84:function(e,t,r){},85:function(e,t,r){},91:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(42),o=r.n(i),s=(r(83),r(84),r(67)),l=r(43),d=r(44),c=r(56),f=r(52),p=(r(85),r(101)),u=r(103),h=r(102),k=r(41),g=r(40),b=r.n(g),v=r(59),x=function(e){Object(c.a)(r,e);var t=Object(f.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).reload=Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.reload();case 1:case"end":return e.stop()}}),e)}))),n.removeWindow=function(e){setTimeout((function(){e.parentNode.removeChild(e)}),1500)},n.triggerPrint=function(e){var t=n.props,r=t.onBeforePrint,a=t.onAfterPrint;n.setState({target:e}),n.alertIfIeOrEdge(),r&&r(),setTimeout((function(){e.contentWindow.focus(),e.contentWindow.print(),n.removeWindow(e),a&&a()}),1500)},n.handlePrint=function(){var e=window.navigator.userAgent.indexOf("Trident/7.0")>-1,t=window.navigator.userAgent.indexOf("Edge")>-1,r=window.navigator.userAgent.indexOf("Spartan")>-1,a=window.navigator.userAgent.indexOf("Trident")>-1;if(window.navigator.userAgent.indexOf("Mobile")>-1&&alert("Vi kan se at du ser dit karakterark p\xe5 en mobil enhed. Du kan kun se dine karakterer, ikke udskrive. Hvis du vil udskrive et officielt karakterark skal du g\xf8re det fra en enhed med en st\xf8rre sk\xe6rm s\xe5som en Pc eller Mac"),Screen.width<600&&alert("Vi kan se at du ser dit karakterark p\xe5 en mobil enhed. Du kan kun se dine karakterer, ikke udskrive. Hvis du vil udskrive et officielt karakterark skal du g\xf8re det fra en enhed med en st\xf8rre sk\xe6rm s\xe5som en Pc eller Mac"),!0===a&&alert("Internet Explorer kan ikke printe karakterark. Brug f.eks. Chrome, Firefox, Opera eller Safari istedet for."),!0===e&&alert("Internet Explorer kan ikke printe karakterark. Brug f.eks. Chrome, Firefox, Opera eller Safari istedet for."),!0===t&&alert("Edge og Internet Explorer kan ikke printe karakterark med de n\xf8dvendige indstillinger. Brug f.eks. Chrome, Firefox, Opera eller Safari istedet for."),!0===r)alert("Edge og Internet Explorer kan ikke printe karakterark med de n\xf8dvendige indstillinger. Brug f.eks. Chrome, Firefox, Opera eller Safari istedet for.");else{var o=n.props,s=o.bodyClass,l=o.content,d=o.copyStyles,c=o.pageStyle,f=l();if(void 0===f)return void console.error("Refs are not available for stateless components. For 'react-to-print' to work only Class based components can be printed");var p=document.createElement("iframe");n.setState({isLoading:!1}),p.style.position="absolute",p.style.top="-1000px",p.style.left="-1000px";var u=Object(i.findDOMNode)(f),h=document.querySelectorAll('link[rel="stylesheet"]');n.linkTotal=h.length||0,n.linksLoaded=[],n.linksErrored=[];var g=function(e,t){t?n.linksLoaded.push(e):(console.error("'react-to-print' was unable to load a link. It may be invalid. 'react-to-print' will continue attempting to print the page. The link the errored was:",e),n.linksErrored.push(e)),n.linksLoaded.length+n.linksErrored.length===n.linkTotal&&n.triggerPrint(p)};p.onload=function(){window.navigator&&window.navigator.userAgent.indexOf("Trident")>-1&&(p.onload=null);var e=p.contentDocument||p.contentWindow.document,t=Object(k.a)(u.querySelectorAll("canvas"));e.open(),e.write(u.outerHTML),e.close();var r=void 0===c?"@page { size: A4;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; }  .printSheet { overflow: none;  padding-bottom: 5cm !important;  -webkit-print-color-adjust :exact ; color-adjust: exact ; }.footerInSheet {display: inline;  clear: both;  position: absolute; top: 26cm; left: 1.5cm;flex-direction: row;color: #0B333C;}  thead { display: table-row-group; } .changeColor{color-adjust: exact;-webkit-print-color-adjust :exact } .changeColorIfEmptyGrade{color-adjust: exact ;-webkit-print-color-adjust :exact } tr { page-break-inside: avoid;line-height:1 ;text-align: left}  .footerafter {   position: relative; bottom: 30px; right: 30px; display: flex; justify-content: flex-start;  /* Update this */  } .page-break { page-break-before: always;}.page-break2 { page-break-after: always; }.page-break3 { page-break-after: auto;height:20px;} .page-break4 { page-break-before: always;}.noSeparatePage\t{ display: none !important;  }.footer_tbody{white-space: pre;  line-height:1; overflow: visible;  text-overflow: ellipsis;  word-wrap: break-word; }.footerTable{white-space: pre; line-height:1; overflow: visible;  text-overflow: ellipsis; word-wrap: break-word; }table{  text-size-adjust: auto;line-height: 1.2;} tr{ line-height: 1.3;padding: 2px;}}":c,a=e.createElement("style");a.appendChild(e.createTextNode(r)),e.head.appendChild(a),s.length&&e.body.classList.add(s);var i=e.querySelectorAll("canvas");if(Object(k.a)(i).forEach((function(e,r){e.getContext("2d").drawImage(t[r],0,0)})),!1!==d){var o=document.querySelectorAll('style, link[rel="stylesheet"]');Object(k.a)(o).forEach((function(t,r){if("STYLE"===t.tagName){var n=e.createElement(t.tagName);if(t.sheet){for(var a="",i=0;i<t.sheet.cssRules.length;i++)"string"===typeof t.sheet.cssRules[i].cssText&&(a+="".concat(t.sheet.cssRules[i].cssText,"\r\n"));n.setAttribute("id","react-to-print-".concat(r)),n.appendChild(e.createTextNode(a)),e.head.appendChild(n)}}else{var o=Object(k.a)(t.attributes),s=o.filter((function(e){return"href"===e.nodeName}));if(!!s.length&&!!s[0].nodeValue){var l=e.createElement(t.tagName);o.forEach((function(e){l.setAttribute(e.nodeName,e.nodeValue)})),l.onload=g.bind(null,l,!0),l.onerror=g.bind(null,l,!1),e.head.appendChild(l)}else console.warn("'react-to-print' encountered a <link> tag with an empty 'href' attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:",t),g(t,!0)}}))}0!==n.linkTotal&&!1!==d||n.triggerPrint(p)},document.body.appendChild(p)}},n.setRef=function(e){n.triggerRef=e},n.state={data:e.data},n}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"alertIfIeOrEdge",value:function(){var e=window.navigator.userAgent.indexOf("Trident")>-1,t=window.navigator.userAgent.indexOf("Trident/7.0")>-1,r=window.navigator.userAgent.indexOf("Edge")>-1,n=window.navigator.userAgent.indexOf("Spartan")>-1;!0===e&&alert("Internet Explorer kan ikke printe karakterark. Brug f.eks. Chrome, Firefox, Opera eller Safari istedet for."),!0===t&&alert("Internet Explorer kan ikke printe karakterark. Brug f.eks. Chrome, Firefox, Opera eller Safari istedet for."),!0===r&&alert("Edge og Internet Explorer kan ikke printe karakterark med de n\xf8dvendige indstillinger. Brug f.eks. Chrome, Firefox, Opera eller Safari istedet for."),!0===n&&alert("Edge og Internet Explorer kan ikke printe karakterark med de n\xf8dvendige indstillinger. Brug f.eks. Chrome, Firefox, Opera eller Safari istedet for.")}},{key:"render",value:function(){var e=this.props.trigger;return a.a.cloneElement(e(),{onClick:this.handlePrint,ref:this.setRef})}}]),r}(a.a.Component);x.defaultProps={bodyClass:"",copyStyles:!0,onAfterPrint:void 0,onBeforePrint:void 0,pageStyle:void 0};var m=x,j=r(1),w=function(e){Object(c.a)(r,e);var t=Object(f.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(s.a)({},e.target.id,e.target.value))},n.state={written:"",header:""},n}return Object(d.a)(r,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h2",{className:"headLine",children:"Infernal language converter."}),Object(j.jsx)("div",{className:"font-face-in headLine",children:"Infernal language converter."}),Object(j.jsx)("hr",{})]}),Object(j.jsx)(p.a,{children:Object(j.jsx)(m,{trigger:function(){return Object(j.jsxs)(p.a.Item,{position:"right",bordered:!0,color:"white",children:["Print\xa0 ",Object(j.jsx)(u.a,{color:"grey",name:"print"})]})},content:function(){return e.forwardRef}})}),Object(j.jsx)(h.a,{columns:"16",children:Object(j.jsxs)(h.a.Row,{children:[Object(j.jsx)(h.a.Column,{width:"5",children:Object(j.jsxs)("div",{className:"englishText",children:[Object(j.jsx)("p",{children:"Input header"}),Object(j.jsx)("input",{type:"text",defaultValue:this.state.header,onChange:this.handleChange,id:"header"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"Input text"}),Object(j.jsx)("textarea",{onChange:this.handleChange,defaultValue:this.state.written,id:"written"})]})}),Object(j.jsx)(h.a.Column,{width:"11",children:Object(j.jsx)("div",{className:"hasToLookLikePaper",children:Object(j.jsxs)("div",{ref:function(t){return e.forwardRef=t},children:[Object(j.jsxs)("div",{className:"font-face-in",children:[Object(j.jsx)("h2",{children:this.state.header}),this.state.written]}),Object(j.jsx)("div",{className:"pagebreak",children:Object(j.jsxs)("span",{className:"font-face-normal",children:[Object(j.jsx)("h2",{children:this.state.header}),this.state.written]})})]})})})]})})]})}}]),r}(a.a.Component);r.p,r.p,r.p;o.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.098225c9.chunk.js.map