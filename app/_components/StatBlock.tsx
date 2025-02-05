import * as React from "react";

export type StatsBlockProps = {
  stats: { number: string; label: string }[];
};

export default function StatsBlock({ stats }: StatsBlockProps) {
  return (
    <div className="flex overflow-hidden flex-wrap gap-8 items-start max-md:max-w-full">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center w-[238px]">
          <div className="text-6xl tracking-wide leading-none text-slate-800 max-md:text-4xl">
            {stat.number}
          </div>
          <div className="text-base tracking-normal text-neutral-500">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
