export const personalInfo = {
  name: "Mehedi Hossen Fahim",
  shortName: "MHF",
  title: "AI Engineer",
  subtitle: "LLM Agents · Hybrid RAG · Computer Vision · Python Backend",
  email: "mehdihossenfahim@gmail.com",
  phone: "+880 1567-892416",
  location: "Dhaka, Bangladesh",
  portfolioUrl: "https://mhf-portfolio.vercel.app/",
  github: "https://github.com/MehdiHossenFahim",
  linkedin: "https://www.linkedin.com/in/mehedihossenfahim/",
  facebook: "https://facebook.com/mehedihossenfahim",
  resumePdfUrl: "/AI_Engineer_Resume_Mehedi_Hossen_Fahim.pdf",
  profilePhoto: "/profile.png",
  bioSummary:
    "AI Engineer and Computer Science graduate specializing in multi-agent LLM orchestration, hybrid RAG pipelines, prompt engineering, and containerized computer vision inference APIs. Experienced in building end-to-end production backends with Python, FastAPI, LangGraph, CrewAI, OpenAI Agents SDK, LangChain, YOLOv11, PostgreSQL, and Docker. Three-time robotics and IoT competition award winner.",
  careerGoals:
    "Passionate about advancing agentic AI workflows and bridging the gap between cutting-edge LLM research and high-throughput production backends. My goal is to build resilient, self-correcting AI systems that solve mission-critical challenges in healthcare, civic services, and intelligent automation.",
  education: {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Notre Dame University Bangladesh",
    period: "2021 – 2026",
    cgpa: "3.58 / 4.00",
    highlights: "Focus on Artificial Intelligence, Distributed Systems, Software Engineering, and Embedded Robotics."
  },
  stats: [
    { label: "AI & RAG Systems", value: "5" },
    { label: "CV Models Deployed", value: "1" },
    { label: "Robotics & IoT Wins", value: "3x" },
    { label: "Undergrad CGPA", value: "3.58" }
  ]
};

export const skillCategories = [
  {
    category: "AI & LLM Orchestration",
    description: "Multi-agent systems, hybrid retrieval, and generative workflows",
    skills: [
      { name: "LangGraph", level: 92, badge: "Advanced" },
      { name: "CrewAI", level: 90, badge: "Advanced" },
      { name: "OpenAI Agents SDK", level: 88, badge: "Advanced" },
      { name: "LangChain", level: 94, badge: "Expert" },
      { name: "Hybrid RAG (BM25 + ChromaDB)", level: 92, badge: "Expert" },
      { name: "Prompt Engineering", level: 95, badge: "Expert" },
      { name: "LLM Evaluation", level: 85, badge: "Proficient" },
      { name: "Text-to-SQL", level: 90, badge: "Advanced" },
      { name: "YOLOv11", level: 86, badge: "Proficient" }
    ]
  },
  {
    category: "Backend & Microservices",
    description: "High-throughput asynchronous APIs and robust architectures",
    skills: [
      { name: "Python", level: 95, badge: "Expert" },
      { name: "FastAPI", level: 94, badge: "Expert" },
      { name: "Django", level: 84, badge: "Advanced" },
      { name: "Node.js & Express.js", level: 85, badge: "Advanced" },
      { name: "RESTful APIs", level: 95, badge: "Expert" },
      { name: "Microservices Architecture", level: 86, badge: "Advanced" }
    ]
  },
  {
    category: "Databases & Vector Stores",
    description: "Relational persistence and low-latency similarity indexes",
    skills: [
      { name: "PostgreSQL", level: 90, badge: "Advanced" },
      { name: "ChromaDB (Vector)", level: 92, badge: "Expert" },
      { name: "SQLite", level: 90, badge: "Advanced" },
      { name: "MySQL", level: 85, badge: "Proficient" },
      { name: "Schema Design & Indexing", level: 88, badge: "Advanced" },
      { name: "BM25 Retrieval", level: 90, badge: "Advanced" }
    ]
  },
  {
    category: "DevOps, Cloud & Tools",
    description: "Containerization, automated deployment, and developer tooling",
    skills: [
      { name: "Docker", level: 88, badge: "Advanced" },
      { name: "Git & GitHub", level: 95, badge: "Expert" },
      { name: "Linux / Bash", level: 88, badge: "Advanced" },
      { name: "Render & Vercel", level: 90, badge: "Advanced" },
      { name: "Postman API Testing", level: 92, badge: "Expert" }
    ]
  },
  {
    category: "Hardware, IoT & Frontend",
    description: "Embedded computing, robotics sensors, and interactive web UIs",
    skills: [
      { name: "ESP32 & Arduino", level: 90, badge: "Advanced" },
      { name: "Embedded C / Firmware", level: 85, badge: "Proficient" },
      { name: "Sensors & Circuitry", level: 88, badge: "Advanced" },
      { name: "React 18 & Hooks", level: 88, badge: "Advanced" },
      { name: "Tailwind CSS", level: 90, badge: "Advanced" },
      { name: "JavaScript (ES6+)", level: 90, badge: "Advanced" }
    ]
  }
];

