/* eslint-disable @next/next/no-img-element */
import React from "react";
import {motion} from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className=" top-16 md:top-6 absolute uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
      <div className="w-full scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project,i) => (
          <div key={5} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20">
            <motion.img
            initial={{y:-250}}
            transition={{duration:1.1}}
            whileInView={{y:0}}
            viewport={{once:true}}
            src="https://play-lh.googleusercontent.com/1zfN_BL13q20v0wvBzMWiZ_sL_t4KcCJBeAMRpOZeT3p34quM-4-pO-VcLj8PJNXPA0" alt="" className="w-48 md:w-96" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {i+1} of {projects.length}:
                    </span>{" "}
                    UPS Clone
                </h4>
                <p className="text-lg text-center md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
