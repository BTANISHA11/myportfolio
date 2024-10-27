import React from "react";
import { motion } from "framer-motion";
import BulletPoint from "./BulletPoint.jsx";

const Internship = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="w-full"
    >
      {/* JOB TITLE & COMPANY */}
      <h3 className="flex gap-1 text-white font-medium text-xl font-titleFont flex-col flex-wrap sml:flex-row">
       Teaching Assistant
        <span className="text-sm mt-1 font-medium text-textGreen">
          @ GeeksforGeeks
        </span>
      </h3>

      {/* Working Dates */}
      <p className="pt-3 text-white">July 2024 - Present</p>

      {/* INTRODUCTION */}
      <p className="mt-3 text-base font-light flex gap-2 text-textDark">
        <strong>
        Resolved over 100+ queries weekly, verified and solved a wide range of complex problems.
        Contributed to more than 10+ comprehensive educational articles and quizzes to enhance learning and engagement.
        </strong>
      </p>

      {/* Bullet Points */}
      <ul className="mt-4 flex flex-col gap-3 text-textDark">
      <BulletPoint
        headningText="Optimizing Performance"
        contentText="Worked with the team to improve technical support."
      />
      </ul>
    </motion.div>
  );
};

export default Internship;
