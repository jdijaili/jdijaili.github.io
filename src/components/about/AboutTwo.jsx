import React from "react";

const AboutTwo = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />

                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/about/jd1.jpg"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span>
                  <h3> Creative Full Stack Software Engineer based in the Bay Area</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I'm a full stack software engineer with a passion to improve
                    the lives of the community and those around me. As a pharmacist, I've
                    strived to identify solutions that produce immediate results as well as contributing
                    to long term outcomes. I will continue to carry those values with me as a software
                    engineer using my knowledge of Javascipt, Python, React/Redux to
                    positively contribute to our community.
                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="img/resume/resume.jpg" download>
                    Download CV
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
