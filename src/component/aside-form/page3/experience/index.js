import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperience } from "../../../../redux/slices/pagesSlice";

const Experience = () => {
  const dispatch = useDispatch();
  const { title1, company1, description1, title2, company2, description2 } =
    useSelector((state) => state.page1.experience);
  const [experience, setExperience] = useState({
    title1: title1,
    company1: company1,
    description1: description1,
    title2: title2,
    company2: company2,
    description2: description2,
  });

  useEffect(() => {
    dispatch(getExperience(experience));
  }, [experience, dispatch]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Experience</h2>

      <div className="flex gap-2 justify-between items-center">
        <label htmlFor="title1">
          Title-1
          <input
            id="title1"
            name="title1"
            type="text"
            className="p-2 w-full border-2 border-cyan-500 rounded-sm"
            placeholder="Type title"
            value={experience.title1}
            onChange={(e) =>
              setExperience({ ...experience, title1: e.target.value })
            }
            required
          />
        </label>
        <label htmlFor="company1">
          Company-1
          <input
            id="company1"
            name="company1"
            type="text"
            className="p-2 w-full border-2 border-cyan-500 rounded-sm"
            placeholder="Type company"
            value={experience.company1}
            onChange={(e) =>
              setExperience({ ...experience, company1: e.target.value })
            }
            required
          />
        </label>
      </div>
      <label htmlFor="description">
        Description-1
        <textarea
          id="description1"
          name="description1"
          className="break-words"
          placeholder="Type description"
          value={experience.description1}
          onChange={(e) =>
            setExperience({ ...experience, description1: e.target.value })
          }
          maxLength="250"
          required
        ></textarea>
      </label>

      <div className="flex gap-2 justify-between items-center">
        <label htmlFor="title2">
          Title-2
          <input
            id="title2"
            name="title2"
            type="text"
            className="p-2 w-full border-2 border-cyan-500 rounded-sm"
            placeholder="Type title"
            value={experience.title2}
            onChange={(e) =>
              setExperience({ ...experience, title2: e.target.value })
            }
          />
        </label>
        <label htmlFor="company2">
          Company-2
          <input
            id="company2"
            name="company2"
            type="text"
            className="p-2 w-full border-2 border-cyan-500 rounded-sm"
            placeholder="Type company"
            value={experience.company2}
            onChange={(e) =>
              setExperience({ ...experience, company2: e.target.value })
            }
          />
        </label>
      </div>
      <label htmlFor="description2">
        Description-2
        <textarea
          id="description2"
          name="description2"
          className="break-words"
          placeholder="Type description"
          value={experience.description2}
          onChange={(e) =>
            setExperience({ ...experience, description2: e.target.value })
          }
          maxLength="250"
        ></textarea>
      </label>
    </div>
  );
};

export default Experience;
