window.LANSA.addSrc("text",function(e,c,a,b){a.NU={xQ:2,vob:1,dea:2,zob:4};c.BXb=function(){h.w.call(this);this.kk=a.NU.xQ;this.zg="";this.Rc=b.Cd(10,10,120,50);this.Lc=this.Lc|a.Sb.vY|a.Sb.DLa|a.Sb.Baa|a.Sb.gB};var h=c.u(c.BXb,c.Pt);h.U=function(){h.j.U.call(this)};h.Cg=function(){return c.lZb};h.Jo=function(){return this.zg};h.oM=function(b){this.zg!=b&&(this.zg=b,this.fa(a.a.g))};h.ck=function(b){b=this.kk&~a.NU.vob|(b?a.NU.vob:0);this.kk!=b&&(this.kk=b,this.fa(a.a.g))};h.bg=function(){return 0!=
(this.kk&a.NU.vob)?!0:!1};h.vh=function(b){b=this.kk&~a.NU.dea|(b?a.NU.dea:0);this.kk!=b&&(this.kk=b,this.fa(a.a.g))};h.cg=function(){return 0!=(this.kk&a.NU.dea)?!0:!1};h.FU=function(b){b=this.kk&~a.NU.zob|(b?a.NU.zob:0);this.kk!=b&&(this.kk=b,this.fa(a.a.g))};h.zF=function(){return 0!=(this.kk&a.NU.zob)?!0:!1};h.ae=function(b){""==b[0]&&(b[0]=a.Faa);h.j.ae.call(this,b)};h.Xi=function(){this.WF();this.gH(a.Sb.vY,!this.Mi());b.Ra().Ry(this)};h.vT=function(){return this.iq()||this.aK?!1:!0};h.R8=h[a.R.yY]=
function(a){a.Zc[0]=this.Mi()};h.zc=function(b){b&&(this.ri(!0),this.Yc()||(this.po(),this.za(a.K.fh)))};h.TW=h[a.Da.uJ]=function(b){b.Be=a.Da.H8|a.Da.Isa};e.gd(c.BXb,"PRIM_TEXT",{Wa:{Text:{f:h.Jo,i:function(a){this.oM(e.ma(a))}},ReadOnly:{f:h.bg,i:function(a){this.ck(e.Ha(a))}},WordWrap:{f:h.cg,i:function(a){this.vh(e.Ha(a))}},SpellCheck:{f:h.zF,i:function(a){this.FU(e.Ha(a))}}},qg:{vg:"Text"}});c.lZb=function(a){t.w.call(this,a);this.cb="";this.C0=!1};var t=c.u(c.lZb,c.kl);t.Ka=function(){return this.v.value};
t.Va=function(a){this.cb==a||this.C0||(this.cb=a,this.v.value=a)};t.OKa=function(){return!1};t.QKa=function(){return!this.la.vT()||this.v.readOnly&&this.v.selectionStart==this.v.selectionEnd?!1:!0};t.zd=function(){t.j.zd.call(this);this.v.readOnly=this.la.bg();this.v.style.whiteSpace=this.la.cg()?"pre-wrap":"pre";this.v.spellcheck=this.la.zF();this.C0||(this.v.value=this.la.Jo())};t.Ve=function(a,b){this.v=document.createElement("textarea");this.v.setAttribute("LANSAHandle",this.fc);var c=this.v.style;
c.resize="none";c.whiteSpace="pre-wrap";c.background="rgba(0,0,0,0)";c.position="absolute";c.overflowX="hidden";c.overflowY="hidden";c.boxSizing="border-box";c.webkitBoxSizing="border-box";c.MozBoxSizing="border-box";c.borderStyle="solid";c.outline="none";c.borderLeftWidth="0px";c.borderTopWidth="0px";c.borderRightWidth="0px";c.borderBottomWidth="0px";return t.j.Ve.call(this,a,b)};t.jha=function(){var a=this.v.style;this.Mx();a.whiteSpace="pre";a.overflowX="auto";a.overflowY="auto";a.boxSizing="border-box";
a.webkitBoxSizing="border-box";a.MozBoxSizing="border-box";a.borderColor=this.Ok();a.borderTopWidth="1px";a.borderBottomWidth="1px";a.borderLeftWidth="1px";a.borderRightWidth="1px";a.fontSize="inherit";a.fontFamily="inherit"};t.xW=function(){var a=this;this.E1();a.v.addEventListener("input",function(b){a.Hpb(b)},!1);a.v.addEventListener("compositionstart",function(b){a.F_a(b)},!1);a.v.addEventListener("compositionend",function(b){a.E_a(b)},!1)};t.LL=function(a){t.j.LL.call(this,a);return this.la.Mi()};
t.f$b=function(){this.cbc||(this.la.zg=this.v.value,this.la.zc(!0))};t.Hpb=function(){this.f$b()};t.F_a=function(){this.cbc=!0};t.E_a=function(){this.cbc=!1;this.f$b()}});
