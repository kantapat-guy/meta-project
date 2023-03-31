"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import style from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${style.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div
      className={`${style.innerWidth} mx-auto flex flex-col gap-8 mb-[50px]`}
    >
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter The META
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 gap-[12px] bg-[#35618b] rounded-[32px]"
        >
          <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px]" />
          <span className="font-normal text-[16px] text-white">ENTER META</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">META</h4>
          <p className="text-white font-normal text-[14px] opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((data) => (
              <img
                src={data.url}
                key={data.name}
                alt={data.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
