import React from "react";

const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/jennifer-dijaili/",
  },
  {
    iconName: "github",
    link: "https://github.com/jdijaili"
  }
];
const Social = () => {
  return (
    <div className="share">
      <span>Share:</span>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
                style={{ backgroundSize: "100px 100px"}}
              ></img>
            </a>
          </li>
        ))}
      </ul>

      {/* END social */}
    </div>
  );
};

export default Social;
