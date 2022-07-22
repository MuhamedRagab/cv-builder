import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLang } from "../../../../redux/slices/pagesSlice";

const Lang = () => {
  const dispatch = useDispatch();
  const { lang1, level1, lang2, level2, lang3, level3, lang4, level4 } =
    useSelector((state) => state.page1.lang);
  const [lang, setLang] = useState({
    lang1: lang1,
    level1: level1,
    lang2: lang2,
    level2: level2,
    lang3: lang3,
    level3: level3,
    lang4: lang4,
    level4: level4,
  });

  useEffect(() => {
    dispatch(getLang(lang));
  }, [lang, dispatch]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Languages</h2>
      <div className="flex gap-4 items-center">
        <label className="w-full" htmlFor="lang1">
          Lang-1
          <input
            id="lang1"
            name="lang1"
            type="text"
            placeholder="Type lang"
            value={lang.lang1}
            onChange={(e) => setLang({ ...lang, lang1: e.target.value })}
          />
        </label>
        <select
          name="lang1-level"
          id="lang1-level"
          value={lang.level1}
          onChange={(e) => setLang({ ...lang, level1: e.target.value })}
        >
          <option value="">Select level</option>
          <option value="Basic">Basic</option>
          <option value="intermediate">Intermediate</option>
          <option value="Professinal">Professinal</option>
          <option value="Native">Native</option>
        </select>
      </div>

      <div className="flex gap-4 items-center">
        <label className="w-full" htmlFor="lang2">
          Lang-2
          <input
            id="lang2"
            name="lang2"
            type="text"
            placeholder="Type lang"
            value={lang.lang2}
            onChange={(e) => setLang({ ...lang, lang2: e.target.value })}
          />
        </label>
        <select
          name="lang2-level"
          id="lang2-level"
          value={lang.level2}
          onChange={(e) => setLang({ ...lang, level2: e.target.value })}
        >
          <option value="">Select level</option>
          <option value="Basic">Basic</option>
          <option value="intermediate">Intermediate</option>
          <option value="Professinal">Professinal</option>
          <option value="Native">Native</option>
        </select>
      </div>

      <div className="flex gap-4 items-center">
        <label className="w-full" htmlFor="lang3">
          Lang-3
          <input
            id="lang3"
            name="lang3"
            type="text"
            placeholder="Type lang"
            value={lang.lang3}
            onChange={(e) => setLang({ ...lang, lang3: e.target.value })}
          />
        </label>
        <select
          name="lang3-level"
          id="lang3-level"
          value={lang.level3}
          onChange={(e) => setLang({ ...lang, level3: e.target.value })}
        >
          <option value="">Select level</option>
          <option value="Basic">Basic</option>
          <option value="intermediate">Intermediate</option>
          <option value="Professinal">Professinal</option>
          <option value="Native">Native</option>
        </select>
      </div>

      <div className="flex gap-4 items-center">
        <label className="w-full" htmlFor="lang4">
          Lang-4
          <input
            id="lang4"
            name="lang4"
            type="text"
            placeholder="Type lang"
            value={lang.lang4}
            onChange={(e) => setLang({ ...lang, lang4: e.target.value })}
          />
        </label>
        <select
          name="lang4-level"
          id="lang4-level"
          value={lang.level4}
          onChange={(e) => setLang({ ...lang, level4: e.target.value })}
        >
          <option value="">Select level</option>
          <option value="Basic">Basic</option>
          <option value="intermediate">Intermediate</option>
          <option value="Professinal">Professinal</option>
          <option value="Native">Native</option>
        </select>
      </div>
    </div>
  );
};

export default Lang;
