import './Contact.css';
import React from 'react';
import Modal from './Modal';
import Form from './Form';
import { render } from '@testing-library/react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      modalInputName: '',
    }
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(e) {
    this.setState({
      name: this.state.modalInputName
    });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: '',
      modal: false,
    });
  }

  render() {
    return (
      <section id="contact">
        <div className="card text-center">
          <div className="card-body contact-card">
            <h5 className="card-title">Interested in working together?</h5>
            <p className="card-text">Let's meet for some virtual coffee.</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalForm">
              COUNT ME IN!
            </button>
            <Modal>
              <Form />
            </Modal>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;