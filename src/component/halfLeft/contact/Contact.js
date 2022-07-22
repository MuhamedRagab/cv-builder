import React from "react";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { useSelector } from "react-redux/es/exports";

const Contact = () => {
  const { phone, email, github, address } = useSelector(
    (state) => state.page1.contact
  );

  return (
    <section>
      <h2>Contact</h2>

      <article className="flex flex-col gap-4 mt-5 p-2 mx-auto">
        <div className="flex items-center gap-2">
          <BsFillTelephoneFill className="text-2xl" />
          <span className="text-sm w-2/3 break-words">
            {phone || "Your phone"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <MdEmail className="text-2xl" />
          <span className="text-sm w-2/3 break-words">
            {email || "Your email"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <BsGithub className="text-2xl" />
          <span className="text-sm w-2/3 break-words w-2/3 break-words">
            {github || "Your github account"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <AiTwotoneHome className="text-2xl" />
          <span className="text-sm w-2/3 break-words">
            {address || "Your address"}
          </span>
        </div>
      </article>
    </section>
  );
};

export default Contact;