export const projects = [
  {
    id: "bilingual-citizen-services",
    title: "Bilingual Citizen Services AI Assistant",
    category: "AI & LLM Agents",
    badge: "FLAGSHIP",
    shortDescription:
      "Architected an agentic bilingual (English & Bengali) RAG system combining dense ChromaDB vector embeddings with sparse BM25 lexical retrieval and LangGraph self-corrective routing to evaluate document relevance and minimize hallucinations.",
    technologies: ["Python", "FastAPI", "LangGraph", "ChromaDB", "BM25", "Gemini API", "React 18"],
    features: [
      "Hybrid retrieval combining ChromaDB semantic search and BM25 exact match",
      "LangGraph agentic state-machine with self-correction and grade-document loops",
      "Full English and Bengali natural language support for civic queries",
      "Asynchronous FastAPI inference backend on Render paired with React 18 on Vercel"
    ],
    liveUrl: "https://mhf-portfolio.vercel.app/",
    githubUrl: "https://github.com/MehdiHossenFahim/bilingual-citizen-assistant",
    gradient: "from-blue-600 to-cyan-500",
    icon: "Bot"
  },
  {
    id: "leo-study-assistant",
    title: "Leo — Multi-Agent AI Study Assistant",
    category: "AI & LLM Agents",
    badge: "DEPLOYED",
    shortDescription:
      "A 4-agent collaborative tutoring pipeline (Coordinator, Explainer, Quiz Master, Evaluator) powered by CrewAI for adaptive concept breakdown, targeted quiz generation, and automated answer evaluation.",
    technologies: ["Python", "CrewAI", "Streamlit", "Multi-Agent Orchestration", "LLM Evaluation"],
    features: [
      "Coordinator Agent orchestrating study plans and delegating sub-tasks",
      "Explainer Agent breaking down complex STEM concepts with analogies",
      "Quiz Master Agent generating dynamic progressive difficulty quizzes",
      "Deployed as an interactive Streamlit application for adaptive self-paced learning"
    ],
    liveUrl: "https://leo-ai-tutor.streamlit.app",
    githubUrl: "https://github.com/MehdiHossenFahim/leo-ai-tutor",
    gradient: "from-indigo-600 to-purple-600",
    icon: "Sparkles"
  },
  {
    id: "medical-multi-tool-agent",
    title: "Medical Multi-Tool AI Agent",
    category: "AI & LLM Agents",
    badge: "ACTIVE",
    shortDescription:
      "Auto-routes clinical queries across 3 structured medical databases (HeartDiseaseDB, CancerDB, DiabetesDB) using validated Text-to-SQL generation with Tavily web-search fallback. Ships interchangeable OpenAI Agents SDK and LangChain orchestration.",
    technologies: ["Python", "OpenAI Agents SDK", "LangChain", "SQL Agents", "Tavily", "Groq"],
    features: [
      "Dynamic clinical query routing across specialized clinical databases",
      "Automated Text-to-SQL generation with schema safety validation",
      "Real-time Tavily search fallback for out-of-schema clinical queries",
      "Two interchangeable orchestration layers (OpenAI Agents SDK + LangChain) with Groq LPU"
    ],
    liveUrl: "https://github.com/MehdiHossenFahim/medical-agent",
    githubUrl: "https://github.com/MehdiHossenFahim/medical-agent",
    gradient: "from-emerald-600 to-teal-500",
    icon: "Stethoscope"
  },
  {
    id: "bangla-taka-detector",
    title: "Bangla Taka Note Detector",
    category: "Computer Vision",
    badge: "DEPLOYED",
    shortDescription:
      "Custom-trained YOLOv11 object detection model to classify Bangladeshi Taka banknote denominations. Packaged as a Dockerized FastAPI microservice exposing /predict and /health RESTful endpoints with automated Render deployment.",
    technologies: ["Python", "YOLOv11", "FastAPI", "Docker", "Render", "Computer Vision"],
    features: [
      "Fine-tuned YOLOv11 model trained on curated dataset of Bangladeshi banknotes",
      "Sub-100ms inference API exposing /predict and /health REST endpoints",
      "Containerized Docker workflow for reproducible multi-platform deployment",
      "Automated continuous deployment pipeline live on Render with Swagger docs"
    ],
    liveUrl: "https://bangla-taka-detector.onrender.com/docs",
    githubUrl: "https://github.com/MehdiHossenFahim/bangla-taka-detector",
    gradient: "from-rose-600 to-pink-500",
    icon: "ScanLine"
  },
  {
    id: "bangladesh-multi-tool-agent",
    title: "Bangladesh Multi-Tool AI Agent",
    category: "AI & LLM Agents",
    badge: "ACTIVE",
    shortDescription:
      "Automated Text-to-SQL agent querying 3 institutional SQLite databases spanning 80K+ rows with query validation, syntax self-repair error recovery, and modular cloud (Groq, Gemini) / local (Ollama) inference routing.",
    technologies: ["Python", "LangChain", "SQLite", "Text-to-SQL", "Groq", "Gemini", "Ollama"],
    features: [
      "Direct Text-to-SQL translation across 80,000+ institutional records",
      "Self-healing SQL execution with syntax error retry loops",
      "Modular routing across cloud LLMs (Groq, Gemini) and local offline LLMs (Ollama)",
      "Real-time web-search fallback when database records are unavailable"
    ],
    liveUrl: "https://github.com/MehdiHossenFahim/Bangladesh-Multi-Tool-AI-Agent",
    githubUrl: "https://github.com/MehdiHossenFahim/Bangladesh-Multi-Tool-AI-Agent",
    gradient: "from-amber-600 to-orange-500",
    icon: "Database"
  },
  {
    id: "gitsearch-profile-analyzer",
    title: "GitSearch — GitHub Profile Analyzer",
    category: "Full-Stack & Web",
    badge: "DEPLOYED",
    shortDescription:
      "Converts any GitHub username into a weighted developer score (0–100) based on language distribution, activity frequency, and top-repository metrics via the GitHub REST API.",
    technologies: ["Node.js", "Express", "GitHub API", "JavaScript", "Vercel"],
    features: [
      "Algorithmic developer score calculation (0–100) using GitHub REST API",
      "Visual breakdown of language distribution and top commit frequencies",
      "Clean responsive dashboard deployed live on Vercel"
    ],
    liveUrl: "https://github-profile-analyzer-ashen.vercel.app/",
    githubUrl: "https://github.com/MehdiHossenFahim/github-profile-analyzer",
    gradient: "from-sky-600 to-blue-500",
    icon: "FolderGit2"
  },
  {
    id: "booknotes-reading-library",
    title: "BookNotes — Personal Reading Library",
    category: "Full-Stack & Web",
    badge: "DEPLOYED",
    shortDescription:
      "Search, rate (1–10), and organize reading lists with live metadata pulled from Open Library API and duplicate-safe PostgreSQL persistence.",
    technologies: ["Node.js", "Express", "PostgreSQL", "REST API", "Open Library API"],
    features: [
      "Live book metadata lookup integration with Open Library API",
      "Normalized PostgreSQL relational storage for reading progress and ratings",
      "Clean RESTful API backend deployed to production on Vercel"
    ],
    liveUrl: "https://book-notes-one.vercel.app/",
    githubUrl: "https://github.com/MehdiHossenFahim/booknotes",
    gradient: "from-violet-600 to-indigo-500",
    icon: "FolderGit2"
  },
  {
    id: "bookshop-ecommerce",
    title: "bookShop — Single-Vendor E-commerce",
    category: "Full-Stack & Web",
    badge: "DEPLOYED",
    shortDescription:
      "Session-based shopping cart, full checkout flow, order history tracking, and complete Django admin inventory management.",
    technologies: ["Django", "SQLite", "Bootstrap 5", "JavaScript", "PythonAnywhere"],
    features: [
      "Session-backed cart management with dynamic pricing calculations",
      "Multi-step checkout workflow with order tracking and invoice generation",
      "Role-based Django Admin interface for product catalog and inventory control"
    ],
    liveUrl: "https://mehedihossenfahim.pythonanywhere.com/",
    githubUrl: "https://github.com/MehdiHossenFahim/single-vendor-ecommerce",
    gradient: "from-emerald-600 to-cyan-600",
    icon: "FolderGit2"
  }
];

