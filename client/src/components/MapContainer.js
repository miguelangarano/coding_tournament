import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Button} from 'reactstrap';


export class MapContainer extends Component {

    constructor(){
        super();
        
        this.onMapClicked=this.onMapClicked.bind(this);
        this.onMarkerClick=this.onMarkerClick.bind(this);
    }

    componentDidMount(){
        this.setState({
            markers:this.props.markers
        })
    }

    state={
        selectedPlace:{
            name:'hola'
        },
        latitude:'-0.1865938',
        longitude:'-78.570625',
        markers:[
            
        ]
        
    }

    onMapClicked(mapProps, map, clickEvent){
        this.props.setLatLong(clickEvent.latLng.lat(),clickEvent.latLng.lng());
        if (this.state.showingInfoWindow) {
            this.setState({
              showingInfoWindow: false,
              activeMarker: null
            })
        }
    }

    onMarkerClick(props,marker,e){
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
          });
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
      
      
      {this.props.markers.map(marker => (
            <Marker
                position={{ lat: marker.eventLocationLatitude, lng: marker.eventLocationLongitude }}
                key={marker._id}
                name={marker.eventDescription}
                onClick={this.onMarkerClick}/>
        ))}


        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
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