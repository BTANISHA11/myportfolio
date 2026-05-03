import React, { useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import TeamLead from "./TeamLead.jsx";
import QA from "./QA.jsx";
import Internship from "./Internship.jsx";

const Experience = () => {
  const [workTeamLead, setWorkTeamLead] = useState(true);
  const [workQA, setWorkQA] = useState(false);
  const [workInternship, setWorkInternship] = useState(false);

  const handleTeamLead = () => {
    setWorkTeamLead(true);
    setWorkQA(false);
    setWorkInternship(false);
  };

  const handleQA = () => {
    setWorkTeamLead(false);
    setWorkQA(true);
    setWorkInternship(false);
  };

  const handleInternship = () => {
    setWorkTeamLead(false);
    setWorkQA(false);
    setWorkInternship(true);
  };

  return (
    <section
      id="Experience"
      className="max-w-[1024px] min-h-screen mx-auto py-20 lg:py-32 flex flex-col gap-5 justify-center"
    >
      <SectionTitle titleName="Where I have worked" titleNumber="03" />
      {/* CONTAINER DIV */}
      <div className="w-full h-fit mt-5 flex flex-col lg:flex-row gap-4 ">
        {/*  SIDE BAR */}
        <div className="flex w-full lg:w-[fit-content] h-[fit-content]">
          <ul className="flex lg:flex-col overflow-x-scroll no-scrollbar">
            {/* TeamLead */}
            <li
              onClick={handleTeamLead}
              className={`${
                workTeamLead
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor : text-textDark"
              } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
            >
              <span
                className={`${
                  workTeamLead ? "text-textGreen" : "text-textDark"
                }`}
              >
                SITA
              </span>
              <br />
            </li>

          
            <li
              onClick={handleQA}
              className={`${
                workQA
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor : text-textDark"
              } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
            >
              <span
                className={`${workQA ? "text-textGreen" : "text-textDark"}`}
              >
                PHICSIT Pvt Ltd
              </span>
              <br />
            </li>


            {/* Internship */}
             <li
              onClick={handleInternship}
              className={`${
                workInternship
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor : text-textDark"
              } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
            >
              <span
                className={`${
                  workInternship ? "text-textGreen" : "text-textDark"
                }`}
              >
              GeeksforGeeks
              </span>
              <br />
            </li>
          </ul>
        </div>

        {/* Work information */}
        {workTeamLead && <TeamLead />}
        {workQA && <QA />}
        {workInternship && <Internship />}
        
      </div>
    </section>
  );
};

export default Experience;
