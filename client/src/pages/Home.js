import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from '../components/AppNavbar';
import { Form, FormGroup, Label } from 'reactstrap';
import MapContainer from '../components/MapContainer';
import './Home.css';




class Home extends Component {

  constructor(){
    super();
    this.setLatLong=this.setLatLong.bind(this);
  }

  state={
    latitude:'',
    longitude:''
  }

  setLatLong(lat,long){
    this.setState({
      latitude:lat,
      longitude:long
    })
    //console.log('lat:'+this.state.latitude+' long:'+this.state.longitude);
  }


  

  render() {

    return (
      
      <div>

        <AppNavbar lat={this.state.latitude} long={this.state.longitude}></AppNavbar>
        <Form>
          <FormGroup>
            <Label>Latitud: {this.state.latitude}</Label>
          </FormGroup>
          <FormGroup>
            <Label>Longitud: {this.state.longitude}</Label>
          </FormGroup>
        </Form>
        <MapContainer classname="map" setLatLong={this.setLatLong}></MapContainer>
        
        
      </div>
    );
  }
}


export default Home;
