import { safetyPoints } from "@/constant";
import React from "react";
import SafetyPointsCard from "./SafetyPointsCard";

const SafetyPointsCollection = () => {
  return (
    <>
      <div className="flex-center flex-col w-full">
        <ul
          className="grid w-full px-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-7 lg:flex-row lg:justify-center"
        >
          {safetyPoints.map((safetyPoint: any) => {
            return (
              <li 
                key={safetyPoint.key}
                className="flex justify-center md:justify-none"
              >
                <SafetyPointsCard safetyPoint={safetyPoint} delay={safetyPoint.key} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SafetyPointsCollection;
