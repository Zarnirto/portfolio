import React from 'react';

const formations = [
  {
    period: '2025 –',
    degree: "EN COURS D'OBTENTION D'UN BUT SCIENCE DES DONNÉES",
    specialty: 'Modélisation Exploration statistique',
  },
  {
    period: '2022 – 2025',
    degree: 'BACCALAURÉAT',
    specialty: 'Spécialités Mathématiques / Physique Chimie',
  },
  {
    period: '2018 – 2022',
    degree: 'DNB – MENTION TRÈS BIEN',
    specialty: '',
  },
];

const logiciels = [
  'R · GGplot2 avancé',
  'Python · Base du langage',
  'SQL · Maîtrise de requêtes',
  'Excel · Tableaux croisés dynamiques, fonctions avancées',
  'Tableau · Tableaux de Bords',
];

const langues = [
  'Français · langue maternelle',
  'Anglais · niveau professionnel',
  'Espagnol · niveau professionnel',
  'Comorien · bilingue',
];

export default function About() {
  return (
    <section id="about" className="section-padding px-5 flex justify-center">
      <div className="w-full max-w-[800px]">
        <h1 className="text-[36px] font-bold text-[#11b2cc] text-center mb-[30px]">
          À Propos de Moi
        </h1>

        {/* Profile card */}
        <div className="bg-white rounded-[12px] p-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] mb-8">
          <h2 className="text-[20px] font-bold text-[#11b2cc] mb-4">Profil</h2>
          <p className="text-[16px] text-[#333333] leading-[1.75]">
            Actuellement étudiant en 1ère année d&apos;un BUT en Science des Données, je suis à la
            recherche d&apos;une alternance de 24 mois sur les postes de DATA ANALYST ou de BUSINESS
            ANALYST. Rigoureux et habitué au travail en équipe grâce à mon expérience dans la
            restauration rapide, je suis prêt à m&apos;investir pleinement dans vos missions.
          </p>
        </div>

        {/* Two-column: Formation + Compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formation */}
          <div className="bg-white rounded-[12px] p-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <h2 className="text-[20px] font-bold text-[#11b2cc] mb-6">Formation</h2>
            <div className="relative border-l-2 border-[#11b2cc] ml-[8px] pl-[20px] flex flex-col gap-6">
              {formations.map((f, i) => (
                <div key={i} className="relative">
                  <div
                    className="absolute bg-[#11b2cc] rounded-full border-2 border-white"
                    style={{ left: '-27px', top: '6px', width: '11px', height: '11px' }}
                  />
                  {f.period && (
                    <p className="text-[12px] text-[#11b2cc] font-bold mb-1 uppercase tracking-wide">
                      {f.period}
                    </p>
                  )}
                  <p className="text-[13px] font-bold text-[#333333] leading-snug">{f.degree}</p>
                  {f.specialty && (
                    <p className="text-[13px] text-[#666666] mt-1">{f.specialty}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Compétences */}
          <div className="bg-white rounded-[12px] p-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <h2 className="text-[20px] font-bold text-[#11b2cc] mb-6">Compétences</h2>

            <h3 className="text-[12px] font-bold text-[#333333] uppercase tracking-wide mb-3">
              Logiciels maîtrisés
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {logiciels.map((s, i) => (
                <span key={i} className="badge">{s}</span>
              ))}
            </div>

            <h3 className="text-[12px] font-bold text-[#333333] uppercase tracking-wide mb-3">
              Langues parlées
            </h3>
            <div className="flex flex-wrap gap-2">
              {langues.map((s, i) => (
                <span key={i} className="badge">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
