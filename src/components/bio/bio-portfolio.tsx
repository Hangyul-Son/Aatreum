import React from "react";
import { useSelector } from "react-redux";
import { Row, Image, Typography } from "antd";
import "./bio-portfolio.scss";

import { RootState } from "../../contexts/store";
import PortfolioSortBy from "./portfolio-sort-by";
import BioPortfolioMore from "./bio-portfolio-more";
import BioPortfolioCard from "./bio-portfolio-card";

function BioPortfolio() {
  const previousProjects = useSelector(
    (state: RootState) => state.funding.previousProjects
  );

  return (
    <div className="pf-container">
      <Image
        src={window.location.origin + "/assets/images/pf-logo.png"}
        preview={false}
        className="pf-logo"
      />
      <br />
      <Typography.Text className="pf-title">PREVIOUS PROJECTS</Typography.Text>

      <Row className="pf-row">
        <PortfolioSortBy />
        <BioPortfolioMore />

        {previousProjects.map((project) => (
          <BioPortfolioCard project={project} />
        ))}
      </Row>
    </div>
  );
}

export default BioPortfolio;
