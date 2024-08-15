"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative flex flex-col items-center justify-center bg-white px-[15px] pb-3">
      <Image src="https://i.imgur.com/WGp4ncy.png" width={230} height={230} className="w-[250px]" alt="logo" />
      <p className="text-center text-base font-[600] text-[#3E6472]">Welcome to Online Banking</p>

    </div>
  );
}
