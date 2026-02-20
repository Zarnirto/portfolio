"use client";
import React from 'react';
import { Brain, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-start bg-[#f4f7f6] px-5 pb-10 pt-[80px]"
    >
      <div className="w-full max-w-[800px] text-center">
        {/* Teal Banner */}
        <div
          className="relative w-full h-[280px] mb-[32px] rounded-[12px] bg-[#11b2cc] overflow-hidden flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.12) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        >
          <div className="relative z-10 px-6 py-5 text-white">
            <div className="mb-4 flex justify-center">
              <Brain size={52} strokeWidth={1.5} className="text-white" />
            </div>
            <h2 className="text-[38px] font-bold leading-tight mb-3 text-white">
              Data / Business Analytics
            </h2>
            <p className="text-[18px] text-white/90 font-medium max-w-[560px] mx-auto">
              Transformer les données en insights pour des décisions éclairées
            </p>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-[42px] font-extrabold text-[#11b2cc] mb-3">
          Abdou Nizar
        </h1>

        <p className="text-[20px] text-[#333333] font-semibold mb-2">
          Apprenti Data / Business Analyst
        </p>

          <div className="mb-2">
            <span className="text-[15px] text-[#666666]">La Courneuve, Île-De-France</span>
          </div>

        {/* CTA Button */}
        <div className="mt-7 flex justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-[30px] py-3 bg-[#11b2cc] text-white text-[16px] font-semibold rounded-[30px] shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-opacity duration-200 hover:opacity-90 active:scale-[0.98]"
          >
            <Mail size={18} /> Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
