import React, {Component} from 'react';
import EventsReport from './EventsReport';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';



class EventsModal extends Component {

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Ver Eventos</ModalHeader>
          <ModalBody>
            <EventsReport ></EventsReport>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EventsModal;