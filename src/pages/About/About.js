import React, { useEffect } from "react";
import "./About.scss";
import nameLogo from "../../svgs/nameLogo.svg";
import ownerPhoto from "../../images/kevinHeadShot.png";

import CornerLogo from "../../components/CornerLogo/CornerLogo";
import TopNav from "../../components/NavBar/TopBar";

function About({ setNavColor }) {
  useEffect(() => {
    setNavColor("#000812");
  }, []);

  return (
    <div className="About">
      <CornerLogo />
      <TopNav />
      <div className="page-header">
        <h1>MEET CYCLEFIX</h1>
      </div>

      <div className="page-body">
        <div className="img-container">
          {/* <img src={ownerPhoto} alt="owner picture" className="owner-pic" /> */}
          <img src={nameLogo} alt="name logo" className="name-logo" />
        </div>

        <article>
          <p>
            Kevin is the founder and operator of Houston CycleFix. He answers
            each and every mobile bicycle repair appointment.
          </p>
          <p>
            He has a background in engineering. He rode for the A&M University
            Bike team and continues to be active in the biking community.
          </p>
        </article>
      </div>
    </div>
  );
}

export default About;
