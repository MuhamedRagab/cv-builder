import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  person: {
    image: "",
    name: "",
    job: "",
  },
  contact: {
    phone: "",
    email: "",
    github: "",
    address: "",
  },
  profile: {
    about: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    username: "",
  },
  experience: {
    title1: "",
    company1: "",
    description1: "",
    title2: "",
    company2: "",
    description2: "",
  },
  education: {
    degree1: "",
    university1: "",
    description1: "",
  },
  lang: {
    lang1: "",
    level1: "",
    lang2: "",
    level2: "",
    lang3: "",
    level3: "",
    lang4: "",
    level4: "",
  },
  skills: {
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    skill7: "",
    skill8: "",
    skill9: "",
    skill10: "",
    skill11: "",
    skill12: "",
    skill13: "",
    skill14: "",
    skill15: "",
  },
};

export const page1Slice = createSlice({
  name: "page1",
  initialState,
  reducers: {
    getPerson: (state, { payload }) => {
      state.person = payload;
    },
    getContact: (state, { payload }) => {
      state.contact = payload;
    },
    getProfile: (state, { payload }) => {
      state.profile = payload;
    },
    getExperience: (state, { payload }) => {
      state.experience = payload;
    },
    getEducation: (state, { payload }) => {
      state.education = payload;
    },
    getLang: (state, { payload }) => {
      state.lang = payload;
    },
    getSkills: (state, { payload }) => {
      state.skills = payload;
    },
  },
});

export const {
  getPerson,
  getContact,
  getProfile,
  getExperience,
  getEducation,
  getLang,
  getSkills,
} = page1Slice.actions;
export default page1Slice.reducer;
