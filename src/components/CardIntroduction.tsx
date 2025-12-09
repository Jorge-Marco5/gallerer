"use client";
import { InView } from "./ui/in-view";
import { motion } from "framer-motion";

export function CardIntroduction() {
  return (
    <div className="w-full p-12">
      <div className="mb-20 text-center text-sm flex flex-col items-center">
        Scroll down
        <img
          src="/scroll-down.svg"
          alt="Scroll down"
          className="mt-2 inline h-6 animate-bounce"
        />
      </div>

      <InView
        viewOptions={{ once: true, margin: "0px 0px -20% 0px" }}
        variants={{
          hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full"
      >
        <div className="p-10 bg-zinc-100 rounded-2xl border border-zinc-200 text-center shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-zinc-900">
            Explore Our Gallery
          </h2>
          <p className="text-zinc-600">
            Images that show the most beautiful aspects of our existence
          </p>
        </div>
      </InView>
    </div>
  );
}
