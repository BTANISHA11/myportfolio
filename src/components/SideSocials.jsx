import { motion } from "framer-motion";
import React from "react";
import { SiCodechef, SiLeetcode } from "react-icons/si";

const startVariants = {
  initial: {
    y: 1000,
  },
  end: {
    y: 0,
    transition: {
      type: "tween",
      bounce: 0.4,
      duration: 0.8,
      delay: 1,
    },
  },
};

function SideSocials() {
  return (
    <motion.div
      className="hidden md:flex flex-col fixed bottom-0 md:left-5 lg:left-9 social-line min-w-[40px]"
      initial="initial"
      animate="end"
      variants={startVariants}
    >
      <div className="flex flex-row items-center mb-2 social-icon-box">
        <a
          href="https://github.com/BTANISHA11"
          target="_blank"
          rel="noreferrer"
          className="w-[40px] h-[40px] cursor-pointer p-[10px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="social-icon-svg text-theme-light-slate hover:stroke-theme-green hover:translate-y-[-3px]"
          >
            <title>GitHub</title>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>

      <div className="flex flex-row items-center mb-6 social-icon-box">
        <a
          href="https://www.linkedin.com/in/tanishabansal110902/"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
          className="w-[40px] h-[40px] cursor-pointer p-[10px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="social-icon-svg text-theme-light-slate hover:stroke-theme-green hover:translate-y-[-3px]"
          >
            <title>LinkedIn</title>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
      <div className="flex flex-row items-center mb-6 social-icon-box">
  <a
    href="https://linktr.ee/tanishab11"
    aria-label="Linktree"
    rel="noopener noreferrer"
    target="_blank"
    className="w-[40px] h-[40px] cursor-pointer p-[10px]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="social-icon-svg text-theme-light-slate hover:stroke-theme-green hover:translate-y-[-3px]"
    >
      <title>Linktree</title>
      <path d="M12 2v20m-6-6h12M6 12h12M6 18h12M6 6h12"></path>
    </svg>
  </a>
</div>
      <div className="flex flex-row items-center -mt-3 mb-6">
        <a
          href="https://www.codechef.com/users/btanisha11"
          aria-label="Codechef"
          target="_blank"
          rel="noreferrer"
          className="w-[40px] h-[40px] cursor-pointer p-[10px] hover:stroke-theme-green"
        >
          <SiCodechef
            className="social-icon-svg text-theme-light-slate hover:stroke-theme-green hover:translate-y-[-3px]"
            size={22}
          />
        </a>
      </div>
      <div className="flex flex-row items-center -mt-3 mb-6">
        <a
          href="https://leetcode.com/u/TANISHA_BANSAL/"
          aria-label="Codechef"
          target="_blank"
          rel="noreferrer"
          className="w-[40px] h-[40px] cursor-pointer p-[10px] hover:stroke-theme-green"
        >
          <SiLeetcode
            className="social-icon-svg text-theme-light-slate hover:stroke-theme-green hover:translate-y-[-3px]"
            size={22}
          />
        </a>
      </div>
      <div className="flex flex-row items-center mb-2 social-icon-box">
        <a
          href="https://x.com/Tanishab1192"
          aria-label="Twitter"
          rel="noopener noreferrer"
          target="_blank"
          className="w-[40px] h-[40px] cursor-pointer p-[10px] -mt-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="social-icon-svg text-theme-light-slate hover:stroke-theme-green hover:translate-y-[-3px]"
          >
            <title>Twitter</title>
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>
      </div>
     
    </motion.div>
  );
}

export default SideSocials;
