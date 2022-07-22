import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSkills } from "../../../../redux/slices/pagesSlice";

const Skills = () => {
  const dispatch = useDispatch();
  const { skills } = useSelector((state) => state.page1);
  const [skillsState, setSkillsState] = useState({
    skill1: skills.skill1,
    skill2: skills.skill2,
    skill3: skills.skill3,
    skill4: skills.skill4,
    skill5: skills.skill5,
    skill6: skills.skill6,
    skill7: skills.skill7,
    skill8: skills.skill8,
    skill9: skills.skill9,
    skill10: skills.skill10,
    skill11: skills.skill11,
    skill12: skills.skill12,
    skill13: skills.skill13,
    skill14: skills.skill14,
    skill15: skills.skill15,
  });

  useEffect(() => {
    dispatch(getSkills(skillsState));
  }, [skillsState, dispatch]);

  return (
    <div>
      <h2>Skills</h2>
      <ul className="p-5 grid gap-2 grid-cols-3 mx-auto">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="skill1"
            value={skillsState.skill1}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill1: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="skill2"
            value={skillsState.skill2}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill2: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="skill3"
            value={skillsState.skill3}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill3: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="skill4"
            value={skillsState.skill4}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill4: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="skill5"
            value={skillsState.skill5}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill5: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="skill6"
            value={skillsState.skill6}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill6: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="skill7"
            value={skillsState.skill7}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill7: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="skill8"
            value={skillsState.skill8}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill8: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="skill9"
            value={skillsState.skill9}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill9: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="skill10"
            value={skillsState.skill10}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill10: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="skill11"
            value={skillsState.skill11}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill11: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="skill12"
            value={skillsState.skill12}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill12: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="skill13"
            value={skillsState.skill13}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill13: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="skill14"
            value={skillsState.skill14}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill14: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="skill15"
            value={skillsState.skill15}
            onChange={(e) =>
              setSkillsState({ ...skillsState, skill15: e.target.value })
            }
          />
        </div>
      </ul>
    </div>
  );
};

export default Skills;
