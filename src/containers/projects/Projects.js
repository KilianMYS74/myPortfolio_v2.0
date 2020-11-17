import React, { useContext } from "react";
import "./Project.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const { isDark } = useContext(StyleContext);
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="projects">
          <div className="project-main-div">
            <div className="project-header">
              <h1
                  className={
                    isDark
                        ? "dark-mode heading project-heading"
                        : "heading project-heading"
                  }
              >
                {bigProjects.title}
              </h1>
              <p
                  className={
                    isDark
                        ? "dark-mode subTitle project-subtitle"
                        : "subTitle project-subtitle"
                  }
              >
                {bigProjects.subtitle}
              </p>
            </div>
            <div className="project-cards-div">
              {bigProjects.projectsCards.map((card) => {
                return (
                    <ProjectCard
                        isDark={isDark}
                        cardInfo={{
                          title: card.title,
                          description: card.subtitle,
                          image: card.image,
                          footer: card.footerLink,
                        }}
                    />
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
  );
}
