import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        padding: '40px 20px',
        textAlign: 'center',
        marginTop: '60px',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '28px',
            marginBottom: '16px',
          }}
        >
          <a
            href="mailto:nizarjalil.abdou@gmail.com"
            style={{ color: '#fff', transition: 'color 0.2s' }}
            className="hover:text-[#11b2cc]"
          >
            <Mail size={22} />
          </a>
          <a
            href="tel:+33626976354"
            style={{ color: '#fff', transition: 'color 0.2s' }}
            className="hover:text-[#11b2cc]"
          >
            <Phone size={22} />
          </a>
          <a
            href="https://www.reallygreatsite.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', transition: 'color 0.2s' }}
            className="hover:text-[#11b2cc]"
          >
            <Globe size={22} />
          </a>
        </div>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
          © {new Date().getFullYear()} Abdou Nizar. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
