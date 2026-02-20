import React from 'react';

const experiences = [
  {
    period: '2025',
    title: "ÉQUIPIER POLYVALENT – McDONALD'S SAINT-OUEN-L'AUMÔNE",
    tags: [],
    bullets: [
      'Travail en équipe et communication active.',
      "Gestion du stress et capacité à maintenir l'efficacité sous pression.",
      "Respect des procédures et normes d'hygiène.",
    ],
  },
  {
    period: '2022',
    title: 'STAGE D\'OBSERVATION (3ème) – AGECA',
    tags: [],
    bullets: [
      "Découverte du fonctionnement d'une entreprise et du secteur de création de sites Web.",
      'Observation des métiers de Médiateur Informatique et de Développeur Web.',
    ],
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="section-padding px-5 flex justify-center">
      <div className="w-full max-w-[800px]">
        <h1 className="text-[36px] font-bold text-[#11b2cc] text-center mb-[30px]">
          Expériences
        </h1>

        <div className="bg-white rounded-[12px] p-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div className="relative border-l-2 border-[#11b2cc] ml-[8px] pl-[24px] flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                <div
                  className="absolute bg-[#11b2cc] rounded-full border-2 border-white"
                  style={{ left: '-31px', top: '6px', width: '11px', height: '11px' }}
                />

                <p className="text-[12px] text-[#11b2cc] font-bold mb-1 uppercase tracking-wide">
                  {exp.period}
                </p>
                <h3 className="text-[16px] font-bold text-[#333333] mb-3 leading-snug">
                  {exp.title}
                </h3>

                {exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="badge">{tag}</span>
                    ))}
                  </div>
                )}

                <ul className="list-disc pl-5 text-[15px] text-[#555555] leading-[1.7] flex flex-col gap-1">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
