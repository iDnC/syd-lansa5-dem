window.LANSA.addSrc("video",function(e,c,a,b,h){var t,p;t={ALL:0,METADATA:1,NONE:2};p={auto:0,metadata:1,none:2};c.DMa=function(a){r.w.call(this);this.t0=this.ir="";this.Eea=a};var r=c.u(c.DMa,c.pd);r.U=function(){r.j.U.call(this)};r.hh=function(){return this.ir};r.Ou=function(a){this.ir=a};r.nX=function(){return this.t0==h?"":this.t0};r.wZ=function(a){this.t0=a};r.aq=function(){for(var a=0;a<this.Eea.Dc();a++)this.Eea.hq(a)===this&&this.Eea.Nr(a)};e.yb(c.DMa,"PRIM_VDEO","File",{Wa:{FileName:{f:r.hh,
i:function(a){this.Ou(e.ma(a))}},FileExtension:{f:r.nX,i:function(a){this.wZ(e.ma(a))}}},Gc:{Delete:r.aq},qg:{vg:"FileExtension"}});c.Icb=function(a){g.w.call(this);this.lec=a;this.eb=[]};var g=c.u(c.Icb,c.pd);g.Dc=function(){return this.eb.length};g.Ce=function(a){return this.hq(a)};g.hq=function(a){if(0>a||a>=this.eb.length)throw e.GD(a,this.eb.length);return this.eb[a]};g.dh=function(a,b){var e=new c.DMa(this);e.Ou(a);e.wZ(b);this.eb.push(e);(e=this.lec.Ma())&&e.Fq()};g.wua=function(){0==this.Dc()&&
this.eb.push(new c.DMa(this));return this.hq(0)};g.ak=function(){this.eb=[];var a=this.lec.Ma();a&&a.Fq()};g.Nr=function(a){if(null==this.hq(a))throw e.GD(a,this.eb.length);this.eb.splice(a,1)};g.oPc=function(a){for(var b=!1,c=0;c<this.Dc()&&!(b=this.hq(c).hh()==a);c++);b&&this.Nr(c)};e.yb(c.Icb,"PRIM_VDEO","Files",{Wa:{Item:{f:function(a){return this.hq(e.aa(a)-1)}}},Gc:{Add:g.dh,RemoveAll:g.ak,Remove:function(a){return this.Nr(e.aa(a)-1)}},oq:{wp:function(a){return this.hq(e.aa(a)-1)},Lw:function(){return this.Dc()}},
qg:{vg:"Item"}});c.YXb=function(){l.w.call(this);this.U_=0;this.I_=this.e1=!0;this.TR=1;this.av=new c.Icb(this);this.ui=-1;this.wR=this.Gfa=this.Ifa=!1;this.pA=50};var l=c.u(c.YXb,c.Pt);l.Cg=function(){return c.nZb};l.U=function(){l.j.U.call(this)};l.hh=function(){return 0<this.av.Dc()?this.av.hq(0).hh():""};l.Ou=function(b){this.av.ak();var c=this.av.wua();c.hh()!=b&&(c.Ou(b),(b=this.Ma())&&b.Fq(),this.l(a.a.g))};l.nX=function(){return 0<this.av.Dc()?this.av.hq(0).nX():""};l.wZ=function(b){var c=
this.av.wua();c.nX()!=b&&(c.wZ(b),(b=this.Ma())&&b.Fq(),this.l(a.a.g))};l.$vc=function(){return this.av};l.X4a=function(){return this.U_};l.Mib=function(b){this.U_!=b&&(this.U_=b,(b=this.Ma())&&b.Fq(),this.l(a.a.g))};l.C5a=function(){return this.wR};l.r6a=function(){return this.e1};l.gkb=function(b){this.e1!=b&&(this.e1=b,(b=this.Ma())&&b.Fq(),this.l(a.a.g))};l.w4a=function(){return this.I_};l.sib=function(b){this.I_!=b&&(this.I_=b,(b=this.Ma())&&b.Fq(),this.l(a.a.g))};l.Pia=function(){return this.ui};
l.D5a=function(){return this.Ifa};l.B5a=function(){return this.Gfa};l.n7a=function(){return this.pA};l.yAa=function(c){c=b.Bf(c,0,100);this.pA!=c&&(this.pA=c,this.wR=0==this.pA,(c=this.Ma())&&c.Fq(),this.l(a.a.g))};l.Gyc=function(){return this.TR};l.Xjb=function(b){this.TR!=b&&(this.TR=b,(b=this.Ma())&&b.Fq(),this.l(a.a.g))};l.Play=function(){this.Ma()&&this.Ma().Play()};l.zj=function(){this.Ma()&&this.Ma().zj()};l.zfb=function(){this.yAa(0)};l.psc=function(){if(this.Ma()){var a=this.Ma().v;a.currentTime=
Math.min(a.duration,a.currentTime+5)}};l.osc=function(){if(this.Ma()){var a=this.Ma().v;0<a.currentTime&&(a.currentTime-=5)}};e.gd(c.YXb,"PRIM_VDEO",{Wa:{FileName:{f:l.hh,i:function(a){this.Ou(e.ma(a))}},CycleToStart:{f:l.X4a,i:function(a){this.Mib(e.Ha(a))}},ShowControls:{f:l.r6a,i:function(a){this.gkb(e.Ha(a))}},Autoplay:{f:l.w4a,i:function(a){this.sib(e.Ha(a))}},Preload:{f:function(){return e.Ja(this.TR,t)},i:function(a){this.Xjb(e.Ba(a,t))}},Duration:{f:l.Pia},IsMuted:{f:l.C5a},IsPlaying:{f:l.D5a},
IsEnded:{f:l.B5a},Volume:{f:l.n7a,i:function(a){this.yAa(e.aa(a))}}},Gc:{Play:l.Play,Stop:l.zj,Mute:l.zfb,FrameForward:l.psc,FrameBackward:l.osc}});c.nZb=function(a){s.w.call(this,a)};var s=c.u(c.nZb,c.kl);s.Ve=function(b,c){this.v=document.createElement("video");this.OCa=b+this.fc;this.v.setAttribute("id",this.OCa);this.v.setAttribute("LANSAHandle",this.fc);this.v.style.position="absolute";this.v.style.overflow="hidden";this.v.style.whiteSpace="nowrap";this.Fq();var e=this.v,g=this;e.addEventListener("loadedmetadata",
function(){g.la.ui=e.duration;g.la.za(a.K.kQb)},!1);e.addEventListener("loadeddata",function(){g.la.za(a.K.jQb)},!1);e.addEventListener("play",function(){g.la.Ifa=!0;g.la.Gfa=!1;g.la.za(a.K.k0b)},!1);e.addEventListener("pause",function(){g.la.Ifa=!1;g.la.za(a.K.s6b)},!1);e.addEventListener("ended",function(){g.v.pause();g.v.paused=!0;g.la.Gfa=!0;g.la.za(a.K.Zy)},!1);e.addEventListener("volumechange",function(){e.muted||0==e.volume?(g.v.muted=!0,g.la.wR=!0,g.la.pA=0,g.la.za(a.K.k_b)):(g.la.wR=!1,g.la.pA=
Math.round(100*e.volume))},!1);return s.j.Ve.call(this,b,c)};s.Fq=function(){this.Pma("controls",this.la.e1);this.Pma("autoplay",this.la.I_);this.Pma("loop",this.la.U_);this.v.setAttribute("preload",e.Ja(this.la.TR,p));this.v.volume=0<this.la.pA?this.la.pA/100:0;this.v.muted=this.la.wR;this.npb()};s.npb=function(){this.xhb();var a=this.la.av.Dc();if(0!=a)for(var b=0;b<a;b++){var c=this.la.av.hq(b);this.lfc(this.v,c.ir,c.t0)}};s.lfc=function(a,b,c){var e=document.createElement("source");e.src=b;c&&
(e.type="video/"+c);a.appendChild(e)};s.xhb=function(){var a=document.getElementById(this.OCa);if(a&&(a=a.childNodes)){var b,c,e=[];for(c=0;c<a.length;c++)b=a[c],"SOURCE"==b.nodeName&&e.push(b);for(c=0;c<e.length;c++)b=e[c],b.parentNode.removeChild(b)}};s.LL=function(){return!1};s.wNa=function(){};s.Play=function(){this.v.play!==h&&this.v.play()};s.zj=function(){this.v.pause!==h&&this.v.pause()}});
