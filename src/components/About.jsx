import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Who We Are</h2>
      </motion.div>
      <motion.div variants={textVariant(0.5)} className="mt-5">
        <p className={`${styles.sectionSubText} normal-case font-bold`}>
          Our Vision
        </p>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          We are embarking on an ambitious journey to develop a next-generation
          digital twin platform. As an emerging player in the industry, we're
          committed to revolutionizing how organizations manage, visualize, and
          utilize their operational data.
        </p>
      </motion.div>
      <motion.div variants={textVariant(1)} className="mt-5">
        <p className={`${styles.sectionSubText} normal-case font-bold`}>
          Our Mission
        </p>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          To empower organizations with intelligent data management tools that
          drive informed decision-making, optimize operations, and promote
          sustainable practices through innovative digital twin technology.
        </p>
      </motion.div>
      <motion.div variants={textVariant(1.5)} className="mt-5">
        <p className={`${styles.sectionSubText} normal-case font-bold`}>
          Our Approuch
        </p>
        <ul className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] list-disc ml-8">
          <li>Data First Architecture</li>
          <li>Intelligent Data Management</li>
          <li>Ontological Relationships</li>
          <li>Visualization Excellence</li>
        </ul>
      </motion.div>
      <motion.div variants={textVariant(2)} className="mt-5">
        <p className={`${styles.sectionSubText} normal-case font-bold`}>
          Our Goals
        </p>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          As a new entrant in the digital twin space, we aim to:
        </p>
        <ul className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px] list-disc ml-8">
          <li>
            Establish ourselves as an innovative solution provider in the
            digital twin market.
          </li>
          <li>
            Help organizations minimize environmental impact through better
            data-driven decisions
          </li>
          <li>
            Create a platform that scales from local operations to global
            enterprises
          </li>
          <li>
            Build lasting partnerships with industry leaders across
            diverse sectors
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
