﻿import React, { useContext } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
                <div className="button-greeting-div">
                    <div>
                      <a className="main-button" href="#contact">Contact me</a>
                    </div>
                    <div>
                      <a className="main-button" href={greeting.resumeLink} newTab={true}>See my english resume</a>
                    </div>
                    <div>
                        <a className="main-button" href={greeting.resumeLink2} newTab={true}>See my french resume</a>
                    </div>
                </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
    alt="kilian sitting on table"
    src={require("../../assets/images/manOnTable.svg")}
    />
          </div>
        </div>
      </div>
    </Fade>
  );
}
