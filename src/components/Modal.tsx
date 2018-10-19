import * as React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Form from "./Form";

interface IState {
  modal: boolean;
}

interface OwnProps {
  buttonLabel: string;
}

class ModalExample extends React.Component<OwnProps, IState> {
  constructor(props: OwnProps) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(): void {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="d-flex align-items-justify">
        <Button
          outline
          color="secondary"
          onClick={this.toggle}
          style={{ marginTop: "4%" }}
        >
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            <Form />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
