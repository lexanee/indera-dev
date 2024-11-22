import React from "react";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
      <motion.div 
        variants={textVariant()}
        className='flex flex-row flex-wrap justify-center gap-10'
      >
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      </motion.div>
  );
};

export default SectionWrapper(Tech, "");
