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
    </section>
  );
}

export default Footer;