"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiTwitch } from "@icons-pack/react-simple-icons";

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-300 py-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-900 opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-300">pudlo.media</h3>
            <p className="text-sm">
              Innovative Medien- und Technologielösungen
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Pudl0"
                className="hover:text-blue-400 transition-colors"
              >
                <SiGithub size={20} />
              </Link>
              <Link
                href="https://de.linkedin.com/in/patrick-pudlo-340a0021b"
                className="hover:text-blue-400 transition-colors"
              >
                <SiLinkedin size={20} />
              </Link>
              <Link
                href="https://twitch.com/nur_pat"
                className="hover:text-blue-400 transition-colors"
              >
                <SiTwitch size={20} />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300">Kontakt</h4>
            <p className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+49 123 456 7890</span>
            </p>
            <p className="flex items-center space-x-2">
              <Mail size={16} />
              <a
                href="mailto:info@pudlo.media"
                className="hover:text-blue-400 transition-colors"
              >
                info@pudlo.media
              </a>
            </p>
            <p>Patrick Pudlo</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300">
              Weitere Links
            </h4>
            <ul className="space-y-2">
              {["Impressum", "Datenschutz"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} pudlo.media. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 opacity-30" />
    </footer>
  );
}
