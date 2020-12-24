import './Projects.css';
import basketball from '../TN-basketball.jpg';
import gameOverview from '../TN-gameOverview.jpg';
import photoCarousel from '../TN-photoCarousel.jpg';

function Projects() {
  return (
    <section id="projects">
      <div className="mw-l">
        <h1 className="text-center mb-5">Personal Projects</h1>
        <div className="row">
          <div className="col">
            <div className="card">
              <img className="card-img-top" src={basketball} alt="Basketball League Stats" />
              <div className="card-body">
                <h5 className="card-title">Basketball League Stats</h5>
                <p className="card-text">This is a website that I created because the basketball league that I play in didn't have a central location that the players can go to in order to see their schedules or to keep track of their personal/team's stats. Now players can back up their trash talk with data! <br/><br/>Since the league's managers keep track of all the game data on google sheets, I have my express server connected to the googlesheets API to provide a seamless experience for the league.</p>
                <a href="https://loving-shannon-f3256a.netlify.app/" className="card-link" target="_blank" rel="noreferrer">Visit Site</a>
                <a href="https://github.com/stephenJeong/basketball_league_stats" className="card-link" target="_blank" rel="noreferrer">GitHub Repo</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img className="card-img-top" src={gameOverview} alt="Game Overview" />
              <div className="card-body">
                <h5 className="card-title">Game Overview Module</h5>
                <p className="card-text">I created a module as part of a web page where the module will interact with the other components through RESTful APIs. My module ingested data like game details and reviews and displayed it as part of an overview.</p>
                <a href="https://github.com/stephenJeong/stephen_game_overview" className="card-link" target="_blank" rel="noreferrer">GitHub Repo</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
                <img className="card-img-top" src={photoCarousel} alt="Carousel" />
                <div className="card-body">
                  <h5 className="card-title">Photo Carousel</h5>
                  <p className="card-text">This particular component gets image data from an external database and displays it as a carousel for a game's product page. While the frontend wasn't too difficult, I scaled the backend to be able to handle up to 7,000 requests per second with less than 1% error rate using NGINX load balancer and Redis LRU cache.</p>
                  <a href="https://github.com/stephenJeong/stephen_photoCarousel" className="card-link" rel="noreferrer">GitHub Repo</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;