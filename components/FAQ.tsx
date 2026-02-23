"use client";

import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What will I get access to once I get Starter?",
      answer:
        "You will get access to the Starter dashboard, core learning resources, market insights, and essential tools to begin trading with confidence.",
    },
    {
      question: "Can I get refund after subscribing?",
      answer:
        "Yes, refunds are available within the eligible refund window. Contact support with your subscription details and our team will guide you through the process.",
    },
    {
      question: "Are there any system requirements?",
      answer:
        "A modern browser, stable internet connection, and a desktop or mobile device that supports up-to-date web standards are recommended.",
    },
  ];

  return (
    <section className="py-12 lg:py-24 bg-gray-50 px-6 md:px-12" style={{}}>
      <div className="container mx-auto px-4 lg:px-8" style={{ margin: "auto" }}>
        <div className="max-w-6xl mx-auto" style={{ margin: "auto" }}>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Do you have<br />questions?
              </h2>
              <br></br>
              <br></br>

              <p className="text-[#87919C] text-sm mb-8 leading-relaxed">
                Find answers to our most frequently asked questions.
                <br></br>
                <br></br>


                <b>  Still have questions?</b>
                <br></br>


                Please contact our customer support team.
              </p>
              <br></br>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Contact Customer Support →
              </button>
            </div>

            {/* Right - FAQ List */}
            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <>
                  <div
                    style={{ padding: "15px" }}
                    key={index}
                    className="w-full overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="group flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className="mt-0.5 flex-shrink-0 text-blue-600" size={20} />
                        <p className="text-[16px] font-semibold leading-snug text-gray-900 transition group-hover:text-blue-600 lg:text-[17px]">
                          {faq.question}
                        </p>
                      </div>
                      <span className="text-3xl leading-none text-gray-400">
                        {openIndex === index ? '−' : '+'}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 pl-12 text-[15px] leading-relaxed text-gray-600 lg:text-[16px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                  <br></br>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
