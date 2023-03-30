"use client";

import { motion } from "framer-motion";

import style from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <div className={`${style.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      className={`${style.innerWidth} mx-auto flex flex-col`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex flex-col justify-center items-center relative z-10">
        <motion.h1
          className={`${style.heroHeading}`}
          variants={textVariant(1.1)}
        >
          META VERSE
        </motion.h1>
        <motion.div
          className="flex flex-row justify-center items-center"
          variants={textVariant(1.2)}
        >
          <h1 className={`${style.heroHeading}`}>UN</h1>
          <div className={`${style.heroDText}`} />
          <h1 className={`${style.heroHeading}`}>EFEATED</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 0.1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/cover.png"
          alt="cover_hero"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </div>
);

export default Hero;
