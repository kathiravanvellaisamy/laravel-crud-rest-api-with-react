import React, { useState } from "react";

const CraeteSkill = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    slug: "",
  });

  const onChange = () => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };
  return (
    <div className="max-w-3xl mx-auto">
      <div className="py-4 bg-slate-100">
        <h1 className="text-3xl md:text-5xl text-pink-950 text-center">
          Create Skill
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="my-1 py-1">
          <label htmlFor="name" className="font-semibold text-md mt-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formValues["name"]}
            onChange={onChange}
            id="name"
            className="px-3 py-2 mt-1 border border-slate-300 rounded-md w-full"
          />
        </div>
        <div className="my-1 py-1">
          <label htmlFor="slug" className="font-semibold text-md mt-1">
            Slug
          </label>
          <input
            type="text"
            name="slug"
            value={formValues["slug"]}
            onChange={onChange}
            id="slug"
            className="px-3 py-2 mt-1 border border-slate-300 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="my-1 bg-pink-950 text-white py-2 px-3 border-2 border-pink-950 rounded-md hover:bg-white hover:text-pink-950 font-semibold"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CraeteSkill;
