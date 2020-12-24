import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Form extends Component {
  submitForm(e) {
     e.preventDefault();
     this.props.history.push('/thank-you#top');
  }
  render() {
    return (
      <form className="text-left" name="contactForm" method="post" id="contactForm" action="/thank-you#top">
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