LANSA.addComponent({id:"XGOOGLE03",nm:"xGoogleMap",ot:"ww",tp:"Widget",de:"Google Map",tl:14000101,cl:14020000},function(l,oI,u){var fF=function(wP){wP.fireRightClick=function(pLatitude,pLongitude){var eP=l.ePs();eP.aD("LATITUDE",pLatitude);eP.aD("LONGITUDE",pLongitude);l.fE(this,"RIGHTCLICK",eP);};wP.fireCenterChanged=function(pLatitude,pLongitude){var eP=l.ePs();eP.aD("LATITUDE",pLatitude);eP.aD("LONGITUDE",pLongitude);l.fE(this,"CENTERCHANGED",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
var apiKey = "YOUR_KEY_HERE";
try
{
if ( localStorage["XGOOGLEMAP_API_KEY"] )
{
apiKey = localStorage["XGOOGLEMAP_API_KEY"];
}
}
catch ( e ){}
var
newKey = prompt( "Please provide a Google Maps API key to run this demo. Look at the implementation of xGoogleMap for more info.", apiKey );
if ( newKey )
{
apiKey = newKey;
}
try
{
localStorage["XGOOGLEMAP_API_KEY"] = apiKey;
}
catch ( e ){}
google.load( 'maps', '3', { other_params: 'key=' + apiKey + '&sensor=false', callback: WIDGET.Finalize } );
PROTOTYPE.onCreateInstance = function()
{
this.m_Latitude = 0;
this.m_Longitude = 0;
this.m_MarkerInfoArray = [];
}
PROTOTYPE.onRealizeControl = function( parentDiv )
{
this.m_Map = new google.maps.Map( parentDiv,
{
center:                    new google.maps.LatLng( this.m_Latitude, this.m_Longitude ),
zoom:                      this.m_Zoom,
mapTypeId:                 this.m_MapType,
mapTypeControl:            false,
navigationControlOptions:
{
style: google.maps.NavigationControlStyle.SMALL
}
});
for ( var i = 0; i < this.m_MarkerInfoArray.length; i++ )
{
this.ShowMarker( this.m_MarkerInfoArray[ i ] );
}
var pThis = this;
google.maps.event.addListener( this.m_Map, 'rightclick', function( event )
{
pThis.fireRightClick( event.latLng.lat(), event.latLng.lng() );
});
google.maps.event.addListener( this.m_Map, 'center_changed', function()
{
var center = pThis.m_Map.getCenter();
pThis.m_Latitude = center.lat();
pThis.m_Longitude = center.lng();
pThis.fireCenterChanged( pThis.m_Latitude, pThis.m_Longitude );
});
google.maps.event.addListener( this.m_Map, 'zoom_changed', function()
{
pThis.m_Zoom = pThis.m_Map.getZoom();
});
}
PROTOTYPE.onSizeChanged = function()
{
try
{
var center = this.m_Map.getCenter();
google.maps.event.trigger( this.m_Map, "resize" );
this.m_Map.setCenter( center );
}
catch( e ){}
}
PROTOTYPE.getMapType = function()
{
if ( this.m_Map )
{
this.m_MapType = this.m_Map.getMapTypeId();
}
switch( this.m_MapType )
{
case google.maps.MapTypeId.ROADMAP:
{
return "ROADMAP";
}
case google.maps.MapTypeId.SATELLITE:
{
return "SATELLITE";
}
case google.maps.MapTypeId.HYBRID:
{
return "HYBRID";
}
case google.maps.MapTypeId.TERRAIN:
{
return "TERRAIN";
}
}
}
PROTOTYPE.setMapType = function( enumValue )
{
switch( enumValue )
{
case "ROADMAP":
{
this.m_MapType = google.maps.MapTypeId.ROADMAP;
break;
}
case "SATELLITE":
{
this.m_MapType = google.maps.MapTypeId.SATELLITE;
break;
}
case "HYBRID":
{
this.m_MapType = google.maps.MapTypeId.HYBRID;
break;
}
case "TERRAIN":
{
this.m_MapType = google.maps.MapTypeId.TERRAIN;
break;
}
}
if ( this.m_Map )
{
this.m_Map.setMapTypeId( this.m_MapType );
}
}
PROTOTYPE.getZoom = function()
{
if ( this.m_Map )
{
this.m_Zoom = this.m_Map.getZoom();
}
return this.m_Zoom;
}
PROTOTYPE.setZoom = function( iValue )
{
this.m_Zoom = iValue;
if ( this.m_Map )
{
this.m_Map.setZoom( iValue );
}
}
PROTOTYPE.AddMarker = function( decLatitude, decLongitude, strCaption )
{
var
markerInfo =
{
latitude:   decLatitude,
longitude:  decLongitude,
caption:    strCaption,
marker:     null
};
this.ShowMarker( markerInfo );
this.m_MarkerInfoArray.push( markerInfo );
}
PROTOTYPE.Center = function( decLatitude, decLongitude )
{
this.m_Latitude = decLatitude;
this.m_Longitude = decLongitude;
if ( this.m_Map )
{
var center = new google.maps.LatLng( decLatitude, decLongitude );
this.m_Map.setCenter( center );
}
}
PROTOTYPE.ShowMarker = function( markerInfo )
{
if ( this.m_Map )
{
var location = new google.maps.LatLng( markerInfo.latitude, markerInfo.longitude );
markerInfo.marker = new google.maps.Marker(
{
position:   location,
map:        this.m_Map,
title:      markerInfo.caption
});
}
}
return WIDGET.Loading;
}
;
l.rWg({nm:"XGOOGLE03",js:["https://www.google.com/jsapi"],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setMAPTYPE("ROADMAP");this.setZOOM(1);}});cO.getMAPTYPE=function(){return l.tS(this.get("MapType")).toUpperCase();};cO.setMAPTYPE=function(v){this.set("MapType",l.tS(v).toUpperCase());};cO.getZOOM=function(){return l.tI(this.get("Zoom"));};cO.setZOOM=function(v){this.set("Zoom",l.tI(v));};cO.mthADDMARKER=function(P0,P1,P2){this.invoke("AddMarker",[l.tN(P0),l.tN(P1),l.tS(P2)]);
};cO.mthCENTER=function(P0,P1){this.invoke("Center",[l.tN(P0),l.tN(P1)]);};},{rp:["PRIM_WDGT.Control"]});