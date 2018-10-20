import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button
} from 'reactstrap';
import ReportModal from '../components/ReportModal';
import EventsModal from '../components/EventsModal';


class AppNavbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalEvents:false
    };

    this.toggle2=this.toggle2.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggle1(){
    this.setState({
      modal: !this.state.modal
    });
  }

  toggle2(){
    this.setState({
      modalEvents:!this.state.modalEvents
    });
  }


  render() {

    return (
      <div>
        <ReportModal modal={this.state.modal} toggle={this.toggle1} lat={this.props.lat} long={this.props.long}></ReportModal>
        <EventsModal modal={this.state.modalEvents} toggle={this.toggle2}></EventsModal>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Deliktum</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline color="primary" onClick={this.toggle1}>Reporta un evento</Button>
                </NavItem>
                <NavItem>
                  <Button outline color="info" onClick={this.toggle2}>Revisa eventos</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;