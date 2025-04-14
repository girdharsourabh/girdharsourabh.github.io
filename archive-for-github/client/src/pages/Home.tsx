import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Talks from "@/components/Talks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { profileData } from "@/lib/data";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryKey: ["/api/profile"],
    enabled: false,
    initialData: profileData.profile,
  });

  const { data: experiences, isLoading: isExperiencesLoading } = useQuery({
    queryKey: ["/api/experiences"],
    enabled: false,
    initialData: profileData.experiences,
  });

  const { data: skillsData, isLoading: isSkillsLoading } = useQuery({
    queryKey: ["/api/skills"],
    enabled: false,
    initialData: profileData.skills,
  });

  const { data: educationData, isLoading: isEducationLoading } = useQuery({
    queryKey: ["/api/education"],
    enabled: false,
    initialData: profileData.education,
  });

  const { data: projectsData, isLoading: isProjectsLoading } = useQuery({
    queryKey: ["/api/projects"],
    enabled: false,
    initialData: profileData.projects,
  });

  const { data: talksData, isLoading: isTalksLoading } = useQuery({
    queryKey: ["/api/talks"],
    enabled: false,
    initialData: profileData.talks,
  });

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
        <Hero profile={profile} isLoading={isProfileLoading} />
        <Experience experiences={experiences} isLoading={isExperiencesLoading} />
        <Skills skills={skillsData} isLoading={isSkillsLoading} />
        <Education education={educationData} isLoading={isEducationLoading} />
        <Projects projects={projectsData} isLoading={isProjectsLoading} />
        <Talks talks={talksData} isLoading={isTalksLoading} />
        <Contact profile={profile} isLoading={isProfileLoading} />
      </main>
      
      <Footer profile={profile} />
    </div>
  );
}
