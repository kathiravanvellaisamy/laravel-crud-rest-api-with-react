import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SkillHome = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSkills = async () => {
      setIsLoading(true);
      const apiSkills = await axios.get("http://localhost:8000/api/v1/skills/");
      setSkills(apiSkills.data.data);
      setIsLoading(false);
    };
    getSkills();
  }, []);
  return (
    <div className="max-w-3xl mx-auto">
      <div className="py-4 bg-slate-100">
        <h1 className="text-3xl md:text-5xl text-pink-950 text-center">
          Skills List
        </h1>
      </div>

      {/* table */}
      <div className="text-center py-3">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Slug
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill) => (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {skill.id}
                    </th>
                    <td className="px-6 py-4">{skill.name}</td>

                    <td className="px-6 py-4">{skill.slug}</td>
                    <td className="px-6 py-4">
                      <Link
                        to="`/skills/edit/${skill.id}`"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillHome;
