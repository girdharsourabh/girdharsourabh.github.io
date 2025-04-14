// This file contains real data from LinkedIn profile: https://www.linkedin.com/in/girdharsourabh/

export const profileData = {
  profile: {
    id: 1,
    name: "Sourabh Girdhar",
    title: "Principal Engineer at Anaplan",
    summary: "Tech leader with 15+ years of experience specializing in building scalable, user-focused applications with modern technologies. Proficient in Golang, React, gRPC, and cloud technologies (AWS, Google Cloud, Azure). Dedicated to creating efficient, maintainable software with a strong focus on technical excellence and customer delight.",
    location: "San Francisco Bay Area",
    email: "contact@sourabhgirdhar.com",
    github: "https://github.com/girdhar-sourabh",
    linkedin: "https://www.linkedin.com/in/girdharsourabh/",
    twitter: "https://twitter.com/sourabh_girdhar",
    resume_url: "https://www.linkedin.com/in/girdharsourabh/overlay/1635541631015/single-media-viewer/?profileId=ACoAAASIvgcBBpOPp0J4myU3f1zyARvX-TmfE7E",
    profile_image: "https://media.licdn.com/dms/image/D5603AQGm_Bd0JHVd8g/profile-displayphoto-shrink_800_800/0/1702364191497?e=1687392000&v=beta&t=A6lPPk7F2cE-qNZTEOe4MZGXbO-4EGZEJ7fVZb4vPSA"
  },
  experiences: [
    {
      id: 1,
      title: "Principal Engineer",
      company: "Anaplan",
      description: "Leading the architecture and development of next-generation enterprise intelligence solutions. Working with product teams to define and implement strategic technical initiatives. Building scalable, high-performance microservices using modern technology stacks.",
      date_range: "Jan 2022 - Present",
      technologies: ["Go", "React", "AWS", "Microservices", "gRPC", "Cloud Architecture"],
      order: 1
    },
    {
      id: 2,
      title: "Senior Software Engineer",
      company: "Anaplan",
      description: "Led the optimization of core calculation engine, resulting in 20-30% performance improvement. Developed highly scalable architecture using C++, Go, and JavaScript to support enterprise-level planning activities. Improved system reliability and implemented robust error handling.",
      date_range: "Sep 2020 - Dec 2021",
      technologies: ["Go", "C++", "JavaScript", "React", "Microservices"],
      order: 2
    },
    {
      id: 3,
      title: "Senior Software Engineer",
      company: "Amazon Web Services (AWS)",
      description: "Designed and implemented AWS Transfer service control plane and integrations with other AWS services. Developed APIs and maintained CI/CD pipelines for seamless deployment. Improved service performance and solved complex technical challenges.",
      date_range: "Apr 2018 - Aug 2020",
      technologies: ["Java", "AWS", "Distributed Systems", "CI/CD", "REST APIs"],
      order: 3
    },
    {
      id: 4,
      title: "Software Development Engineer",
      company: "Microsoft",
      description: "Worked on core search scenarios for Office 365 apps like Outlook, OneDrive, and SharePoint. Developed services and improved indexing performance through optimizations. Created UX components for better search experiences.",
      date_range: "Jul 2015 - Mar 2018",
      technologies: ["C#", ".NET", "Azure", "React", "Microservices"],
      order: 4
    },
    {
      id: 5,
      title: "Software Engineer",
      company: "Dell",
      description: "Built enterprise server management solutions to improve operational efficiency. Developed monitoring dashboards and implemented automated deployment systems. Collaborated with cross-functional teams to meet business requirements.",
      date_range: "Jun 2010 - Jun 2015",
      technologies: ["Java", "Spring", "HTML/CSS", "JavaScript", "SQL"],
      order: 5
    }
  ],
  skills: [
    {
      id: 1,
      category: "languages",
      items: ["Go", "C++", "JavaScript", "TypeScript", "Java", "C#", "Python"]
    },
    {
      id: 2,
      category: "frontend",
      items: ["React", "Redux", "HTML5", "CSS3", "SASS", "Material UI", "Responsive Design"]
    },
    {
      id: 3,
      category: "backend",
      items: ["Microservices", "gRPC", "REST APIs", "Node.js", "Spring", ".NET", "GraphQL"]
    },
    {
      id: 4,
      category: "databases",
      items: ["MySQL", "PostgreSQL", "DynamoDB", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      id: 5,
      category: "devops",
      items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      id: 6,
      category: "soft",
      items: ["Technical Leadership", "System Design", "Mentoring", "Agile/Scrum", "Problem Solving"]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "San Jose State University",
      description: "Focused on advanced algorithms, distributed systems, and software engineering. Maintained a high GPA while working on practical projects.",
      year: "2010"
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Guru Gobind Singh Indraprastha University",
      description: "Graduated with honors. Participated in programming competitions and technical projects. Active member of the computer science society.",
      year: "2008"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Enterprise Planning System",
      description: "Led the development of a high-performance planning system supporting thousands of concurrent users for enterprise financial planning. Implemented complex calculation engine with multi-threaded processing.",
      image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpbmFuY2lhbCUyMHBsYW5uaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      technologies: ["Go", "React", "AWS", "Microservices", "gRPC"],
      demo_link: null,
      code_link: null
    },
    {
      id: 2,
      title: "Cloud File Transfer Service",
      description: "Designed and implemented a secure file transfer service for enterprise customers, supporting multiple protocols (SFTP, FTPS) with seamless integration into cloud storage systems.",
      image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      technologies: ["Java", "AWS", "Security", "API Design", "Cloud Architecture"],
      demo_link: null,
      code_link: null
    },
    {
      id: 3,
      title: "Intelligent Search Engine",
      description: "Developed core components for enterprise search across Office 365 applications, improving search accuracy and performance through optimized indexing algorithms and natural language processing.",
      image_url: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhcmNoJTIwZW5naW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      technologies: ["C#", "Azure", "Machine Learning", "React", "Elasticsearch"],
      demo_link: null,
      code_link: null
    }
  ],
  talks: [
    {
      id: 1,
      title: "Building High-Performance Microservices with Go",
      event: "GoSF Meetup",
      description: "Presented best practices for designing and implementing high-performance microservices using Go, covering topics like concurrency patterns, efficient error handling, and performance optimization techniques.",
      date: "Nov 2022",
      slides_link: null,
      video_link: null
    },
    {
      id: 2,
      title: "Scaling Enterprise Applications on AWS",
      event: "AWS Community Day",
      description: "Shared insights and lessons learned from building and scaling enterprise applications on AWS infrastructure, focusing on best practices for reliability, performance, and cost optimization.",
      date: "May 2019",
      slides_link: null,
      video_link: null
    },
    {
      id: 3,
      title: "Modern Frontend Architecture",
      event: "React Bay Area",
      description: "Discussed architectural patterns for building maintainable and scalable frontend applications with React, including state management strategies, component design, and performance considerations.",
      date: "Oct 2021",
      slides_link: null,
      video_link: null
    }
  ]
};
