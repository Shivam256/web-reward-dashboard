import React, { MouseEventHandler } from "react";
import { tech } from "../../interfaces/project.interface";
import { Icon } from "@iconify/react";

interface TechSelectProps {
  tech: tech;
  selected?: boolean;
  select: MouseEventHandler<HTMLDivElement>;
}

const TechSelect = ({ tech, select, selected }: TechSelectProps) => {
  return (
    <div
      className={`flex cursor-pointer flex-col items-center gap-2 rounded-xl border-4 border-white p-2 px-4 transition-all duration-100 ease-in hover:border-primary ${
        tech.disabled ? "border-text2 bg-text2 hover:border-text2" : ""
      } ${selected ? "border-primary" : ""}`}
      onClick={
        tech.disabled
          ? () => {
              console.log("hello");
            }
          : select
      }
    >
      <Icon icon={tech.iconName} width="50px" height="50px" />
      <h1 className="text-sm">{tech.name}</h1>
    </div>
  );
};

export default TechSelect;
