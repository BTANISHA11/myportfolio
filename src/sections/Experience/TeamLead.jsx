import React from "react";
import { motion } from "framer-motion";
import BulletPoint from "./BulletPoint.jsx";

const C4GT = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="w-full min-h-fit"
    >
      {/* JOB TITLE & COMPANY */}
      <div className="flex flex-wrap gap-1 text-white font-medium text-xl font-titleFont flex-col sml:flex-row">
        <h3>Full Stack Developer/ ALIML Developer</h3>
        <span className="text-sm mt-1 font-medium text-textGreen flex">
          @ QuickIsCool &ensp;
        </span>
      </div>

      {/* Working Dates */}
      <p className="pt-3 text-white">Mar 2024 - June 2024</p>

      
      {/* INTRODUCTION */}
     <p className="mt-3 text-base font-light flex gap-2 text-textDark">
        <strong>
        Developed and enhanced the platform by working on their website, improving user experience, and increasing
        engagement by 30% on Discord.
        Built a user-friendly dashboard, enhancing functionality and boosting user accuracy and engagement by
        50% on the live coding platform
          <br />
          <ul className="mt-4 flex flex-col gap-3 text-textDark">
          <BulletPoint
            headningText="Optimizing Performance"
            contentText=" Optimized website for improved user experience, resulting in a 30%
            increase in engagement on Discord."
          />
          <BulletPoint
          headningText="Collaboration"
          contentText="Collaborated closely with team members to address user feedback and continuously improve platform features."
          />
          </ul>
        </strong>
      </p> 

      

      
      
    


      
    </motion.div>
  );
};

export default C4GT;
