import React from "react";
import personImage from "../../../assets/images/person.jpg";
import { useSelector } from "react-redux";

const Person = () => {
  const { name, job, image } = useSelector((state) => state.page1.person);
  return (
    <div>
      <figure className="rounded-full mx-auto">
        <img className="person-image" src={image || personImage} alt="perosn" />
        <figcaption className="mt-12 border-b-2 border-black">
          <h1 className="font-medium">{name || "Your name"}</h1>
        </figcaption>
        <p className="text-md mt-4">{job || "Your job"}</p>
      </figure>
    </div>
  );
};

export default Person;
