(this.webpackJsonpfront_end_dev_homework_assignment=this.webpackJsonpfront_end_dev_homework_assignment||[]).push([[0],{208:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"DELETE_USER",(function(){return N})),a.d(r,"CREATE_PROJECT",(function(){return g})),a.d(r,"DELETE_PROJECT",(function(){return P})),a.d(r,"FETCH_PROJECT",(function(){return y})),a.d(r,"DEACTIVATE",(function(){return w})),a.d(r,"deleteProject",(function(){return O})),a.d(r,"deleteUser",(function(){return C})),a.d(r,"createProject",(function(){return D})),a.d(r,"fetchProject",(function(){return S})),a.d(r,"deactivateProj",(function(){return k}));var n={};a.r(n),a.d(n,"CREATE_USER",(function(){return G})),a.d(n,"submitUserForm",(function(){return q}));a(99);var c=a(0),l=a.n(c),s=a(48),o=a.n(s),i=a(13),m=a(4),u=a(92),d=a(9),p=a(19),_=a(21),E=a(20),f=a(22),b=a(8),j=a(29),h=a(7),v=a.n(h),N="DELETE_USER",g="CREATE_PROJECT",P="DELETE_PROJECT",y="FETCH_PROJECT",w="DEACTIVATE",O=function(e){return{type:P,pid:e}},C=function(e){return function(t){return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t({type:N,uid:e});case 1:case"end":return a.stop()}}))}},D=function(e){var t=e.name,a=e.sponsor,r=e.sdate,n=e.edate;return function(e){e({type:g,projectData:{name:t,sponsor:a,sdate:r,edate:n}})}},S=function(e){return function(t){return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t({type:y,pid:e});case 1:case"end":return a.stop()}}))}},k=function(e){return function(t){return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t({type:w,pid:e});case 1:case"end":return a.stop()}}))}},x=Object(j.e)((function(e){return l.a.createElement("div",{className:"floating-btn"},l.a.createElement(b.b,{to:"#",className:"floating-btn--link floating-btn--rotate"},l.a.createElement("span",null,"\u260c")),l.a.createElement(b.b,{to:"#",className:"floating-btn--link"},l.a.createElement("span",null,"-")),l.a.createElement(b.b,{to:e.link1,className:"floating-btn--link"},l.a.createElement("span",null,"+")))})),A=function(e,t,a){var r=((t=t||1)-1)*(a=a||2),n=e.slice(r).slice(0,a),c=Math.ceil(e.length/a);return{page:t,per_page:a,pre_page:t-1?t-1:null,next_page:c>t?t+1:null,total:e.length,total_pages:c,data:n}},T=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(n)))).state={paging:null},a.cardFns=function(e){var t,r=a.props.projects;if(e||(t=A(r,1,2),a.setState({paging:t},(function(){return t.data.map((function(e){return a.aCard(e)}))}))),"prev"==e&&(t=A(r,a.state.paging.page-1,2),a.setState({paging:t},(function(){return t.data.map((function(e){return a.aCard(e)}))}))),"next"==e){if(null==a.state.paging.next_page)return;t=A(r,a.state.paging.page+1,2),a.setState({paging:t},(function(){return t.data.map((function(e){return a.aCard(e)}))}))}},a.aCard=function(e){return l.a.createElement("div",{className:"column-2-of-4",key:e.id},l.a.createElement("div",{className:"dashboard__card"},l.a.createElement("div",{className:"dashboard__card--status u-".concat(e.active)},"Active: ".concat(e.active)),l.a.createElement("div",{className:"dashboard__card__side dashboard__card__side--front"},l.a.createElement("div",{className:"dashboard__card-picture"}),l.a.createElement("h4",{className:"dashboard__card__heading"},l.a.createElement("span",{className:"dashboard__card__heading-span"},"Project: ".concat(e.name))),l.a.createElement("div",{className:"dashboard__card--details"},l.a.createElement("ul",null,l.a.createElement("li",null,"Sponsor: ".concat(e.sponsor)),l.a.createElement("li",null,"Start Date: ".concat(e.project_start_date)),l.a.createElement("li",null,"Start Date: ".concat(e.project_end_date))))),l.a.createElement("div",{className:"dashboard__card__side dashboard__card__side--back dashboard__card__side--back"},l.a.createElement("div",{className:"dashboard__card--back"},l.a.createElement("div",{className:"dashboard__card--back-box"},l.a.createElement("p",{className:"dashboard__card--visit"},"View"),l.a.createElement("p",{className:"dashboard__card--page"},"Project Page"),l.a.createElement(b.b,{to:"/project/".concat(e.id),className:"dashboard__card--visit-link"},"Select"))))))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.cardFns()}},{key:"render",value:function(){var e=this;return this.state.paging?l.a.createElement("main",{className:"dashboard"},l.a.createElement("div",{className:"dashboard--welcome-text"},l.a.createElement("h2",null,"You're Welcome...")),l.a.createElement("div",{className:"dashboard__project-container"},l.a.createElement("div",{className:"wrapper wrapper--narrow"},l.a.createElement("div",{className:"row row--gutter"},this.state.paging.data.map((function(t){return e.aCard(t)}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"column-1-of-3"},l.a.createElement("div",{className:"dashboard--status-message dashboard--float-right u__af"},l.a.createElement("button",{onClick:function(){return e.cardFns("prev")}},"<< Previous"))),l.a.createElement("div",{className:"column-1-of-3"},l.a.createElement("div",{className:"dashboard--status-message"},"Currently showing 2 of ".concat(this.props.projects.length," projects"))),l.a.createElement("div",{className:"column-1-of-3"},l.a.createElement("div",{className:"dashboard--status-message dashboard--float-left u__af"},l.a.createElement("button",{onClick:function(){return e.cardFns("next")}},"Next >>"))))),l.a.createElement(x,{link1:"/new"})):l.a.createElement("div",null,"Loading...")}}]),t}(c.Component),F=Object(i.b)((function(e){var t=e.users,a=e.project;return{users:t,projects:a.projects,currentView:a.currentView,availableProjects:a.availableProjects}}),r)(T),R=function(){return l.a.createElement("div",{className:"navigation"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"navigation--logo"},l.a.createElement(b.b,{to:"/"},l.a.createElement("h1",null,"Luke Research"))),l.a.createElement("nav",{className:"navigation--list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(b.b,{to:"/new"},"Create New Project"))))))},U=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(n)))).state={users:null,projectData:null},a.getProject=function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.awrap(a.props.fetchProject(a.props.match.params.id));case 2:a.setState({users:a.props.proPage,projectData:a.props.project[0]});case 3:case"end":return e.stop()}}))},a.deactivatedProject=function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.awrap(a.props.deactivateProj(a.props.match.params.id));case 2:a.setState({projectData:a.props.project[0]});case 3:case"end":return e.stop()}}))},a.deleteUser=function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,v.a.awrap(a.props.deleteUser(e));case 3:return t.abrupt("return",a.getProject());case 4:case"end":return t.stop()}}))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.awrap(this.getProject());case 2:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return this.state.users&&this.state.projectData?l.a.createElement("main",{className:"wrapper"},l.a.createElement("div",{className:"u__stage"},l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"project--side-pane"}),l.a.createElement("div",{className:"project--indicator"}),l.a.createElement("div",{className:"row row--gutter"},l.a.createElement("div",{className:"column-2-of-4"},l.a.createElement("div",{className:"project__details"},l.a.createElement("h2",null,"Project ".concat(this.state.projectData.name)),l.a.createElement("div",{className:"project__details--status u-".concat(this.state.projectData.active)},l.a.createElement("span",null," ")," ","Active: ".concat(this.state.projectData.active)))),l.a.createElement("div",{className:"column-2-of-4"},l.a.createElement("ul",null,this.state.projectData.active?l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return e.deactivatedProject()},className:"button button--blue"},"De-Activate Project")):l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return e.deactivatedProject()},className:"button button--blue"},"Activate Project")),l.a.createElement("li",null,l.a.createElement(b.b,{to:"/add_user/".concat(this.state.projectData.id),className:"button button--blue"},"+ \xa0 Add User"))))),l.a.createElement("div",{className:"project__chip"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("div",{className:"project__chip-list"},"Project Sponsor: ".concat(this.state.projectData.sponsor))),l.a.createElement("li",null,l.a.createElement("div",{className:"project__chip-list"},"Start Date: ".concat(this.state.projectData.project_start_date))),l.a.createElement("li",null,l.a.createElement("div",{className:"project__chip-list"},"End Date: ".concat(this.state.projectData.project_end_date))))),l.a.createElement("div",{className:"project__user-list"},l.a.createElement("h2",null,"User List"),l.a.createElement("table",{className:"project__user-list--table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name ",l.a.createElement("span",null,"\u21f5")),l.a.createElement("th",null,"Department ",l.a.createElement("span",null,"\u21f5")),l.a.createElement("th",null,"Role ",l.a.createElement("span",null,"\u21f5")),l.a.createElement("th",null,"\xa0"))),l.a.createElement("tbody",null,this.state.users.length>0&&this.state.users.map((function(t,a){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.department),l.a.createElement("td",null,t.role),l.a.createElement("td",{className:"project__delete",onClick:function(){return e.deleteUser(t.id)}},"\u2a02 Delete"))}))),l.a.createElement("tfoot",null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"4"},"End of List"))))),l.a.createElement("div",{className:"project__footer"},l.a.createElement(b.b,{to:"/",className:"button button--blue"},"\u03a7 Close"))))):l.a.createElement("div",{style:{backgroundColor:"#000",position:"fixed",top:"0",left:"0",right:"0",bottom:"0"}})}}]),t}(c.Component),I=Object(i.b)((function(e){var t=e.project;return{project:t.filteredPage,proPage:t.projectPage}}),r)(U),M=a(11),J=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(n)))).state={name:null,sponsor:null,sdate:null,edate:null},a.handleSubmit=function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:e.preventDefault(),a.props.createProject(Object(M.a)({},a.state));case 4:case"end":return t.stop()}}))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("main",{className:"wrapper"},l.a.createElement("div",{className:"u__stage"},l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"project--side-pane"}),l.a.createElement("div",{className:"project--indicator"}),l.a.createElement("div",{className:"project__details u__padding-top"},l.a.createElement("h2",null,"Create A New Project")),l.a.createElement("div",{className:"project__form"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"form"},l.a.createElement("div",{className:"form__group"},l.a.createElement("input",{type:"text",className:"form__input",placeholder:"Project Name",name:"name",id:"name",onChange:function(t){return e.setState({name:t.target.value})},required:!0}),l.a.createElement("label",{htmlFor:"name",className:"form__label"},"Project Name")),l.a.createElement("div",{className:"form__group"},l.a.createElement("input",{type:"text",className:"form__input",placeholder:"Project Sponsor",name:"sponsor",onChange:function(t){return e.setState({sponsor:t.target.value})},id:"sponsor",required:!0}),l.a.createElement("label",{htmlFor:"sponsor",className:"form__label"},"Project Sponsor")),l.a.createElement("div",{className:"row row--gutter"},l.a.createElement("div",{className:"column-2-of-4 u__to-top"},l.a.createElement("div",{className:"form__group"},l.a.createElement("input",{type:"date",className:"form__input",placeholder:"Start Date",id:"sd",name:"sdate",onChange:function(t){return e.setState({sdate:t.target.value})},required:!0}),l.a.createElement("label",{htmlFor:"sd",className:"form__label"},"Start Date"))),l.a.createElement("div",{className:"column-2-of-4"},l.a.createElement("div",{className:"form__group"},l.a.createElement("input",{type:"date",className:"form__input",placeholder:"End Date",name:"edate",onChange:function(t){return e.setState({edate:t.target.value})},id:"ed",required:!0}),l.a.createElement("label",{htmlFor:"ed",className:"form__label"},"End Date")))),l.a.createElement("div",{className:"project__footer"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{type:"submit",className:"button button--blue button--submit button--extra"},"+ Submit")),l.a.createElement("li",null,l.a.createElement(b.b,{to:"/",className:"button button--blue"},"\u03a7 Cancel")))))))))}}]),t}(c.Component),L=Object(i.b)(null,r)(J),K=a(209),G="CREATE_USER",q=function(e){return function(t){return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t({type:G,userData:{name:e.name,project_id:e.pid,department:e.dept,role:e.role}});case 1:case"end":return a.stop()}}))}},V=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(n)))).state={name:null,dept:null,pid:null,role:null},a.handleSubmit=function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,v.a.awrap(a.props.actions.submitUserForm(Object(M.a)({},a.state)));case 3:return t.next=5,v.a.awrap(a.props.projectActions.fetchProject(a.state.pid));case 5:a.props.history.goBack();case 6:case"end":return t.stop()}}))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("main",{className:"wrapper"},l.a.createElement("div",{className:"u__stage"},l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"project--side-pane"}),l.a.createElement("div",{className:"project--indicator"}),l.a.createElement("div",{className:"project__details u__padding-top"},l.a.createElement("h2",null,"Project SLN"),l.a.createElement("div",{className:"project__details--status u__accent"}," Add A New User")),l.a.createElement("div",{className:"project__form"},l.a.createElement("form",{className:"form"},l.a.createElement("div",{className:"form__group"},l.a.createElement("input",{type:"text",className:"form__input",name:"name",placeholder:"Name",id:"name",onChange:function(t){return e.setState({name:t.target.value,pid:e.props.match.params.id})},required:!0}),l.a.createElement("label",{htmlFor:"name",className:"form__label"},"Name")),l.a.createElement("div",{className:"form__group"},l.a.createElement("input",{type:"text",className:"form__input",placeholder:"Department",id:"dept",name:"dept",onChange:function(t){return e.setState({dept:t.target.value})},required:!0}),l.a.createElement("label",{htmlFor:"dept",className:"form__label"},"Department")),l.a.createElement("div",{className:"project__form--role"},l.a.createElement("h2",null,"Role:"),l.a.createElement("ul",{className:"form__group"},l.a.createElement("li",null,l.a.createElement("div",{className:"form__radio-group"},l.a.createElement("input",{type:"radio",className:"form__radio-input",id:"pi",name:"role",onChange:function(){return e.setState({role:"PI"})}}),l.a.createElement("label",{htmlFor:"pi",className:"form__radio-label"},l.a.createElement("span",{className:"form__radio-button"}),"PI"))),l.a.createElement("li",null,l.a.createElement("div",{className:"form__radio-group"},l.a.createElement("input",{type:"radio",className:"form__radio-input",id:"KeyPersonnel",name:"role",onChange:function(){return e.setState({role:"Key Personnel"})}}),l.a.createElement("label",{htmlFor:"KeyPersonnel",className:"form__radio-label"},l.a.createElement("span",{className:"form__radio-button"}),"Key Personnel"))),l.a.createElement("li",null,l.a.createElement("div",{className:"form__radio-group"},l.a.createElement("input",{type:"radio",className:"form__radio-input",id:"GrantAdministrator",name:"role",onChange:function(){return e.setState({role:"Grant Administrator"})}}),l.a.createElement("label",{htmlFor:"GrantAdministrator",className:"form__radio-label"},l.a.createElement("span",{className:"form__radio-button"}),"Grant Administrator"))))),l.a.createElement("div",{className:"project__footer"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{onClick:this.handleSubmit,className:"button button--blue button--submit button--extra"},"+ Submit")),l.a.createElement("li",null,l.a.createElement(b.b,{to:"/",className:"button button--blue"},"\u03a7 Cancel")))))))))}}]),t}(c.Component);V=Object(i.b)(null,(function(e){return{projectActions:Object(m.b)(r,e),actions:Object(m.b)(n,e)}}))(V);var H=Object(K.a)({form:"userForm",destroyOnUnmount:!0})(V),B=function(e){function t(){return Object(d.a)(this,t),Object(_.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement(b.a,null,l.a.createElement("div",null,l.a.createElement(R,null),l.a.createElement(j.a,{exact:!0,path:"/",component:F}),l.a.createElement(j.a,{exact:!0,path:"/add_user/:id",component:H}),l.a.createElement(j.a,{exact:!0,path:"/new",component:L}),l.a.createElement(j.a,{exact:!0,path:"/project/:id",component:I}))))}}]),t}(c.Component),W=a(210),Y=a(25),z=a.n(Y),Q=a(37),X=a.n(Q),Z={1:{name:"CAN",id:1,sponsor:"NIH",active:!1,project_start_date:"10/1/2008",project_end_date:"9/31/2014"},2:{name:"CLN",id:2,sponsor:"NIEHS",active:!0,project_start_date:"10/1/2007",project_end_date:"10/1/2022"},3:{name:"AMI",id:3,sponsor:"NSF",active:!0,project_start_date:"10/1/2007",project_end_date:"10/1/2027"}},$={1:{id:1,name:"Mark",project_id:3,department:"Medicine",role:"PI"},2:{id:2,name:"Ann",project_id:2,department:"Neuroscience",role:"PI"},3:{id:3,name:"Mary",project_id:1,department:"Nursing",role:"PI"},4:{id:4,name:"John",project_id:3,department:"Medicine",role:"Key Personnel"},5:{id:5,name:"Geri",project_id:2,department:"Neuroscience",role:"Key Personnel"},6:{id:6,name:"Sam",project_id:2,department:"Neuroscience",role:"Grant Administrator"},7:{id:7,name:"Jordan",project_id:1,department:"Nursing",role:"Key Personnel"},8:{id:8,name:"Pat",project_id:3,department:"Medicine",role:"Grant Administrator"},9:{id:9,name:"Mark",project_id:2,department:"Neuroscience",role:"Key Personnel"},10:{id:10,name:"Cameron",project_id:3,department:"Medicine",role:"Key Personnel"}},ee=function e(t,a,r,n,c,l){Object(d.a)(this,e),this.name=r,this.id=t,this.sponsor=n,this.active=a,this.project_start_date=c,this.project_end_date=l},te=function e(t,a,r,n,c){Object(d.a)(this,e),this.id=t,this.name=a,this.project_id=r,this.department=n,this.role=c},ae={projects:z.a.map(Z,(function(e){return e})),availableProjects:z.a.chain(Z).map((function(e){return e})).chunk(2).value(),currentView:0,projectPage:null,filteredPage:null,user:z.a.map($,(function(e){return e}))},re={users:z.a.map($,(function(e){return e}))},ne=Object(m.c)({project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var a=new ee(X()(),"false",t.projectData.name,t.projectData.sponsor,t.projectData.sdate,t.projectData.edate);return Object(M.a)({},e,{projects:e.projects.concat(a),availableProjects:z.a.chain(e.projects).map((function(e){return e})).chunk(2).value()});case P:return Object(M.a)({},e,{projects:e.projects.filter((function(e){return e.id!==t.pid})),availableProjects:z.a.chunk(e.projects,2)});case y:return Object(M.a)({},e,{projectPage:z.a.chain(e.user).map((function(e){return e})).filter((function(e){return e.project_id==t.pid})).value(),filteredPage:z.a.chain(Z).map((function(e){return e})).filter((function(e){return e.id==t.pid})).value()});case w:return e.filteredPage[0].active=!e.filteredPage[0].active,Object(M.a)({},e,{filteredPage:e.filteredPage});case G:var r=new te(X()(),t.userData.name,t.userData.project_id,t.userData.department,t.userData.role);return Object(M.a)({},e,{user:e.user.concat(r)});case N:return Object(M.a)({},e,{user:e.user.filter((function(e){return e.id!==t.uid}))});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:var a=new te(X()(),t.userData.name,t.userData.project_id,t.userData.department,t.userData.role);return Object(M.a)({},e,{users:e.users.concat(a)});case N:return Object(M.a)({},e,{users:e.users.filter((function(e){return e.id!==t.uid}))});default:return e}},form:W.a}),ce=Object(m.d)(ne,Object(m.a)(u.a));o.a.render(l.a.createElement(i.a,{store:ce},l.a.createElement(B,null)),document.getElementById("root"))},98:function(e,t,a){e.exports=a(208)},99:function(e,t,a){}},[[98,1,2]]]);
//# sourceMappingURL=main.82980846.chunk.js.map