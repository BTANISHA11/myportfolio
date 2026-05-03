import React from "react";
import { motion } from "framer-motion";

import BulletPoint from "./BulletPoint.jsx";

const QA = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="w-full"
    >
      {/* JOB TITLE & COMPANY */}
      <h3 className="flex gap-1 text-white font-medium text-xl font-titleFont flex-col sml:flex-row">
      Software Developer Intern | Backend & APIs
        <span className="text-sm mt-1 font-medium text-textGreen flex">
          @ PHICSIT Pvt Ltd &ensp;
        </span>
        <em className="text-sm"></em>
      </h3>

      {/* Working Dates */}
      <p className="pt-3 text-white">Nov 2024 - Jun 2025 | New Delhi, India</p>

      {/* INTRODUCTION */}
      {/* <p className="mt-3 text-base font-light flex gap-2 text-textDark">
        <strong>
          Developer on Project API Setu, where I am responsible for designing,
          developing, and implementing solutions with a team of developers and
          also maintaining a set of APIs forthe project.
        </strong>
      </p> */}

      {/* Bullet Points */}
      <ul className="mt-4 flex flex-col gap-3 text-textDark">
        <BulletPoint
          headningText="Backend Refactoring"
          contentText="Enhanced system stability by 30% through asynchronous API refactoring and robust backend improvements."
        />
        <BulletPoint
          headningText="Code Review & Team Enablement"
          contentText="Led peer code reviews and engineering collaboration practices that reduced developer onboarding time by 25%."
        />
      </ul>
    </motion.div>
  );
};

export default QA;
