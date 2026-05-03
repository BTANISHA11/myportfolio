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
       Technical Intern | Data Structures & Algorithms
        <span className="text-sm mt-1 font-medium text-textGreen">
          @ GeeksforGeeks
        </span>
      </h3>

      {/* Working Dates */}
      <p className="pt-3 text-white">Jul 2024 - Nov 2024 | Noida, India</p>

      {/* Bullet Points */}
      <ul className="mt-4 flex flex-col gap-3 text-textDark">
      <BulletPoint
        headningText="Algorithm Optimization"
        contentText="Optimized core algorithmic solutions, improving computational efficiency by 15% across key implementations."
      />
      <BulletPoint
        headningText="Code Auditing"
        contentText="Reduced production bug reports by 20% through rigorous code auditing and correctness validation."
      />
      </ul>
    </motion.div>
  );
};

export default Internship;
