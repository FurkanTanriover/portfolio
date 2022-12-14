/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex snap-center bg-[#292929] p-10 flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[600px]  w-[500px] md:w-[600px] xl:w-[900px] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-top"
        src={urlFor(experience?.companyImage).url()}
        alt="Furkan Tanrıöver"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies?.map((tech) => (
            <img className="w-10 h-10 rounded-full" key={tech._id} src={urlFor(tech.image).url()}></img>
          ))}
        </div>
        <p className="uppercase py-5 text-gray-500">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96  overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]">
          {experience.points?.map((point, i) => (
            <li key={i}>{"* "+point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
