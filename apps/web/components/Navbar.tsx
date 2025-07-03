"use client";

import Image from "next/image";
import { delaGothic } from "../app/fonts/fonts";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.replace("/");
  }
  const handleServicesClick = () => {}
  const handleAboutUsClick = () => {}
  const handleContactUsClick = () => {}

  return (
    <div className="flex justify-between pt-8 pb-8 pl-10 pr-10">
      <div
        className={`${delaGothic.className} flex relative gap-1 cursor-pointer`}
        onClick={handleLogoClick}
      >
        <Image src="/logo.svg" alt="Logo" width={28} height={28} />
        <div className="relative top-[-5.5px]">TokenLP</div>
      </div>
      <div className="flex gap-10">
        <div className="cursor-pointer" onClick={handleServicesClick}>Services</div>
        <div className="cursor-pointer" onClick={handleAboutUsClick}>About us</div>
      </div>
      <div className="cursor-pointer" onClick={handleContactUsClick}>Contact us</div>
    </div>
  );
};

export default Navbar;
