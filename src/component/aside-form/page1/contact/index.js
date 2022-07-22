import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../../../redux/slices/pagesSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const { phone, email, github, address } = useSelector(
    (state) => state.page1.contact
  );
  const [contact, setContact] = useState({
    phone: phone,
    email: email,
    github: github,
    address: address,
  });

  useEffect(() => {
    dispatch(getContact(contact));
  }, [contact, dispatch]);

  return (
    <div className="flex flex-col gap-4 justify-center">
      <h2 className="text-2xl font-bold">Contact</h2>

      <label htmlFor="phone">
        Phone
        <input
          id="phone"
          name="Phone"
          type="tel"
          className="p-2 w-full border-2 border-cyan-500 rounded-sm"
          placeholder="Type phone number"
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          required
        />
      </label>

      <label htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          type="email"
          className="p-2 w-full border-2 border-cyan-500 rounded-sm"
          placeholder="Type email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          required
        />
      </label>

      <label htmlFor="github">
        Github
        <input
          id="github"
          name="github"
          type="email"
          className="p-2 w-full border-2 border-cyan-500 rounded-sm"
          placeholder="Type github"
          value={contact.github}
          onChange={(e) => setContact({ ...contact, github: e.target.value })}
          required
        />
      </label>

      <label htmlFor="address">
        Address
        <input
          id="address"
          name="address"
          type="text"
          className="p-2 w-full border-2 border-cyan-500 rounded-sm"
          placeholder="Type address"
          value={contact.address}
          onChange={(e) => setContact({ ...contact, address: e.target.value })}
          required
        />
      </label>
    </div>
  );
};

export default Contact;
