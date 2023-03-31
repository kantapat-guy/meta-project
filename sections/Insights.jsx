"use client";

import { motion } from "framer-motion";

import style from "../styles";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${style.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${style.innerWidth} 2xl:max-w-[1280px] mx-auto flex flex-col`}
    >
      <TypingText title="Insight" textStyle="text-center" />
      <TitleText title="Insight about meta" textStyle="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((text, index) => (
          <InsightCard key={`insight-${index}`} {...text} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
