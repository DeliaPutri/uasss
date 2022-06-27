import{N as g}from"./NavAdmin.c6972c2a.js";import{a as c}from"./index.becf6c0c.js";import{a as _}from"./js.cookie.b6205acc.js";import{_ as y,r as v,o as d,c as r,a as k,b as t,i as u,j as n,v as l,F as h,e as x,t as m}from"./index.45f2424f.js";const w={name:"AdminMasjidView",data(){return{masjid:[],nama:"",tahun:0,takmir:"",keterangan:"",img:"",edit:{nama:"",tahun:0,takmir:"",keterangan:"",img:""}}},components:{NavAdmin:g},mounted(){this.cek()},methods:{cek(){_.get("liridonate")?c.get("https://lirii.000webhostapp.com/view/viewmasjid.php").then(s=>{s.data.status?this.masjid=s.data.data:this.$swal({title:"Oops...",text:s.data.message,icon:"error"})}).catch(s=>{this.$swal({title:"Oops...",text:s,icon:"error"})}):this.$router.push({name:"admin.login"})},upload(s){this.img=s.target.files[0].name},uploadEdit(s){this.edit.img=s.target.files[0].name},tambah(s){s.preventDefault(),c.post("https://lirii.000webhostapp.com/view/tambahmasjid.php",{nama_masjid:this.nama,tahun_berdiri:this.tahun,deskripsi:this.keterangan,takmir:this.takmir,img:this.img},{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{a.data.status?(this.$swal({title:"Berhasil",text:a.data.message,icon:"success"}),document.getElementById("close").click(),this.nama="",this.tahun="",this.keterangan="",this.takmir="",this.img=""):this.$swal({title:"Oops...",text:a.data.message,icon:"error"})}).catch(a=>{this.$swal({title:"Oops...",text:a,icon:"error"})})},ubah(s){document.getElementById("ed").click()},update(s){s.preventDefault()},hapus(s){this.$swal({title:"Apakah anda yakin?",text:"Data yang dihapus tidak dapat dikembalikan!",icon:"warning",showCancelButton:!0,confirmButtonText:"Ya, hapus!"})}}},j={class:"container mt-5 pt-5"},T={class:"row"},C=t("button",{class:"btn btn-primary",style:{"max-width":"100px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#tambah"}," Tambah ",-1),V={class:"modal fade",id:"tambah",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},M={class:"modal-dialog modal-dialog-centered"},A={class:"modal-content"},N=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},"Tambah Masjid"),t("button",{id:"close",type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),q={class:"modal-body"},B={class:"form-floating my-1"},E=t("label",{for:"floatingInput my-1"},"Nama",-1),U={class:"form-floating"},I=t("label",{for:"floatingTahun"},"Tahun berdiri",-1),D={class:"form-floating"},F=t("label",{for:"floatingTakmir"},"Takmir",-1),L={class:"form-floating my-1"},S=t("label",{for:"floatingTextarea"},"Keterangan",-1),K=t("button",{class:"w-100 btn btn-lg btn-primary",type:"submit"}," Save ",-1),O=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ")],-1),G={class:"modal fade",id:"edit",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},H={class:"modal-dialog modal-dialog-centered"},J={class:"modal-content"},Y=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},"Edit Masjid"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),z={class:"modal-body"},P={class:"form-floating my-1"},Q=t("label",{for:"floatingInput my-1"},"Nama",-1),R={class:"form-floating"},W=t("label",{for:"floatingAlamat"},"Alamat",-1),X={class:"form-floating my-1"},Z=t("label",{for:"floatingTextarea"},"Keterangan",-1),$=t("button",{class:"w-100 btn btn-lg btn-primary",type:"submit"}," Save ",-1),tt=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ")],-1),at={class:"table table-striped"},et=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Nama"),t("th",{scope:"col"},"Tahun"),t("th",{scope:"col"},"Takmir"),t("th",{class:"text-center",scope:"col"},"Aksi")])],-1),st={class:"d-flex justify-content-evenly"},ot=t("button",{id:"ed",class:"btn btn-warning btn-sm",type:"button","data-bs-toggle":"modal","data-bs-target":"#edit",hidden:""}," Edit ",-1),it=["onClick"],nt=["onClick"];function lt(s,a,dt,rt,o,i){const p=v("NavAdmin");return d(),r(h,null,[k(p),t("main",j,[t("div",T,[C,t("div",V,[t("div",M,[t("div",A,[N,t("div",q,[t("form",{onSubmit:a[5]||(a[5]=u((...e)=>i.tambah&&i.tambah(...e),["prevent"])),method:"post",enctype:"multipart/form-data"},[t("div",B,[n(t("input",{type:"text",class:"form-control",id:"floatingInput",placeholder:"masjid shobirin","onUpdate:modelValue":a[0]||(a[0]=e=>o.nama=e),required:""},null,512),[[l,o.nama]]),E]),t("div",U,[n(t("input",{type:"number",class:"form-control",id:"floatingTahun",placeholder:"1212","onUpdate:modelValue":a[1]||(a[1]=e=>o.tahun=e),required:""},null,512),[[l,o.tahun]]),I]),t("div",D,[n(t("input",{type:"text",class:"form-control",id:"floatingTakmir",placeholder:"Faris","onUpdate:modelValue":a[2]||(a[2]=e=>o.takmir=e),required:""},null,512),[[l,o.takmir]]),F]),t("input",{type:"file",class:"form-control my-1",id:"inputGroupFile01",onChange:a[3]||(a[3]=e=>i.upload(e)),required:""},null,32),t("div",L,[n(t("textarea",{class:"form-control",placeholder:"Keterangan",id:"floatingTextarea","onUpdate:modelValue":a[4]||(a[4]=e=>o.keterangan=e),required:""},null,512),[[l,o.keterangan]]),S]),K],32)]),O])])]),t("div",G,[t("div",H,[t("div",J,[Y,t("div",z,[t("form",{onSubmit:a[10]||(a[10]=u((...e)=>i.update&&i.update(...e),["prevent"])),method:"post",enctype:"multipart/form-data"},[t("div",P,[n(t("input",{type:"text",class:"form-control",id:"floatingInput",placeholder:"masjid shobirin","onUpdate:modelValue":a[6]||(a[6]=e=>o.edit.nama=e),required:""},null,512),[[l,o.edit.nama]]),Q]),t("div",R,[n(t("input",{type:"text",class:"form-control",id:"floatingAlamat",placeholder:"Jalan jalan","onUpdate:modelValue":a[7]||(a[7]=e=>o.edit.alamat=e),required:""},null,512),[[l,o.edit.alamat]]),W]),t("input",{type:"file",class:"form-control my-1",id:"inputGroupFile01",onChange:a[8]||(a[8]=e=>i.uploadEdit(s.$e)),required:""},null,32),t("div",X,[n(t("textarea",{class:"form-control",placeholder:"Keterangan",id:"floatingTextarea","onUpdate:modelValue":a[9]||(a[9]=e=>o.edit.keterangan=e)},null,512),[[l,o.edit.keterangan]]),Z]),$],32)]),tt])])]),t("table",at,[et,t("tbody",null,[(d(!0),r(h,null,x(o.masjid,(e,b)=>(d(),r("tr",{key:b},[t("td",null,m(e.nama_masjid),1),t("td",null,m(e.tahun_berdiri),1),t("td",null,m(e.takmir),1),t("td",st,[ot,t("button",{class:"btn btn-warning btn-sm",type:"button",onClick:f=>i.ubah(e.id_masjid)}," Edit ",8,it),t("button",{class:"btn btn-danger btn-sm",type:"button",onClick:f=>i.hapus(e.id_masjid)}," Hapus ",8,nt)])]))),128))])])])])],64)}var pt=y(w,[["render",lt]]);export{pt as default};