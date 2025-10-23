// This data file is optimized for GitHub Pages static hosting
// It contains all the data needed for the portfolio website

export const profileData = {
  profile: {
    id: 1,
    name: "Sourabh Girdhar",
    title: "Chief Technology Officer at Care.fi",
    email: "girdharsourabh@gmail.com",
    location: "Gurugram, India",
    summary: "Engineering leader with 19+ years of experience in financial technology, specializing in building scalable, high-performance systems. Proven track record of leading teams to deliver innovative solutions that drive business value. Expert in distributed systems, cloud architecture, and modern engineering practices.",
    profile_image: "/images/Cropped.jpg",
    github: "https://github.com/girdharsourabh",
    linkedin: "https://www.linkedin.com/in/girdharsourabh/",
    twitter: null,
    resume_url: null,
  },
  experiences: [
    {
      id: 1,
      title: "Chief Technology Officer",
      company: "Care.fi",
      description:
        "<p><p>Overseeing multiple business lines with an ARR of USD 1M, driving innovation, scale, and governance across</p><p>healthcare fintech.</p><p>Innovation &amp; AI: Spearheaded a GenAI-powered quality check tool for health insurance claims; built a</p><p>full-stack credit-to-commerce platform tackling systemic healthcare challenges.</p><p>Scaling Operations: Expanded Instant Discharge (B2B2C) 7x to 7,000+ cases/month within a year;</p><p>launched a B2B pharmacy marketplace and a SaaS-based hospital revenue cycle management platform,</p><p>processing 500k+ claims in 6 months.</p><p>Fintech Growth: Led the digital credit line system for suppliers, hospitals, and pharmacies &mdash; disbursals</p><p>crossed <strong>₹</strong>1,000 Cr with ₹100 Cr AUM, achieving 400% growth in two years.</p><p>Governance &amp; Leadership: Directed infrastructure and cybersecurity; successfully delivered ISO &amp; SOC2</p><p>certifications. Actively involved in acquisitions, investor due diligence, and key management initiatives.</p></p>",
      date_range: "Nov 2023 - Present",
      technologies: [
        "Leadership",
        "Fintech",
        "Cloud Architecture",
        "DevSecOps",
        "Innovation",
        "System Design",
        "Governance"
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
      degree: "MS - Software Systems",
      institution: "Birla Institute of Technology and Science, Pilani",
      description:
        "<p><strong>Subjects</strong>: Database Systems, Software engineering, Data Structure and Algorithms, Data Warehouse, Multimedia, Activities and societies: Database Systems, Software engineering, Data Structure and Algorithms, Data Warehouse, Multimedia.</p><br/><p>Its a work integrated post graduation program. My thesis subject was - Improving efficiency through BPM</p>",
      year: "2008-2010",
    },
    {
      id: 2,
      degree: "PGP - Blockchain Technology and Management ",
      institution: "Amity University",
      description:
        "<div><div>One of the first courses in India about Blockchain.</div><div>An exhaustive Blockchain program designed for developers as well as tech leaders.</div><div>&nbsp;</div><div>Curriculum - Blockchain, Ethereum, Solidity, Hyper ledger, Corda, Capstone project.</div></div>",
      year: "2018-2019",
    },
    {
      id: 3,
      degree: "B.E. - Electronics & Communication Engineering",
      institution: "M.D.U, Rohtak",
      description:
        "<p>Activities and societies: Paper presentations, Event Management, Seminar, Placement Coordination (Placement coordinator for complete batch) Attended VLSI seminar by AICTE. Awards in several tech competitions.</p><p>Subjects : Digital Electronics , VLSI Design, Digital System Design , Communication , Satellite and Radar Engineering</p>",
      year: "2002-2006",
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
      title: "Panelist - Observability Overload",
      event: "India Devops show 2025",
      description:
        "Panelist at India Devops show 2025, discussing observability and its importance in modern software development.",
      date: "Sep 2025",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_devops-observability-monitoring-activity-7376480522832846848-3uxk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    },
    {
      id: 2,
      title: "Panelist - The Shift-Left Evolution",
      event: "Devops Confex 2025",
      description:
        "Panelist at Devops Confex 2025, discussing the shift-left evolution and its importance in modern software development.",
      date: "Jul 2025",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_devsecops-shiftleft-security-activity-7349309030856609792-b42q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    },
    {
      id: 3,
      title: "Moderator - Scaling Technology Foundations with AI, Automation & Observability",
      event: "Dine with Devops 2025",
      description:
        "Moderator at Dine with Devops 2025, discussing the scaling technology foundations with AI, automation and observability.",
      date: "Dec 2023",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_devops-dinewithdevops-ai-activity-7367075875219046400-DMk5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    },
    {
      id: 4,
      title: "CIO 500 Accelerator X Awards",
      event: "CIO 500 Accelerator X Awards",
      description:
        "Recipient of the CIO 500 Accelerator X Awards for outstanding contributions to engineering excellence and innovative solutions.",
      date: "Aug 2025",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_cio500-cioacceleratorxawards2025-leadership-activity-7373219017190273024-YI46?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    },
    {
      id: 5,
      title: "Mentor - Aspiring CXOs Awards 2025",
      event: "Aspiring CXOs Awards 2025",
      description:
      "Mentor at Aspiring CXOs Awards 2025, discussing the leadership and innovation in the technology industry.",
      date: "Aug 2025",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_aca2025-delhiedition-cxojunction-activity-7360567250996637699-vFCY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    },
    {
      id: 6,
      title: "Team Award - Tech Alchemist: Masters of Innovation",
      event: "Dine with Devops 2025",
      description:
        "Team Award - Tech Alchemist: Masters of Innovation, for transforming the healthcare ecosystem by unlocking financial solutions that truly empower healthcare providers and patients alike.",
      date: "Aug 2025",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_techalchemist-masters-of-innovation-activity-7372464357740603392-fYc5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    },
    {
      id: 7,
      title: "Best DevOps Transformation Leader Award",
      event: "Devops 2.0 2025",
      description:
        "Best DevOps Transformation Leader at Devops 2.0 2025, for transforming the healthcare ecosystem by unlocking financial solutions that truly empower healthcare providers and patients alike.",
      date: "Jul 2025",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_devops-leadership-transformation-activity-7349677577524965376-wXoh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    },
    {
      id: 8,
      title: "Panelist - Cloud Blueprint for India",
      event: "The CIO Collective 2025",
      description:
        "Panelist at The CIO Collective 2025, discussing the cloud blueprint for India.",
      date: "Feb 2025",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_cloudblueprint-ciocollective-technophilis-activity-7300020445683019776-DX7o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    },
    {
      id: 9,
      title: "Panelist - Innovation and Technology adoption",
      event: "CII MSME Summit 2025",
      description:
        "Panelist at CII MSME Summit 2025, discussing the innovation and technology adoption.",
      date: "Jan 2025",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_msme-technology-artificalintelligence-activity-7285917502650359809-Ye-f?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    },
    {
      id: 10,
      title: "Next 100 CIO/IT Leaders of India Award",
      event: "CIO & Leaders Summit 2023",
      description:
        "Recipient of the Next 100 CIO/IT Leaders of India for outstanding contributions to engineering excellence and innovative solutions.",
      date: "Aug 2024",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_leadership-cio-itleaders-activity-7226515711781691393-38Nv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    },
    {
      id: 11,
      title: "Panelist - Developer experience and its importance in organisations",
      event: "DevX Conf 2024",
      description:
        "Panelist at DevX Conf 2024, discussing the developer experience and its importance in organisations.",
      date: "Jul 2024",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_msme-technology-artificalintelligence-activity-7285917502650359809-Ye-f?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    },
    {
      id: 12,
      title: "Panelist - Practical aspects and challenges of AI implementation",
      event: "Google Cloux X Sada Event",
      description:
        "Panelist at CII MSME Summit 2025, discussing the innovation and technology adoption.",
      date: "Jun 2024",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_aiimplementation-artificialintelligence-aitechnology-activity-7193173230755418112-v-OV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    },
    {
      id: 13,
      title: "Mentor - Aspiring CXOs Awards 2024",
      event: "Aspiring CXOs Awards 2024",
      description:
      "Mentor at Aspiring CXOs Awards 2024, discussing the leadership and innovation in the technology industry.",
      date: "Aug 2025",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_aca2025-delhiedition-cxojunction-activity-7360567250996637699-vFCY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    },
    {
      id: 14, 
      title: "Panelisy - World of cloud technology and devops",
      event: "India Devops Show 2023",
      description:
      "Panelist at India Devops Show 2023, discussing the world of cloud technology and devops.",
      date: "Oct 2023",
      slides_link:
        "https://www.linkedin.com/posts/girdharsourabh_cloudtechnology-paneldiscussion-techinnovation-activity-7119564174841540608-8zVL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAEuh3AB59-bvXH4celi5TKh_-ObYsyhIYM",
      video_link: null,
    }
  ],
  articles: [
    {
      id: 1,
      title: "From Building Platforms to Building People",
      source: "LinkedIn",
      description:
        "Leadership Lessons",
      date: "Sep 2025",
      link: "https://www.linkedin.com/pulse/from-building-platforms-people-leadership-5ndpc/",
    },
    {
      id: 2,
      title: "Transformative Journey",
      source: "CXO Words",
      description:
        "Personal journey",
      date: "Aug 2025",
      link: "https://www.cxowords.com/india-south-asia/sourabh-girdhar",
    },
    {
      id: 3,
      title: "Nurturing Devops Excellence",
      source: "CXO Words",
      description:
        "Devops and solutions",
      date: "May 2024",
      link: "https://heyzine.com/flip-book/2c4079a154.html#page/10",
    },
  ],
  certifications: [{
    "title": "AI in Cybersecurity Training By CyberFrat Certificate",
    "issuer": "CyberFrat",
    "issue_date": "Mar 2025",
    "credential_id": "qjHyttJu12",
    "skills": [],
    "credential_url": "https://verify.netcredential.com/qjHyttJu12"
    },
    {
    "title": "Cybersecurity Awareness - CAPC",
    "issuer": "Certiprof",
    "issue_date": "Oct 2024",
    "credential_id": null,
    "skills": ["Information Security"],
    "credential_url": "https://www.credly.com/badges/aab9f650-ef1c-4ae0-81ed-bbf06a0aa1a0/linked_in_profile"
    },
    {
    "title": "Introduction to FinOps",
    "issuer": "FinOps Foundation",
    "issue_date": "Oct 2024",
    "credential_id": "6mer72f2nqn6",
    "skills": [],
    "credential_url": "https://verify.skilljar.com/c/6mer72f2nqn6"
    },
    {
    "title": "Introduction to Generative AI",
    "issuer": "Google Cloud",
    "issue_date": "Jul 2023",
    "credential_id": "36KZNFGMGGMY",
    "skills": [],
    "credential_url": "https://www.coursera.org/account/accomplishments/certificate/36KZNFGMGGMY"
    },
    {
    "title": "LFC131: Green Software for Practitioners",
    "issuer": "The Linux Foundation",
    "issue_date": "Apr 2023",
    "credential_id": null,
    "skills": ["Sustainability"],
    "credential_url": "https://www.credly.com/badges/3ea533ba-632b-46b0-b85c-2c4798ac6b12/linked_in_profile"
    },
    {
    "title": "Introduction to Sustainability",
    "issuer": "Coursera",
    "issue_date": "Feb 2023",
    "credential_id": "GCGD7VUJPHTL",
    "skills": ["Strategy", "Sustainability"],
    "credential_url": "https://www.coursera.org/account/accomplishments/certificate/GCGD7VUJPHTL"
    },
    {
    "title": "Foundations of Digital Marketing and E-commerce",
    "issuer": "Google Digital Garage",
    "issue_date": "Aug 2022",
    "credential_id": "A5R94PSBZEMF",
    "skills": ["Web Analytics"],
    "credential_url": "https://www.coursera.org/account/accomplishments/verify/A5R94PSBZEMF"
    },
    {
    "title": "Reactive Architecture: Introduction to Reactive Systems",
    "issuer": "Akka",
    "issue_date": "Aug 2022",
    "credential_id": "36f4534161a940daae97e0210a92e365",
    "skills": ["FinTech", "Kubernetes"],
    "credential_url": "https://courses.cognitiveclass.ai/certificates/36f4534161a940daae97e0210a92e365"
    },
    {
    "title": "Getting Started with Data Analytics on AWS",
    "issuer": "Coursera",
    "issue_date": "Apr 2022",
    "credential_id": "9ZCY5E8CC5KD",
    "skills": ["Databases"],
    "credential_url": "https://www.coursera.org/account/accomplishments/certificate/9ZCY5E8CC5KD"
    },
    {
    "title": "Glassbox Journey Analy",
    "issuer": "Glassbox",
    "issue_date": "Mar 2021",
    "credential_id": "CR-12344",
    "skills": [],
    "credential_url": null
    },
    {
    "title": "API Designer",
    "issuer": "API Academy Certification",
    "issue_date": "Sep 2020",
    "credential_id": "59545822",
    "skills": ["Information Security", "FinTech"],
    "credential_url": null
    },
    {
    "title": "Introduction to Cybersecurity",
    "issuer": "Cisco",
    "issue_date": "Aug 2020",
    "credential_id": null,
    "skills": ["Information Security"],
    "credential_url": "https://www.youracclaim.com/badges/68d90a53-f89f-4fd6-8b2d-3cb250ae18f1?source=linked_in_profile"
    },
    {
    "title": "Microsoft Certified: Azure Fundamentals",
    "issuer": "Microsoft",
    "issue_date": "Jul 2020",
    "credential_id": null,
    "skills": ["Cloud"],
    "credential_url": "https://www.youracclaim.com/badges/563ccfd7-8b2b-49ad-94c6-9959c6c8f0a2/linked_in_profile"
    },
    {
    "title": "Automation Anywhere Certified Advanced RPA Professional (V11.0)",
    "issuer": "Automation Anywhere",
    "issue_date": "Apr 2020",
    "credential_id": "15978337",
    "skills": [],
    "credential_url": "https://certificates.automationanywhere.com/d933daf2-fad8-46fd-bb3b-6e6555d5f565"
    },
    {
    "title": "Corda Certified Developer",
    "issuer": "R3",
    "issue_date": "Oct 2019",
    "credential_id": null,
    "skills": ["Blockchain"],
    "credential_url": "https://www.youracclaim.com/badges/6cd8e7df-ea2f-448e-a5bd-69704d0f23de/linked_in_profile"
    },
    {
    "title": "Getting Started with Google Kubernetes Engine",
    "issuer": "Coursera",
    "issue_date": "Oct 2018",
    "credential_id": "96DE4975SLQL",
    "skills": ["Configuration Management", "Cloud", "Kubernetes"],
    "credential_url": "https://www.coursera.org/account/accomplishments/verify/96DE4975SLQL"
    },
    {
    "title": "Mongo DB Basics",
    "issuer": "MongoDB",
    "issue_date": "Oct 2018",
    "credential_id": null,
    "skills": ["Databases"],
    "credential_url": "http://university.mongodb.com/course_completion/89985073-f8f1-4558-9715-39252fc6"
    },
    {
    "title": "AWS Certified Solution Architect Associate",
    "issuer": "Amazon Web Services (AWS)",
    "issue_date": "Aug 2018",
    "credential_id": "VF10EL3KK2EE1BKE",
    "skills": ["Cloud"],
    "credential_url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
    },
    {
    "title": "Financial Markets",
    "issuer": "Coursera Course Certificates",
    "issue_date": "Aug 2016",
    "credential_id": "VA3UTG6FG6GY",
    "skills": ["FinTech"],
    "credential_url": "https://www.coursera.org/account/accomplishments/verify/VA3UTG6FG6GY"
    },
    {
    "title": "IBM certified SOA Associate",
    "issuer": "IBM",
    "issue_date": "Jun 2010",
    "credential_id": null,
    "skills": ["Business Process Management", "SOA"],
    "credential_url": null
    },
    {
    "title": "NCFM - Derivatives",
    "issuer": "NSE India",
    "issue_date": "Mar 2010",
    "credential_id": null,
    "skills": ["FinTech"],
    "credential_url": null
    },
    {
    "title": "NCFM - Financial Markets",
    "issuer": "National Stock Exchange India",
    "issue_date": "Jan 2009",
    "credential_id": null,
    "skills": ["FinTech"],
    "credential_url": null
    },
    {
    "title": "Sun Certified Web Component Developer",
    "issuer": "Sun Microsystems",
    "issue_date": "Oct 2007",
    "credential_id": null,
    "skills": [],
    "credential_url": null
    },
    {
    "title": "Sun Certified Java Programmer",
    "issuer": "Sun Microsystems",
    "issue_date": "Jul 2007",
    "credential_id": null,
    "skills": ["Object-Oriented Programming (OOP)"],
    "credential_url": null
    },
    {
    "title": "IBM certified AIX specialist",
    "issuer": "IBM",
    "issue_date": "Apr 2007",
    "credential_id": null,
    "skills": [],
    "credential_url": null
    },
    {
    "title": "Getting Started With CockroachDB",
    "issuer": "Cockroach Labs",
    "issue_date": "Oct 2020",
    "credential_id": "6c5a6bc6-1e41-30e9-8d8f-8fa4b9206084",
    "skills": ["Databases"],
    "credential_url": "https://university.cockroachlabs.com/award/certification/6c5a6bc6-1e41-30e9-8d8f-8fa4b9206084/view-ext"
    },
    {
    "title": "Oracle Autonomous Database Cloud 2019 Certified Specialist",
    "issuer": "Oracle",
    "issue_date": "May 2020",
    "credential_id": null,
    "skills": ["Databases"],
    "credential_url": "https://www.youracclaim.com/badges/7728b446-5e73-4852-bfb1-bc9ee3cf9cac/public_credential_url"
    },
    {
    "title": "Oracle Cloud Infrastructure Foundations 2020 Certified Associate",
    "issuer": "Oracle",
    "issue_date": "Apr 2020",
    "credential_id": null,
    "skills": ["Cloud"],
    "credential_url": "https://www.youracclaim.com/badges/b1400f95-72de-4445-a58e-30ffbc76a6fc/linked_in_profile"
    },
    {
    "title": "Introduction to Fintech",
    "issuer": "upGrad",
    "issue_date": "Mar 2022",
    "credential_id": null,
    "skills": ["FinTech"],
    "credential_url": "https://www.credential.net/397b4c52-52b8-47dc-9ac0-f09d826450b9"
    }]
  ,
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

export function getArticlesData() {
  return profileData.articles;
}
