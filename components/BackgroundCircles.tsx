import { motion } from "framer-motion";
type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      className="relative bg-slate-400 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.8, 1.0], borderRadius:["20%","20%","50%","80%","20%"] }}
      transition={{ duration: 2.5 }}
    >
      <div className="border border-[#333333] opacity-80 rounded-full h-[200px] w-[200px] mt-52 animate-ping absolute" />
      <div className="border border-[#333333] opacity-80 rounded-full h-[300px] w-[300px] mt-52 animate-ping absolute" />
      <div className="border border-[#333333] opacity-80 rounded-full h-[400px] w-[400px] mt-52 animate-ping absolute" />
      <div className="border border-[#F7AB0A] opacity-80 opacity-10 rounded-full h-[650px] w-[650px] mt-52 animate-pulse absolute" />
      <div />
    </motion.div>
  );
}

export default BackgroundCircles;
