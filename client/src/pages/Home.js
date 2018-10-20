import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from '../components/AppNavbar';
import MapContainer from '../components/MapContainer';
import './Home.css';

class Home extends Component {

  constructor(){
    super();
    this.setLatLong=this.setLatLong.bind(this);
  }


  state={
    latitude:'',
    longitude:'',
    activeMarker:null
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }


  setLatLong(lat,long){
    this.setState({
      latitude:lat,
      longitude:long
    })
  }



  render() {


    return (
      
      <div>

        <AppNavbar lat={this.state.latitude} long={this.state.longitude}></AppNavbar>   
          <MapContainer classname="map" setLatLong={this.setLatLong}></MapContainer>
      </div>
    );
  }
}


export default Home;
