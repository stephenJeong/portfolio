import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light ml-2">
      <a className="navbar-brand" href="#">Brand</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button id="contact" className="btn btn-outline-success my-2 my-sm-0" type="submit">Say Hello</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
