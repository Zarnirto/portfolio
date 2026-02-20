import React from 'react';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

const contactItems = [
  {
    icon: <Mail size={22} className="text-[#11b2cc] flex-shrink-0" />,
    label: 'nizarjalil.abdou@gmail.com',
    href: 'mailto:nizarjalil.abdou@gmail.com',
  },
  {
    icon: <Phone size={22} className="text-[#11b2cc] flex-shrink-0" />,
    label: '0626976354',
    href: 'tel:+33626976354',
  },
  {
    icon: <Globe size={22} className="text-[#11b2cc] flex-shrink-0" />,
    label: 'www.reallygreatsite.com',
    href: 'https://www.reallygreatsite.com',
  },
  {
    icon: <MapPin size={22} className="text-[#11b2cc] flex-shrink-0" />,
    label: 'La Courneuve, Île-De-France',
    sublabel: 'Permis B, Véhiculé',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding px-5 flex justify-center">
      <div className="w-full max-w-[800px]">
        <h1 className="text-[36px] font-bold text-[#11b2cc] text-center mb-[30px]">
          Contact
        </h1>

        <div className="bg-white rounded-[12px] p-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <p className="text-[16px] text-[#555555] leading-[1.75] mb-8">
            N&apos;hésitez pas à me contacter pour discuter d&apos;une opportunité d&apos;alternance
            ou de tout projet lié à la Data Analyse et au Business Analyst. Je suis disponible et
            réactif.
          </p>

          <div className="flex flex-col gap-5">
            {contactItems.map((item, i) =>
              item.href ? (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 text-[16px] text-[#333333] no-underline hover:text-[#11b2cc] transition-colors duration-200 group"
                >
                  {item.icon}
                  <span className="group-hover:underline">{item.label}</span>
                </a>
                ) : (
                  <div key={i} className="flex items-start gap-4 text-[16px] text-[#333333]">
                    <span className="mt-0.5">{item.icon}</span>
                    <div className="flex flex-col">
                      <span>{item.label}</span>
                      {item.sublabel && <span>{item.sublabel}</span>}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
