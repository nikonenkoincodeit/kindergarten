(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22296b"],{cef9:function(t,e,c){"use strict";c.r(e);var a=c("7a23");const n={class:"pt-5 pb-5"},s={class:"container"},b={key:0,class:"row"},l={class:"col-md-4 col-12"},r=["src","alt"],d={class:"col-md-8 col-12"},o={key:1};function O(t,e,c,O,i,j){return Object(a["x"])(),Object(a["g"])("section",n,[Object(a["h"])("div",s,[O.data?(Object(a["x"])(),Object(a["g"])("div",b,[Object(a["h"])("div",l,[Object(a["h"])("img",{src:O.data.picture,alt:O.data.title},null,8,r)]),Object(a["h"])("div",d,[Object(a["h"])("h1",null,Object(a["H"])(O.data.title),1),Object(a["h"])("p",null,Object(a["H"])(O.data.description),1),Object(a["h"])("p",null,Object(a["H"])(O.formatDate(O.data.created)),1)])])):(Object(a["x"])(),Object(a["g"])("h2",o,"Не знайдено"))])])}var i=c("6605"),j=c("5502");const u=t=>{const e=new Date(t);return new Intl.DateTimeFormat("uk",{dateStyle:"long"}).format(e)};var p={name:"oneNews",setup(){const t=Object(j["b"])(),e=Object(i["c"])(),c=Object(a["C"])(e.query.id),n=Object(a["c"])(()=>t.getters.getOneNews[0]);return Object(a["s"])(()=>{t.dispatch("getDataNews",c.value)}),{id:c,data:n,formatDate:u}}},h=c("d959"),w=c.n(h);const m=w()(p,[["render",O]]);e["default"]=m}}]);
//# sourceMappingURL=chunk-2d22296b.6ba678ab.js.map