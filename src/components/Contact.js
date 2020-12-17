import './Contact.css';
import React from 'react';
import Modal from './Modal';
import Form from './Form';

function Contact() {
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

export default Contact;