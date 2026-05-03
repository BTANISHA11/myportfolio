import React from "react";
import ProfilePic from "../assets/passport.jpg";
import { animateSection } from "../utils/animateSection";

function About() {
  return (
    <section
      id="about"
      className="py-[30px] sm:pt-[30px] sm:pb-[100px] max-w-[900px]  text-white/25 flex flex-col justify-center mx-auto font-sfMonoRegular overflow-x-hidden"
    >
      <div className="about-heading w-fit flex flex-row  mt-[10px] mb-[40px] ">
        <div className="text-theme-green flex items-center text-[15px] sm:text-[20px]">
          01.{" "}
        </div>
        <h1 className="text-theme-gray-light min-w-fit ml-[10px] text-[26px] sm:text-[32px]  flex justify-center items-center font-calibreSemiBold fontFix">
          About Me{" "}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row align-middle min-h-full text-[20px] font-calibreRegular text-theme-gray-deep font-medium ">
        <div className="">
          <p className="mb-4">
            I am Tanisha Bansal, an AI Platform Engineer focused on cloud
            infrastructure, enterprise automation, and intelligent agent
            workflows. I currently build AI-driven platforms that connect user
            intent to secure cloud actions using Microsoft technologies and Azure.
          </p>
          <p className="mb-4">
            My core strengths include Azure governance automation, Terraform-based
            landing zones, backend APIs, and LLM-powered orchestration with
            Copilot Studio and MCP. I enjoy solving platform-scale problems where
            reliability, speed, and developer experience matter.
          </p>
          <p className="mb-4">
            Education: B.Tech in Information Technology, Guru Gobind Singh
            Indraprastha University (2021 - 2025), CGPA 9.5/10.
          </p>
          <p>
            Leadership & Achievements: AWS Community Builder & Technical Mentor,
            supporting 1,000+ developers with cloud and AI guidance; Hackathon
            Judge for 40+ hackathons evaluating 1,000+ projects for AI/ML
            feasibility, cloud scalability, and architecture quality.
          </p>
          {/* <p className="mb-4">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="recent-skills">
            <div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">
              Typescript{" "}
            </div>
            <div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">
              Angular.js
            </div>
            <div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">
              npm package development
            </div>
            <div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">
              Open source
            </div>
          </div> */}
        </div>
        <div className="mx-auto mt-16 md:mt-0 ">
          <div className="md:ml-[55px] wrap-image w-[200px] md:w-[250px] lg:w-[300px]">
            <img src={ProfilePic} alt="profile pic" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function animatedSection() {
  return animateSection(About);
}

export default animatedSection;
