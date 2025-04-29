import React from "react";
import { Profile } from "../shared/schema.ts";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

interface FooterProps {
  profile: Profile | undefined;
}

export default function Footer({ profile }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">
              {profile?.name || "Personal Portfolio"}
            </p>
            <p className="text-gray-400">
              {profile?.title || "Software Developer"}
            </p>
          </div>

          <div className="flex space-x-6">
            {profile?.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}

            {profile?.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            )}

            {profile?.twitter && (
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}

            {profile?.email && (
              <a
                href={`mailto:${profile.email}`}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} {profile?.name || "Portfolio"}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
