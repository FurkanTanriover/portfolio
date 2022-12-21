import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
type Props = {
  experiences:Experience[]
};

function WorkExperience({experiences}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 md:top-6  uppercase tracking-[20px] text-gray-500 text-2xl">Deneyim</h3>
      <div className="h-[70px]"></div>
      <div className="flex scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80  w-full space-x-5 overflow-x-scroll p-10 pt-10 snap-x snap-mandatory">
        {experiences?.map((exp) => (
          <ExperienceCard key={exp._id} experience={exp} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
