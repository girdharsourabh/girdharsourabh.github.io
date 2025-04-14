import { useState, useEffect } from 'react';
import Home from './pages/Home';
import NotFound from './pages/not-found';
import { getProfileData, getExperiencesData, getSkillsData, getEducationData, getProjectsData, getTalksData } from './lib/data';

export default function App() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Load static data
  const profile = getProfileData();
  const experiences = getExperiencesData();
  const skills = getSkillsData();
  const education = getEducationData();
  const projects = getProjectsData();
  const talks = getTalksData();
  const isLoading = false;

  // Simple router for GitHub Pages
  // Handles both local development and GitHub Pages paths
  const isHomePage = route === '/' || route === '/MyWebsite/' || route === '/MyWebsite';
  
  if (isHomePage) {
    return (
      <Home
        profile={profile}
        experiences={experiences}
        skills={skills}
        education={education}
        projects={projects}
        talks={talks}
        isLoading={isLoading}
      />
    );
  } else {
    return <NotFound />;
  }
}