"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const timeline = [
  { title: "Registration Open" },
  {
    title: "Registration Closing",
    date: "Online, 20th February",
    time: "11:59 PM",
  },
  {
    title: "Orientation",
    date: "Offline, 2nd March",
    time: "12:30 PM – 4:30 PM",
  },
  {
    title: "Sessions",
    date: "Online, Every Saturday",
    time: "Mentor Sessions & Workshops",
    highlight: true,
  },
  {
    title: "Final Hack Session",
    date: "Offline, 28th – 29th March",
    time: "28th 9 AM – 29th 3 PM",
  },
  {
    title: "Hackathon Concludes",
    date: "Online, 31st March",
    time: "11:59 PM",
  },
  {
    title: "Results",
    date: "Online, 4th May",
    time: "~by FOSS United",
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const desktopLine = useAnimation();
  const mobileLine = useAnimation();

  useEffect(() => {
    if (!sectionRef.current) return;

    const start = () => {
      desktopLine.set({ scaleX: 0 });
      mobileLine.set({ scaleY: 0 });

      desktopLine.start({
        scaleX: 1,
        transition: {
          duration: 8,
          ease: "linear",
        },
      });

      mobileLine.start({
        scaleY: 1,
        transition: {
          duration: 8,
          ease: "linear",
        },
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
      },
      { threshold: 0.3 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [desktopLine, mobileLine]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-48 overflow-hidden"
    >
      {/* TITLE */}
      <motion.h2
        className="text-center text-5xl md:text-6xl font-semibold text-white mb-20 md:mb-40"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        TIMELINE
        <span className="block mt-4 text-base font-normal text-white/50">
          (1st – 31st March)
        </span>
      </motion.h2>

      <div className="hidden md:block max-w-7xl mx-auto px-8">
        <div className="relative">
          {/* Line */}
          <div className="absolute left-8 right-8 top-1/2 h-px bg-white/10" />
          <motion.div
            className="absolute left-8 right-8 top-1/2 h-px bg-green-400 origin-left"
            animate={desktopLine}
          />

          {/* Dots */}
          <div className="relative flex justify-between items-center">
            {timeline.map((item, index) => {
              const isTop = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center flex-1"
                >
                  {isTop && (
                    <motion.div
                      className="absolute bottom-full mb-6 w-64 text-center"
                      initial={{ opacity: 0, y: -40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.08 }}
                    >
                      {item.time && (
                        <p className="text-base text-green-400 mb-1">
                          {item.time}
                        </p>
                      )}
                      {item.date && (
                        <p className="text-sm text-white/50 mb-1">
                          {item.date}
                        </p>
                      )}
                      <p className="text-xl font-medium text-white">
                        {item.title}
                      </p>
                    </motion.div>
                  )}

                  {/* Dot */}
                  <div className="relative w-5 h-5 rounded-full bg-green-400 z-10">
                    {item.highlight && (
                      <span className="absolute inset-0 rounded-full animate-pulse-ring" />
                    )}
                  </div>

                  {!isTop && (
                    <motion.div
                      className="absolute top-12 w-64 text-center"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.08 }}
                    >
                      <p className="text-xl font-medium text-white mb-1">
                        {item.title}
                      </p>
                      {item.date && (
                        <p className="text-sm text-white/50 mb-1">
                          {item.date}
                        </p>
                      )}
                      {item.time && (
                        <p className="text-base text-green-400">{item.time}</p>
                      )}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="md:hidden px-6">
        <div className="relative pl-12">
          {/* Line */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-white/10" />
          <motion.div
            className="absolute left-6 top-4 bottom-4 w-px bg-green-400 origin-top"
            animate={mobileLine}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex gap-8 mb-14"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              {/* Dot */}
              <div className="relative w-5 h-5 mt-1 rounded-full bg-green-400 z-10">
                {item.highlight && (
                  <span className="absolute inset-0 rounded-full animate-pulse-ring" />
                )}
              </div>

              {/* Content */}
              <div>
                <p className="text-xl font-medium text-white mb-1">
                  {item.title}
                </p>
                {item.date && (
                  <p className="text-sm text-white/50 mb-1">{item.date}</p>
                )}
                {item.time && (
                  <p className="text-base text-green-400">{item.time}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pulse ring */}
      <style jsx>{`
        @keyframes pulseRing {
          0% {
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.6);
          }
          70% {
            box-shadow: 0 0 0 18px rgba(74, 222, 128, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
          }
        }
        .animate-pulse-ring {
          animation: pulseRing 3s infinite ease-out;
        }
      `}</style>
    </section>
  );
}
