import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import svg from '../images/alarm.svg';
import axios from 'axios';
import EventCard from './EventCard';


export class MapContainer extends Component {

  

    constructor(){
        super();
        
        
        this.onMapClicked=this.onMapClicked.bind(this);
        this.onMarkerClick=this.onMarkerClick.bind(this);
    }

    componentWillMount(){
      axios.get('http://192.168.100.60:5000/api/events')
            .then(function(response){
              this.setState({
                markers:response.data,
                activeMarker: {
                  eventDescription:'',
                  eventDate:'',
                  eventType:'',
                  eventImage:''
                }
              });
            }.bind(this)).catch(function (error) {
                // handle error
                console.log(error);
            });
        this.setState({
            latitude:'-0.16333935565987812',
            longitude: '-78.48368872126844',
            name:'',
            
        })
    }

    onMapClicked(mapProps, map, clickEvent){
        this.props.setLatLong(clickEvent.latLng.lat(),clickEvent.latLng.lng());
        if (this.state.showingInfoWindow) {
            this.setState({
              showingInfoWindow: false,
              activeMarker: {
                eventDescription:'',
                eventDate:'',
                eventType:'',
                eventImage:''
              },
            })
        }
        this.setState({
          latitude:clickEvent.latLng.lat(),
          longitude:clickEvent.latLng.lng(),
        })
    }

    onMarkerClick(props,marker,e){
        this.setState({
            selectedPlace: props,
            name:props.name,
            activeMarker: marker,
            showingInfoWindow: true
          });
    }
   
  render() {

    let mark, info;

    if(typeof(this.state.markers)!=='undefined' && this.state.markers!=null){
      mark=this.state.markers.map(marker => (
        <Marker
            position={{ lat: marker.eventLocationLatitude, lng: marker.eventLocationLongitude }}
            key={marker._id}
            onClick={this.onMarkerClick}
            icon={{
              url: svg}}
              
              eventImage={marker.eventImage}
              eventType={marker.eventType}
              eventDate={marker.eventDate}
              eventDescription={marker.eventDescription}/>

    ));

      info=<InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <EventCard activeMarker={this.state.activeMarker}></EventCard>
        </InfoWindow>;
    
    }else{
      mark=null;
      info=null;
    }

      return (
        <Map google={this.props.google}
        zoom={11}
        initialCenter={{
          lat: this.state.latitude,
          lng: this.state.longitude
        }}
        center={{
          lat: this.state.evtlat,
          lng: this.state.evtlong
        }}

        onClick={this.onMapClicked}>


        {mark}

        {info}
          
        </Map>
        
      );
    
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDG2cnaCuPY2gWBHr75LEcPBt3IF_ZxK7s"
})(MapContainer)