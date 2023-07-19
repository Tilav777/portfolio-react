function Skills() {
  return (
    <section className="skills" id="skills">
        <h2 className="heading">My <span>Skills</span></h2>
            <div className="skills-column">
                <h3 className="title">Coding Skills</h3>
                <div className="skills-box">
                    <div className="skills-content">
                        <div className="progress">
                            <h3>HTML <span>90%</span></h3>
                            <div className="bar"><span style={{width: '90%'}}></span></div>
                        </div>
                        <div className="progress">
                            <h3>CSS <span>80%</span></h3>
                            <div className="bar"><span style={{width: '80%'}}></span></div>
                        </div>
                        <div className="progress">
                            <h3>SCSS <span>65%</span></h3>
                            <div className="bar"><span style={{width: '65%'}}></span></div>
                        </div>
                        <div className="progress">
                            <h3>JavaScript <span>70%</span></h3>
                            <div className="bar"><span style={{width: '70%'}}></span></div>
                        </div>
                        <div className="progress">
                            <h3>WebPack <span>60%</span></h3>
                            <div className="bar"><span style={{width: '60%'}}></span></div>
                        </div>
                        <div className="progress">
                            <h3>React <span>20%</span></h3>
                            <div className="bar"><span style={{width: '20%'}}></span></div>
                        </div>
                        <div className="progress">
                            <h3>Python <span>10%</span></h3>
                            <div className="bar"><span style={{width: '10%'}}></span></div>
                        </div>
                        <div className="progress">
                            <h3>Django <span>5%</span></h3>
                            <div className="bar"><span style={{width: '5%'}}></span></div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Skills