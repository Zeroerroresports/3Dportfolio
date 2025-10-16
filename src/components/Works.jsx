import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({ index, name, description, image, source_code_link }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1.05}
      transitionSpeed={450}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex justify-end">
        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          View Code
        </a>
      </div>
    </Tilt>
  </motion.div>
);

export default ProjectCard;
