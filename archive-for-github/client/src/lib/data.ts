// This file contains real data from LinkedIn profile: https://www.linkedin.com/in/girdharsourabh/

export const profileData = {
  profile: {
    id: 1,
    name: "Sourabh Girdhar",
    title: "Group Engineering Manager at Morgan Stanley",
    summary: "I am an experienced engineering leader with a strong background in the fintech industry, having dedicated 18 years to this exciting field. Throughout my career, I have gained expertise in a wide range of technologies, starting from mainframe systems and progressing to serverless cloud solutions. My areas of knowledge encompass application development, application security, DevSecOps, and business process management. I am one of India's first Gartner engineering community ambassadors. I have had the privilege of working in diverse sectors within the fintech industry, including asset management, consumer financing, wealth management, and equity and fixed income. This exposure has allowed me to develop a comprehensive understanding of the industry's intricacies and challenges. As an engineering leader, I am passionate about driving innovation and delivering high-quality solutions that meet the evolving needs of the businesses. I thrive in collaborative environments, leveraging my expertise to lead teams and foster a culture of continuous improvement.",
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
      title: "Group Engineering Manager",
      company: "Morgan Stanley",
      description: "Leading a team of engineers responsible for developing and maintaining applications for wealth management division. Implementing modern engineering practices and driving digital transformation initiatives. Focusing on scalable, secure fintech solutions and mentoring engineering talent.",
      date_range: "Feb 2023 - Present",
      technologies: ["Leadership", "Fintech", "Cloud Architecture", "DevSecOps", "Agile/Scrum", "System Design"],
      order: 1
    },
    {
      id: 2,
      title: "Principal Engineer",
      company: "Anaplan",
      description: "Led the architecture and development of next-generation enterprise intelligence solutions. Worked with product teams to define and implement strategic technical initiatives. Built scalable, high-performance microservices using modern technology stacks.",
      date_range: "Jan 2022 - Jan 2023",
      technologies: ["Go", "React", "AWS", "Microservices", "gRPC", "Cloud Architecture"],
      order: 2
    },
    {
      id: 3,
      title: "Senior Software Engineer",
      company: "Anaplan",
      description: "Led the optimization of core calculation engine, resulting in 20-30% performance improvement. Developed highly scalable architecture using C++, Go, and JavaScript to support enterprise-level planning activities. Improved system reliability and implemented robust error handling.",
      date_range: "Sep 2020 - Dec 2021",
      technologies: ["Go", "C++", "JavaScript", "React", "Microservices"],
      order: 3
    },
    {
      id: 4,
      title: "Senior Software Engineer",
      company: "Amazon Web Services (AWS)",
      description: "Designed and implemented AWS Transfer service control plane and integrations with other AWS services. Developed APIs and maintained CI/CD pipelines for seamless deployment. Improved service performance and solved complex technical challenges.",
      date_range: "Apr 2018 - Aug 2020",
      technologies: ["Java", "AWS", "Distributed Systems", "CI/CD", "REST APIs"],
      order: 4
    },
    {
      id: 5,
      title: "Software Development Engineer",
      company: "Microsoft",
      description: "Worked on core search scenarios for Office 365 apps like Outlook, OneDrive, and SharePoint. Developed services and improved indexing performance through optimizations. Created UX components for better search experiences.",
      date_range: "Jul 2015 - Mar 2018",
      technologies: ["C#", ".NET", "Azure", "React", "Microservices"],
      order: 5
    },
    {
      id: 6,
      title: "Software Engineer",
      company: "Dell",
      description: "Built enterprise server management solutions to improve operational efficiency. Developed monitoring dashboards and implemented automated deployment systems. Collaborated with cross-functional teams to meet business requirements.",
      date_range: "Jun 2010 - Jun 2015",
      technologies: ["Java", "Spring", "HTML/CSS", "JavaScript", "SQL"],
      order: 6
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
      title: "Morgan Stanley Tech Talk Series Speaker",
      event: "Morgan Stanley Internal Event",
      description: "Delivered a tech talk at Morgan Stanley as part of their distinguished speaker series, discussing innovation in financial technology and building high-performance systems.",
      date: "Mar 2024",
      slides_link: "https://www.linkedin.com/feed/update/urn:li:activity:7300020445683019776/",
      video_link: null
    },
    {
      id: 2,
      title: "Earned Distinguished Speaker Award",
      event: "Morgan Stanley Recognition Program",
      description: "Received the Distinguished Speaker Award at Morgan Stanley for exceptional contributions to knowledge sharing and technical leadership within the organization.",
      date: "Feb 2024",
      slides_link: "https://www.linkedin.com/feed/update/urn:li:activity:7285917502650359809/",
      video_link: null
    },
    {
      id: 3,
      title: "Morgan Stanley's Global Top 5% Award",
      event: "Morgan Stanley Global Recognition",
      description: "Honored to be recognized among Morgan Stanley's Global Top 5% of employees, highlighting exceptional performance and impact on the organization.",
      date: "Dec 2023",
      slides_link: "https://www.linkedin.com/feed/update/urn:li:activity:7218943278853836800/",
      video_link: null
    },
    {
      id: 4,
      title: "Technology Excellence Award",
      event: "Morgan Stanley Excellence Awards",
      description: "Received Technology Excellence Award at Morgan Stanley for outstanding contributions to engineering excellence and innovative solutions.",
      date: "Nov 2023",
      slides_link: "https://www.linkedin.com/feed/update/urn:li:activity:7193173230755418112/",
      video_link: null
    },
    {
      id: 5,
      title: "Beyond Excellence Award",
      event: "Morgan Stanley Recognition",
      description: "Honored with the Beyond Excellence Award for exceptional performance and contributions that went above and beyond expectations.",
      date: "Aug 2023",
      slides_link: "https://www.linkedin.com/feed/update/urn:li:activity:7119564174841540608/",
      video_link: null
    },
    {
      id: 6,
      title: "Speaker at Wealth Management Training Program",
      event: "Morgan Stanley Training Initiative",
      description: "Delivered a comprehensive talk on modern engineering practices and digital transformation as part of Morgan Stanley's Wealth Management Training Program.",
      date: "Dec 2023",
      slides_link: "https://www.linkedin.com/feed/update/urn:li:activity:7226515711781691393/",
      video_link: null
    },
    {
      id: 7,
      title: "Engineering Excellence Speaker",
      event: "Morgan Stanley Engineering Summit",
      description: "Featured speaker at Morgan Stanley's Engineering Summit, sharing insights on building resilient and scalable systems for financial services.",
      date: "Nov 2023",
      slides_link: "https://www.linkedin.com/feed/update/urn:li:activity:7196022606381137920/",
      video_link: null
    },
    {
      id: 8,
      title: "Modern Architecture Patterns",
      event: "MS Tech Conference",
      description: "Presented on modern architecture patterns and practices for enterprise applications, focusing on scalability, security, and performance optimization.",
      date: "Sep 2023",
      slides_link: "https://www.linkedin.com/feed/update/urn:li:activity:7163039826479460354/",
      video_link: null
    },
    {
      id: 9,
      title: "Leadership in Engineering",
      event: "Engineering Leadership Forum",
      description: "Spoke on engineering leadership and best practices for managing technical teams in a rapidly evolving fintech environment.",
      date: "Jun 2023",
      slides_link: "https://www.linkedin.com/feed/update/urn:li:activity:7089114829096984578/",
      video_link: null
    }
  ]
};
