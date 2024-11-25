import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
import { products } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProductCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className="xs:w-[250px] w-full">
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
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center">
        <p className={`${styles.sectionSubText} text-center`}>Our Concept</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Unified Digital Twin
        </h2>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center">
          Seamless Integration of Digital Ecosystems
        </p>
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
