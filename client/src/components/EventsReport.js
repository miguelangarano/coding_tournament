import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';


class EventsReport extends Component{

    state={
        markers:null
    }

    componentWillMount(){
        axios.get('http://192.168.100.60:5000/api/events')
            .then(function(response){
              this.setState({
                markers:response.data,
                setLength:10,
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
    }


    onClickItem(propis){
        console.log(propis);
    }


    render(){

        let mark,times=0;

        if(typeof(this.state.markers)!=='undefined' && this.state.markers!=null){
            mark=this.state.markers.map(marker =>{
                times++;
                if(times<=this.state.setLength){
                    return <ListGroupItem key={marker._id} tag='a' href='#' onClick={()=>this.onClickItem(marker)}>{marker.eventType}</ListGroupItem>
                }else{
                    return null;
                }
            } );
        }else{
            mark=null;
        }


        return(
            <ListGroup flush>
                {mark}
            </ListGroup>
        );
    }
}

export default EventsReport;