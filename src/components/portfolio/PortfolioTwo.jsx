import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const tabList = ["All"];

const tabListContent = [
  {
    porftoliItems: [
      {
        img: "1",
        title: "Our Spot",
        meta: "Github",
        portfolioLink: "https://our-spot.herokuapp.com/",
        delayAnimation: "0",
        githubLink: "https://github.com/jdijaili/our-spot-solo-capstone"
      },
      {
        img: "2",
        title: "Teachables",
        meta: "Github",
        portfolioLink: "https://aa-group-project-teachables.herokuapp.com/",
        delayAnimation: "100",
        githubLink: "https://github.com/jdijaili/w20-teachables-group-project"
      },
      {
        img: "3",
        title: "Sproutcloud",
        meta: "Github",
        portfolioLink: "https://sproutcloud.herokuapp.com/",
        delayAnimation: "200",
        githubLink: "https://github.com/jdijaili/w16-sproutcloud-react-solo-project"
      },
      {
        img: "4",
        title: "GoodMango",
        meta: "Github",
        portfolioLink: "https://goodmango.herokuapp.com/",
        delayAnimation: "0",
        githubLink: "https://github.com/jdijaili/w13-goodMango-group-project"
      }
    ],
  }
];

const Portfolio = () => {
  return (
    <div className="shane_tm_section" id="portfolio">
      <SimpleReactLightbox>
        <div className="shane_tm_portfolio">
          <div className="container">
            <div className="positon-relative">
              <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left">
                    <span>Portfolio</span>
                    <h3>Full Stack Projects</h3>
                  </div>
                </div>
              </div>
              {/* End shane_tm_title */}

              <div className="portfolio_filter">
                <Tabs>
                  <TabList>
                    {tabList.map((val, i) => (
                      <Tab key={i}>{val}</Tab>
                    ))}
                  </TabList>
                  {/* End tablist */}

                  <div className="portfolio_list has-effect">
                    <SRLWrapper>
                      {tabListContent.map((tabContent, i) => (
                        <TabPanel key={i}>
                          <ul className="gallery_zoom">
                            {tabContent.porftoliItems.map((item, i) => (
                              <li
                                key={i}
                                data-aos="fade-right"
                                data-aos-duration="1200"
                                data-aos-delay={item.delayAnimation}
                              >
                                <div className="inner">
                                  <div className="entry shane_tm_portfolio_animation_wrap">
                                    <a href={`/img/portfolio/${item.img}.jpg`}>
                                      <img
                                        src={`/img/portfolio/${item.img}.jpg`}
                                        alt={item.meta}
                                      />
                                    </a>
                                  </div>
                                  <div className="mobile_title">
                                    <h3>
                                      <a
                                        href={item.portfolioLink}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                      >
                                        {item.title}
                                      </a>
                                    </h3>
                                    <a
                                      href={item.githubLink}
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      <span>{item.meta}</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </TabPanel>
                      ))}
                    </SRLWrapper>
                    {/* End tabpanel */}
                  </div>
                  {/* End list wrapper */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>
    </div>
  );
};

export default Portfolio;
