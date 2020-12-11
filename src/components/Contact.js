import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <div className="card text-center">
        <div className="card-body contact-card">
          <h5 className="card-title">Interested in working together?</h5>
          <p className="card-text">Let's meet for some virtual coffee.</p>
          {/* <a href="#" className="button">I'M IN!</a> */}
          <a href="#" className="btn btn-primary">COUNT ME IN!</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;