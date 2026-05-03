import React from "react";
import { motion } from "framer-motion";
import BulletPoint from "./BulletPoint.jsx";

const TeamLead = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="w-full min-h-fit"
    >
      {/* JOB TITLE & COMPANY */}
      <div className="flex flex-wrap gap-1 text-white font-medium text-xl font-titleFont flex-col sml:flex-row">
        <h3>AI Platform Engineer (Cloud Infrastructure)</h3>
        <span className="text-sm mt-1 font-medium text-textGreen flex">
          @ SITA (Societe Internationale de Telecommunications Aeronautiques)
        </span>
      </div>

      {/* Working Dates */}
      <p className="pt-3 text-white">Jul 2025 - Present | Gurgaon, India</p>

      {/* Bullet Points */}
      <ul className="mt-4 flex flex-col gap-3 text-textDark">
        <BulletPoint
          headningText="Enterprise AI Agents"
          contentText="Developed enterprise AI agents using Microsoft Copilot Studio and MCP to automate ServiceNow workflows, reducing operational overhead by 40% through intelligent request orchestration."
        />
        <BulletPoint
          headningText="Subscription Vending Platform"
          contentText="Architected an Azure subscription vending platform with Terraform and Python, automating secure landing zone provisioning with integrated RBAC, Azure Policies, and governance controls."
        />
        <BulletPoint
          headningText="AI Workflow Automation"
          contentText="Built AI-driven workflows with Power Apps and Power Automate to map user requests to cloud infrastructure actions, streamlining resource lifecycle management across global airport systems."
        />
      </ul>
    </motion.div>
  );
};

export default TeamLead;
