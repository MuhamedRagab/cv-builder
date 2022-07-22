import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerson } from "../../../../redux/slices/pagesSlice";

const Person = () => {
  const dispatch = useDispatch();
  const { name, job, image } = useSelector((state) => state.page1.person);
  const [person, setPerson] = useState({
    image: image,
    name: name,
    job: job,
  });

  const handleImage = (el) => {
    let image = el.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      setPerson({ ...person, image: e.target.result });
    };
    reader.readAsDataURL(image);
  };

  useEffect(() => {
    dispatch(getPerson(person));
  }, [person, dispatch]);

  return (
    <div className="flex flex-col gap-4 justify-center">
      <h2 className="text-2xl font-bold">Person</h2>

      <label htmlFor="image">
        Image
        <input
          id="image"
          name="image"
          type="file"
          className="w-full"
          onChange={(e) => handleImage(e)}
          required
        />
      </label>

      <div className="flex flex-col sm:flex-row gap-4">
        <label htmlFor="name" className="w-full">
          Name
          <input
            id="name"
            name="name"
            type="text"
            className="p-2 w-full border-2 border-cyan-500 rounded-sm"
            placeholder="Type full name"
            value={person.name}
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
            required
          />
        </label>

        <label htmlFor="job" className="w-full">
          Job
          <input
            id="job"
            name="job"
            type="text"
            className="p-2 w-full border-2 border-cyan-500 rounded-sm"
            placeholder="Type job"
            value={person.job}
            onChange={(e) => setPerson({ ...person, job: e.target.value })}
            required
          />
        </label>
      </div>
    </div>
  );
};

export default Person;
