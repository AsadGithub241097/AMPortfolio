import React from "react";
import profileImg from "../../assets/testimg.png"; // Import the image
import Arrow from "../../icons//Arrow";
import woodTable from "../../assets/w2.jpg";
import SoftwareEngineerDesignation from "./designation";
const SoftwareEngineerProfile: React.FC = () => {
  return (
    <section className=" text-white  px-6">
      <div className="flex flex-col items-center">
        <div className="text-center flex-row flex max-h-[400px] pt-[120px] gap-[50px]">
          <div className="flex items-center space-x-3">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full max-w-[300px] h-auto rounded-full object-cover"
            />
          </div>
          <div className="flex flex-row relative right-[115px] text-left">
            <Arrow className="flex relative top-[-22px]" />
            <span className=" text-gray-300 font-cursive text-[19px]">
              Hello! I Am{" "}
              <span className="text-blue-400 font-cursive text-[19px]">
                Asad Mulla
              </span>
              <h2 className="text-xl md:text-3xl font-bold">
                A Developer <br />
                <span className="relative">
                  Who Crafts Experiences Beyond the <br />
                  <span className="text-purple-500">&lt;Code/&gt;</span>
                </span>
              </h2>
            </span>
          </div>
        </div>
      </div>
      <div
        className="w-full flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
    
      ></div>
      <SoftwareEngineerDesignation />
    </section>
  );
};

export default SoftwareEngineerProfile;
