import React from "react";

const CraeteSkill = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="py-4 bg-slate-100">
        <h1 className="text-3xl md:text-5xl text-pink-950 text-center">
          Create Skill
        </h1>
      </div>
      <form action="">
        <div className="my-1 py-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name=""
            id=""
            className="px-3 py-2 mt-1 border border-slate-300 rounded-md w-full"
          />
        </div>
        <div className="my-1 py-1">
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            name=""
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
