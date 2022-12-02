import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        className="flex flex-row items-center"
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* social ıcons */}
        <SocialIcon url="https://youtube.com/jaketrent" fgColor="grey" bgColor="transparent" />
        <SocialIcon url="https://youtube.com/jaketrent" fgColor="grey" bgColor="transparent" />
        <SocialIcon url="https://youtube.com/jaketrent" fgColor="grey" bgColor="transparent" />
      </motion.div>
      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon className="cursor-pointer" network="email" fgColor="grey" bgColor="transparent" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400"> Get In Touch</p>
      </motion.div>
    </header>
  );
}

export default Header;
