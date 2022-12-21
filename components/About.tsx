/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

function About({pageInfo}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 md:top-6  uppercase tracking-[20px] text-gray-500 text-2xl ">Hakkımda</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-32 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-xl md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] pb-2"
      />
      <div className="space-y-5 px-0 md:px-10">
      <div className=" h-5 t-10"></div>
        <h4 className="text-4xl font-semibold -mb-4">
          Hakkımda <span className="underline decoration-[#f7ab0a]/50">minik</span> bir özet
        </h4>
        <p className="text-base">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
