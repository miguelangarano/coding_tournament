import React, {Component} from 'react';
import{
   Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import axios from 'axios';

class ReportForm extends Component{

    
    constructor(){
        super();
        this.state={
            eventDescription:'',
            eventType:'',
            eventDate:'',
            eventLocationLatitude:'',
            eventLocationLongitude:'',
            eventImage:''
        }

        this.handle=this.handle.bind(this);
        this.onCreateEvent=this.onCreateEvent.bind(this);
        this.onClick=this.onClick.bind(this);
    }

    onClick(){
        this.onCreateEvent();
        this.props.toggle();
    }


    onCreateEvent(){
        axios.post('http://localhost:5000/api/events',{
            eventDescription:this.state.eventDescription,
            //eventType:this.state.eventType,
            eventDate:this.state.eventDate,
            eventLocationLatitude:this.props.lat,
            eventLocationLongitude:this.props.long,
            //eventImage:this.state.eventImage
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }


    handle(event){
        switch(event.target.name){
            case 'description':{
                this.setState({
                    eventDescription:event.target.value
                })
                console.log(this.state.eventDescription);
                break;
            }
            case 'type':{
                this.setState({
                    eventType:event.target.value
                })           
                break;
            }
            case 'date':{
                this.setState({
                    eventDate:event.target.value
                })    
                break;
            }
            case 'imagen':{
                this.setState({
                    eventImage:event.target.value
                })    
                break;
            }
        }
        
        
    }


    render(){
        return(
            <Form>
                <FormGroup>
                <Label for="description">Descripcion del evento</Label>
                <Input type="textarea" name="description" id="description" placeholder="Describa el evento sucedido" onChange={ this.handle.bind(this) } />
                </FormGroup>
                <FormGroup>
                <Label for="type">Seleccione el tipo de delito</Label>
                <Input type="select" name="type" id="type" onChange={ this.handle.bind(this) }>
                    <option>Robo</option>
                    <option>Asesinato</option>
                    <option>Borrachera</option>
                    <option>Asalto</option>
                    <option>Pelea</option>
                </Input>
                </FormGroup>
                <FormGroup>
                <Label for="date">Fecha y hora de lo ocurrido</Label>
                <Input type="datetime-local" name="date" id="date" onChange={this.handle.bind(this)} />
                </FormGroup>
                <FormGroup>
                <Label for="latitud">Latitud</Label><br/>
                <Label name="latitud" id="latitud" onChange={this.handle.bind(this)}>{this.props.lat}</Label>
                </FormGroup>
                <FormGroup>
                <Label for="longitud">Longitud</Label><br/>
                <Label name="longitud" id="longitud" onChange={this.handle.bind(this)}>{this.props.long}</Label>
                </FormGroup>
                <FormGroup>
                <Label for="imagen">Suba una foto de lo sucedido</Label>
                <Input type="file" name="imagen" id="imagen" onChange={this.handle.bind(this)}/>
                </FormGroup>
                
                <Button color='primary' onClick={this.onClick}>Crear evento</Button>
        </Form>
        );
    }
}


export default ReportForm;