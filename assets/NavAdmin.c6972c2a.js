import{a as d}from"./js.cookie.b6205acc.js";import{_ as c,r as m,o as v,c as p,b as a,n as s,a as i,w as o,p as b,g as f,h as u}from"./index.45f2424f.js";const _={name:"NavAdmin",data(){return{user:""}},mounted(){this.cek()},methods:{cek(){d.get("liridonate")&&(this.user=JSON.parse(d.get("liridonate")))}}},t=e=>(b("data-v-31aae7c6"),e=e(),f(),e),h={class:"navbar navbar-light fixed-top bg-primary"},g={class:"container-fluid"},k=t(()=>a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar"},[a("span",{class:"navbar-toggler-icon"})],-1)),y=t(()=>a("a",{class:"navbar-brand text-white",href:"#"},"Admin",-1)),x={id:"offcanvasNavbar",class:"offcanvas offcanvas-start",tabindex:"-1","aria-labelledby":"offcanvasNavbarLabel"},w=t(()=>a("div",{class:"offcanvas-header text-white bg-primary"},[a("img",{src:u,width:"100",alt:"logo"}),a("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),N={class:"offcanvas-body sidebar-menu bg-primary"},$={class:"navbar-nav justify-content-end flex-grow-1 pe-3 menu"},S=t(()=>a("span",null,"Dashboard",-1)),C=t(()=>a("span",null,"Masjid",-1)),j=t(()=>a("span",null,"Donasi",-1)),z={class:"nav-item sidebar-item mt-1 bg-danger"},A=t(()=>a("span",null,"Keluar",-1)),I=[A];function B(e,r,O,D,V,E){const n=m("router-link");return v(),p("nav",h,[a("div",g,[k,y,a("div",x,[w,a("div",N,[a("ul",$,[a("li",{class:s(["nav-item sidebar-item",{active:e.$route.name=="admin.dashboard"}])},[i(n,{to:{name:"admin.dashboard"},class:"nav-link sidebar-link text-white px-1",style:{"font-weight":"bold"},"aria-current":"page"},{default:o(()=>[S]),_:1},8,["to"])],2),a("li",{class:s(["nav-item sidebar-item mt-1",{active:e.$route.name=="admin.masjid"}])},[i(n,{to:{name:"admin.masjid"},class:"nav-link sidebar-link text-white px-1",style:{"font-weight":"bold"},"aria-current":"page"},{default:o(()=>[C]),_:1},8,["to"])],2),a("li",{class:s(["nav-item sidebar-item mt-1",{active:e.$route.name=="admin.donasi"}])},[i(n,{to:{name:"admin.donasi"},class:"nav-link sidebar-link text-white px-1",style:{"font-weight":"bold"},"aria-current":"page"},{default:o(()=>[j]),_:1},8,["to"])],2),a("li",z,[a("a",{class:"nav-link sidebar-link text-white px-1",style:{"font-weight":"bold",cursor:"pointer"},onClick:r[0]||(r[0]=(...l)=>e.handleSignOut&&e.handleSignOut(...l))},I)])])])])])])}var L=c(_,[["render",B],["__scopeId","data-v-31aae7c6"]]);export{L as N};