import React from "react";
import { useSelector } from "react-redux";

const Experience = () => {
  const { title1, company1, description1, title2, company2, description2 } =
    useSelector((state) => state.page1.experience);

  if (!title1 && !company1 && !description1) return;
  else
    return (
      <section>
        <h2 className="w-1/2 m-0">Experience</h2>

        <article className="p-10 flex flex-col gap-6">
          <div>
            <h3>{title1}</h3>
            <span className="">
              <i>{company1}</i>
            </span>
            <p className="mt-5">{description1}</p>
          </div>

          <div>
            <h3>{title2}</h3>
            <span className="">
              <i>{company2}</i>
            </span>
            <p className="mt-5">{description2}</p>
          </div>
        </article>
      </section>
    );
};

export default Experience;
