"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', href: '#home' },
  { name: 'À Propos', href: '#about' },
  { name: 'Expériences', href: '#experiences' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-shadow"
      style={{
        backgroundColor: '#2b2b2b',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.2)',
      }}
    >
      <div className="max-w-[900px] mx-auto px-5 h-[64px] flex items-center justify-between">
        {/* Logo */}
        <span className="text-[#11b2cc] font-bold text-[18px] tracking-wide">
          Abdou Nizar
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-[15px] font-semibold text-white hover:text-[#11b2cc] transition-colors duration-200 no-underline"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2b2b2b] border-t border-white/10 px-5 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-[15px] font-semibold text-white hover:text-[#11b2cc] transition-colors no-underline"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
