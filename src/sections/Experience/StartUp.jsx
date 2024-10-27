import React from "react";
import { motion } from "framer-motion";
import BulletPoint from "./BulletPoint.jsx";


const StartUp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="w-full"
    >
      {/* JOB TITLE & COMPANY */}
      <div className="flex flex-wrap text-white gap-1 font-medium text-xl font-titleFont flex-col sml:flex-row">
        <h3 className="text-white">Mentor</h3>
        <span className="text-sm mt-1 font-medium text-textGreen flex">
          @ Gssoc'24
        </span>
      </div>

      {/* Working Dates */}
      <p className="pt-3 text-white">June 2024 - Aug 2024</p>

      {/* INTRODUCTION */}
      <p className="mt-3 text-base font-light flex gap-2 text-textDark">
        <strong>
        Worked as a mentor on the Project VigyBag guiding contributors, merging PRs , resolving issues.
        </strong>
      </p>

      {/* Bullet Points */}
      <ul className="mt-4 flex flex-col gap-3 text-textDark">
        <BulletPoint
          headningText="Optimizing Performance"
          contentText="Worked with the Project Lead to improve website performance."
        />

        
      </ul>
    </motion.div>
  );
};

export default StartUp;
