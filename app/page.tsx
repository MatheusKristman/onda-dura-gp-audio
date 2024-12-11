"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const title = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "circInOut",
    },
  },
};

const label = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "circInOut",
    },
  },
};

const image = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "circInOut",
    },
  },
};

export default function Home() {
  return (
    <main className="w-full flex flex-col relative min-h-screen">
      <div className="w-full pt-14 pb-9 flex flex-col gap-9 lg:container lg:flex-grow lg:mx-auto lg:flex-row lg:pb-0 lg:pt-10">
        <AnimatePresence>
          <motion.div
            key="image"
            variants={container}
            initial="initial"
            animate="animate"
            className="w-full lg:flex lg:flex-col lg:justify-end"
          >
            <motion.h1
              variants={title}
              className="text-5xl px-6 font-bold !leading-[100%] relative z-10 sm:px-16 sm:text-7xl"
            >
              Norem ipsum dolor sit amet
            </motion.h1>

            <div className="w-full pl-6 grid grid-cols-[20px_1fr] items-end gap-2 -mt-6 sm:pl-16 sm:grid-cols-[30px_1fr]">
              <motion.div variants={label} className="!-rotate-90 relative h-[20px] sm:h-[30px]">
                <span className="w-[155px] block uppercase text-xl font-bold !leading-[100%] absolute top-0 left-0 sm:text-3xl sm:w-[233px]">
                  NOREM IPSUM
                </span>
              </motion.div>

              <motion.div variants={image} className="w-full aspect-square relative">
                <Image src="/gp-mooca.png" alt="GP Mooca" fill className="object-cover object-center" />
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            key="text"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "circInOut" }}
            className="w-full px-6 text-xl font-semibold !leading-[150%] sm:px-16 lg:mt-[115px]"
          >
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
            tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
            sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
            scelerisque ante pulvinar.{" "}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 1, ease: "circInOut" }}
        className="w-full bg-[#FFDF5C] flex flex-col items-center gap-12 sticky bottom-0"
      >
        <div className="w-full pt-12 px-6 flex flex-col items-center gap-8 sm:px-16 sm:flex-row-reverse sm:justify-between">
          <span className="text-2xl font-bold text-black !leading-[150%] text-center sm:text-right">
            Norem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>

          <div className="w-full flex items-center justify-between sm:justify-start sm:gap-9">
            <button className="border-[3px] border-black rounded-full size-20 flex items-center justify-center">
              <Play color="#000" size={50} strokeWidth={1.5} />
            </button>

            <span className="text-4xl font-medium text-black !leading-[150%]">00:00</span>
          </div>
        </div>

        <div className="w-full">
          <div className="w-1/2 h-4 bg-black" />
        </div>
      </motion.div>
    </main>
  );
}
