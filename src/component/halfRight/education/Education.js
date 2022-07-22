import React from "react";
import { useSelector } from "react-redux";

const Education = () => {
  const { university1, degree1, description1 } = useSelector(
    (state) => state.page1.education
  );
  if (!university1 && !degree1 && !description1) return;
  return (
    <div>
      <h2 className="w-1/2 m-0">Education</h2>
      <article className="p-10 flex flex-col gap-6">
        {university1 && degree1 && (
          <div>
            <h3>{degree1 || "Master Degree"}</h3>
            <span>
              <i>{university1 || "University Name"}</i>
            </span>
            <p className="mt-5">{description1 || "About the University..."}</p>
          </div>
        )}
      </article>
    </div>
  );
};

export default Education;
