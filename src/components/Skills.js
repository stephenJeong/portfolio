import './Skills.css';

function Skills() {
  return (
    <section className="skills align-middle text-center">
      <div className="container">
        <div className="row skills-card">
          <div className="col col-sm bd-r">
            <p>**add icon</p>
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
            <h4>Backend</h4>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
        </div>
          <div className="col col-sm">
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