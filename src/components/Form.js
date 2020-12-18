function Form() {
  return (
    <form className="text-left" name="contactForm" method="post">
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

export default Form;