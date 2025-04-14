import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Talks from '../components/Talks';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Profile, Experience as ExperienceType, Skills as SkillsType, Education as EducationType, Project, Talk } from "@shared/schema";

interface HomeProps {
  profile: Profile;
  experiences: ExperienceType[];
  skills: SkillsType[];
  education: EducationType[];
  projects: Project[];
  talks: Talk[];
  isLoading: boolean;
}

export default function Home({ 
  profile,
  experiences,
  skills,
  education,
  projects,
  talks,
  isLoading
}: HomeProps) {
  const [activeSection, setActiveSection] = useState('home');

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '0px',
      threshold: 0.5
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} />
      <main>
        <Hero profile={profile} isLoading={isLoading} />
        <Experience experiences={experiences} isLoading={isLoading} />
        <Skills skills={skills} isLoading={isLoading} />
        <Education education={education} isLoading={isLoading} />
        <Projects projects={projects} isLoading={isLoading} />
        <Talks talks={talks} isLoading={isLoading} />
        <Contact profile={profile} isLoading={isLoading} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}