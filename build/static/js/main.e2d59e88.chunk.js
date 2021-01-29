(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},105:function(e,t,c){},107:function(e,t,c){},204:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),s=c.n(a),r=c(7),o=c.n(r),i=(c(98),c(23)),l=c.n(i),d=c(38),u=c(11),j=(c(100),c(240)),f=c(241),h=c(242),b=c(231),v=c(235),p=c(13),O=c(236);c(101);var x=function(e){var t=e.title,c=e.isRed,a=e.isGrey,s=e.active,r=e.cases,o=e.total,i=Object(p.a)(e,["title","isRed","isGrey","active","cases","total"]);return Object(n.jsx)(b.a,{onClick:i.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(c&&"infoBox--red"," ").concat(a&&"infoBox--grey"),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(O.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(n.jsx)("h2",{className:"infoBox__cases ".concat(!c&&"infoBox__cases--green"," ").concat(a&&"infoBox__cases--grey"),children:r}),Object(n.jsxs)(O.a,{className:"infoBox__total",color:"textSecondary",children:[o," Total"]})]})})},m=(c(105),c(86)),g=c(14),y=c.n(g),C=c(243),N=c(237),_={cases:{hex:"#CC1034",multiplier:300},recovered:{hex:"#7dd71d",multiplier:400},deaths:{hex:"#fb4443",multiplier:600}},w=function(e){return Object(m.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},k=function(e){return e?"+".concat(y()(e).format("0.0a")):""},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(n.jsx)(C.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,pathOptions:{color:_[t].hex,fillColor:_[t].hex},radius:Math.sqrt(e[t])*_[t].multiplier,children:Object(n.jsx)(N.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",y()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",y()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",y()(e.deaths).format("0,0")]})]})})})}))},T=c(238),B=c(239),I=c(244);var R=function(e){var t=e.countries,c=e.casesType,a=e.center,s=e.zoom;function r(e){var t=e.center,c=e.zoom;return Object(T.a)().setView(t,c),null}return Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(B.a,{casesType:c,center:a,zoom:s,children:[Object(n.jsx)(r,{center:a,zoom:s}),Object(n.jsx)(I.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),S(t,c)]})})};c(106);var L=function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:y()(c).format()})})]})}))})},z=(c(107),c(54)),D={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return y()(e).format("0a")}}}]}},F=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n};var M=function(e){var t=e.casesType,c=Object(p.a)(e,["casesType"]),s=Object(a.useState)({}),r=Object(u.a)(s,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30").then((function(e){return e.json()})).then((function(e){var c=F(e,t);i(c),console.log(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsxs)("div",{className:c.className,children:[(null===o||void 0===o?void 0:o.length)>0&&"recovered"===t&&Object(n.jsx)(z.Line,{options:D,data:{datasets:[{backgroundColor:"rgb(125, 215, 29, 0.5)",borderColor:"green",data:o}]}}),(null===o||void 0===o?void 0:o.length)>0&&"cases"===t&&Object(n.jsx)(z.Line,{options:D,data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5",borderColor:"#CC1034",data:o}]}}),(null===o||void 0===o?void 0:o.length)>0&&"deaths"===t&&Object(n.jsx)(z.Line,{options:D,data:{datasets:[{backgroundColor:"rgba(251, 68,67, 0.5)",borderColor:"#fb4443",data:o}]}})]})};var E=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("worldwide"),o=Object(u.a)(r,2),i=o[0],p=o[1],O=Object(a.useState)({}),m=Object(u.a)(O,2),g=m[0],y=m[1],C=Object(a.useState)([]),N=Object(u.a)(C,2),_=N[0],S=N[1],T=Object(a.useState)([34.80746,-40.4796]),B=Object(u.a)(T,2),I=B[0],z=B[1],D=Object(a.useState)(2),F=Object(u.a)(D,2),E=F[0],A=F[1],G=Object(a.useState)([]),Y=Object(u.a)(G,2),J=Y[0],P=Y[1],W=Object(a.useState)("cases"),q=Object(u.a)(W,2),U=q[0],V=q[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){y(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=w(e);S(c),P(e),s(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var H=function(){var e=Object(d.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,p(c),n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){p(c),y(e),z("worldwide"===c?[34.80746,-40.4796]:[e.countryInfo.lat,e.countryInfo.long]),A("worldwide"===c?2:4)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("COUNTRY INFO: ",g),Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:"Covid-19 Tracker"}),Object(n.jsx)(j.a,{className:"app__dropdown",children:Object(n.jsxs)(f.a,{variant:"outlined",onChange:H,value:i,children:[Object(n.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(n.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(x,{isRed:!0,active:"cases"===U,onClick:function(e){return V("cases")},title:"Coronavirus Cases",total:k(g.cases),cases:k(g.todayCases)}),Object(n.jsx)(x,{isGreen:!0,active:"recovered"===U,onClick:function(e){return V("recovered")},title:"Recovered",total:k(g.recovered),cases:k(g.todayRecovered)}),Object(n.jsx)(x,{isRed:!0,active:"deaths"===U,onClick:function(e){return V("deaths")},title:"Deaths",total:k(g.deaths),cases:k(g.todayDeaths)})]}),Object(n.jsx)(R,{countries:J,center:I,zoom:E,casesType:U})]}),Object(n.jsx)(b.a,{className:"app__right",children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)("h3",{children:"Live cases by Country"}),Object(n.jsx)(L,{countries:_}),Object(n.jsxs)("h3",{className:"app__graphTitle",children:["Worldwide new ",U]}),Object(n.jsx)(M,{className:"app__graph",casesType:U})]})})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,246)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),A()},98:function(e,t,c){}},[[204,1,2]]]);
//# sourceMappingURL=main.e2d59e88.chunk.js.map