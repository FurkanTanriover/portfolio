/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name}`,
    "I Love Development",
    "<So, I Love Coffe and Coding />"
  ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <div className="z-20">
        <img
          className="rounded-full h-32 w-32 mx-auto object-cover "
          src={urlFor(pageInfo?.heroImage).url()}
          alt="Furkan Tanrıöver"
        />
        <div>
          <h2 className="text-sm uppercase text-gray-500 tracking-[15px] mt-8">{pageInfo?.role}</h2>
          <h1 className="mt-2 text-5xl lg:text-6xl font-semibold scroll-px-10">
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
        </div>
        <div>
          <Link href={"#about"}>
            <button className="hero-button">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="hero-button"> Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="hero-button">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="hero-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
