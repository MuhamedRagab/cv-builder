import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../../redux/slices/pagesSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { about, facebook, twitter, linkedin, username } = useSelector(
    (state) => state.page1.profile
  );
  const [profile, setProfile] = useState({
    about: about,
    facebook: facebook,
    twitter: twitter,
    linkedin: linkedin,
    username: username,
  });

  useEffect(() => {
    dispatch(getProfile(profile));
  }, [profile, dispatch]);

  return (
    <div className="flex flex-col gap-4 justify-center">
      <h2 className="text-2xl font-bold">Profile</h2>

      <label htmlFor="about-person">
        About
        <textarea
          placeholder="Type about yourself"
          id="about-person"
          name="about"
          value={profile.about}
          maxLength="150"
          onChange={(e) => setProfile({ ...profile, about: e.target.value })}
          required
        ></textarea>
      </label>

      <label htmlFor="facebook-link">
        Facebook
        <input
          name="facebook"
          type="url"
          placeholder="Enter facebook link"
          id="facebook-link"
          value={profile.facebook}
          onChange={(e) => setProfile({ ...profile, facebook: e.target.value })}
          required
        />
      </label>

      <label htmlFor="twitter-link">
        Twitter
        <input
          name="twitter"
          type="url"
          placeholder="Enter twitter link"
          id="twitter-link"
          value={profile.twitter}
          onChange={(e) => setProfile({ ...profile, twitter: e.target.value })}
          required
        />
      </label>

      <label htmlFor="linkedin-link">
        Linkedin
        <input
          name="linkedin"
          type="url"
          placeholder="Enter linkedin link"
          id="linkedin-link"
          value={profile.linkedin}
          onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
          required
        />
      </label>
      <label htmlFor="username">
        Username
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          id="username-link"
          value={profile.username}
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          required
        />
      </label>
    </div>
  );
};

export default Profile;
