(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{160:function(t,e,i){var s=i(163);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(29).default)("38169764",s,!0,{})},161:function(t,e,i){var s=i(165);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(29).default)("798c3abc",s,!0,{})},162:function(t,e,i){"use strict";var s=i(160);i.n(s).a},163:function(t,e,i){(t.exports=i(28)(!1)).push([t.i,".footer--buttons{flex-direction:column}.footer--buttons a{margin:5px}",""])},164:function(t,e,i){"use strict";var s=i(161);i.n(s).a},165:function(t,e,i){var s=i(89);(t.exports=i(28)(!1)).push([t.i,".is-centered{margin:auto}.is-vertical-centered-content{display:flex;align-items:center}.is-max-180{max-width:180px}.is-transparent{background-color:transparent!important}.has-margin-4{margin:4px}.hero--parallax{background-image:url("+s(i(166))+");background-size:cover;background-position:50%;background-attachment:fixed}nav{transition-duration:1s}.footer__link{font-weight:700}.footer__link:hover{color:#fff}",""])},166:function(t,e,i){t.exports=i.p+"img/43bba30.jpg"},167:function(t,e,i){"use strict";i.r(e);var s={props:{title:{type:String,required:!0},tags:{type:Array,required:!0},live:{type:Object,required:!1},code:{type:Object,required:!1}}},n=(i(162),i(15)),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column is-10 is-offset-1"},[i("div",{staticClass:"card"},[i("header",{staticClass:"card-header"},[i("p",{staticClass:"card-header-title"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),i("div",{staticClass:"card-content"},[i("div",{staticClass:"content"},[t._t("default")],2)]),t._v(" "),i("footer",{staticClass:"card-footer"},[i("div",{staticClass:"card-footer-item"},[i("div",{staticClass:"tags"},t._l(t.tags,function(e){return i("span",{key:e,staticClass:"tag is-medium is-light"},[t._v(t._s(e))])}),0)]),t._v(" "),i("div",{staticClass:"card-footer-item footer--buttons"},[t.code?i("a",{staticClass:"button is-info",staticStyle:{display:"block"},attrs:{target:"blank",href:t.code.url}},[t._v("\n          "+t._s(t.code.text)+"\n        ")]):t._e(),t._v(" "),t.live?i("a",{staticClass:"button is-info",attrs:{href:t.live.url,target:"blank"}},[t._v("\n          Live Website\n        ")]):t._e()])])])])},[],!1,null,null,null).exports,o={props:{title:{type:String,required:!0}}},r=Object(n.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h2",{staticClass:"title has-text-centered is-size-2"},[this._v("\n    "+this._s(this.title)+"\n  ")]),this._v(" "),this._t("default")],2)},[],!1,null,null,null).exports,l={props:{list:{type:Array,required:!0},title:{type:String,required:!0}}},c={name:"HomePage",components:{Card:a,Content:r,ListBox:Object(n.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child box has-text-centered"},[i("p",{staticClass:"title is-size-4"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"content"},t._l(t.list,function(e){return i("p",{key:e},[t._v(t._s(e))])}),0)])])},[],!1,null,null,null).exports},data:function(){return{scrollPosition:null,topPosition:!0,menuActive:!1,content:{skills:{id:"skills",title:"Kenntnisse",text:"Seit dem Beginn meiner Frontend-Karriere Anfang 2015 hatte ich die Möglichkeit, mich neben HTML, CSS und Javascript auch mit modernen Libraries, Frameworks und anderen Technologien vertraut machen.",lists:[{title:"Sprachen",items:["Javascript","Sass","CSS3","HTML5"]},{title:"Frameworks und Libraries",items:["Vue.js","Nuxt.js","React.js","Next.js","jQuery"]},{title:"Andere Tools",items:["Cockpit CMS","Contao CMS","Jira","npm/Yarn","Sourcetree","Node.js"]}]},portfolio:{id:"portfolio",title:"Portfolio",text:"In den vergangenen Jahren konnte ich an vielen spannenden Projekten für namenhafte Kunden wie Volkswagen mitarbeiten. Da ein Großteil meiner Arbeit der Geheimhaltung unterliegt, habe ich mein Portfolio mit Projekten und Basteleien aus meiner Freizeit erweitert.",cards:[{id:1,title:"Link Homepage",text:"Das neue Design der firmeneigenen Website haben wir im Sommer 2018 mit neuesten Technologien umgesetzt.",tags:["Vue.js","Nuxt.js","Sass","Cockpit"],live:{text:"link-innovation.de",url:"https://link-innovation.de"}},{id:2,title:"Portfolio Website 2019",text:"Mein jüngstes Projekt ist die Seite, die Sie sich gerade ansehen. Ich habe sie mit Nuxt.js und dem CSS Framework Bulma entwickelt und mit dem generate Befehl von Nuxt als statische Seite exportiert.",tags:["Vue.js","Nuxt.js","Bulma"],code:{text:"Github Repo",url:"https://github.com/verlevelt/portfolio-2019"}},{id:3,title:"Taschenrechner",text:"Ein einfacher Taschenrechner, gebaut mit Vue.js.",tags:["Vue.js","Sass"],code:{text:"Github Repo",url:"https://github.com/verlevelt/Calculator-in-Vue.js"}},{id:4,title:"Twitch-App",text:"Eine App, die anzeigt, welche Twitch-Streamer aus einer Liste gerade online sind. Entwickelt in Codepen.",tags:["jQuery"],code:{text:"Codepen Pen",url:"https://codepen.io/verlevelt/pen/yvVNgR"}}]},about:{id:"about",title:"Über mich",texts:["Hi, ich bin Christin, eine Frontend-Entwicklerin in  Hannover. Seit 2015 erstelle ich responsive Webanwendungen und bin immer auf der Suche nach neuen Herausforderungen und spannenden Technologien.","Meine Frontend-Reise begann mit einem Nebenjob bei der Webagentur business2internet in Greifswald. Von 2017 bis 2019 war ich als Frontend-Entwicklerin bei Link Innovation am Standort Hannover tätig.","Seit Sommer 2019 gehöre ich zum Team der Digitalagentur Neoskop."]},contact:{id:"contact",title:"Kontakt",github:"https://github.com/verlevelt",xing:"https://www.xing.com/profile/Christin_Bartz3/"},footer:{id:"footer",buttons:[{icon:"fab fa-github",color:"link",link:"https://github.com/verlevelt"},{icon:"fab fa-xing",color:"success",link:"https://www.xing.com/profile/Christin_Bartz3/"}]}}}},methods:{anchor:function(t){var e=this.$refs[t].offsetTop-52;window.scrollTo({left:0,top:e,behavior:"smooth"})},scrollToTop:function(){window.scrollTo({left:0,top:0,behavior:"smooth"})},updateScroll:function(){this.scrollPosition=window.scrollY,0===window.scrollY?this.topPosition=!0:this.topPosition=!1},toggleMenu:function(){this.menuActive=!this.menuActive}},mounted:function(){window.addEventListener("scroll",this.updateScroll)}},u=(i(164),Object(n.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{class:["navbar","is-black","is-fixed-top",t.topPosition?"is-transparent":""],attrs:{role:"navigation","aria-label":"main navigation"}},[i("div",{staticClass:"navbar-brand"},[i("a",{staticClass:"navbar-item is-size-5-desktop",on:{click:function(e){t.anchor("hero")}}},[t._m(0)]),t._v(" "),i("a",{class:["navbar-burger","burger",t.menuActive?"is-active":""],attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.toggleMenu()}}},[i("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),i("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),i("span",{attrs:{"aria-hidden":"true"}})])]),t._v(" "),i("div",{class:["navbar-menu",t.menuActive?"is-active":""]},[i("div",{staticClass:"navbar-end"},t._l(t.content,function(e){return i("a",{key:e.id+Math.random(),staticClass:"navbar-item has-text-centered",on:{click:function(i){t.anchor(e.id)}}},[t._v("\n          "+t._s(e.title)+"\n        ")])}),0)])]),t._v(" "),i("section",{ref:"hero",staticClass:"hero hero--parallax is-dark is-fullheight"},[t._m(1),t._v(" "),i("div",{staticClass:"hero-foot has-text-centered"},[i("a",{on:{click:function(e){t.anchor("skills")}}},[i("i",{staticClass:"has-text-info fas fa-angle-down is-size-1"})])])]),t._v(" "),i("section",{ref:t.content.skills.id,staticClass:"section is-medium has-background-light"},[i("Content",{attrs:{title:t.content.skills.title}},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-6 is-offset-3"},[i("article",{staticClass:"has-text-centered"},[i("p",[t._v(t._s(t.content.skills.text))])])])]),t._v(" "),i("div",{staticClass:"tile is-ancestor"},t._l(t.content.skills.lists,function(t){return i("ListBox",{key:t+Math.random(),attrs:{list:t.items,title:t.title}})}),1)])],1),t._v(" "),i("section",{ref:t.content.portfolio.id,staticClass:"section is-medium",attrs:{id:"portfolio"}},[i("Content",{attrs:{title:t.content.portfolio.title}},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-6 is-offset-3"},[i("article",{staticClass:"has-text-centered"},[i("p",[t._v(t._s(t.content.portfolio.text))])])])]),t._v(" "),t._l(t.content.portfolio.cards,function(e){return i("Card",{key:e.title+Math.random(),attrs:{title:e.title,tags:e.tags,live:e.live,code:e.code}},[t._v("\n        "+t._s(e.text)+"\n      ")])})],2)],1),t._v(" "),i("section",{ref:"about",staticClass:"section is-medium has-background-light",attrs:{id:"about"}},[i("Content",{attrs:{title:t.content.about.title}},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-8 is-offset-2 has-text-centered is-vertical-centered-content"},[i("div",t._l(t.content.about.texts,function(e){return i("p",{key:e+Math.random()},[t._v("\n              "+t._s(e)+"\n            ")])}),0)])])])],1),t._v(" "),i("section",{ref:t.content.contact.id,staticClass:"section is-medium",attrs:{id:"contact"}},[i("Content",{attrs:{title:t.content.contact.title}},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-12 has-text-centered"},[i("a",{staticClass:"button is-medium is-link is-outlined",attrs:{href:t.content.contact.github,target:"blank"}},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fab fa-github"})]),t._v(" "),i("span",[t._v("GitHub")])]),t._v(" "),i("a",{staticClass:"button is-medium is-success is-outlined",attrs:{href:t.content.contact.xing,target:"blank"}},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fab fa-xing"})]),t._v(" "),i("span",[t._v("Xing")])])])])])],1),t._v(" "),i("footer",{staticClass:"footer has-background-dark has-text-white"},[i("div",{staticClass:"content has-text-centered"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._l(t.content.footer.buttons,function(t){return i("a",{key:t+Math.random(),class:["button","is-medium","is-outlined","has-margin-4","is-"+t.color],attrs:{href:t.link,target:"blank"}},[i("span",{staticClass:"icon"},[i("i",{class:t.icon})])])})],2)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",[this._v("Christin Bartz ")]),this._v(" "),e("span",{staticClass:"has-text-info"},[this._v("Frontend Developer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("h1",{staticClass:"title is-size-1-desktop"},[this._v("\n          Christin Bartz\n        ")]),this._v(" "),e("h2",{staticClass:"subtitle is-size-2-desktop has-text-info"},[this._v("\n          Frontent Developer\n        ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("i",{staticClass:"far fa-copyright is-size-7"}),this._v(" Christin Bartz 2019")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n        Made with\n        "),e("a",{staticClass:"footer__link has-text-info",attrs:{href:"https://bulma.io/"}},[this._v("Bulma")]),this._v("\n        and\n        "),e("a",{staticClass:"footer__link has-text-info",attrs:{href:"https://nuxtjs.org/"}},[this._v("Nuxt.js")])])}],!1,null,null,null));e.default=u.exports}}]);