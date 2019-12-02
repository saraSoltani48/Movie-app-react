import React, { Component } from "react";
import {
  Button,Modal,ModalHeader,ModalBody,ModalFooter,
  Input
} from "reactstrap";
import "./style.css";


class Add extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      film: { Year: "", rating: "", name: "", image: "" }
    };
  }

  //   const [modal, setModal] = useState(false);

  toggle = () => this.setState({ modal: !this.state.modal });

  ChangeName = e => {
    this.setState({
      
      film: { ...this.state.film, [e.target.id]: e.target.value },
      
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Button className="addButton" color="success" onClick={this.toggle}>
          Add
        </Button>
        <Modal
          isOpen={this.state.modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <span>Title Movies</span>
            <Input
              placeholder="enter your title"
              type="text"
              id="name"
              onChange={e => this.ChangeName(e)}
            />
            <span>Images Movies</span>
            <Input
              placeholder="enter your image"
              type="text"
              id="image"
              onChange={e => this.ChangeName(e)}
            />
            <span>Rating</span>
            <Input
              placeholder="enter your rating"
              type="text"
              id="rating"
              onChange={e => this.ChangeName(e)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.props.AddItemMovie(this.state.film);this.toggle(); }} >
              Save change
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Add;
