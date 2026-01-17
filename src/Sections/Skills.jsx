import React from "react";
import { skills } from "../Constant";
import SkillSets from "../Components/SkillSets";

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col">
      <h1 className="text-5xl text-center font-palanquin font-bold mb-5">
        Skills
      </h1>
      <p className="text-center font-montserrat text-slate-300">
        Here are the technologies and tools I use to build projects and
        real-world applications.
      </p>

      <div className="flex flex-wrap justify-center gap-10 px-10 py-5 max-sm:px-0">
        {skills.map((s) => (
          <SkillSets key={s.title} title={s.title} tech={s.tech} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
