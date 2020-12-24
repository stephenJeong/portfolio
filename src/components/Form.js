import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Form extends Component {
  encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

  submitForm(e) {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        ...name
      })
    }).then(() => navigate("/thank-you/")).catch(error => alert(error))
  }

  render() {
    return (
      // <form className="text-left" name="contactForm" method="post" data-netlify="true" id="contactForm2"  onSubmit={this.submitForm.bind(this)}>
      <form className="text-left" name="contactForm" method="post" action="/thank-you" id="contactForm2" onSubmit={this.submitForm.bind(this)}>
        <input type="hidden" name="form-name" value="contactForm" />
        <div className="form-group">
          <label for="name">Full Name</label>
          <input type="text" className="form-control" name="name" id="name" aria-describedby="emailHelp" placeholder="Enter Name" />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" className="form-control" name="email" id="email" placeholder="Enter Email" />
        </div>
        <div className="form-group">
          <label for="message">Message</label><br/>
          <textarea className="form-control" name="message" id="message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );
  }
}

export default withRouter(Form);