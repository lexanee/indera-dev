import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { features } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const FeatureCard = ({ features }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={features.date}
      iconStyle={{ background: features.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={features.icon}
            alt={features.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }>
      <div>
        <h3 className="text-white text-[24px] font-bold">{features.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}>
          {features.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {features.points.map((point, index) => (
          <li
            key={`features-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Features = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center">
        <p className={`${styles.sectionSubText} text-center`}>
          Features we offer
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Feature List
        </h2>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center">
          Combine asset data from multiple sources, and make it instantly
          accessible through a simple geospatial visual interface.
        </p>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {features.map((feature, index) => (
            <FeatureCard key={`feature-${index}`} features={feature} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Features, "features");
