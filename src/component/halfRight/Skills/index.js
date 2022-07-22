import React from "react";
import { useSelector } from "react-redux";

const Skills = () => {
  const { skills } = useSelector((state) => state.page1);

  if (!skills.skill1) return null;
  return (
    <section className="p-5">
      <h2>Skills</h2>
      <ul className="p-5 grid grid-cols-3 mx-auto">
        <div>
          <li>{skills.skill1}</li>
          <li>{skills.skill2}</li>
          <li>{skills.skill3}</li>
          <li>{skills.skill4}</li>
          <li>{skills.skill5}</li>
        </div>
        <div>
          <li>{skills.skill6}</li>
          <li>{skills.skill7}</li>
          <li>{skills.skill8}</li>
          <li>{skills.skill9}</li>
          <li>{skills.skill10}</li>
        </div>
        <div>
          <li>{skills.skill11}</li>
          <li>{skills.skill12}</li>
          <li>{skills.skill13}</li>
          <li>{skills.skill14}</li>
          <li>{skills.skill15}</li>
        </div>
      </ul>
    </section>
  );
};

export default Skills;
