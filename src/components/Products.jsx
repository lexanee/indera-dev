import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";
import { products } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProductCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Products = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Unified Digital Twin
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Our Products
        </h2>
      </motion.div>
      <motion.div variants={textVariant()} className="mt-5">
        <p className={`${styles.sectionSubText} normal-case font-bold`}>
          Seamless Integration of Digital Ecosystems
        </p>
        <ul className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] list-disc ml-8">
          <li>
            Build and connect specialized digital twins to reveal hidden
            relationships between assets and systems, enabling comprehensive
            insights across your infrastructure.
          </li>
          <li>
            Unite global operations through interconnected facility networks,
            breaking down data silos and enabling real-time collaboration.
          </li>
          <li>
            Leverage intelligent asset tracking with immediate geographical
            visualization of equipment and resources across your enterprise.
          </li>
          <li>
            Seamlessly integrate with industry-leading platforms and systems,
            ensuring smooth data flow between different technological
            ecosystems.
          </li>
          <li>
            Unlock powerful cross-site analytics to identify patterns and
            opportunities for optimization across your entire operation network.
          </li>
          <li>
            Scale successful pilot implementations efficiently by simulating and
            deploying proven solutions across multiple locations.
          </li>
        </ul>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {products.map((product, index) => (
          <ProductCard key={product.title} index={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Products, "products");
