import { BentoItems } from "@/constants/BentoBox";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";

export function BentoBox() {
  return (
    <div className=" bg-black text-white p-24">
      <BentoGrid className="grid grid-cols-6 gap-10">
        {BentoItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            content={item.content}
            className={i === 3 || i === 4 ? " col-span-3" : "col-span-2"}
          />
        ))}
      </BentoGrid>
    </div>
  );
}