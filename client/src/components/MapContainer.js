import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';

export class MapContainer extends Component {

    constructor(){
        super();
        axios.get('http://localhost:5000/api/events')
            .then(function(response){
                console.log(response);
                
            }).catch(function (error) {
                // handle error
                console.log(error);
            });
        this.onMapClicked=this.onMapClicked.bind(this);
    }

    state={
        selectedPlace:{
            name:'hola'
        },
        latitude:'-0.1865938',
        longitude:'-78.570625',
        markers:[
            {id:'1', lat: 25.774, lng: -80.190},
            {id:'2', lat: 18.466, lng: -66.118},
            {id:'3', lat: 32.321, lng: -64.757},
            {id:'4', lat: 25.774, lng: -80.190}
        ]
    }

    onMapClicked(mapProps, map, clickEvent){
        this.props.setLatLong(clickEvent.latLng.lat(),clickEvent.latLng.lng());
        console.log(clickEvent.latLng.lat()+clickEvent.latLng.lng());
    }

    onMarkerClick(props,marker,e){

    }

    
  render() {


    return (
      <Map google={this.props.google}
      zoom={11}
      initialCenter={{
        lat: this.state.latitude,
        lng: this.state.longitude,
      }}
      center={{
        lat: this.state.latitude,
        lng: this.state.longitude,
      }}
      onClick={this.onMapClicked}>
      
      
      {this.state.markers.map(marker => (
            <Marker
                position={{ lat: marker.lat, lng: marker.lng }}
                key={marker.id}/>
        ))}


        <Marker onClick={this.onMarkerClick}
                name={'Current location'}
                position={{lat: 37.762391, lng: -122.439192}} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDG2cnaCuPY2gWBHr75LEcPBt3IF_ZxK7s"
})(MapContainer)