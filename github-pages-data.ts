// This data file is optimized for GitHub Pages static hosting
// It contains all the data needed for the portfolio website

export const profileData = {
  profile: {
    id: 1,
    first_name: "Sourabh",
    last_name: "Girdhar",
    title: "Chief Technology Officer at Care.fi",
    email: "girdharsourabh@gmail.com",
    location: "Gurugram, India",
    bio: "Engineering leader with 19+ years of experience in financial technology, specializing in building scalable, high-performance systems. Proven track record of leading teams to deliver innovative solutions that drive business value. Expert in distributed systems, cloud architecture, and modern engineering practices.",
    avatar_url:
      "https://media.licdn.com/dms/image/v2/D5603AQFok_9PS1AksQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729579402456?e=1751500800&v=beta&t=h2W6q9S-hEV1cBzbLCh5oPd2BmnxhDPVNf6TKOheVaE",
    github_url: "https://github.com/girdharsourabh",
    linkedin_url: "https://www.linkedin.com/in/girdharsourabh/",
    portfolio_url: null,
    blog_url: null,
  },
  experiences: [
    {
      id: 1,
      title: "Chief Technology Officer",
      company: "Care.fi",
      description:
        "<p>Building a full stack credit-to-commerce, solving critical challenges in our entire healthcare ecosystem.<br />- Building smartest AI enabled RCM for India.<br />- Digital credit line for suppliers, hospital and pharmacies.<br />- B2B marketplace for pharmacy.</p>",
      date_range: "Nov 2023 - Present",
      technologies: [
        "Leadership",
        "Fintech",
        "Cloud Architecture",
        "DevSecOps",
        "Agile/Scrum",
        "System Design",
      ],
      order: 1,
    },
    {
      id: 2,
      title: "Engineering Leader",
      company: "OLX",
      description:
        "<p>Lead the the development of complex Loan Management System (LMS), Business Risk Engine from scratch.<br /><br />Built a roadmap with the Product team on multiple products like LMS, Risk Engine, Configuration Management, Dealer financing, Value Added Services (VAS), Collections and payments.<br /><br />With all these new finance stack, business gained - <br />100% increase in loan book to 220 MN USD.<br />Cost saving of 50K USD annually due to automations and vendor licenses.<br />Increase in online collection from 40% to 60% (200K per month).<br />Reduction in Manual reviews for approvals from 40% to under 10% (25K USD annual savings).<br />Reduction error loan in loan processing from 6% to 0.2%.<br />Reduction of DPD - 90 (delayed loans) from 5.6% to 4.1%.<br /><br />Collaborated with Product, Design, Analytics, Engineering, and other teams to align organisational goals with company&rsquo;s objectives.<br /><br />Lead a team of 35+, including 5 team leads leading teams of 6-9 each. Directly responsible for performance evaluation, career development, and growth of the team.<br /><br />Interviewed, hired, and on boarded 20 new engineers, with a retention rate of 95%. Part of campus and leadership hiring team.<br /><br />Worked on design of complete competency framework of technology for the whole OLX group.</p>",
      date_range: "Sep 2021 - nov 2023",
      technologies: [
        "Go",
        "React",
        "AWS",
        "Microservices",
        "gRPC",
        "Cloud Architecture",
      ],
      order: 2,
    },
    {
      id: 3,
      title: "Engineering Manager",
      company: "Ameriprise Financials",
      description:
        "<p>Lead an engineering team of 12 engineers working on 6 different products.<br /><br />Responsible for conversion of monolithic architecture to micro services and set the patterns for new app developments.<br /><br />Worked on development of single page apps around Client and account maintenance, Asset allocation, Risk assessment, Advisor tools, New account setup.<br /><br />Worked on setting the team in india including employees and contractors.<br /><br />Improved team workflow by adopting continuous integration, continuous deployment, delivery pipelines and reducing human coding errors by 80%.<br /><br />Tech stack included - Java, Spring boot, Spring cloud, Adobe experience Manager, Apache mesos, Docker, Oracle, DB2, Redis.</p>"+
        "<p>Lead the team for reconciliation in Columbia Thread-needle Investments.</p>"+
        "<p>Individually created a swift messaging based framework, resulting in 1.5 MN USD saving for the company.</p>"+
        "<p>Worked on a global order management system to run compliance and integration with trading systems.</p>"+
        "<p>Implemented technical solutions for GL Reconciliation, Bank Reconciliation, Custodian Reconciliation, Trading System Reconciliation.</p>"+
        "<p>Developed multiple dashboards, automations, reports to help Business, product ops, support teams.</p>"+
        "<p>Developed C# windows services to load orders to trading system and run compliance.</p>"+
        "<p>Technologies worked on - Frontier reconciliation tool, Spring Batch, Ibatis, C#, Crystal reports, Velocity, J2EE, Spring Boot, Rest services, SQL Server, JQuery, WPF.</p>",
      date_range: "Aug 2018 - Sep 2021",
      technologies: ["Go", "C++", "JavaScript", "React", "Microservices"],
      order: 3,
    },
    {
      id: 4,
      title: "Consultant - Investment Management Technology",
      company: "Fidelity International",
      description:
        "<p>Developed module for portfolio modelling and instruction models for fund managers.<br /><br />Contributed to 1000+ rules based rule engine for compliance processing in equity order processing.<br /><br />Worked on trading system integrations.<br /><br />Tested software for bugs and documented processes, increasing efficiency by 15%<br /><br />Built an excel modelling based module which reduced execution time for portfolio managers by 50%. <br /><br />Tech stack included - .NET based thick client with Spring, Drools, Oracle, Ibatis in backend with Websphere.</p>",
      date_range: "Mar 2012 - May 2013",
      technologies: [
        "Java",
        "AWS",
        "Distributed Systems",
        "CI/CD",
        "REST APIs",
      ],
      order: 4,
    },
    {
      id: 5,
      title: "Analyst - Fixed Income Technology",
      company: "Nomura",
      description:
      "<p>Worked on development of structured products research portal.<br />Worked on Fixed Income connectivity tools. <br />Involved in various activities like development of exchange connectors, feeders , readers, monitors.<br />Technical work involves Tibco RV , Hibernate ,Spring, Web Services, Swing, JSF , Java/J2EE , Unix scripting , Glassfish.</p>",  
      date_range: "Jul 2015 - Mar 2018",
      technologies: ["C#", ".NET", "Azure", "React", "Microservices"],
      order: 5,
    },
    {
      id: 6,
      title: "Developer - BPM",
      company: "Lehman Brothers",
      description: "<p>Worked in global BPM COE team. <br />Work included managing Tibco BPM suite iProcess and consulting global teams on usage.<br />Development of workflows and case management applications.<br />Development of workflow oriented web applications with Tibco as engine. <br />Technologies included Java/J2EE, Spring, Tibco, Ajax, Javascript, Flex.</p>",
        date_range: "Nov 2007 - Sep 2008",
      technologies: ["Java", "Spring", "HTML/CSS", "JavaScript", "SQL"],
      order: 6,
    },
    {
      id: 7,
      title: "Associate Software Engineer",
      company: "IBM",
      description: "<p>Worked For Sprint-Nextel (USA). <br />Involved in development and maintenance activities for applications like Circuit Switched Manger and Card Management System.<br />Worked on development on servlet, JSP based web applications hosted on WebSphere.<br />Technical work includes Java/J2EE, Unix, Natural-Adabase, Mainframe, Ajax, XML etc</p>",
        date_range: "Jul 2006 - Oct 2007",
      technologies: ["Java", "Spring", "HTML/CSS", "JavaScript", "SQL"],
      order: 7,
    },
  ],
  skills: [
    {
      id: 2,
      category: "Technology Area",
      items: [
        "Artificial Intelligence",
        "Application Development", 
        "DevSecops", 
        "Cloud and Serverless", 
        "Cyber Security",
        "System Design",
        "Data Management and Analytics",
      ]
    },
    {
      id: 2,
      category: "Domain",
      items: [
        "Health Insurance",
        "Equities",
        "Consumer and B2B financing",
        "Reconciliation",
        "Asset Allocation and Wealth Management",
        "Asset Management (Mutual Funds)",
        "Fixed Income",
      ],
    },
    {
      id: 3,
      category: "backend",
      items: [
        "Microservices",
        "Integrations",
        "REST APIs",
        "Batch Processing",
      ],
    },
    {
      id: 4,
      category: "databases",
      items: [
        "SQL",
        "No SQL",
      ],
    },
    {
      id: 5,
      category: "Cloud and DevSecops",
      items: [
        "AWS",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Github",
      ],
    },
    {
      id: 6,
      category: "Leadership",
      items: [
        "Technical Leadership",
        "Mentoring",
        "Team Management",
        "Road Mapping",
        "Agile/Scrum",
        "Problem Solving",
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "San Jose State University",
      description:
        "Focused on advanced algorithms, distributed systems, and software engineering. Maintained a high GPA while working on practical projects.",
      year: "2010",
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Guru Gobind Singh Indraprastha University",
      description:
        "Graduated with honors. Participated in programming competitions and technical projects. Active member of the computer science society.",
      year: "2008",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Enterprise Planning System",
      description:
        "Led the development of a high-performance planning system supporting thousands of concurrent users for enterprise financial planning. Implemented complex calculation engine with multi-threaded processing.",
      image_url:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpbmFuY2lhbCUyMHBsYW5uaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      technologies: ["Go", "React", "AWS", "Microservices", "gRPC"],
      demo_link: null,
      code_link: null,
    },
    {
      id: 2,
      title: "Cloud File Transfer Service",
      description:
        "Designed and implemented a secure file transfer service for enterprise customers, supporting multiple protocols (SFTP, FTPS) with seamless integration into cloud storage systems.",
      image_url:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      technologies: [
        "Java",
        "AWS",
        "Security",
        "API Design",
        "Cloud Architecture",
      ],
      demo_link: null,
      code_link: null,
    },
    {
      id: 3,
      title: "Intelligent Search Engine",
      description:
        "Developed core components for enterprise search across Office 365 applications, improving search accuracy and performance through optimized indexing algorithms and natural language processing.",
      image_url:
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhcmNoJTIwZW5naW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      technologies: [
        "C#",
        "Azure",
        "Machine Learning",
        "React",
        "Elasticsearch",
      ],
      demo_link: null,
      code_link: null,
    },
  ],
  talks: [
    {
      id: 1,
      title: "Morgan Stanley Tech Talk Series Speaker",
      event: "Morgan Stanley Internal Event",
      description:
        "Delivered a tech talk at Morgan Stanley as part of their distinguished speaker series, discussing innovation in financial technology and building high-performance systems.",
      date: "Mar 2024",
      slides_link:
        "https://www.linkedin.com/feed/update/urn:li:activity:7300020445683019776/",
      video_link: null,
    },
    {
      id: 2,
      title: "Earned Distinguished Speaker Award",
      event: "Morgan Stanley Recognition Program",
      description:
        "Received the Distinguished Speaker Award at Morgan Stanley for exceptional contributions to knowledge sharing and technical leadership within the organization.",
      date: "Feb 2024",
      slides_link:
        "https://www.linkedin.com/feed/update/urn:li:activity:7285917502650359809/",
      video_link: null,
    },
    {
      id: 3,
      title: "Morgan Stanley's Global Top 5% Award",
      event: "Morgan Stanley Global Recognition",
      description:
        "Honored to be recognized among Morgan Stanley's Global Top 5% of employees, highlighting exceptional performance and impact on the organization.",
      date: "Dec 2023",
      slides_link:
        "https://www.linkedin.com/feed/update/urn:li:activity:7218943278853836800/",
      video_link: null,
    },
    {
      id: 4,
      title: "Technology Excellence Award",
      event: "Morgan Stanley Excellence Awards",
      description:
        "Received Technology Excellence Award at Morgan Stanley for outstanding contributions to engineering excellence and innovative solutions.",
      date: "Nov 2023",
      slides_link:
        "https://www.linkedin.com/feed/update/urn:li:activity:7193173230755418112/",
      video_link: null,
    },
    {
      id: 5,
      title: "Beyond Excellence Award",
      event: "Morgan Stanley Recognition",
      description:
        "Honored with the Beyond Excellence Award for exceptional performance and contributions that went above and beyond expectations.",
      date: "Aug 2023",
      slides_link:
        "https://www.linkedin.com/feed/update/urn:li:activity:7119564174841540608/",
      video_link: null,
    },
    {
      id: 6,
      title: "Speaker at Wealth Management Training Program",
      event: "Morgan Stanley Training Initiative",
      description:
        "Delivered a comprehensive talk on modern engineering practices and digital transformation as part of Morgan Stanley's Wealth Management Training Program.",
      date: "Dec 2023",
      slides_link:
        "https://www.linkedin.com/feed/update/urn:li:activity:7226515711781691393/",
      video_link: null,
    },
    {
      id: 7,
      title: "Engineering Excellence Speaker",
      event: "Morgan Stanley Engineering Summit",
      description:
        "Featured speaker at Morgan Stanley's Engineering Summit, sharing insights on building resilient and scalable systems for financial services.",
      date: "Nov 2023",
      slides_link:
        "https://www.linkedin.com/feed/update/urn:li:activity:7196022606381137920/",
      video_link: null,
    },
    {
      id: 8,
      title: "Modern Architecture Patterns",
      event: "MS Tech Conference",
      description:
        "Presented on modern architecture patterns and practices for enterprise applications, focusing on scalability, security, and performance optimization.",
      date: "Sep 2023",
      slides_link:
        "https://www.linkedin.com/feed/update/urn:li:activity:7163039826479460354/",
      video_link: null,
    },
    {
      id: 9,
      title: "Leadership in Engineering",
      event: "Engineering Leadership Forum",
      description:
        "Spoke on engineering leadership and best practices for managing technical teams in a rapidly evolving fintech environment.",
      date: "Jun 2023",
      slides_link:
        "https://www.linkedin.com/feed/update/urn:li:activity:7089114829096984578/",
      video_link: null,
    },
  ],
  certifications: [],
};

// Helper function to get data without backend API calls
export function getProfileData() {
  return profileData.profile;
}

export function getExperiencesData() {
  return profileData.experiences;
}

export function getSkillsData() {
  return profileData.skills;
}

export function getEducationData() {
  return profileData.education;
}

export function getProjectsData() {
  return profileData.projects;
}

export function getTalksData() {
  return profileData.talks;
}