export const experiences = [
  {
    role: "Software Developer Intern",
    company: "White Services Technology Ltd.",
    period: "Jul 2025 – Sep 2025",
    type: "Internship",
    location: "Dhaka, Bangladesh",
    points: [
      "Engineered ASP.NET Core backend modules and RESTful APIs integrated with asynchronous Python FastAPI microservices.",
      "Designed normalized, indexed PostgreSQL schemas to improve query efficiency, enforce referential integrity, and support production workloads.",
      "Delivered production backend features across agile sprint cycles in collaboration with cross-functional engineering teams."
    ]
  },
  {
    role: "Robotics Instructor",
    company: "Motijheel Model High School",
    period: "Feb 2024 – Apr 2024",
    type: "Teaching & Mentorship",
    location: "Dhaka, Bangladesh",
    points: [
      "Delivered hands-on instruction in robotics, microcontrollers, and embedded C systems to 50+ students.",
      "Supervised student hardware teams from circuit design and sensor firmware integration to live competition demonstrations."
    ]
  }
];

export const achievements = [
  {
    title: "1st Place — IoT Health Monitoring System",
    competition: "NDUB Robotics Competition 2025",
    rank: "Champion 🏆",
    description: "Designed a real-time IoT patient telemetry system with ESP32, sensor integration, and cloud alert triggers."
  },
  {
    title: "2nd Place — 6-DoF Robotic Arm",
    competition: "NDUB Robotics Competition 2023",
    rank: "1st Runner-Up 🥈",
    description: "Constructed an articulated 6-degree-of-freedom robotic arm with inverse kinematics and precision servo control."
  },
  {
    title: "3rd Place — ESP32-CAM Surveillance Rover",
    competition: "Inter-University Robotics Competition 2024",
    rank: "2nd Runner-Up 🥉",
    description: "Built a Wi-Fi-controlled rover with real-time video streaming, night-vision illumination, and obstacle avoidance."
  }
];
