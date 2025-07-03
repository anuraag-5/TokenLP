"use client";

import ConnectWallet from "./ConnectWallet";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const LandingMainSection = () => {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {

      const tl = gsap.timeline();

      tl.fromTo(
        ref1.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 2
        }
      );

      tl.fromTo(
        ref2.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1
        }, 
        0
      );
    },
    { dependencies: [] }
  );

  return (
    <div className="pt-8 pb-8 pl-22 pr-22">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center items-center" ref={ref1}>
          <div className="flex flex-col items-center">
            <div className="text-[44px]">
              THE
            </div>
            <div className="text-[74px]">
              PERFECT
            </div>
            <div className="text-[44px]">
              WALLET
            </div>
          </div>
          <div className="text-black">/ Create Tokens /</div>
          <ConnectWallet
            className={`text-[#02d3fd] p-3 pr-5 pl-5 bg-[#001923] mt-14 rounded-3xl cursor-pointer`}
          />
        </div>
        <div className="h-[500px] w-[650px] bg-[#03677C] rounded-3xl" ref={ref2}></div>
      </div>
    </div>
  );
};

export default LandingMainSection;
