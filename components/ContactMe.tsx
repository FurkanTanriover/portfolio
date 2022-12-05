import React from "react";
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
type Props = {};

function ContactMe({}: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className=" top-16 md:top-6 absolute uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
            I have got just what you need. {" "}
            <span className="underline decoration-[#F7AB0A]/50">Lets talk.</span>
        </h4>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-lg">+90 555 555 55 55</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-lg">furkan.tanrioveer@gmail.com</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-lg">123 Developer Lane</p>
        </div>
      </div>
      <form className="flex flex-col space-y-5">
        <div className="flex space-x-5">
            <input className="contact-input" type={"text"} />
            <input className="contact-input" type={"text"} />
        </div>
        <input className="contact-input" type={"text"} />
        <input className="contact-input" type={"text"} />

        </form>
    </div>
  );
}

export default ContactMe;
