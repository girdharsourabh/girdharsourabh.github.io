import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints for fetching profile data
  app.get("/api/profile", async (req, res) => {
    try {
      // In a real implementation, this would fetch data from a database or LinkedIn API
      // For now, we'll use mock data for demonstration
      res.json({
        id: 1,
        name: "John Doe",
        title: "Senior Software Engineer",
        summary: "Passionate software engineer with over 8 years of experience building scalable applications and leading engineering teams. Specializing in full-stack development with expertise in JavaScript, React, and Node.js. Committed to writing clean, maintainable code and solving complex problems with elegant solutions.",
        location: "San Francisco, California",
        email: "john.doe@example.com",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        resume_url: "https://example.com/resume.pdf",
        profile_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch profile data" });
    }
  });

  app.get("/api/experiences", async (req, res) => {
    try {
      // In a real implementation, this would fetch data from LinkedIn API
      res.json([
        {
          id: 1,
          title: "Senior Software Engineer",
          company: "Tech Solutions Inc.",
          description: "Led the development of a cloud-based SaaS platform serving over 100,000 users. Improved system performance by 40% through architecture optimizations and implemented CI/CD pipelines to streamline deployment processes.",
          date_range: "Jan 2020 - Present",
          technologies: ["React", "Node.js", "AWS", "GraphQL"],
          order: 1
        },
        {
          id: 2,
          title: "Full-Stack Developer",
          company: "Innovate Labs",
          description: "Developed and maintained multiple client applications using modern JavaScript frameworks. Collaborated with UI/UX designers to implement responsive designs and improved application performance.",
          date_range: "Jun 2017 - Dec 2019",
          technologies: ["JavaScript", "Vue.js", "Express", "MongoDB"],
          order: 2
        },
        {
          id: 3,
          title: "Junior Software Developer",
          company: "Digital Creations",
          description: "Built and maintained web applications for diverse client needs. Participated in agile development cycles and contributed to frontend and backend development tasks.",
          date_range: "Aug 2015 - May 2017",
          technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
          order: 3
        }
      ]);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch experiences data" });
    }
  });

  app.get("/api/skills", async (req, res) => {
    try {
      // In a real implementation, this would fetch data from LinkedIn API
      res.json([
        {
          id: 1,
          category: "languages",
          items: ["JavaScript", "TypeScript", "Python", "Java", "PHP"]
        },
        {
          id: 2,
          category: "frontend",
          items: ["React", "Vue.js", "HTML5", "CSS3/SASS", "Redux"]
        },
        {
          id: 3,
          category: "backend",
          items: ["Node.js", "Express", "Django", "GraphQL", "REST APIs"]
        },
        {
          id: 4,
          category: "databases",
          items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
        },
        {
          id: 5,
          category: "devops",
          items: ["Git", "Docker", "AWS", "CI/CD", "Kubernetes"]
        },
        {
          id: 6,
          category: "soft",
          items: ["Team Leadership", "Agile/Scrum", "Technical Writing", "Problem Solving", "Communication"]
        }
      ]);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch skills data" });
    }
  });

  app.get("/api/education", async (req, res) => {
    try {
      // In a real implementation, this would fetch data from LinkedIn API
      res.json([
        {
          id: 1,
          degree: "Master of Science in Computer Science",
          institution: "Stanford University",
          description: "Focused on advanced algorithms, distributed systems, and machine learning. Graduated with honors.",
          year: "2015"
        },
        {
          id: 2,
          degree: "Bachelor of Science in Computer Engineering",
          institution: "University of California, Berkeley",
          description: "Dean's List student with a focus on software development and computer architecture. Participated in various hackathons and programming competitions.",
          year: "2013"
        }
      ]);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch education data" });
    }
  });

  app.get("/api/projects", async (req, res) => {
    try {
      // In a real implementation, this would fetch data from a database or API
      res.json([
        {
          id: 1,
          title: "E-commerce Platform",
          description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, shopping cart, and payment processing.",
          image_url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          demo_link: "https://example.com/ecommerce-demo",
          code_link: "https://github.com/johndoe/ecommerce-platform"
        },
        {
          id: 2,
          title: "Task Management App",
          description: "A productive task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with Vue.js and Firebase.",
          image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
          demo_link: "https://example.com/taskmanager-demo",
          code_link: "https://github.com/johndoe/task-manager"
        },
        {
          id: 3,
          title: "Weather Forecast App",
          description: "A beautiful weather forecast application that shows current weather conditions and 7-day forecasts for any location. Integrates with OpenWeatherMap API.",
          image_url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
          technologies: ["JavaScript", "Chart.js", "REST API", "Bootstrap"],
          demo_link: "https://example.com/weather-demo",
          code_link: "https://github.com/johndoe/weather-app"
        }
      ]);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch projects data" });
    }
  });

  app.get("/api/talks", async (req, res) => {
    try {
      // In a real implementation, this would fetch data from LinkedIn API
      res.json([
        {
          id: 1,
          title: "Modern React Patterns and Best Practices",
          event: "React Summit 2022",
          description: "Presented an in-depth session on modern React patterns, performance optimization techniques, and state management approaches. Demonstrated practical examples and case studies from real-world applications.",
          date: "Oct 2022",
          slides_link: "https://example.com/react-summit-slides",
          video_link: "https://example.com/react-summit-video"
        },
        {
          id: 2,
          title: "Building Scalable Node.js Microservices",
          event: "Node Congress 2021",
          description: "Discussed strategies for designing and implementing scalable microservices architecture using Node.js. Covered topics including service discovery, API gateways, and containerization.",
          date: "Mar 2021",
          slides_link: "https://example.com/node-congress-slides",
          video_link: "https://example.com/node-congress-video"
        }
      ]);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch talks data" });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
