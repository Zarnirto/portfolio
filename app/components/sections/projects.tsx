import React from 'react';
import { Database, ChartBar, BookOpen, BarChart2 } from 'lucide-react';

const projects = [
  {
    icon: <Database className="text-[#11b2cc]" size={32} strokeWidth={1.5} />,
    title: 'ANALYSE DE LA QUALITÉ DES EAUX DE BAIGNADE (SAISON 2024) – PROJET SAÉ',
    tags: ['PostgreSQL', 'Metabase', 'SQL', 'Python', 'CSV'],
    bullets: [
      "Mise en place de l'infrastructure de données : Installation et configuration de PostgreSQL et connexion avec l'outil Metabase.",
      'Gestion de Base de Données : Intégration de fichiers CSV dans un modèle relationnel.',
      'Datavisualisation : Rédaction de requêtes SQL complexes et création de tableaux de bord graphiques.',
    ],
  },
  {
    icon: <ChartBar className="text-[#11b2cc]" size={32} strokeWidth={1.5} />,
    title: 'CERTIFICAT PROFESSIONNEL EN DATA SCIENCE – HARVARDX (VIA EDX)',
    tags: ['R', 'ggplot2', 'Data Storytelling', 'Visualisation'],
    bullets: [
      "Maîtrise de la grammaire des graphiques et des principes de perception visuelle pour optimiser la prise de décision.",
      'Conception de visualisations complexes, graphiques interactifs avec R/ggplot2.',
      "Expertise en Data Storytelling : transformation de jeux de données bruts en rapports narratifs clairs et exploitables.",
    ],
  },
  {
    icon: <BarChart2 className="text-[#11b2cc]" size={32} strokeWidth={1.5} />,
    title: 'CONCEPTION D\'UN TABLEAU DE BORD DE PILOTAGE (EXCEL)',
    tags: ['Excel', 'ETL', 'TCD', 'Open Data', 'KPIs', 'Slicers'],
    bullets: [
      'Contexte : Analyse de la production de déchets en France à partir de données Open Data.',
      'Traitement de données (ETL) : Nettoyage, structuration et tri d\'une base de données complexe (plusieurs milliers de lignes).',
      'Analyse : Création d\'indicateurs clés (KPIs) et calculs agrégés via Tableaux Croisés Dynamiques (TCD).',
      'Restitution : Conception d\'une interface interactive avec Segments (Slicers) pour filtrer par année et département.',
    ],
  },
  {
    icon: <BookOpen className="text-[#11b2cc]" size={32} strokeWidth={1.5} />,
    title: 'MODÉLISATION EXPLORATION STATISTIQUE – BUT SCIENCE DES DONNÉES',
    tags: ['R', 'Python', 'SQL', 'Excel', 'Tableau'],
    bullets: [
      'Exploration et nettoyage de jeux de données réels issus de sources ouvertes.',
      'Modélisation statistique descriptive et inférentielle pour extraire des tendances clés.',
      'Création de tableaux de bord interactifs pour la restitution des analyses.',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding px-5 flex justify-center">
      <div className="w-full max-w-[800px]">
        <h1 className="text-[36px] font-bold text-[#11b2cc] text-center mb-[30px]">
          Projets Académiques
        </h1>

        <div className="bg-white rounded-[12px] p-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col gap-10">
          {projects.map((proj, i) => (
            <div
              key={i}
              className={i < projects.length - 1 ? 'border-b border-[#eeeeee] pb-10' : ''}
            >
              <div className="mb-3">{proj.icon}</div>
              <h3 className="text-[17px] font-bold text-[#333333] mb-3 leading-snug">
                {proj.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag, j) => (
                  <span key={j} className="badge">{tag}</span>
                ))}
              </div>
              <ul className="list-disc pl-5 text-[15px] text-[#555555] leading-[1.75] flex flex-col gap-1.5">
                {proj.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
