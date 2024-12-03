"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
// import { LineChart } from "@/app/lineChart/page";

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
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
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
                label: "Manu Arora",
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
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-4 w-full h-full">
      {/* Grid layout */}
      <div className="grid grid-cols-12 grid-rows-6 gap-4 flex-1">
        {/* Top-left Section */}
        <div className="col-span-6 row-span-1 rounded-lg p-4">
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
              <div className="flex flex-row items-center gap-3">
                <div className="flex size-30 items-center justify-center rounded-2xl">
                  <Image
                    src="/html-logo.svg"
                    alt="HTML Logo"
                    width={98} // Adjust width as needed
                    height={98} // Adjust height as needed
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
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 px-6 py-3 bg-blue-800 text-white rounded-xl hover:bg-blue-900 transition-colors">
                Update
              </button>
            </figure>
          </div>
        </div>
        {/* Quick Statistics Section */}
        <div className="col-span-6 row-span-4 rounded-lg p-4">
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
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-col overflow-hidden">
                  <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
                    <span className="text-xl sm:text-2xl font-bold">
                      Quick Statistics
                    </span>
                  </figcaption>
                </div>
              </div>
            </figure>
          </div>
        </div>
        {/* Syllabus Wise Analysis Section */}
        <div className="col-span-6 row-span-2 rounded-lg p-4">
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
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-col overflow-hidden">
                  <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
                    <span className="text-xl sm:text-2xl font-bold">
                      Quick Statistics
                    </span>
                  </figcaption>
                </div>
              </div>
            </figure>
          </div>
        </div>
        {/* Comparison Graph Section */}
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
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-col overflow-hidden">
                  <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
                    <span className="text-xl sm:text-2xl font-bold">
                      Quick Statistics
                    </span>
                  </figcaption>
                </div>
              </div>
            </figure>
          </div>
        </div>
        {/* Question Analysis Section */}
        <div className="col-span-6 row-span-2 rounded-lg p-4">
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
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-col overflow-hidden">
                  <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
                    <span className="text-xl sm:text-2xl font-bold">
                      Quick Statistics
                    </span>
                  </figcaption>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
