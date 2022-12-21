import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  console.log(socials);
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        className="flex flex-row items-center"
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* social ıcons */}
        {socials.map((social) => (
          <SocialIcon key={social._id} className="cursor-pointer" url={social.url} fgColor="gray" bgColor="transparent" />
        ))}
      </motion.div>
      <Link href={"#contact"}>
        <motion.div
          className="flex flex-row items-center text-gray-300 cursor-pointer"
          initial={{ opacity: 0, x: 500, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <SocialIcon className="cursor-pointer" network="email" fgColor="grey" bgColor="transparent" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400"> Get In Touch</p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
