(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{160:function(t,e,i){var s=i(164);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(29).default)("38169764",s,!0,{})},161:function(t,e,i){var s=i(166);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(29).default)("798c3abc",s,!0,{})},162:function(t,e,i){t.exports=i.p+"img/3c25d93.jpg"},163:function(t,e,i){"use strict";var s=i(160);i.n(s).a},164:function(t,e,i){(t.exports=i(28)(!1)).push([t.i,".footer--buttons{flex-direction:column}.footer--buttons a{margin:5px}",""])},165:function(t,e,i){"use strict";var s=i(161);i.n(s).a},166:function(t,e,i){var s=i(89);(t.exports=i(28)(!1)).push([t.i,".is-centered{margin:auto}.is-vertical-centered-content{display:flex;align-items:center}.is-max-180{max-width:180px}.is-transparent{background-color:transparent!important}.has-margin-4{margin:4px}.hero--parallax{background-image:url("+s(i(167))+");background-size:cover;background-position:50%;background-attachment:fixed}nav{transition-duration:1s}.footer__link{font-weight:700}.footer__link:hover{color:#fff}",""])},167:function(t,e,i){t.exports=i.p+"img/43bba30.jpg"},168:function(t,e,i){"use strict";i.r(e);var s={props:{title:{type:String,required:!0},tags:{type:Array,required:!0},live:{type:Object,required:!1},code:{type:Object,required:!1}}},n=(i(163),i(15)),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column is-10 is-offset-1"},[i("div",{staticClass:"card"},[i("header",{staticClass:"card-header"},[i("p",{staticClass:"card-header-title"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),i("div",{staticClass:"card-content"},[i("div",{staticClass:"content"},[t._t("default")],2)]),t._v(" "),i("footer",{staticClass:"card-footer"},[i("div",{staticClass:"card-footer-item"},[i("div",{staticClass:"tags"},t._l(t.tags,function(e){return i("span",{key:e,staticClass:"tag is-medium is-light"},[t._v(t._s(e))])}),0)]),t._v(" "),i("div",{staticClass:"card-footer-item footer--buttons"},[t.code?i("a",{staticClass:"button is-info",staticStyle:{display:"block"},attrs:{href:t.code.url}},[t._v("\n          "+t._s(t.code.text)+"\n        ")]):t._e(),t._v(" "),t.live?i("a",{staticClass:"button is-info",attrs:{href:t.live.url,target:"blank"}},[t._v("\n          Live Website\n        ")]):t._e()])])])])},[],!1,null,null,null).exports,o={props:{title:{type:String,required:!0}}},r=Object(n.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h2",{staticClass:"title has-text-centered is-size-2"},[this._v("\n    "+this._s(this.title)+"\n  ")]),this._v(" "),this._t("default")],2)},[],!1,null,null,null).exports,l={props:{list:{type:Array,required:!0},title:{type:String,required:!0}}},c={name:"HomePage",components:{Card:a,Content:r,ListBox:Object(n.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child box has-text-centered"},[i("p",{staticClass:"title is-size-4"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"content"},t._l(t.list,function(e){return i("p",{key:e},[t._v(t._s(e))])}),0)])])},[],!1,null,null,null).exports},data:function(){return{scrollPosition:null,topPosition:!0,menuActive:!1,content:{skills:{id:"skills",title:"Kenntnisse",text:"Seit dem Beginn meiner Frontend-Karriere Anfang 2015 hatte ich die Möglichkeit, mich neben HTML, CSS und Javascript auch mit modernen Libraries, Frameworks und anderen Technologien vertraut machen.",lists:[{title:"Sprachen",items:["Javascript","Sass","CSS3","HTML5"]},{title:"Frameworks und Libraries",items:["Vue.js","Nuxt.js","React.js","Next.js","jQuery"]},{title:"Andere Tools",items:["Cockpit CMS","Contao CMS","Jira","npm/Yarn","Sourcetree","Node.js"]}]},portfolio:{id:"portfolio",title:"Portfolio",text:"Hier sind spannende Projekte zu sehen, an denen ich in letzter Zeit mitgewirkt habe (und die ich zeigen darf). Ein paar Basteleien aus meiner Freizeit haben sich auch dazu gesellt.",cards:[{id:1,title:"Link Homepage",text:"Das neue Design der firmeneigenen Website haben wir im Sommer 2018 umgesetzt.",tags:["Vue.js","Nuxt.js","Sass","Cockpit CMS"],live:{text:"link-innovation.de",url:"https://link-innovation.de"}}]},about:{id:"about",title:"Über mich",texts:["Hi, ich bin Christin, eine Frontend-Entwicklerin in  Hannover. Seit 2015 erstelle ich responsive Webanwendungen und bin immer auf der Suche nach neuen Herausforderungen und spannenden Technologien.","Meine Frontend-Reise begann mit einem Nebenjob bei der Webagentur business2internet in Greifswald. Seit 2017 gehöre ich zum Team von Link-Innovation."]},contact:{id:"contact",title:"Kontakt",email:"mail@christinbartz.de",github:"https://github.com/verlevelt",xing:"https://www.xing.com/profile/Christin_Bartz3/"},footer:{id:"footer",buttons:[{icon:"fas fa-envelope",color:"info",link:"mailto:mail@christinbartz.de"},{icon:"fab fa-github",color:"link",link:"https://github.com/verlevelt"},{icon:"fab fa-xing",color:"success",link:"https://www.xing.com/profile/Christin_Bartz3/"},{icon:"fab fa-instagram",color:"warning",link:"https://www.instagram.com/verlevelt"}]}}}},methods:{anchor:function(t){var e=this.$refs[t].offsetTop-52;window.scrollTo({left:0,top:e,behavior:"smooth"})},scrollToTop:function(){window.scrollTo({left:0,top:0,behavior:"smooth"})},updateScroll:function(){this.scrollPosition=window.scrollY,0===window.scrollY?this.topPosition=!0:this.topPosition=!1},toggleMenu:function(){this.menuActive=!this.menuActive}},mounted:function(){window.addEventListener("scroll",this.updateScroll)}},u=(i(165),Object(n.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("nav",{class:["navbar","is-black","is-fixed-top",t.topPosition?"is-transparent":""],attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[t._m(0),t._v(" "),s("a",{class:["navbar-burger","burger",t.menuActive?"is-active":""],attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.toggleMenu()}}},[s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}})])]),t._v(" "),s("div",{class:["navbar-menu",t.menuActive?"is-active":""]},[s("div",{staticClass:"navbar-end"},t._l(t.content,function(e){return s("a",{key:e.id+Math.random(),staticClass:"navbar-item has-text-centered",on:{click:function(i){t.anchor(e.id)}}},[t._v("\n       "+t._s(e.title)+"\n      ")])}),0)])]),t._v(" "),s("section",{ref:"hero",staticClass:"hero hero--parallax is-dark is-fullheight"},[t._m(1),t._v(" "),s("div",{staticClass:"hero-foot has-text-centered"},[s("a",{on:{click:function(e){t.anchor("skills")}}},[s("i",{staticClass:"has-text-info fas fa-angle-down is-size-1"})])])]),t._v(" "),s("section",{ref:t.content.skills.id,staticClass:"section is-medium has-background-light"},[s("Content",{attrs:{title:t.content.skills.title}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6 is-offset-3"},[s("article",{staticClass:"has-text-centered"},[s("p",[t._v(" "+t._s(t.content.skills.text))])])])]),t._v(" "),s("div",{staticClass:"tile is-ancestor"},t._l(t.content.skills.lists,function(t){return s("ListBox",{key:t+Math.random(),attrs:{list:t.items,title:t.title}})}),1)])],1),t._v(" "),s("section",{ref:t.content.portfolio.id,staticClass:"section is-medium",attrs:{id:"portfolio"}},[s("Content",{attrs:{title:t.content.portfolio.title}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6 is-offset-3"},[s("article",{staticClass:"has-text-centered"},[s("p",[t._v(" "+t._s(t.content.portfolio.text))])])])]),t._v(" "),t._l(t.content.portfolio.cards,function(e){return s("Card",{key:e.title+Math.random(),attrs:{title:e.title,tags:e.tags,live:e.live,code:e.code}},[t._v("\n          "+t._s(e.text)+"\n        ")])})],2)],1),t._v(" "),s("section",{ref:"about",staticClass:"section is-medium has-background-light",attrs:{id:"about"}},[s("Content",{attrs:{title:t.content.about.title}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-2 is-offset-1 is-vertical-centered-content"},[s("figure",{staticClass:"image is-max-180 is-centered"},[s("img",{staticClass:"is-rounded",attrs:{src:i(162)}})])]),t._v(" "),s("div",{staticClass:"column is-8 has-text-justified-desktop has-text-centered-mobile is-vertical-centered-content"},[s("div",t._l(t.content.about.texts,function(e){return s("p",{key:e+Math.random()},[t._v(t._s(e))])}),0)])])])],1),t._v(" "),s("section",{ref:t.content.contact.id,staticClass:"section is-medium",attrs:{id:"contact"}},[s("Content",{attrs:{title:t.content.contact.title}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6 has-text-centered"},[s("p",{staticClass:"subtitle"},[t._v("E-Mail")]),t._v(" "),s("a",{staticClass:"button is-info is-medium",attrs:{href:"mailto:"+t.content.contact.email}},[t._v(t._s(t.content.contact.email))])]),t._v(" "),s("div",{staticClass:"column is-6 has-text-centered"},[s("p",{staticClass:"subtitle"},[t._v("Social Media")]),t._v(" "),s("a",{staticClass:"button is-medium is-link is-outlined",attrs:{href:t.content.contact.github,target:"blank"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fab fa-github"})]),t._v(" "),s("span",[t._v("GitHub")])]),t._v(" "),s("a",{staticClass:"button is-medium is-success is-outlined",attrs:{href:t.content.contact.xing,target:"blank"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fab fa-xing"})]),t._v(" "),s("span",[t._v("Xing")])])])])])],1),t._v(" "),s("footer",{staticClass:"footer has-background-dark has-text-white"},[s("div",{staticClass:"content has-text-centered"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._l(t.content.footer.buttons,function(t){return s("a",{key:t+Math.random(),class:["button","is-medium","is-outlined","has-margin-4","is-"+t.color],attrs:{href:t.link,target:"blank"}},[s("span",{staticClass:"icon"},[s("i",{class:t.icon})])])})],2)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item is-size-5-desktop"},[e("p",[e("span",[this._v("Christin Bartz ")]),this._v(" "),e("span",{staticClass:"has-text-info"},[this._v("Frontend Developer")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("h1",{staticClass:"title is-size-1-desktop"},[this._v("\n            Christin Bartz\n          ")]),this._v(" "),e("h2",{staticClass:"subtitle is-size-2-desktop has-text-info"},[this._v("\n            Frontent Developer\n          ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("i",{staticClass:"far fa-copyright is-size-7"}),this._v(" Christin Bartz 2019\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n        Made with "),e("a",{staticClass:"footer__link has-text-info",attrs:{href:"https://bulma.io/"}},[this._v("Bulma")]),this._v(" and "),e("a",{staticClass:"footer__link has-text-info",attrs:{href:"https://nuxtjs.org/"}},[this._v("Nuxt.js")])])}],!1,null,null,null));e.default=u.exports}}]);