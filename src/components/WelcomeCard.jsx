import React from "react";
import Jellyfish from "../assets/Jellyfish.jpg";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { FaMicrophone } from "react-icons/fa";

const WelcomeCard = () => {
  return (
    <motion.div
      className="relative rounded-xl p-6 shadow-md w-full col-span-3 flex flex-col md:flex-row items-start justify-start gap-4 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0">
        <img
          src={Jellyfish}
          alt="Jellyfish background"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#060F2C]/60 to-[#021C6A]/60" />
      </div>
      <div className="relative z-10">
        <p className="text-sm text-gray-300 mb-1">Welcome back,</p>
        <h2 className="text-2xl font-bold text-white">Mark Johnson</h2>
        <p className="text-sm text-gray-400 mt-2">
          Glad to see you again! Ask me anything.
        </p>
        <button className="mt-40 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white">
           Tap to record <GoArrowRight className="text-white" />
        </button>
      </div>
    </motion.div>
  );
};

export default WelcomeCard;