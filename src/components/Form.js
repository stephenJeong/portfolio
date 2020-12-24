import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  submitForm = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", ...this.state })
    })
      .then(() => {
        window.location.href = "thank-you";
        // alert("Success!")
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, message } = this.state;

    return (
      // <form className="text-left" name="contactForm" method="post" data-netlify="true" id="contactForm2" onSubmit={this.submitForm.bind(this)}>
      <form className="text-left" name="contactForm" method="post" action="/thank-you" id="contactForm2" onSubmit={this.submitForm.bind(this)}>
        <input type="hidden" name="form-name" value="contactForm" />
        <div className="form-group">
          <label for="name">Full Name</label>
          <input type="text" className="form-control" name="name" id="name" aria-describedby="emailHelp" placeholder="Enter Name" value={name} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" className="form-control" name="email" id="email" placeholder="Enter Email" value={email} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label for="message">Message</label><br/>
          <textarea className="form-control" name="message" id="message" rows="4" value={message} onChange={this.handleChange} ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );
  }
}

export default withRouter(Form);