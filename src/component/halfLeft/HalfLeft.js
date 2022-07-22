import React from "react";
import Person from "./person";
import Contact from "./contact/Contact";
import Profile from "./profile/Profile";
import Languages from "./languages/Languages";
import "./halfLeft.scss";
const HalfLeft = () => {
  return (
    <section className="half-left">
      <Person />
      <Contact />
      <Profile />
      <Languages />
    </section>
  );
};

export default HalfLeft;
