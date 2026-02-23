"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UserRoundCheck, BarChart3, CircleDollarSign, type LucideIcon } from "lucide-react";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Open Account",
    description: "Register and start trading in less than 5 minutes.",
    icon: UserRoundCheck,
  },
  {
    id: 2,
    title: "Deposit Funds",
    description: "Deposit as little as $20 using any of the deposit methods.",
    icon: CircleDollarSign,
  },
  {
    id: 3,
    title: "Start Trading",
    description: "Trade instantly with the tightest spreads and 0 commission.",
    icon: BarChart3,
  },
];

export default function TradingSteps() {
  const [activeStep, setActiveStep] = useState<number>(2);

  return (
    <section className="bg-white py-12 lg:py-24 px-6 md:px-12" style={{}}>
      <div className="mx-auto max-w-[1280px]" style={{ margin: "auto" }}>
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.5px] text-[#1f2937] lg:text-[62px] lg:leading-[1.05]">
            Start Trading in 3 Easy Steps
          </h2>
          <br></br>
        </div>
        <br></br>

        <div className="mx-auto mb-14 grid max-w-[1180px] grid-cols-1 place-items-center gap-7 lg:grid-cols-3" style={{ margin: "auto" }}>
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(step.id)}
                className={`relative h-[374px] w-full max-w-[386px] overflow-hidden rounded-[14px] text-left transition-all duration-500 ease-out hover:scale-[1.02] ${isActive ? "scale-[1.05] shadow-2xl z-20" : "scale-100 shadow-md z-10"
                  }`}
              >
                {/* Active State */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
                    }`}
                >
                  <Image
                    src="/image2.png"
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="386px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                  <div className="absolute left-8 top-6 z-10 text-5xl font-semibold leading-none text-white lg:text-[52px]">
                    {step.id}
                  </div>
                  <div className="absolute bottom-8 left-8 z-10 text-white">
                    <h3 className="text-4xl font-semibold leading-none tracking-[-0.8px] lg:text-[30px]">
                      {step.title}
                    </h3>
                    <br></br>
                    <p className="mt-2.5 max-w-[286px] text-[18px] leading-[1.2] text-white/90">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Inactive State */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${!isActive ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
                    }`}
                >
                  <div className="absolute inset-0 bg-[#1685f5]" />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-radial-gradient(circle at 100% 100%, transparent 0px, transparent 18px, rgba(255,255,255,0.2) 20px, transparent 22px)",
                    }}
                  />
                  <div className="relative z-10 flex h-full flex-col justify-between p-[30px] text-white" style={{ padding: "30px" }}>
                    <div className="text-5xl font-semibold leading-none lg:text-[52px]">{step.id}</div>
                    <div className="mt-[72px]">
                      <Icon size={52} strokeWidth={2.2} />
                      <h3 className="mt-5 font-semibold leading-none tracking-[-0.8px] text-[20px]">
                        {step.title}
                      </h3>
                      <br></br>
                      <p className="mt-3 max-w-[268px] text-[18px] leading-[1.2] text-white/90">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <br></br>
        <div className="text-center">
          <button className="rounded-full bg-[#b99a7d]  font-semibold tracking-wide text-white transition hover:bg-[#a88a6e]"

            style={{
              background: "linear-gradient(270deg, #9E826A 0%, #CDAC91 100%);",
              padding: '10px 50px',
              fontSize: '15px'
            }}>
            REGISTER NOW
          </button>
        </div>
      </div>
    </section>
  );
}
