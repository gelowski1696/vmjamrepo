"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[557],{6557:(N,p,d)=>{d.r(p),d.d(p,{default:()=>G});var c=d(177),g=d(2389),t=d(3953),m=d(3525),u=d(2646),f=d(129),h=d(4341),D=d(3413);const I=["DetailsModal"];function F(a,r){1&a&&(t.j41(0,"div",14)(1,"div",15)(2,"p"),t.EFF(3,"Loading..."),t.k0s()()())}function j(a,r){if(1&a){const e=t.RV6();t.j41(0,"div",16)(1,"div",17)(2,"label",18),t.EFF(3,"Start Date:"),t.k0s(),t.j41(4,"input",19),t.mxI("ngModelChange",function(s){t.eBV(e);const n=t.XpG();return t.DH7(n.startDate,s)||(n.startDate=s),t.Njj(s)}),t.bIt("change",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.searchSales())}),t.k0s()(),t.j41(5,"div",17)(6,"label",20),t.EFF(7,"End Date:"),t.k0s(),t.j41(8,"input",21),t.mxI("ngModelChange",function(s){t.eBV(e);const n=t.XpG();return t.DH7(n.endDate,s)||(n.endDate=s),t.Njj(s)}),t.bIt("change",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.searchSales())}),t.k0s()(),t.j41(9,"div",22)(10,"button",23),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.showAllSales())}),t.EFF(11,"Show All"),t.k0s()()()}if(2&a){const e=t.XpG();t.R7$(4),t.R50("ngModel",e.startDate),t.R7$(4),t.R50("ngModel",e.endDate)}}function C(a,r){1&a&&(t.j41(0,"div",14)(1,"div",15)(2,"p"),t.EFF(3,"Loading..."),t.k0s()()())}function E(a,r){1&a&&(t.j41(0,"tr")(1,"td",31),t.EFF(2,"No Item Sold available"),t.k0s()())}function b(a,r){if(1&a&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td"),t.EFF(8),t.k0s()()),2&a){const e=r.$implicit;t.R7$(2),t.JRh(e.scitemcode),t.R7$(2),t.JRh(e.scitemdesc),t.R7$(2),t.JRh(e.scpackage),t.R7$(2),t.JRh(e.scqty)}}function y(a,r){if(1&a&&(t.j41(0,"div",24)(1,"table",25)(2,"thead")(3,"tr",26)(4,"th"),t.EFF(5,"Item Code"),t.k0s(),t.j41(6,"th"),t.EFF(7,"Description"),t.k0s(),t.j41(8,"th"),t.EFF(9,"Size"),t.k0s(),t.j41(10,"th"),t.EFF(11,"Total Item"),t.k0s()()(),t.j41(12,"tbody"),t.DNE(13,E,3,0,"tr",27)(14,b,9,4,"tr",28),t.k0s(),t.j41(15,"tfoot")(16,"tr",26)(17,"td",29)(18,"strong"),t.EFF(19,"Total KG :"),t.k0s(),t.EFF(20),t.nI1(21,"number"),t.k0s(),t.j41(22,"td",30)(23,"strong"),t.EFF(24,"Total Items :"),t.k0s()(),t.j41(25,"td"),t.EFF(26),t.nI1(27,"number"),t.k0s()()()()()),2&a){const e=t.XpG();t.R7$(13),t.Y8G("ngIf",0===e.displayedSales.length),t.R7$(),t.Y8G("ngForOf",e.displayedSales),t.R7$(6),t.SpI(" ",t.bMT(21,4,e.getTotalSizes()),""),t.R7$(6),t.JRh(t.bMT(27,6,e.getTotalsales()))}}function T(a,r){if(1&a){const e=t.RV6();t.j41(0,"div",32)(1,"button",33),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.goToPage(s.currentPage-1))}),t.EFF(2,"Previous"),t.k0s(),t.j41(3,"span"),t.EFF(4),t.k0s(),t.j41(5,"button",33),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.goToPage(s.currentPage+1))}),t.EFF(6,"Next"),t.k0s()()}if(2&a){const e=t.XpG();t.R7$(),t.Y8G("disabled",1===e.currentPage),t.R7$(3),t.Lme("Page ",e.currentPage," of ",e.totalPages,""),t.R7$(),t.Y8G("disabled",e.currentPage===e.totalPages)}}function R(a,r){1&a&&(t.j41(0,"div",14)(1,"div",15)(2,"p"),t.EFF(3,"Loading..."),t.k0s()()())}function k(a,r){if(1&a){const e=t.RV6();t.j41(0,"div",16)(1,"div",17)(2,"label",39),t.EFF(3,"Start Date:"),t.k0s(),t.j41(4,"input",40),t.mxI("ngModelChange",function(s){t.eBV(e);const n=t.XpG(2);return t.DH7(n.detailsstartDate,s)||(n.detailsstartDate=s),t.Njj(s)}),t.bIt("change",function(){t.eBV(e);const s=t.XpG(2);return t.Njj(s.searchDetails())}),t.k0s()(),t.j41(5,"div",17)(6,"label",41),t.EFF(7,"End Date:"),t.k0s(),t.j41(8,"input",42),t.mxI("ngModelChange",function(s){t.eBV(e);const n=t.XpG(2);return t.DH7(n.detailsendDate,s)||(n.detailsendDate=s),t.Njj(s)}),t.bIt("change",function(){t.eBV(e);const s=t.XpG(2);return t.Njj(s.searchDetails())}),t.k0s()(),t.j41(9,"div",22)(10,"button",23),t.bIt("click",function(){t.eBV(e);const s=t.XpG(2);return t.Njj(s.showAll())}),t.EFF(11,"Show All"),t.k0s()()()}if(2&a){const e=t.XpG(2);t.R7$(4),t.R50("ngModel",e.detailsstartDate),t.R7$(4),t.R50("ngModel",e.detailsendDate)}}function P(a,r){1&a&&(t.j41(0,"div",14)(1,"div",15)(2,"p"),t.EFF(3,"Loading..."),t.k0s()()())}function v(a,r){1&a&&(t.j41(0,"tr")(1,"td",31),t.EFF(2,"No Item Sold available"),t.k0s()())}function S(a,r){if(1&a&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td"),t.EFF(8),t.k0s(),t.j41(9,"td"),t.EFF(10),t.nI1(11,"currency"),t.k0s(),t.j41(12,"td"),t.EFF(13),t.k0s(),t.j41(14,"td"),t.EFF(15),t.nI1(16,"currency"),t.k0s(),t.j41(17,"td"),t.EFF(18),t.nI1(19,"currency"),t.k0s()()),2&a){const e=r.$implicit;t.R7$(2),t.JRh(e.scitemcode),t.R7$(2),t.JRh(e.scitemdesc),t.R7$(2),t.SpI("",e.refill+e.nonrefill," "),t.R7$(2),t.JRh(e.refill),t.R7$(2),t.SpI("",t.i5U(11,8,e.refillprice,"PHP")," "),t.R7$(3),t.JRh(e.nonrefill),t.R7$(2),t.JRh(t.i5U(16,11,e.nonrefillprice,"PHP")),t.R7$(3),t.JRh(t.i5U(19,14,e.refill*e.refillprice+e.nonrefill*e.nonrefillprice,"PHP"))}}function M(a,r){if(1&a&&(t.j41(0,"div",24)(1,"table",25)(2,"thead")(3,"tr",26)(4,"th"),t.EFF(5,"Item Code"),t.k0s(),t.j41(6,"th"),t.EFF(7,"Description"),t.k0s(),t.j41(8,"th"),t.EFF(9,"Sold"),t.k0s(),t.j41(10,"th"),t.EFF(11,"Refill"),t.k0s(),t.j41(12,"th"),t.EFF(13,"Price"),t.k0s(),t.j41(14,"th"),t.EFF(15,"Non-Refill"),t.k0s(),t.j41(16,"th"),t.EFF(17,"Price"),t.k0s(),t.j41(18,"th"),t.EFF(19,"Total Amount"),t.k0s()()(),t.j41(20,"tbody"),t.DNE(21,v,3,0,"tr",27)(22,S,20,17,"tr",28),t.k0s(),t.j41(23,"tfoot")(24,"tr",26)(25,"td",43)(26,"strong"),t.EFF(27,"Total Items :"),t.k0s()(),t.j41(28,"td"),t.EFF(29),t.nI1(30,"number"),t.k0s(),t.j41(31,"td",44)(32,"strong"),t.EFF(33,"ADD ON :"),t.k0s()(),t.j41(34,"td"),t.EFF(35),t.nI1(36,"currency"),t.k0s()(),t.j41(37,"tr",26)(38,"td",45)(39,"strong"),t.EFF(40,"EXPENSE :"),t.k0s()(),t.j41(41,"td"),t.EFF(42),t.nI1(43,"currency"),t.k0s()(),t.j41(44,"tr",26)(45,"td",45)(46,"strong"),t.EFF(47,"TOTAL :"),t.k0s()(),t.j41(48,"td"),t.EFF(49),t.nI1(50,"currency"),t.k0s()()()()()),2&a){const e=t.XpG(2);t.R7$(21),t.Y8G("ngIf",0===e.displayeddetails.length),t.R7$(),t.Y8G("ngForOf",e.displayeddetails),t.R7$(7),t.JRh(t.bMT(30,6,e.getTotalRefillQuantity()+e.getTotalNonRefillQuantity())),t.R7$(6),t.JRh(t.i5U(36,8,e.cashInTotal,"PHP")),t.R7$(7),t.JRh(t.i5U(43,11,e.cashOutTotal,"PHP")),t.R7$(7),t.JRh(t.i5U(50,14,e.getFinalTotal(),"PHP"))}}function x(a,r){if(1&a){const e=t.RV6();t.j41(0,"div",32)(1,"button",33),t.bIt("click",function(){t.eBV(e);const s=t.XpG(2);return t.Njj(s.goToDetailsPage(s.detailscurrentPage-1))}),t.EFF(2,"Previous"),t.k0s(),t.j41(3,"span"),t.EFF(4),t.k0s(),t.j41(5,"button",33),t.bIt("click",function(){t.eBV(e);const s=t.XpG(2);return t.Njj(s.goToDetailsPage(s.detailscurrentPage+1))}),t.EFF(6,"Next"),t.k0s()()}if(2&a){const e=t.XpG(2);t.R7$(),t.Y8G("disabled",1===e.detailscurrentPage),t.R7$(3),t.Lme("Page ",e.detailscurrentPage," of ",e.detailstotalPages,""),t.R7$(),t.Y8G("disabled",e.detailscurrentPage===e.detailstotalPages)}}function O(a,r){if(1&a){const e=t.RV6();t.j41(0,"div",34)(1,"div",35)(2,"h4",36),t.EFF(3,"Item Sold Details"),t.k0s(),t.j41(4,"button",37),t.bIt("click",function(){const s=t.eBV(e).$implicit;return t.Njj(s.dismiss("Cross click"))}),t.k0s()(),t.j41(5,"div",38),t.DNE(6,R,4,0,"div",3)(7,k,12,2,"div",4),t.j41(8,"div",5)(9,"input",6),t.mxI("ngModelChange",function(s){t.eBV(e);const n=t.XpG();return t.DH7(n.detailssearchTerm,s)||(n.detailssearchTerm=s),t.Njj(s)}),t.bIt("input",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.searchDetails())}),t.k0s(),t.j41(10,"select",7),t.mxI("ngModelChange",function(s){t.eBV(e);const n=t.XpG();return t.DH7(n.detailssearchCriteria,s)||(n.detailssearchCriteria=s),t.Njj(s)}),t.bIt("change",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.searchDetails())}),t.j41(11,"option",8),t.EFF(12,"Item Code"),t.k0s()()(),t.DNE(13,P,4,0,"div",3)(14,M,51,17,"div",10)(15,x,7,4,"div",11),t.k0s()()}if(2&a){const e=t.XpG();t.R7$(6),t.Y8G("ngIf",e.loadingdetails),t.R7$(),t.Y8G("ngIf",!e.loadingdetails),t.R7$(2),t.R50("ngModel",e.detailssearchTerm),t.R7$(),t.R50("ngModel",e.detailssearchCriteria),t.R7$(3),t.Y8G("ngIf",e.loadingdetails),t.R7$(),t.Y8G("ngIf",!e.loadingdetails),t.R7$(),t.Y8G("ngIf",!e.loading&&e.displayeddetails.length>0)}}let G=(()=>{class a{constructor(e,i,s,n){this.modalService=e,this.salescCartService=i,this.pettycashService=s,this.datePipe=n,this.sales=[],this.displayedSales=[],this.filteredSales=[],this.loading=!1,this.currentPage=1,this.pageSize=10,this.totalPages=1,this.searchTerm="",this.searchCriteria="scitemcode",this.clickedRowIndex=null,this.selectedItem=null,this.modalRef=null,this.startDate="",this.endDate="",this.noSales=!1,this.details=[],this.displayeddetails=[],this.filtereddetails=[],this.loadingdetails=!1,this.detailscurrentPage=1,this.detailspageSize=5,this.detailstotalPages=1,this.detailssearchTerm="",this.detailssearchCriteria="scitemcode",this.detailsstartDate="",this.detailsendDate="",this.nodetails=!1,this.cashInTotal=0,this.cashOutTotal=0,this.pettylogs=[],this.filteredpettylogs=[]}ngOnInit(){this.loadItemSold().then(()=>{const e=new Date;this.startDate=this.formatDate(e),this.endDate=this.formatDate(e),this.searchSales()})}formatDate(e){return this.datePipe.transform(e,"yyyy-MM-dd")||""}loadItemSold(){return this.loading=!0,new Promise((e,i)=>{this.salescCartService.getItemSold().subscribe(s=>{this.sales=s,this.filteredSales=this.sales.filter(n=>this.formatDate(n.scdate)===this.formatDate(new Date)),this.totalPages=Math.ceil(this.filteredSales.length/this.pageSize),this.noSales=0===this.filteredSales.length,this.updateDisplayedSales(),this.loading=!1,e()},s=>{this.loading=!1,this.noSales=!0,console.error("Error fetching Item Sold",s),i(s)})})}updateDisplayedSales(){const e=(this.currentPage-1)*this.pageSize;this.displayedSales=this.filteredSales.slice(e,e+this.pageSize)}goToPage(e){e>=1&&e<=this.totalPages&&(this.currentPage=e,this.updateDisplayedSales())}searchSales(){this.filteredSales=this.sales.filter(i=>{const s=i[this.searchCriteria]?.toLowerCase().includes(this.searchTerm.toLowerCase()),n=!this.startDate||new Date(i.scdate)>=new Date(this.startDate),l=!this.endDate||new Date(i.scdate)<=new Date(this.endDate);return s&&n&&l});const e=this.filteredSales.reduce((i,s)=>{const{scitemcode:n,scqty:l}=s;return i[n]||(i[n]={...s,scqty:0}),i[n].scqty+=l,i},{});this.filteredSales=Object.values(e),this.totalPages=Math.ceil(this.filteredSales.length/this.pageSize),this.currentPage=1,this.updateDisplayedSales()}showAllSales(){this.loading=!0,this.salescCartService.getItemSold().subscribe(e=>{this.sales=e;const i=this.sales.reduce((s,n)=>{const{scitemcode:l,scqty:o}=n;return s[l]||(s[l]={...n,scqty:0}),s[l].scqty+=o,s},{});this.filteredSales=Object.values(i),this.totalPages=Math.ceil(this.filteredSales.length/this.pageSize),this.currentPage=1,this.updateDisplayedSales(),this.loading=!1,this.startDate="",this.endDate=""},e=>{this.loading=!1,console.error("Error fetching sales",e)})}getTotalsales(){return this.filteredSales.filter(e=>"PAID"===e.scstats).reduce((e,i)=>e+i.scqty,0)}getTotalSizes(){return this.filteredSales.filter(e=>"PAID"===e.scstats).reduce((e,i)=>{if(!i.scpackage)return e;const s=parseFloat(i.scpackage.replace(/[^\d.]/g,""));return e+(isNaN(s)?0:s)},0)}openDetailsModal(){this.loadItemSoldDetails().then(()=>{const e=new Date;this.detailsstartDate=this.formatDate(e),this.detailsendDate=this.formatDate(e),this.searchDetails()}),this.fetchCashInCashout(),this.modalRef=this.modalService.open(this.DetailsModal,{centered:!0,size:"lg"}),this.modalRef.result.finally(()=>null)}loadItemSoldDetails(){return this.loadingdetails=!0,new Promise((e,i)=>{this.salescCartService.getItemSoldDetails().subscribe(s=>{this.details=s,this.filtereddetails=this.details.filter(n=>this.formatDate(n.scdate)===this.formatDate(new Date)),this.detailstotalPages=Math.ceil(this.filtereddetails.length/this.detailspageSize),this.nodetails=0===this.filtereddetails.length,this.updateDisplayedDetails(),this.loadingdetails=!1,e()},s=>{this.loadingdetails=!1,this.nodetails=!0,console.error("Error fetching Item Sold Details",s),i(s)})})}updateDisplayedDetails(){const e=(this.detailscurrentPage-1)*this.detailspageSize;this.displayeddetails=this.filtereddetails.slice(e,e+this.detailspageSize)}searchDetails(){this.filtereddetails=this.details.filter(i=>{const s=i[this.detailssearchCriteria]?.toLowerCase().includes(this.detailssearchTerm.toLowerCase()),n=!this.detailsstartDate||new Date(i.scdate)>=new Date(this.detailsstartDate),l=!this.detailsendDate||new Date(i.scdate)<=new Date(this.detailsendDate);return s&&n&&l});const e=this.filtereddetails.reduce((i,s)=>{const{scitemcode:n,scqty:l,scunit:o,scprice:_}=s;return i[n]||(i[n]={...s,refill:0,refillprice:0,nonrefill:0,nonrefillprice:0}),"REFILL"===o?(i[n].refill+=l,i[n].refillprice=Math.max(i[n].refillprice,_)):"NON-REFILL"===o&&(i[n].nonrefill+=l,i[n].nonrefillprice=Math.max(i[n].nonrefillprice,_)),i},{});this.filtereddetails=Object.values(e),this.detailstotalPages=Math.ceil(this.filtereddetails.length/this.detailspageSize),this.detailscurrentPage=1,this.updateDisplayedDetails(),this.filterDataByDate()}goToDetailsPage(e){e>=1&&e<=this.detailstotalPages&&(this.detailscurrentPage=e,this.updateDisplayedDetails())}getTotalRefillQuantity(){return this.filtereddetails.reduce((e,i)=>e+i.refill,0)}getTotalNonRefillQuantity(){return this.filtereddetails.reduce((e,i)=>e+i.nonrefill,0)}fetchCashInCashout(){this.loadingdetails=!0,this.pettycashService.getPettyLogs().subscribe(e=>{this.pettylogs=e,this.loadingdetails=!1},e=>{console.error("Error fetching petty cash logs",e),this.loadingdetails=!1})}filterDataByDate(){if(!this.detailsstartDate&&!this.detailsendDate)return void(this.filteredpettylogs=[...this.pettylogs]);const e=this.detailsstartDate?new Date(this.detailsstartDate):new Date(-864e13),i=this.detailsendDate?new Date(this.detailsendDate):new Date(864e13);this.filteredpettylogs=this.pettylogs.filter(s=>{const n=new Date(s.pettylogdate);return n>=e&&n<=i}),this.calculateCashInCashOut(this.filteredpettylogs)}calculateCashInCashOut(e){this.cashInTotal=e.filter(i=>"CASH IN"===i.pettylogtype).reduce((i,s)=>i+(s.pettylogamount||0),0),this.cashOutTotal=e.filter(i=>"CASH OUT"===i.pettylogtype).reduce((i,s)=>i+(s.pettylogamount||0),0)}getTotalAmount(){return this.filtereddetails.reduce((e,i)=>e+(i.refill*i.refillprice+i.nonrefill*i.nonrefillprice),0)}getFinalTotal(){return this.getTotalAmount()+this.cashInTotal-this.cashOutTotal}showAll(){this.filtereddetails=this.details;const e=this.filtereddetails.reduce((i,s)=>{const{scitemcode:n,scqty:l,scunit:o,scprice:_}=s;return i[n]||(i[n]={...s,refill:0,refillprice:0,nonrefill:0,nonrefillprice:0}),"REFILL"===o?(i[n].refill+=l,i[n].refillprice=Math.max(i[n].refillprice,_)):"NON-REFILL"===o&&(i[n].nonrefill+=l,i[n].nonrefillprice=Math.max(i[n].nonrefillprice,_)),i},{});this.filtereddetails=Object.values(e),this.detailstotalPages=Math.ceil(this.filtereddetails.length/this.detailspageSize),this.detailscurrentPage=1,this.updateDisplayedDetails(),this.showAllCash(),this.detailsstartDate="",this.detailsendDate=""}showAllCash(){this.calculateCashInCashOut(this.pettylogs)}static#t=this.\u0275fac=function(i){return new(i||a)(t.rXU(m.Bq),t.rXU(u.J),t.rXU(f.s),t.rXU(c.vh))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-itemsold"]],viewQuery:function(i,s){if(1&i&&t.GBs(I,5),2&i){let n;t.mGM(n=t.lsd())&&(s.DetailsModal=n.first)}},standalone:!0,features:[t.Jv_([c.vh]),t.aNF],decls:20,vars:8,consts:[["DetailsModal",""],[1,"col-xl-12"],["cardTitle","Item Sold","blockClass","table-border-style",3,"options"],["class","loading-overlay",4,"ngIf"],["class","row mb-3 align-items-end",4,"ngIf"],[1,"search-container"],["type","text","placeholder","Search sales...",1,"form-control","search-input",3,"ngModelChange","input","ngModel"],[1,"form-control","search-criteria",3,"ngModelChange","change","ngModel"],["value","scitemcode"],["value","scpackage"],["class","table-responsive",4,"ngIf"],["class","d-flex justify-content-between align-items-center mt-3",4,"ngIf"],[1,"modal-footer","justify-content-start"],[1,"btn","btn-success","mt-3",3,"click"],[1,"loading-overlay"],[1,"loading-spinner"],[1,"row","mb-3","align-items-end"],[1,"col-12","col-md-4"],["for","startDate",1,"form-label"],["type","date","id","startDate",1,"form-control",3,"ngModelChange","change","ngModel"],["for","endDate",1,"form-label"],["type","date","id","endDate",1,"form-control",3,"ngModelChange","change","ngModel"],[1,"col-12","col-md-4","text-end"],[1,"btn","btn-secondary","mt-3","mt-md-0",3,"click"],[1,"table-responsive"],[1,"table","table-styling"],[1,"table-primary"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"text-start"],["colspan","2",1,"text-end"],["colspan","2",1,"text-center"],[1,"d-flex","justify-content-between","align-items-center","mt-3"],[1,"btn","btn-dark",3,"click","disabled"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],["for","detailsstartDate",1,"form-label"],["type","date","id","detailsstartDate",1,"form-control",3,"ngModelChange","change","ngModel"],["for","detailsendDate",1,"form-label"],["type","date","id","detailsendDate",1,"form-control",3,"ngModelChange","change","ngModel"],[1,"text-end",2,"white-space","nowrap"],["colspan","5",1,"text-end",2,"white-space","nowrap"],["colspan","7",1,"text-end",2,"white-space","nowrap"]],template:function(i,s){if(1&i){const n=t.RV6();t.j41(0,"div",1)(1,"app-card",2),t.DNE(2,F,4,0,"div",3)(3,j,12,2,"div",4),t.j41(4,"div",5)(5,"input",6),t.mxI("ngModelChange",function(o){return t.eBV(n),t.DH7(s.searchTerm,o)||(s.searchTerm=o),t.Njj(o)}),t.bIt("input",function(){return t.eBV(n),t.Njj(s.searchSales())}),t.k0s(),t.j41(6,"select",7),t.mxI("ngModelChange",function(o){return t.eBV(n),t.DH7(s.searchCriteria,o)||(s.searchCriteria=o),t.Njj(o)}),t.bIt("change",function(){return t.eBV(n),t.Njj(s.searchSales())}),t.j41(7,"option",8),t.EFF(8,"Item Code"),t.k0s(),t.j41(9,"option",9),t.EFF(10,"Size"),t.k0s()()(),t.DNE(11,C,4,0,"div",3)(12,y,28,8,"div",10)(13,T,7,4,"div",11),t.j41(14,"div",12)(15,"button",13),t.bIt("click",function(){return t.eBV(n),t.Njj(s.openDetailsModal())}),t.j41(16,"strong"),t.EFF(17,"DETAILS"),t.k0s()()()()(),t.DNE(18,O,16,7,"ng-template",null,0,t.C5r)}2&i&&(t.R7$(),t.Y8G("options",!1),t.R7$(),t.Y8G("ngIf",s.loading),t.R7$(),t.Y8G("ngIf",!s.loading),t.R7$(2),t.R50("ngModel",s.searchTerm),t.R7$(),t.R50("ngModel",s.searchCriteria),t.R7$(5),t.Y8G("ngIf",s.loading),t.R7$(),t.Y8G("ngIf",!s.loading),t.R7$(),t.Y8G("ngIf",!s.loading&&s.displayedSales.length>0))},dependencies:[g.G,c.Sq,c.bT,h.xH,h.y7,h.me,h.wz,h.BC,h.vS,D.i,c.QX,c.oe],styles:[".search-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:15px}.search-input[_ngcontent-%COMP%]{flex:1;padding:10px;font-size:16px;border-radius:5px;border:1px solid #ccc;transition:border-color .3s;margin-right:10px}.search-input[_ngcontent-%COMP%]:focus{border-color:#007bff;outline:none}.search-criteria[_ngcontent-%COMP%]{padding:10px 30px 10px 10px;font-size:16px;border-radius:5px;border:1px solid #ccc;transition:border-color .3s;width:auto;min-width:150px;white-space:nowrap}.search-criteria[_ngcontent-%COMP%]:focus{border-color:#b0cfee;outline:none}.table-styling[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.table-styling[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .3s}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:#fffc;display:flex;justify-content:center;align-items:center;z-index:1000}.loading-spinner[_ngcontent-%COMP%]{text-align:center;font-size:16px;color:#333}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})}return a})()}}]);