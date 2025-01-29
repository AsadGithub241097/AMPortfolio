import React, { useEffect } from "react";
import gsap from "gsap";


interface WorkExperienceCardProps {
  title: string;
  description: string;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ title, description }) => {
  useEffect(() => {
    const card = document.querySelector(`.${title.replace(/\s+/g, '-')}`) as HTMLElement;
    
    if (card) {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.1,
          y: -2,
          ease: "back.out(1.7)",
          overwrite: true,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          ease: "back.out(1.7)",
          overwrite: true,
        });
      });
    }

    return () => {
      if (card) {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      }
    };
  }, [title]);

  return (
    <div
      className={`bg-gray-800 p-6 rounded-lg z-10 ${title.replace(/\s+/g, '-')}`}
    >
      
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const WorkExperience: React.FC = () => {
  return (
    <div className="px-[100px] py-[170px] relative">
      <div
        className="absolute w-[625px] h-[700px] left-[400px] top-[800px]"
       
      ></div>
      <h1 className="text-4xl font-preahvihear font-normal leading-tight text-white mb-6">
        Work Experience
      </h1>
      <div className="grid grid-cols-2 gap-6">
        <WorkExperienceCard
          title="CIB on the Mobile"
          description="CIB on the Mobile is a product that allows customers to manage their finances on the go."
        />
        <WorkExperienceCard
          title="Digital Payment App"
          description="A streamlined application for managing payments securely and conveniently."
        />
        <WorkExperienceCard
          title="Enterprise Solution"
          description="Providing robust solutions for enterprises to handle large-scale financial operations."
        />
        <WorkExperienceCard
          title="Personal Finance Tool"
          description="An innovative tool for personal finance management with cutting-edge analytics."
        />
      </div>
    </div>
  );
};

export default WorkExperience;
