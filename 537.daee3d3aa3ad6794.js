"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[537],{7537:(D,u,l)=>{l.r(u),l.d(u,{default:()=>x});var d=l(177),m=l(2389),e=l(3953),h=l(584),g=l(7004),p=l(3525),c=l(4341),C=l(3413);const f=["customerDetailModal"];function F(s,o){1&s&&(e.j41(0,"div",11)(1,"div",12)(2,"p"),e.EFF(3,"Loading..."),e.k0s()()())}function P(s,o){1&s&&(e.j41(0,"div",11)(1,"div",12)(2,"p"),e.EFF(3,"Loading..."),e.k0s()()())}function b(s,o){if(1&s){const t=e.RV6();e.j41(0,"tr",19),e.bIt("click",function(){const n=e.eBV(t),i=n.$implicit,_=n.index,r=e.XpG(2);return e.Njj(r.openCustomerDetailModal(i,_))}),e.j41(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td"),e.EFF(4),e.k0s(),e.j41(5,"td"),e.EFF(6),e.k0s(),e.j41(7,"td"),e.EFF(8),e.k0s(),e.j41(9,"td"),e.EFF(10),e.nI1(11,"currency"),e.k0s()()}if(2&s){const t=o.$implicit,a=o.index,n=e.XpG(2);e.AVh("selected",a===n.clickedRowIndex),e.R7$(2),e.JRh(t.custname),e.R7$(2),e.JRh(t.custadd),e.R7$(2),e.JRh(t.custemail),e.R7$(2),e.JRh(t.custcontnum),e.R7$(2),e.JRh(e.brH(11,7,t.custbalance,"PHP",!0))}}function v(s,o){1&s&&(e.j41(0,"tr")(1,"td",20),e.EFF(2,"No customers available"),e.k0s()())}function j(s,o){if(1&s&&(e.j41(0,"div",13)(1,"table",14)(2,"thead")(3,"tr",15)(4,"th"),e.EFF(5,"Customer Name"),e.k0s(),e.j41(6,"th"),e.EFF(7,"Address"),e.k0s(),e.j41(8,"th"),e.EFF(9,"Gas"),e.k0s(),e.j41(10,"th"),e.EFF(11,"Contact Number"),e.k0s(),e.j41(12,"th"),e.EFF(13,"Balance"),e.k0s()()(),e.j41(14,"tbody"),e.DNE(15,b,12,11,"tr",16)(16,v,3,0,"tr",17),e.k0s(),e.j41(17,"tfoot")(18,"tr",15)(19,"td",18),e.EFF(20,"Total Balance:"),e.k0s(),e.j41(21,"td"),e.EFF(22),e.nI1(23,"currency"),e.k0s()()()()()),2&s){const t=e.XpG();e.R7$(15),e.Y8G("ngForOf",t.displayedCustomers),e.R7$(),e.Y8G("ngIf",0===t.displayedCustomers.length),e.R7$(6),e.JRh(e.brH(23,3,t.totalBalance,"PHP",!0))}}function E(s,o){if(1&s){const t=e.RV6();e.j41(0,"div",21)(1,"button",22),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.goToPage(n.currentPage-1))}),e.EFF(2," Previous "),e.k0s(),e.j41(3,"span"),e.EFF(4),e.k0s(),e.j41(5,"button",22),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.goToPage(n.currentPage+1))}),e.EFF(6," Next "),e.k0s()()}if(2&s){const t=e.XpG();e.R7$(),e.Y8G("disabled",1===t.currentPage),e.R7$(3),e.Lme("Page ",t.currentPage," of ",t.totalPages,""),e.R7$(),e.Y8G("disabled",t.currentPage===t.totalPages)}}function k(s,o){1&s&&(e.j41(0,"div",29)(1,"div",30)(2,"span",31),e.EFF(3,"Loading..."),e.k0s()()())}function R(s,o){1&s&&(e.j41(0,"div"),e.EFF(1,"No Unpaid Transaction"),e.k0s())}function T(s,o){if(1&s&&(e.j41(0,"tr")(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td"),e.EFF(4),e.k0s(),e.j41(5,"td"),e.EFF(6),e.k0s(),e.j41(7,"td"),e.EFF(8),e.k0s(),e.j41(9,"td"),e.EFF(10),e.nI1(11,"currency"),e.k0s(),e.j41(12,"td"),e.EFF(13),e.nI1(14,"currency"),e.k0s(),e.j41(15,"td"),e.EFF(16),e.k0s(),e.j41(17,"td"),e.EFF(18),e.k0s()()),2&s){const t=o.$implicit,a=e.XpG(4);e.R7$(2),e.JRh(a.formatDate(t.salesdate)),e.R7$(2),e.JRh(t.salesrefnum),e.R7$(2),e.JRh(t.salescat),e.R7$(2),e.JRh(t.salestotalitem),e.R7$(2),e.JRh(e.i5U(11,8,t.salestotalamount,"PHP")),e.R7$(3),e.JRh(e.i5U(14,11,t.salestender,"PHP")),e.R7$(3),e.JRh(t.salespaym),e.R7$(2),e.JRh(t.salestatus)}}function y(s,o){if(1&s&&(e.j41(0,"table",14)(1,"thead")(2,"tr",15)(3,"th"),e.EFF(4,"Date"),e.k0s(),e.j41(5,"th"),e.EFF(6,"Reference Number"),e.k0s(),e.j41(7,"th"),e.EFF(8,"Category"),e.k0s(),e.j41(9,"th"),e.EFF(10,"Total Items"),e.k0s(),e.j41(11,"th"),e.EFF(12,"Total Amount"),e.k0s(),e.j41(13,"th"),e.EFF(14,"Tendered Amount"),e.k0s(),e.j41(15,"th"),e.EFF(16,"Payment Method"),e.k0s(),e.j41(17,"th"),e.EFF(18,"Remarks"),e.k0s()()(),e.j41(19,"tbody"),e.DNE(20,T,19,14,"tr",33),e.k0s(),e.j41(21,"tfoot")(22,"tr",15)(23,"td",34),e.EFF(24,"Total Balance:"),e.k0s(),e.j41(25,"td"),e.EFF(26),e.nI1(27,"currency"),e.k0s()()()()),2&s){const t=e.XpG(3);e.R7$(20),e.Y8G("ngForOf",t.displayedSalesDetails),e.R7$(6),e.JRh(e.brH(27,2,null==t.selectedItem?null:t.selectedItem.custbalance,"PHP",!0))}}function B(s,o){if(1&s){const t=e.RV6();e.j41(0,"div",21)(1,"button",22),e.bIt("click",function(){e.eBV(t);const n=e.XpG(3);return e.Njj(n.goToSalesPage(n.salesCurrentPage-1))}),e.EFF(2,"Previous"),e.k0s(),e.j41(3,"span"),e.EFF(4),e.k0s(),e.j41(5,"button",22),e.bIt("click",function(){e.eBV(t);const n=e.XpG(3);return e.Njj(n.goToSalesPage(n.salesCurrentPage+1))}),e.EFF(6,"Next"),e.k0s()()}if(2&s){const t=e.XpG(3);e.R7$(),e.Y8G("disabled",1===t.salesCurrentPage),e.R7$(3),e.Lme("Page ",t.salesCurrentPage," of ",t.salesTotalPages,""),e.R7$(),e.Y8G("disabled",t.salesCurrentPage===t.salesTotalPages)}}function I(s,o){if(1&s&&(e.j41(0,"div",13),e.DNE(1,R,2,0,"div",17)(2,y,28,6,"table",32)(3,B,7,4,"div",10),e.k0s()),2&s){const t=e.XpG(2);e.R7$(),e.Y8G("ngIf",t.noTransactions),e.R7$(),e.Y8G("ngIf",!t.noTransactions),e.R7$(),e.Y8G("ngIf",!t.noTransactions)}}function M(s,o){if(1&s){const t=e.RV6();e.j41(0,"div",23)(1,"div",24)(2,"h4",25),e.EFF(3,"Customer Unpaid Transactions"),e.k0s(),e.j41(4,"button",26),e.bIt("click",function(){const n=e.eBV(t).$implicit;return e.Njj(n.dismiss("Cross click"))}),e.k0s()(),e.j41(5,"div",27),e.DNE(6,k,4,0,"div",28)(7,I,4,3,"div",9),e.k0s()()}if(2&s){const t=e.XpG();e.R7$(6),e.Y8G("ngIf",t.isLoading),e.R7$(),e.Y8G("ngIf",!t.isLoading)}}let x=(()=>{class s{constructor(t,a,n,i){this.customerService=t,this.salesService=a,this.modalService=n,this.datePipe=i,this.customers=[],this.displayedCustomers=[],this.filteredCustomers=[],this.loading=!1,this.currentPage=1,this.pageSize=10,this.totalPages=1,this.searchTerm="",this.searchCriteria="custname",this.totalBalance=0,this.clickedRowIndex=null,this.selectedItem=null,this.modalRef=null,this.customerDetails=[],this.salesDetails=[],this.displayedSalesDetails=[],this.salesCurrentPage=1,this.salesPageSize=5,this.salesTotalPages=1,this.noTransactions=!1,this.isLoading=!1}ngOnInit(){this.loadCustomers()}formatDate(t){return this.datePipe.transform(t,"yyyy-MM-dd")||""}loadCustomers(){this.loading=!0,this.customerService.getCustomerBalance().subscribe(t=>{this.customers=t,this.filteredCustomers=this.customers,this.totalPages=Math.ceil(this.filteredCustomers.length/this.pageSize),this.updateDisplayedCustomers(),this.calculateTotalBalance(),this.loading=!1},t=>{this.loading=!1,console.error("Error fetching customers",t)})}updateDisplayedCustomers(){const t=(this.currentPage-1)*this.pageSize;this.displayedCustomers=this.filteredCustomers.slice(t,t+this.pageSize)}goToPage(t){t>=1&&t<=this.totalPages&&(this.currentPage=t,this.updateDisplayedCustomers())}searchCustomers(){this.filteredCustomers=this.customers.filter(t=>t[this.searchCriteria]?.toLowerCase().includes(this.searchTerm.toLowerCase())),this.totalPages=Math.ceil(this.filteredCustomers.length/this.pageSize),this.currentPage=1,this.updateDisplayedCustomers(),this.calculateTotalBalance()}calculateTotalBalance(){this.totalBalance=this.filteredCustomers.reduce((t,a)=>t+(a.custbalance||0),0)}openCustomerDetailModal(t,a){this.clickedRowIndex=a,this.selectedItem=t,this.isLoading=!0,this.fetchSalesTransactions(t.custid),this.modalRef=this.modalService.open(this.customerDetailModal,{centered:!0,size:"lg"}),this.modalRef.result.finally(()=>this.resetSelection())}fetchSalesTransactions(t){this.salesService.getSalesByCustID(t,"UNPAID").subscribe(a=>{this.salesDetails=a,this.salesTotalPages=Math.ceil(this.salesDetails.length/this.salesPageSize),this.salesCurrentPage=1,this.noTransactions=0===this.salesDetails.length,this.updateSalesDisplayed(),this.isLoading=!1},a=>{this.noTransactions=!0,this.isLoading=!1,console.error("Error fetching sales transactions",a)})}updateSalesDisplayed(){const t=(this.salesCurrentPage-1)*this.salesPageSize;this.displayedSalesDetails=this.salesDetails.slice(t,t+this.salesPageSize)}goToSalesPage(t){t>=1&&t<=this.salesTotalPages&&(this.salesCurrentPage=t,this.updateSalesDisplayed())}resetSelection(){this.clickedRowIndex=null,this.selectedItem=null}static#e=this.\u0275fac=function(a){return new(a||s)(e.rXU(h.B),e.rXU(g.j),e.rXU(p.Bq),e.rXU(d.vh))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["app-customer-balance"]],viewQuery:function(a,n){if(1&a&&e.GBs(f,5),2&a){let i;e.mGM(i=e.lsd())&&(n.customerDetailModal=i.first)}},standalone:!0,features:[e.Jv_([d.vh]),e.aNF],decls:15,vars:7,consts:[["customerDetailModal",""],[1,"col-xl-12"],["cardTitle","Customer List","blockClass","table-border-style",3,"options"],["class","loading-overlay",4,"ngIf"],[1,"search-container"],["type","text","placeholder","Search customers...",1,"form-control","search-input",3,"ngModelChange","input","ngModel"],[1,"form-control","search-criteria",3,"ngModelChange","change","ngModel"],["value","custname"],["value","custadd"],["class","table-responsive",4,"ngIf"],["class","d-flex justify-content-between align-items-center mt-3",4,"ngIf"],[1,"loading-overlay"],[1,"loading-spinner"],[1,"table-responsive"],[1,"table","table-styling"],[1,"table-primary"],[3,"selected","click",4,"ngFor","ngForOf"],[4,"ngIf"],["colspan","4",1,"text-right"],[3,"click"],["colspan","6",1,"text-center"],[1,"d-flex","justify-content-between","align-items-center","mt-3"],[1,"btn","btn-dark",3,"click","disabled"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],["class","text-center my-5",4,"ngIf"],[1,"text-center","my-5"],["role","status",1,"spinner-border"],[1,"visually-hidden"],["class","table table-styling",4,"ngIf"],[4,"ngFor","ngForOf"],["colspan","7",1,"text-right"]],template:function(a,n){if(1&a){const i=e.RV6();e.j41(0,"div",1)(1,"app-card",2),e.DNE(2,F,4,0,"div",3),e.j41(3,"div",4)(4,"input",5),e.mxI("ngModelChange",function(r){return e.eBV(i),e.DH7(n.searchTerm,r)||(n.searchTerm=r),e.Njj(r)}),e.bIt("input",function(){return e.eBV(i),e.Njj(n.searchCustomers())}),e.k0s(),e.j41(5,"select",6),e.mxI("ngModelChange",function(r){return e.eBV(i),e.DH7(n.searchCriteria,r)||(n.searchCriteria=r),e.Njj(r)}),e.bIt("change",function(){return e.eBV(i),e.Njj(n.searchCustomers())}),e.j41(6,"option",7),e.EFF(7,"Name"),e.k0s(),e.j41(8,"option",8),e.EFF(9,"Address"),e.k0s()()(),e.DNE(10,P,4,0,"div",3)(11,j,24,7,"div",9)(12,E,7,4,"div",10),e.k0s()(),e.DNE(13,M,8,2,"ng-template",null,0,e.C5r)}2&a&&(e.R7$(),e.Y8G("options",!1),e.R7$(),e.Y8G("ngIf",n.loading),e.R7$(2),e.R50("ngModel",n.searchTerm),e.R7$(),e.R50("ngModel",n.searchCriteria),e.R7$(5),e.Y8G("ngIf",n.loading),e.R7$(),e.Y8G("ngIf",!n.loading),e.R7$(),e.Y8G("ngIf",!n.loading&&n.displayedCustomers.length>0))},dependencies:[m.G,d.Sq,d.bT,c.xH,c.y7,c.me,c.wz,c.BC,c.vS,C.i,d.oe],styles:[".search-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:15px}.search-input[_ngcontent-%COMP%]{flex:1;padding:10px;font-size:16px;border-radius:5px;border:1px solid #ccc;transition:border-color .3s;margin-right:10px}.search-input[_ngcontent-%COMP%]:focus{border-color:#007bff;outline:none}.search-criteria[_ngcontent-%COMP%]{width:150px;padding:10px;font-size:16px;border-radius:5px;border:1px solid #ccc;transition:border-color .3s}.search-criteria[_ngcontent-%COMP%]:focus{border-color:#b0cfee;outline:none}.table-styling[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.table-styling[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .3s}.table-styling[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%]{background-color:#d1ecf1;color:#0c5460}.table-styling[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d8eef1f4;cursor:pointer}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:#fffc;display:flex;justify-content:center;align-items:center;z-index:1000}.loading-spinner[_ngcontent-%COMP%]{text-align:center;font-size:16px;color:#333}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})}return s})()}}]);