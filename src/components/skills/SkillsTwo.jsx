import React from "react";

const SkillsTwo = () => {
  return (
    <>
      <div className="shane_tm_section" id="skills">
        <div className="shane_tm_skills">
          <div className="container">
            <div className="skills_inner">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="shane_tm_title">
                  <span>Skills</span>
                  <h3>Tech Stack</h3>
                </div>
                <div className="text">
                  <p>
                    I'm currently developing full stack apps with the following technologies:
                  </p>
                </div>
              </div>
              {/* End .left */}

              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="tokyo_progress">
                  <div className="progress_inner">
                    <span>
                      <span className="label">Languages</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                      </div>
                    </div>
                    <p style={{ marginTop: "5px" }} >Javascript | Python | HTML | CSS</p>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">ORM/RBMS</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                      </div>
                    </div>
                    <p style={{ marginTop: "5px" }} >Sequelize | SQLAlchemy | PostgreSQL</p>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">Frameworks</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                      </div>
                    </div>
                    <p style={{ marginTop: "5px" }} >React | Redux</p>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">Tech</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                      </div>
                    </div>
                    <p style={{ marginTop: "5px" }} >Express | Node.js | Flask | Git | Heroku | Docker</p>
                  </div>
                  {/* End .progress_inner */}
                </div>
              </div>
              {/* End .right */}
            </div>
          </div>
          {/* End .conainer */}
        </div>
      </div>
    </>
  );
};

export default SkillsTwo;
