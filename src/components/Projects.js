import './Projects.css';

function Projects() {
  return (
    <section id="projects">
      <div className="mw-l">
        <h2 className="display-4 text-center mb-5">Personal Projects</h2>
        <div className="row">
          <div className="col">
            <div className="card">
              <img className="card-img-top" src="https://picsum.photos/200/125" alt="Basketball League Stats" />
              <div className="card-body">
                <h5 className="card-title">Basketball League Stats</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-warning">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img className="card-img-top" src="https://picsum.photos/200/125" alt="Game Overview" />
              <div className="card-body">
                <h5 className="card-title">Game Overview Module</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-warning">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
                <img className="card-img-top" src="https://picsum.photos/200/125" alt="Photo Carousel" />
                <div className="card-body">
                  <h5 className="card-title">Photo Carousel</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;