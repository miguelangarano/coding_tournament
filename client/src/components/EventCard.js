import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';


export default class EventCard extends Component{

    componentWillMount(){
        this.setState({
            eventType:this.props.activeMarker.eventType,
            eventDate:this.props.activeMarker.eventDate,
            eventDescription:this.props.activeMarker.eventDescription,
            eventImage:this.props.activeMarker.eventImage,
            image:'http://192.168.100.60:5000/static/'+this.props.activeMarker.eventImage+'?resize=100'
        });
    }

    render(){
        return(
            <Card>
            <CardImg top width="100%" src={this.state.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.state.eventType}</CardTitle>
                <CardSubtitle>{this.state.eventDate}</CardSubtitle>
                <CardText>{this.state.eventDescription}</CardText>
              </CardBody>
            </Card>
        );
    }
}