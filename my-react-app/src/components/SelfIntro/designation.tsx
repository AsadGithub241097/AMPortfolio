import React from "react";

const SoftwareEngineerDesignation: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-[100px] px-[100px] pb-0">
      {/* Title Section */}
      <div className="flex flex-row items-start -left-[300px]">
        <span className="text-center md:text-3xl text-[50px] leading-[90px] tracking-[0.02em] font-cursive">
          I'm a Software Engineer
        </span>
      </div>

      {/* Company Section */}
      <div className="pt-1">
        <span className="flex justify-center">
          Currently, I'm a Software Engineer at{" "}
          <a
            href="https://www.jio.com/platforms/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-500 hover:underline"
          >
            Jio
          </a>
        </span>
        <div className="mt-6 max-w-3xl text-gray-400">
        <span className="text-sm md:text-base text-left">
          A self-taught UI/UX designer, functioning in the industry for 3+ years
          now.<br/> I make meaningful and delightful digital products that create an
          equilibrium<br/> between user needs and business goals.
        </span>
      </div>
      </div>
    </div>
  );
};

export default SoftwareEngineerDesignation;
