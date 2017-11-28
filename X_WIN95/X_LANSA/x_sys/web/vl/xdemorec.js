﻿LANSA.addComponent({id:"XDEMOREC",nm:"xDemoRecordPlaybackControl",ot:"rp",tp:"Reusable Part",de:"DeviceRecordPlaybackControl",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_OBJT",mt:{Record:{ps:{"AudioFileName":{pt:"i"}}},Stop:{},Playback:{ps:{"AudioFileInput":{pt:"i"}}}},ev:{Failed:{},PlaybackCompleted:{},RecordingCompleted:{ps:{"AudioFileOutputPath":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("AUDIORECORDCONTROL","XDEVICE01");var C1=this.cR("AUDIOPLAYBACKCONTROL","XDEVICE02");
var C2=this.cR("RECORDERINITIALIZED","PRIM_BOLN");var C3=this.cR("PLAYBACKINITIALIZED","PRIM_BOLN");var C4=this.cR("RECORDINGINPROGRESS","PRIM_BOLN");var C5=this.cR("PLAYBACKINPROGRESS","PRIM_BOLN");var C6=this.cR("SAMPLERATE","PRIM_NMBR");var C7=this.cR("AUDIOQUALITYSETTING","PRIM_STR");var C8=this.cR("AUDIOCHANNELSSETTING","PRIM_STR");C0.setCHANNELS(1);C0.iC();C1.iC();C2.iC();C3.iC();C4.iC();C5.iC();C6.iC();C7.iC();C8.iC();C0.aH("INITIALIZE",this,e1);C0.aH("COMPLETED",this,e3);C1.aH("INITIALIZE",this,e2);
C1.aH("COMPLETED",this,e4);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AudioRecordControl.Initialize",28);r.ln=28;{r.ln=30;m.RECORDERINITIALIZED.set(true);}r.ln=32;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AudioPlaybackControl.Initialize",34);r.ln=34;{r.ln=36;m.PLAYBACKINITIALIZED.set(true);}r.ln=38;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AudioRecordControl.Completed",40);r.ln=40;{r.ln=42;m.RECORDINGINPROGRESS.set(false);r.ln=44;{var eP=l.ePs();
eP.cR("AUDIOFILEOUTPUTPATH","PRIM_STR");eP.r("AUDIOFILEOUTPUTPATH").set(m.AUDIORECORDCONTROL.getFILE());this.fE("RECORDINGCOMPLETED",eP);eP.e();}}r.ln=46;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AudioPlaybackControl.Completed",48);r.ln=48;{r.ln=50;this.fE("PLAYBACKCOMPLETED");r.ln=52;m.PLAYBACKINPROGRESS.set(false);}r.ln=54;r.e();};cO.mthRECORD=function(p0){var m=this.REF,r=l.mR(this,cO,"Record",60);var P0=r.cP("AUDIOFILENAME","PRIM_STR");P0.set(p0);r.ln=60;{r.ln=63;if(l.tB(m.RECORDERINITIALIZED.get()))
{r.ln=65;m.AUDIORECORDCONTROL.setFILE(P0.get());r.ln=67;m.RECORDINGINPROGRESS.set(true);r.ln=69;m.AUDIORECORDCONTROL.mthRECORD();}else{r.ln=73;this.fE("FAILED");}}r.ln=77;r.e();};cO.mthSTOP=function(){var m=this.REF,r=l.mR(this,cO,"Stop",79);r.ln=79;{r.ln=81;if(l.tB(m.RECORDINGINPROGRESS.get())){r.ln=83;m.AUDIORECORDCONTROL.mthSTOP();}r.ln=87;if(l.tB(m.PLAYBACKINPROGRESS.get())){r.ln=89;m.AUDIOPLAYBACKCONTROL.mthSTOP();}}r.ln=93;r.e();};cO.mthPLAYBACK=function(p0){var m=this.REF,r=l.mR(this,cO,"Playback",95);
var P0=r.cP("AUDIOFILEINPUT","PRIM_STR");P0.set(p0);r.ln=95;{r.ln=98;if(l.tB(m.PLAYBACKINITIALIZED.get())){r.ln=100;m.AUDIOPLAYBACKCONTROL.setFILE(P0.get());r.ln=102;m.PLAYBACKINPROGRESS.set(true);r.ln=104;m.AUDIOPLAYBACKCONTROL.mthPLAY();}else{r.ln=108;l.WEB().mthALERT("To access audio playback, please use the LANSA Mobile App to run this Webpage.");r.ln=110;this.fE("FAILED");}}r.ln=114;r.e();};},{rc:["XDEVICE01","XDEVICE02"],rp:["PRIM_OBJT","PRIM_BOLN","PRIM_NMBR","PRIM_STR"]});