/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./Skills.css";
import { useDispatch, useSelector } from "react-redux";
import SkillBar from "react-skillbars";
import Skill from "../Skill/Skill";
import { getSkills } from "../../store/actions/skills";

const Skills = () => {
  // const { skills } = useSelector((store) => store.skills);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getSkills());
  // }, []);

  const skills = [
    { type: "Javascript", level: 80 },
    { type: "TypeScript", level: 75 },
    { type: "ReactJs", level: 80 },
    { type: "NodeJs", level: 70 },
    { type: "React_native", level: 70 },
    { type: "ExpressJs", level: 80 },
    { type: "NestJs", level: 80 },
  ];

  return (
    <section className="padding" id="skills">
      <h1 className="section-title">Languages & Technologies.</h1>
      <div className="skills-container">
        <SkillBar skills={skills} height={20} />
      </div>
    </section>
  );
};

export default Skills;
