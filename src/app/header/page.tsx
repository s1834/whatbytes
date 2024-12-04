import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Image
          src="/whatbytes-logo.png"
          alt="Company Logo"
          width={40}
          height={40}
          className="mr-2"
        />
        <span className="text-3xl font-bold text-black">WhatBytes</span>
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 p-2 border-2 border-gray-300 rounded-2xl">
          <Image
            src="https://assets.aceternity.com/manu.png"
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-black">Rahil Siddique</span>
        </div>
      </div>
    </header>
  );
}
