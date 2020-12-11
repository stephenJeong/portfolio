import './Skills.css';
import frontend from '../frontend.png';
import backend from '../backend.png';
import database from '../database.png';

function Skills() {
  return (
    <section className="skills align-middle text-center" id="skills">
      <div className="container">
        <div className="row skills-card">
          <div className="col col-sm bd-r">
            <img className="icon" src={frontend} />
            <h4>Frontend</h4>
            <ul>
              <li>React</li>
              <li>CSS Grid</li>
              <li>CSS Flexbox</li>
              <li>Bootstrap</li>
              <li>AJAX</li>
            </ul>
          </div>
          <div className="col col-sm bd-r">
            <img className="icon" src={backend} />
            <h4>Backend</h4>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
        </div>
          <div className="col col-sm">
           <img className="icon" src={database} />
            <h4>Databases</h4>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
        </div>
      </div>
    </div>
      {/* <div className="card" id="skills-card">
        <div className="card-body">
          <h1 className="card-title">Skills</h1>
          <p className="card-text">List skills here</p>
        </div>
      </div> */}
    </section>
  )
}

export default Skills;