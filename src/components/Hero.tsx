import { FileText, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Profile } from "../shared/schema.ts";
import { Button } from "../components/ui/button.tsx";
import { Skeleton } from "../components/ui/skeleton.tsx";
import React from "react";
interface HeroProps {
  profile: Profile | undefined;
  isLoading: boolean;
}

export default function Hero({ profile, isLoading }: HeroProps) {
  if (isLoading || !profile) {
    return (
      <section id="about" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <Skeleton className="w-48 h-48 md:w-64 md:h-64 rounded-full" />
            <div className="text-center md:text-left w-full max-w-2xl">
              <Skeleton className="h-12 w-48 md:w-64 mb-4" />
              <Skeleton className="h-8 w-36 md:w-48 mb-6" />
              <Skeleton className="h-28 w-full mb-8" />
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Skeleton className="h-12 w-32" />
                <Skeleton className="h-12 w-40" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <img
              src={
                profile.profile_image ||
                "https://media.licdn.com/dms/image/v2/D5603AQFok_9PS1AksQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729579402456?e=1751500800&v=beta&t=h2W6q9S-hEV1cBzbLCh5oPd2BmnxhDPVNf6TKOheVaE"
              }
              alt={`${profile.name} Profile Picture`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {profile.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              {profile.title}
            </h2>
            <div className="max-w-2xl mb-8">
              <p className="text-gray-700 leading-relaxed">{profile.summary}</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Get in Touch
              </Button>

              {profile.resume_url && (
                <Button
                  variant="outline"
                  className="bg-white border border-gray-300 hover:bg-gray-50 flex items-center gap-2"
                  asChild
                >
                  <a
                    href={profile.resume_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4" /> Download Resume
                  </a>
                </Button>
              )}
            </div>
            <div className="flex mt-8 gap-6 justify-center md:justify-start">
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              )}

              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              )}

              {profile.twitter && (
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              )}

              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
