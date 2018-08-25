import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from '../components/AppNavbar';
import { Form, FormGroup, Label, Button } from 'reactstrap';
import MapContainer from '../components/MapContainer';
import './Home.css';
import axios from 'axios';




class Home extends Component {

  constructor(){
    super();
    axios.get('http://localhost:5000/api/events')
            .then(function(response){
              this.setState({
                markers:response.data
              });
                console.log(response.data);
            }.bind(this)).catch(function (error) {
                // handle error
                console.log(error);
            });
    this.setLatLong=this.setLatLong.bind(this);
    //this.onGetData=this.onGetData.bind(this);
    //this.loadEvents=this.loadEvents.bind(this);
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
        <MapContainer classname="map" setLatLong={this.setLatLong} markers={this.state.markers}></MapContainer>
        
        
      </div>
    );
  }
}


export default Home;
