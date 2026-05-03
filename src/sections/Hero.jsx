import {motion} from "framer-motion";
import React, {useEffect, useRef} from "react";
import Typewriter from "typewriter-effect";

const startVariants = {
	initial: {
		opacity: 0,
	},
	end: {
		opacity: 1,
		transition: {
			type: "tween",
			bounce: 0.4,
			duration: 0.4,
			delay: 1,
		},
	},
};

const options = {
  strings: [
    "    ",
    "AI Platform Engineer",
    "Cloud Infrastructure Engineer",
    "Enterprise AI Agent Developer",
    "Azure + Terraform Builder",
    "Backend & API Developer",
    "AI Workflow Automation Engineer",
  ],
  autoStart: true,
  loop: true,
};

function Hero() {
	const btnRef = useRef(null);

	useEffect(() => {
		// let rect = btnRef.current.getBoundingClientRect();
	}, []);
	return (
    <motion.section
      id="hero"
      className="h-screen max-w-[1000px]  text-white/25 flex flex-col justify-center   mx-auto font-sfMonoRegular"
      initial="initial"
      animate="end"
      variants={startVariants}
    >
      <div className="">
        <h1 className="text-theme-green mb-[15px] ml-[4px] ">
          Hi, my name is{" "}
        </h1>
      </div>
      <h2 className="name-heading font-calibreRegular text-[40px] font-bold text-theme-gray-light pt-0">
        Tanisha Bansal
      </h2>
      <h3 className="text-lg md:text-2xl lg:text-3xl text-textDark mt-2">
        <Typewriter options={options} />
      </h3>
      <p className="bio max-w-[540px] mt-[20px] text-[20px] text-theme-gray-deep font-calibreRegular">
        I build enterprise-grade AI workflows and cloud infrastructure on Azure,
        combining Copilot Studio, MCP, Terraform, and Python to automate
        operations at scale.
      </p>
      <div
        ref={btnRef}
        className="flex items-center border rounded cursor-pointer w-fit mt-9 border-theme-green hover:bg-theme-green/10 text-theme-green"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://tanishaportfolio.app"
          className=" px-[50px] py-[18px]"
        >
          Visit Portfolio
        </a>
      </div>
    </motion.section>
  );
}

export default Hero;
