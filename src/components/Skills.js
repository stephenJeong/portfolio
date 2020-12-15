import './Skills.css';

function Skills() {
  return (
    <section className="skills align-middle text-center" id="skills">
      <div className="container">
        <div className="row skills-card">
          <div className="col col-sm bd-r">
            <i className="fa fa-code fa-3x"></i>
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
            <i className="fa fa-cogs fa-3x"></i>
            <h4>Backend</h4>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
        </div>
          <div className="col col-sm">
            <i class="fa fa-database fa-3x"></i>
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