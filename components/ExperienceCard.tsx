/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex snap-center bg-[#292929] p-10 flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 ">
      <motion.img
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top"
        src="https://media-exp1.licdn.com/dms/image/C5603AQEKqLYh8XhVMg/profile-displayphoto-shrink_800_800/0/1623004462527?e=1675296000&v=beta&t=Pu_zmE7DqzclJoaoD1xzs0sXlAIwWz8lN_gpL2EBbVQ"
        alt="Furkan Tanrıöver"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Intern of Netmarble</h4>
        <p className="font-bold text-2xl mt-1">NETMARBLE</p>
        <div className="flex space-x-2 my-2">
          <img className="w-10 h-10 rounded-full" src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" />
          <img className="w-10 h-10 rounded-full" src="https://img.icons8.com/color/48/000000/typescript.png" alt="TypeScript" />
          <img className="w-10 h-10 rounded-full" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" />
        </div>
        <p className="uppercase py-5 text-gray-500">Started work... - Finished work...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary endpoint</li>
          <li>Summary endpoint</li>
          <li>Summary endpoint</li>
          <li>Summary endpoint</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
