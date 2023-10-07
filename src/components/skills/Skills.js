import React, { useContext } from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import GeneralContext from "../../context/GeneralContext";

const Skills = () => {

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title section__mb ">Skills</h2>


      <div className="skills__container container grid">
        <Frontend />
        <Backend /> 
      </div>
    </section>
  );
};

export default Skills;