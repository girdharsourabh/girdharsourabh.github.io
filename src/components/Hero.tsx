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
    <section id="about" className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 relative overflow-hidden">
      {/* Decorative gradient elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-cyan-100 to-transparent rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100 to-transparent rounded-full blur-3xl opacity-30 -z-10" />

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="animate-fade-in-up flex-shrink-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72 group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-elegant border border-white/20">
                <img
                  src={
                    profile.profile_image ||
                    "https://media.licdn.com/dms/image/v2/D5603AQFok_9PS1AksQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729579402456?e=1751500800&v=beta&t=h2W6q9S-hEV1cBzbLCh5oPd2BmnxhDPVNf6TKOheVaE"
                  }
                  alt={`${profile.name} Profile Picture`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="animate-fade-in-up text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight text-slate-900">
              {profile.name}
            </h1>
            <p className="animate-fade-in-up animation-delay-100 text-2xl md:text-3xl font-sora font-500 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-8">
              {profile.title}
            </p>
            <div className="max-w-3xl mb-10">
              <p className="animate-fade-in-up animation-delay-200 text-lg text-slate-700 leading-relaxed font-sora">
                {profile.summary}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up animation-delay-300 flex flex-wrap gap-4 justify-center md:justify-start mb-10">
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
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-600 rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Button>

              {profile.resume_url && (
                <Button
                  variant="outline"
                  className="px-8 py-3 bg-white/50 backdrop-blur-sm border border-slate-200 hover:bg-white/80 text-slate-900 font-600 rounded-lg transition-all duration-300 flex items-center gap-2 hover-lift"
                  asChild
                >
                  <a
                    href={profile.resume_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-5 w-5" /> Download Resume
                  </a>
                </Button>
              )}
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up animation-delay-400 flex gap-8 justify-center md:justify-start">
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 transition-transform group-hover:scale-110" />
                </a>
              )}

              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/50 backdrop-filter blur-sm border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6 transition-transform group-hover:scale-110" />
                </a>
              )}

              {profile.twitter && (
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 hover:text-blue-400 hover:bg-sky-50 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6 transition-transform group-hover:scale-110" />
                </a>
              )}

              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="group relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6 transition-transform group-hover:scale-110" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
