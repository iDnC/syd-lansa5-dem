﻿LANSA.addComponent({id:"DF_PRM01O",ot:"rp",tp:"Reusable Part",de:"\OC=5250 Prompter - 1 - Drop down",tl:14015000},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_DESC",ft:"A",ln:30,dc:0,lb:"Description",h1:"Description",h2:" ",h3:" ",de:{"ENG":"Standard DESCRIPTION","FRA":"Description Standard","JPN":"Standard DESCRIPTION"}[cL],dv:"",ia:["LC"]},F2:{nm:"STD_CODE",ft:"A",ln:3,dc:0,lb:"Code",h1:"Code",h2:" ",h3:" ",de:{"ENG":"Standard CODE","FRA":"Code Standard","JPN":"Standard CODE"}[cL],
dv:"",ia:["FE"]},F3:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F4:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status"}[cL],
h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC017O",fd:Fd,mt:{uInitialize:{},uShow:{ps:{"Top":{pt:"i"},"Left":{pt:"i"},"Height":{pt:"i"},"Width":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("DF_PRM01O",Fd);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("DROPDOWN1ITEM1","PRIM_TBLO","Item");
var C4=this.cR("DROPDOWN1","PRIM_LIST","DropDown");var C5=this.cR("COLUMNSTD_CODE1","PRIM_LIST","String");var C6=this.cR("COLUMNSTD_DESC1","PRIM_LIST","String");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setManage(C4);C3.setParent(C0);C3.setRow(C2);C3.setColumn(C1);C3.iC();C4.setColumnHeaderHeight(0);C4.setColumnLines(false);C4.setDisplayPosition(1);C4.setLeft(0);C4.setParent(this);C4.setRowLines(false);C4.setTabPosition(1);C4.setTop(0);
C4.setWidth(263);C4.setHeight(31);C4.iC();C5.setColumnUnits("PROPORTION");C5.setColumnWidth(1);C5.setDisplayPosition(1);C5.setParent(C4);C5.setSource(f.F2);C5.setColumnVisible(false);C5.iC();C6.setColumnUnits("PROPORTION");C6.setColumnWidth(1);C6.setDisplayPosition(2);C6.setParent(C4);C6.setSource(f.F1);C6.iC();C4.aH("ITEMCLICK",this,e1);this.setHeight(33);this.setWidth(265);this.setLayoutManager(C0);}});cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",50);r.ln=50;{r.ln=54;sr1.call(this,"ALABAMA","AL");
r.ln=55;sr1.call(this,"ALASKA","AK");r.ln=56;sr1.call(this,"AMERICAN SAMOA","AS");r.ln=57;sr1.call(this,"ARIZONA","AZ");r.ln=58;sr1.call(this,"ARKANSAS","AR");r.ln=59;sr1.call(this,"CALIFORNIA","CA");r.ln=60;sr1.call(this,"COLORADO","CO");r.ln=61;sr1.call(this,"CONNECTICUT","CT");r.ln=62;sr1.call(this,"DELAWARE","DE");r.ln=63;sr1.call(this,"DISTRICT OF COLUMBIA","DC");r.ln=64;sr1.call(this,"FEDERATED STATES OF MICRONESIA","FM");r.ln=65;sr1.call(this,"FLORIDA","FL");r.ln=66;sr1.call(this,"GEORGIA","GA");
r.ln=67;sr1.call(this,"GUAM","GU");r.ln=68;sr1.call(this,"HAWAII","HI");r.ln=69;sr1.call(this,"IDAHO","ID");r.ln=70;sr1.call(this,"ILLINOIS","IL");r.ln=71;sr1.call(this,"INDIANA","IN");r.ln=72;sr1.call(this,"IOWA","IA");r.ln=73;sr1.call(this,"KANSAS","KS");r.ln=74;sr1.call(this,"KENTUCKY","KY");r.ln=75;sr1.call(this,"LOUISIANA","LA");r.ln=76;sr1.call(this,"MAINE","ME");r.ln=77;sr1.call(this,"MARSHALL ISLANDS","MH");r.ln=78;sr1.call(this,"MARYLAND","MD");r.ln=79;sr1.call(this,"MASSACHUSETTS","MA");
r.ln=80;sr1.call(this,"MICHIGAN","MI");r.ln=81;sr1.call(this,"MINNESOTA","MN");r.ln=82;sr1.call(this,"MISSISSIPPI","MS");r.ln=83;sr1.call(this,"MISSOURI","MO");r.ln=84;sr1.call(this,"MONTANA","MT");r.ln=85;sr1.call(this,"NEBRASKA","NE");r.ln=86;sr1.call(this,"NEVADA","NV");r.ln=87;sr1.call(this,"NEW HAMPSHIRE","NH");r.ln=88;sr1.call(this,"NEW JERSEY","NJ");r.ln=89;sr1.call(this,"NEW MEXICO","NM");r.ln=90;sr1.call(this,"NEW YORK","NY");r.ln=91;sr1.call(this,"NORTH CAROLINA","NC");r.ln=92;sr1.call(this,"NORTH DAKOTA","ND");
r.ln=93;sr1.call(this,"NORTHERN MARIANA ISLANDS","MP");r.ln=94;sr1.call(this,"OHIO","OH");r.ln=95;sr1.call(this,"OKLAHOMA","OK");r.ln=96;sr1.call(this,"OREGON","OR");r.ln=97;sr1.call(this,"PALAU","PW");r.ln=98;sr1.call(this,"PENNSYLVANIA","PA");r.ln=99;sr1.call(this,"PUERTO RICO","PR");r.ln=100;sr1.call(this,"RHODE ISLAND ","RI");r.ln=101;sr1.call(this,"SOUTH CAROLINA","SC");r.ln=102;sr1.call(this,"SOUTH DAKOTA","SD");r.ln=103;sr1.call(this,"TENNESSEE","TN");r.ln=104;sr1.call(this,"TEXAS","TX");r.ln=105;
sr1.call(this,"UTAH","UT");r.ln=106;sr1.call(this,"VERMONT","VT");r.ln=107;sr1.call(this,"VIRGIN ISLANDS","VI");r.ln=108;sr1.call(this,"VIRGINIA","VA");r.ln=109;sr1.call(this,"WASHINGTON","WA");r.ln=110;sr1.call(this,"WEST VIRGINIA","WV");r.ln=111;sr1.call(this,"WISCONSIN","WI");r.ln=112;sr1.call(this,"WYOMING","WY");}r.ln=114;r.e();};function sr1(p0,p1){var f=this.FLD.DF_PRM01O,m=this.REF,r=l.sR(this,cO,"AddtoCombo",120);f.F1.set(p0);f.F2.set(p1);r.ln=120;{r.ln=121;f.F1.set(l.cat(f.F1.get(),l.cat(" - ",f.F2.get())));
r.ln=122;m.DROPDOWN1.addEntry();}r.ln=123;r.e();};cO.mthUSHOW=function(p0,p1,p2,p3){var f=this.FLD.DF_PRM01O,m=this.REF,r=l.mR(this,cO,"uShow",129);var P0=r.cPF("TOP",Fd.F3.Dc);var P1=r.cPF("LEFT",Fd.F3.Dc);var P2=r.cPF("HEIGHT",Fd.F3.Dc);var P3=r.cPF("WIDTH",Fd.F3.Dc);P0.set((p0===u)?(-999999):(p0));P1.set((p1===u)?(-999999):(p1));P2.set((p2===u)?(-999999):(p2));P3.set((p3===u)?(-999999):(p3));var C0=r.cF("MATCHCOUNT",Fd.F3.Dc);var C1=r.cF("BESTMATCHCOUNT",Fd.F3.Dc);var C2=r.cF("BESTMATCHITEM",Fd.F3.Dc);
var C3=r.cR("PROMPTFIELDVALUE","PRIM_ALPH");C0.iC();C1.iC();C2.iC();C3.iC();r.ln=129;{r.ln=141;this.mthUGET5250FIELD(this.getUPROMPT5250FIELD(),this.getUPROMPT5250INDEX(),C3,u);r.ln=149;C1.set(0);r.ln=150;C2.set(1);r.ln=152;{var l1=m.DROPDOWN1.selectList();while(l1.step()){r.ln=154;C0.set(cO.mthUMATCH.call(this,C3.get(),f.F2.get(),3));r.ln=156;if(l.n.gt(C0.get(),C1.get())){r.ln=157;C1.set(C0.get());r.ln=158;C2.set(m.DROPDOWN1.getCurrentItem().getEntry());}r.ln=161;}l1.end();}r.ln=166;f.F4.set(lIO=m.DROPDOWN1.getEntry(C2.get()));
r.ln=167;m.DROPDOWN1.getCurrentItem().setSelected(true);m.DROPDOWN1.getCurrentItem().setFocus(true);r.ln=168;m.DROPDOWN1.setValue(f.F1.get());r.ln=171;this.setVisible(true);r.ln=172;this.mthSHOWPOPUP(P1.get(),P0.get(),"ABSOLUTE",u,u);}r.ln=174;r.e();};function e1(sender,Ps){var f=this.FLD.DF_PRM01O,r=l.eR(this,cO,"#DropDown1.ItemClick",178);r.ln=178;{r.ln=185;this.mthUSET5250FIELD(this.getUPROMPT5250FIELD(),f.F2.get(),u,this.getUPROMPT5250INDEX());r.ln=189;this.mthUHIDE();}r.ln=191;r.e();};{Fd.F3.Dc=function()
{this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_AC017O"],rp:["PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST.DropDown","PRIM_LIST.String","PRIM_FLD"],dp:["PRIM_ALPH"]});