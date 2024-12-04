"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconBrandTabler,
  IconUserBolt,
  IconSettings,
  IconArrowLeft,
  IconAward,
  IconFileText,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { PieChart } from "@/components/ui/piechart";
import { LineGraph } from "@/components/ui/linegraph";
import { UpdateScores } from "@/components/ui/updateScores";

export default function SideNav() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Skill Test",
      href: "#",
      icon: (
        <IconAward className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Internship",
      href: "#",
      icon: (
        <IconFileText className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} className="sticky top-0 h-full">
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Rahil Siddique",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

// WhatByte Logo on sidebar open
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="flex-shrink-0">
        <img src="/whatbyte-logo.avif" alt="Logo" className="h-5 w-6" />
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        WhatBytes
      </motion.span>
    </Link>
  );
};

// WhatByte Logo on sidebar close
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="flex-shrink-0">
        <img src="/whatbyte-logo.avif" alt="Logo" className="h-5 w-6" />
      </div>
    </Link>
  );
};

// Dashboard Sidebar open
const Dashboard = () => {
  const [scores, setScores] = useState({
    rank: 0,
    percentile: 0,
    currentScore: 0,
  });

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch("/api/scores");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data && data.data[0]) {
          setScores(data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching scores:", error);
        // Optionally update UI to show an error message or fallback UI
      }
    };

    fetchScores();
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <div className="flex-1 overflow-y-auto p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-4 w-full h-full">
      {/* Grid layout */}
      <div className="grid grid-cols-12 grid-rows-6 gap-4 flex-1">
        {/* HTML Section */}
        <div className="col-span-6 row-span-1 rounded-lg p-4">
          <div className="h-full w-full animate-pulse">
            <figure
              className={cn(
                "relative mx-auto min-h-fit w-full h-full cursor-pointer overflow-hidden rounded-2xl p-4",
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              )}
            >
              <div className="flex flex-row items-center gap-3">
                <div className="flex size-30 items-center justify-center rounded-2xl">
                  <Image
                    src="/html-logo.svg"
                    alt="HTML Logo"
                    width={98}
                    height={98}
                  />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
                    <span className="text-xl sm:text-2xl font-bold">
                      Hyper Text Markup Language
                    </span>
                  </figcaption>
                  <p className="text-sm font-normal dark:text-white/60">
                    Questions: 08 l Duration: 15 mins | Submitted on 5 June 2021
                  </p>
                </div>
              </div>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 px-6 py-3 bg-blue-800 text-white rounded-xl hover:bg-blue-900 transition-colors"
                onClick={handleOpenModal}
              >
                Update
              </button>
            </figure>
          </div>
          <UpdateScores isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>

        {/* Quick Statistics Section */}
        <div className="col-span-6 row-span-3 rounded-lg p-4">
          {/* Placeholder for Skill Test Info */}
          <div className="h-full w-full animate-pulse">
            <figure
              className={cn(
                "relative mx-auto min-h-fit w-full h-full cursor-pointer overflow-hidden rounded-2xl p-4",
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              )}
            >
              <div className="flex flex-col items-start gap-8 w-full h-full">
                {/* Syllabus Wise Analysis */}
                <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
                  <span className="text-xl sm:text-2xl font-bold">
                    Syllabus Wise Analysis
                  </span>
                </figcaption>
                <div className="space-y-8 w-full">
                  {[
                    {
                      label: "HTML Tools, Forms, History",
                      value: 80,
                      color: "blue" as const,
                    },
                    {
                      label: "Tags & References in HTML",
                      value: 60,
                      color: "orange" as const,
                    },
                    {
                      label: "Tables & References in HTML",
                      value: 24,
                      color: "red" as const,
                    },
                    {
                      label: "Tables & CSS Basics",
                      value: 94,
                      color: "green" as const,
                    },
                  ].map(({ label, value, color }, index) => (
                    <div key={index} className="flex flex-col w-full">
                      <span className="text-lg text-gray-500 font-semibold mb-3">
                        {label}
                      </span>
                      <div className="relative pt-1 w-full">
                        <Progress value={value} color={color} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </figure>
          </div>
        </div>

        {/* Quick Statistics Section */}
        <div className="col-span-6 row-span-1 rounded-lg p-4">
          <div className="h-full w-full animate-pulse">
            <figure
              className={cn(
                "relative mx-auto min-h-fit w-full h-full cursor-pointer overflow-hidden rounded-2xl p-4",
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              )}
            >
              <div className="flex flex-col items-start gap-6 w-full h-full">
                <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
                  <span className="text-xl sm:text-2xl font-bold">
                    Quick Statistics
                  </span>
                </figcaption>

                <div className="flex w-full items-center justify-between">
                  {[
                    {
                      label: "Your Rank",
                      value: `#${scores.rank}`,
                      color: "blue",
                      image: "🏆",
                    },
                    {
                      label: "Percentile",
                      value: `${scores.percentile}%`,
                      color: "orange",
                      image: "📋",
                    },
                    {
                      label: "Correct Answers",
                      value: `${scores.currentScore}/15`,
                      color: "green",
                      image: "✅",
                    },
                  ].map(({ label, value, image }, index) => (
                    <React.Fragment key={index}>
                      <div className="flex items-center w-full justify-center">
                        <div className="bg-gray-300 rounded-full p-4">
                          {image}
                        </div>

                        <div className="ml-4 flex flex-col items-start">
                          <div className="font-black text-2xl text-black">
                            {value}
                          </div>
                          <div className="text-gray-500 text-sm">{label}</div>
                        </div>
                      </div>

                      {/* Pipe Separator */}
                      {index < 2 && (
                        <div className="flex justify-center w-full">
                          <div className="h-16 w-[1px] bg-gray-300"></div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </figure>
          </div>
        </div>

        {/* Comparison Graph Section */}
        <div className="col-span-6 row-span-3 rounded-lg p-4">
          <div className="h-full w-full">
            <figure
              className={cn(
                "relative mx-auto min-h-fit w-full h-full overflow-hidden rounded-2xl p-4",
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              )}
            >
              <div className="absolute top-4 right-4 bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-700">📈</span>
              </div>

              <div className="flex flex-col gap-2 text-left">
                <figcaption className="text-lg font-medium dark:text-white">
                  <span className="text-xl sm:text-2xl font-bold">
                    Comparison Graph
                  </span>
                </figcaption>
                <p className="text-sm text-gray-500">
                  <b>You scored 30% percentile</b> which is lower than the
                  <br />
                  average percentile 72% of all the engineers who took this
                  assessment.
                </p>
              </div>

              <div className="h-full w-full mt-6">
                <LineGraph />
              </div>
            </figure>
          </div>
        </div>

        {/* Question Analysis Section */}
        <div className="col-span-6 row-span-3 rounded-lg p-4">
          <div className="h-full w-full">
            <figure
              className={cn(
                "relative mx-auto min-h-fit w-full h-full overflow-hidden rounded-2xl p-4",
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              )}
            >
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex justify-between items-start">
                  <div>
                    <figcaption className="text-lg font-medium dark:text-white">
                      <span className="text-xl sm:text-2xl font-bold">
                        Question Analysis
                      </span>
                    </figcaption>
                    <div className="text-sm text-gray-500 mt-2">
                      <b>You scored 10 questions correct out of 15.</b> However,
                      it still <br />
                      needs some improvements.
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {scores.currentScore}/15
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center flex-grow mt-4">
                  <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px]">
                    <PieChart />
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
