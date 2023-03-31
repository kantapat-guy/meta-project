"use client";

import { motion } from "framer-motion";

import style from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants";

const GetStarted = () => (
  <section className={`${style.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${style.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        initial="hidden"
        whileInView="show"
        className={`${style.flexCenter} flex-1`}
      >
        <img
          src="/get-started.svg"
          alt="planet-left"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Meta Works" textStyle="text-start" />
        <TitleText title={<>Get Startd with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
