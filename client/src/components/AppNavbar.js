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


class AppNavbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle1 = this.toggle1.bind(this);
  }


  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onClickReport(){
      console.log('evento');
  }

  toggle1(){
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {

    return (
      <div>
        <ReportModal modal={this.state.modal} toggle={this.toggle1} lat={this.props.lat} long={this.props.long}></ReportModal>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Deliktum</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline color="primary" onClick={this.toggle1}>Reporta un evento</Button>
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