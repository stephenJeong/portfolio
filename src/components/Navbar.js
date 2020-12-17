import './Navbar.css';
import Modal from './Modal';
import Form from './Form';

function Navbar() {
  return (
    <div className="navbar-container sticky-top">
      <nav className="navbar navbar-expand-md navbar-light ml-2">
        {/* <a className="navbar-brand" href="#">Stephen Jeong</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ml-auto mt-2 mr-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#projects">Projects</a>
            </li>
          </ul>
          <button type="button" id="contact-bt" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#modalForm">
              Say Hello
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
