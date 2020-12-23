import './Projects.css';
import basketball from '../TN-basketball.jpg';

function Projects() {
  return (
    <section id="projects">
      <div className="mw-l">
        <h2 className="display-4 text-center mb-5">Personal Projects</h2>
        <div className="row">
          <div className="col">
            <div className="card">
              <img className="card-img-top" src={basketball} alt="Basketball League Stats" />
              <div className="card-body">
                <h5 className="card-title">Basketball League Stats</h5>
                <p className="card-text">This is a website that I created because the basketball league that I play in didn't have a central location that the players can go to in order to see their schedules or to keep track of their personal/team's stats. Now players can back up their trash talk with data! <br/><br/>Since the league's managers keep track of all the game data on google sheets, I have my express server connected to the googlesheets API to provide a seamless experience for the league.</p>
                <a href="https://loving-shannon-f3256a.netlify.app/" className="card-link" target="_blank">Visit Site</a>
                <a href="https://github.com/stephenJeong/basketball_league_stats" className="card-link" target="_blank">GitHub Repo</a>
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