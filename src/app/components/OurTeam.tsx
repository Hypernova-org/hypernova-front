import React from "react";
import Image from "next/image";
import MemberImg from "@/assets/images/member.jpg";

const OurTeam = () => {
  return (
    <div className="px-[6%]">
      <h2 className="xs:text-[20px] lg:text-[40px] sm:text-[40px] lg:mb-[64px] xs:mb-[16px] capitalize">Our team</h2>
      <div className="grid xs:grid-cols-24 lg:grid-cols-2 lg:mb-[260px] xs:mb-[138px]">
        <div className="flex items-center lg:mb-[64px] sm:mb-[64px] xs:mb-[24px]">
          <div className="xl:max-w-[263px] lg:max-w-[230px] sm:max-w-[340px] xs:max-w-[166px] xl:h-[300px] lg:h-[280px] sm:h-[400px] xs:h-[200px]">
            <Image
              className="-z-5 w-full h-full rounded-3xl object-cover"
              src={MemberImg}
              alt="employee"
            />
          </div>
          <div className="lg:leading-[32px] sm:leading-[32px] xs:leading-[24px] lg:text-[20px] sm:text-[24px] xs:text-[14px] ml-[32px] lg:mb-[16px] sm:mb-[16px] xs:mb-[8px] lg:w-[190px] sm:w-[320px]"> 
            <div className="lg:leading-[60px] sm:leading-[60px] xs:leading-[16px] lg:text-[40px] sm:text-[40px] xs:text-[20px] lg:mb-[16px] sm:mb-[28px] xs:mb-[8px]">CTO</div>
            <div className="lg:mb-[16px] sm:mb-[26px] xs:mb-[8px]">
              <b className="text-[#FF6200]">Name:</b> John Doe
            </div>
            <div className="lg:mb-[16px] sm:mb-[26px] xs:mb-[8px]">
              <b className="text-[#FF6200]">Level:</b> Senior
            </div>
            <div className="lg:mb-[16px] sm:mb-[26px] xs:mb-[8px]">
              <b className="text-[#FF6200]">Tools:</b> C++, C#, Rust,
              JavaScripts, MatLab
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
