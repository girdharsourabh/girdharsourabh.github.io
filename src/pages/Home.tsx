import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Talks from "../components/Talks";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useQuery } from "@tanstack/react-query";
import { profileData } from "../../github-pages-data";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
const { profile, experiences, skills, education, certifications, projects, talks, articles} = profileData;
  

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let currentActiveSection = "about";
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionId = sectionElement.getAttribute("id") || "";

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          currentActiveSection = sectionId;
        }
      });

      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <Header activeSection={activeSection} />

      <main>
        <Hero profile={profile as any} isLoading={false} />
        <Experience
          experiences={experiences}
          isLoading={false}
        />
        <Skills skills={skills} isLoading={false} />
        <Education education={education} isLoading={false} />
        <Projects projects={projects} isLoading={false} />
        <Talks talks={talks} articles={articles} isLoading={false} />
        <Certifications
          certifications={certifications}
          isLoading={false}
        />
        <Contact profile={profile as any} isLoading={false} />
      </main>

      <Footer profile={profile as any} />
    </div>
  );
}
