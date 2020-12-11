import './Projects.css';

function Projects() {
  return (
    <section id="projects">
      <div className="mw-l">
        <h2 className="display-4 text-center mb-5">Personal Projects</h2>
        <div className="row">
          <div className="col">
            <div className="card">
              <img className="card-img-top" src="https://picsum.photos/200/125" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Project #1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img className="card-img-top" src="https://picsum.photos/200/125" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Project #2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
                <img className="card-img-top" src="https://picsum.photos/200/125" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Project #3</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;