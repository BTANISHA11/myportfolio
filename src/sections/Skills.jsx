import React from 'react';
import skillsData from '../data/skills.json'; // import your JSON data here

const Skills = () => {
  return (
    <section className="py-10 text-center">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Skillset</h1>
      <p className="text-lg text-gray-600 mb-8">What I know</p>
      <div className="flex flex-wrap justify-center gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-20 h-20 p-2 border-2 border-gray-400 rounded-lg flex items-center justify-center">
              <img src={skill.image} alt={skill.name} className="h-full w-full object-contain" />
            </div>
            <p className="mt-2 font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
