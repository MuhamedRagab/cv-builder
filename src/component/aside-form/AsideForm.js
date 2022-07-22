import React, { useState } from "react";

import Person from "./page1/person";
import Contact from "./page1/contact";
import Profile from "./page2/profile";
import Experience from "./page3/experience";
import Education from "./page4/education";
import Lang from "./page5/lang";
import Skills from "./page6/Skills";
import { BsCaretRight, BsCaretLeft } from "react-icons/bs";
import "./aside-form.scss";

const AsideForm = () => {
  const [page, setPage] = useState(1);

  const hideAside = () => {
    document.querySelector(".form-container").classList.add("hidden");
    document.querySelector(".aside-blur").classList.add("hidden");
  };

  const showForm = () => {
    document.querySelector(".form-container").classList.remove("hidden");
    document.querySelector(".aside-blur").classList.remove("hidden");
  };

  return (
    <aside className="aside">
      <button onClick={showForm} className="btn show-form">
        Form
      </button>
      <button onClick={() => window.print()} className="btn print">
        Print
      </button>
      <div className="aside-blur"></div>
      <form onSubmit={(e) => e.preventDefault()} className="form-container">
        <button type="button" onClick={hideAside} className="btn-cancel">
          X
        </button>
        <div className="flex flex-col gap-4">
          {page === 1 && (
            <>
              <Person />
              <Contact />
            </>
          )}
          {page === 2 && <Profile />}
          {page === 3 && <Experience />}
          {page === 4 && <Education />}
          {page === 5 && <Lang />}
          {page === 6 && <Skills />}
        </div>
        {page < 6 && (
          <button
            onClick={() => setPage((page) => page + 1)}
            type="button"
            className="arrow-btn right-5"
          >
            <BsCaretRight />
          </button>
        )}
        {page !== 1 && (
          <button
            onClick={() => setPage((page) => page - 1)}
            type="button"
            className="arrow-btn left-5"
          >
            <BsCaretLeft />
          </button>
        )}
      </form>
    </aside>
  );
};

export default AsideForm;
