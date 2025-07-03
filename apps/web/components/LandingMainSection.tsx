"use client";

import ConnectWallet from "./ConnectWallet";

const LandingMainSection = () => {
  return (
    <div className="pt-8 pb-8 pl-22 pr-22">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="text-[44px]">THE</div>
            <div className="text-[74px]">PERFECT</div>
            <div className="text-[44px]">WALLET</div>
          </div>
          <div className="text-black">/ Create Tokens /</div>
          <ConnectWallet className = {`text-[#02d3fd] p-3 pr-5 pl-5 bg-[#001923] mt-14 rounded-3xl cursor-pointer`}/>
        </div>
        <div className="h-[500px] w-[650px] bg-[#03677C] rounded-3xl"></div>
      </div>
    </div>
  );
};

export default LandingMainSection;
