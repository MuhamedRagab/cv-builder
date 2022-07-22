import React from "react";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import Skills from "./Skills";

const HalfRight = () => {
  return (
    <section className="p-11 pb-0 ">
      <Experience />
      <Education />
      <Skills />
    </section>
  );
};

export default HalfRight;
