import React, {Component} from 'react';
import ReportForm from './ReportForm';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';



class ReportModal extends Component {


  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Crear un evento</ModalHeader>
          <ModalBody>
            <ReportForm toggle={this.props.toggle} lat={this.props.lat} long={this.props.long}></ReportForm>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ReportModal;