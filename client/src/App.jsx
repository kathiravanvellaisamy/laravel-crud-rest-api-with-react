import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SkillHome from "./pages/skills/SkillHome";
import ShowSkill from "./pages/skills/ShowSkill";
import CraeteSkill from "./pages/skills/CraeteSkill";
import EditSkill from "./pages/skills/EditSkill";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-5xl border border-slate-400 rounded-md mx-auto px-8 py-4 min-h-screen my-5 bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<SkillHome />} />
          <Route path="/skills/:id" element={<ShowSkill />} />
          <Route path="/skills/create" element={<CraeteSkill />} />
          <Route path="skills/edit/:id" element={<EditSkill />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
