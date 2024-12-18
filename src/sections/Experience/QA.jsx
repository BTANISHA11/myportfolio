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
      Software Developer
        <span className="text-sm mt-1 font-medium text-textGreen flex">
          @ iMarketVend &ensp;
        </span>
        <em className="text-sm"></em>
      </h3>

      {/* Working Dates */}
      <p className="pt-3 text-white">July 2024 - August 2024</p>

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
          headningText="Performance"
          contentText="Achieved 20% improvement by switching to Next.js from React.js. Led the team in transitioning, overseeing design,
          development, and implementation."
        />

        <BulletPoint
          headningText="Admin Dashboard for managing leads"
          contentText="Architected Admin Dashboard, optimising company-wide processes with a 15% efficiency surge."
        />
        <BulletPoint
          headningText="Increased Efficiency"
          contentText="Engineered server system enabling synchronous CRUD operations and custom roles. Increased marketing efficiency by 20%."
        />
      </ul>
    </motion.div>
  );
};

export default QA;
