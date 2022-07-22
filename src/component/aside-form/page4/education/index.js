import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEducation } from "../../../../redux/slices/pagesSlice";
const Education = () => {
  const dispatch = useDispatch();
  const { degree1, university1, description1 } = useSelector(
    (state) => state.page1.education
  );

  const [education, setEducation] = useState({
    degree1: degree1,
    university1: university1,
    description1: description1,
  });

  useEffect(() => {
    dispatch(getEducation(education));
  }, [education, dispatch]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Education</h2>

      <div className="flex gap-2 justify-between items-center">
        <label htmlFor="university1">
          university-1
          <input
            id="university1"
            name="university1"
            type="text"
            className="p-2 w-full border-2 border-cyan-500 rounded-sm"
            placeholder="Type title"
            value={education.university1}
            onChange={(e) =>
              setEducation({ ...education, university1: e.target.value })
            }
            required
          />
        </label>
        <label htmlFor="degree1">
          Degree-1
          <input
            id="degree1"
            name="degree1"
            type="text"
            className="p-2 w-full border-2 border-cyan-500 rounded-sm"
            placeholder="Type degree"
            value={education.degree1}
            onChange={(e) =>
              setEducation({ ...education, degree1: e.target.value })
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
          value={education.description1}
          onChange={(e) =>
            setEducation({ ...education, description1: e.target.value })
          }
          required
          maxLength="250"
        ></textarea>
      </label>
    </div>
  );
};

export default Education;
