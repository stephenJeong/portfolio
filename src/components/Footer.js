import './Footer.css';

function Footer() {
  return (
    <section id="footer" className="text-center">
        <ul className="container">
          <li>
            <a className="btn" href="https://www.linkedin.com/in/stephenjeong/">
              <i className="fa fa-linkedin fa-2x"></i>
            </a>
          </li>
        <li>
          <a className="btn" href="https://github.com/stephenJeong">
            <i className="fa fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a className="btn" href="mailto:stephen.h.jeong@gmail.com">
            <i className="fa fa-envelope fa-2x"></i>
          </a>
        </li>
        </ul>
        <div className="icon-attribution">
          <p>
            *Icons made by <a href="https://creativemarket.com/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a><br/>
            *Icons made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a><br/>
            *Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </p>
        </div>
    </section>
  );
}

export default Footer;