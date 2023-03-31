"use client";

import { motion } from "framer-motion";

import style from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { NewFeatures, TitleText, TypingText } from "../components";
import { newFeatures } from "../constants";

const WhatsNew = () => (
  <section className={`${style.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${style.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| What's New?" textStyle="text-start" />
        <TitleText title={<>What's new about Meta</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        initial="hidden"
        whileInView="show"
        className={`${style.flexCenter} flex-1`}
      >
        <img
          src="/whats-new.svg"
          alt="planet-left"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
