import React from "react";
import { useSelector } from "react-redux";

const Languages = () => {
  const { lang1, level1, lang2, level2, lang3, level3, lang4, level4 } =
    useSelector((state) => state.page1.lang);

  if (!lang1 && !level1) return;
  return (
    <section>
      <h2>Languages</h2>
      <ul className="p-2 text-left">
        {lang1 && level1 && (
          <li>
            {lang1} <small> - {level1}</small>
          </li>
        )}
        {lang2 && level2 && (
          <li>
            {lang2} <small> - {level2}</small>
          </li>
        )}
        {lang3 && level3 && (
          <li>
            {lang3} <small> - {level3}</small>
          </li>
        )}
        {lang4 && level4 && (
          <li>
            {lang4} <small> - {level4}</small>
          </li>
        )}
      </ul>
    </section>
  );
};

export default Languages;
