import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from '../components/AppNavbar';
import MapContainer from '../components/MapContainer';
import './Home.css';
import MediaQuery from 'react-responsive';

class Home extends Component {

  constructor(){
    super();
    this.setLatLong=this.setLatLong.bind(this);
  }


  state={
    latitude:'',
    longitude:''
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
        <MediaQuery minDeviceWidth={1224}>
          <AppNavbar lat={this.state.latitude} long={this.state.longitude}></AppNavbar>   
          <MapContainer classname="map" setLatLong={this.setLatLong}></MapContainer>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <div>You are a tablet or mobile phone</div>
        </MediaQuery>
      </div>
    );
  }
}


export default Home;
