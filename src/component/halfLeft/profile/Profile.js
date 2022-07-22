import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useSelector } from "react-redux";

const Profile = () => {
  const { about, facebook, twitter, linkedin, username } = useSelector(
    (state) => state.page1.profile
  );

  return (
    <section>
      <h2>Profile</h2>

      <article className="text-left mt-5 p-2">
        <div className="p-2">
          <p>{about || "About yourself..."}</p>
        </div>

        <div className="flex mt-4 gap-2 mx-auto items-center">
          <a href={facebook || "#"} className="p-2">
            <FaFacebookF />
          </a>
          <a href={twitter || "#"} className="p-2">
            <FaTwitter />
          </a>
          <a href={linkedin || "#"} className="p-2">
            <FaLinkedinIn />
          </a>

          <span>{username || "Username"}</span>
        </div>
      </article>
    </section>
  );
};

export default Profile;
