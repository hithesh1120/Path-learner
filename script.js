// ==============================
// PATH LEARNER - script.js
// Complete professional implementation with expanded data
// ==============================

// ==============================
// 1. EXTENDED DATASET (fields + specializations + platforms + detailed roadmaps)
// ==============================
const mockData = {
  fields: [
    { 
      id: 1, 
      name: "Computer Science & Engineering", 
      icon: "fa-laptop-code", 
      category: "tech", 
      description: "Design, develop, and innovate with software & systems.", 
      difficulty: "intermediate", 
      duration: "4 years", 
      avgSalary: "$95k - $150k", 
      coreSkills: ["Programming","Algorithms","System Design"],
      careerInfo: {
        whatIs: "Computer Science & Engineering involves designing, developing, and maintaining software systems and applications that power modern technology.",
        whyStudy: "High demand, excellent career opportunities, competitive salaries, and the ability to create innovative solutions that impact millions of users.",
        whoIsFor: "Problem solvers, logical thinkers, creative individuals who enjoy building things and solving complex challenges.",
        benefits: "High earning potential, remote work opportunities, continuous learning, global career options, and the ability to work in diverse industries."
      }
    },
    { 
      id: 2, 
      name: "Artificial Intelligence & Data Science", 
      icon: "fa-brain", 
      category: "tech", 
      description: "Build intelligent systems and extract insights from data.", 
      difficulty: "advanced", 
      duration: "2-5 years", 
      avgSalary: "$110k - $180k", 
      coreSkills: ["Python","Statistics","ML"],
      careerInfo: {
        whatIs: "AI & Data Science involves creating intelligent systems that can learn, reason, and make decisions, and extracting valuable insights from data.",
        whyStudy: "Transformative field with applications across all industries, high demand for skilled professionals, and cutting-edge technological innovation.",
        whoIsFor: "Analytical thinkers, math enthusiasts, problem solvers interested in pattern recognition and predictive modeling.",
        benefits: "Work on cutting-edge technology, high compensation, diverse applications, and the opportunity to solve complex real-world problems."
      }
    },
    { 
      id: 3, 
      name: "Cybersecurity", 
      icon: "fa-shield-alt", 
      category: "tech", 
      description: "Protect systems, networks and data from attacks.", 
      difficulty: "advanced", 
      duration: "3-4 years", 
      avgSalary: "$90k - $160k", 
      coreSkills: ["Networks","Security","Forensics"],
      careerInfo: {
        whatIs: "Cybersecurity focuses on protecting computer systems, networks, and data from digital attacks, unauthorized access, and damage.",
        whyStudy: "Critical field with growing importance, high demand for security professionals, and the opportunity to protect organizations from cyber threats.",
        whoIsFor: "Detail-oriented individuals, ethical hackers, problem solvers who enjoy challenges and have strong analytical skills.",
        benefits: "Job security, competitive salaries, continuous learning, and the satisfaction of protecting critical infrastructure and data."
      }
    },
    { 
      id: 4, 
      name: "Web & Mobile Development", 
      icon: "fa-code", 
      category: "tech", 
      description: "Build responsive websites and mobile applications.", 
      difficulty: "beginner", 
      duration: "varies", 
      avgSalary: "$60k - $130k", 
      coreSkills: ["HTML/CSS","JavaScript","Frameworks"],
      careerInfo: {
        whatIs: "Web & Mobile Development involves creating interactive websites, web applications, and mobile apps for various platforms and devices.",
        whyStudy: "High demand for developers, creative outlet, ability to build products used by millions, and flexible career paths.",
        whoIsFor: "Creative problem solvers, detail-oriented individuals, those who enjoy building user-facing applications and seeing immediate results.",
        benefits: "Remote work opportunities, freelance potential, continuous learning, and the ability to bring ideas to life through code."
      }
    },
    { 
      id: 5, 
      name: "Game Development", 
      icon: "fa-gamepad", 
      category: "gaming", 
      description: "Create games for platforms, consoles and mobile.", 
      difficulty: "intermediate", 
      duration: "3-4 years", 
      avgSalary: "$50k - $120k", 
      coreSkills: ["C++/C#","Game Engines","3D Math"],
      careerInfo: {
        whatIs: "Game Development involves designing, programming, and producing video games for various platforms including consoles, PC, and mobile devices.",
        whyStudy: "Creative and technical field combining art and programming, opportunity to create immersive experiences, and growing gaming industry.",
        whoIsFor: "Creative individuals, problem solvers, gamers who want to create their own games and understand game mechanics.",
        benefits: "Creative fulfillment, work in entertainment industry, potential for indie development, and the joy of creating interactive experiences."
      }
    },
    { 
      id: 6, 
      name: "Medical & Healthcare", 
      icon: "fa-user-md", 
      category: "medical", 
      description: "Diagnose, treat, and care for patients.", 
      difficulty: "expert", 
      duration: "5-6 years", 
      avgSalary: "$100k - $250k", 
      coreSkills: ["Medicine","Clinical Skills"],
      careerInfo: {
        whatIs: "Medical & Healthcare involves diagnosing, treating, and preventing illnesses while providing care and improving patient health outcomes.",
        whyStudy: "Noble profession, job stability, opportunity to save lives, continuous learning, and high societal respect.",
        whoIsFor: "Compassionate individuals, science enthusiasts, problem solvers who work well under pressure and enjoy helping others.",
        benefits: "Job security, high earning potential, opportunity to make a difference in people's lives, and diverse specialization options."
      }
    },
    { 
      id: 7, 
      name: "Nursing & Allied Health", 
      icon: "fa-heartbeat", 
      category: "medical", 
      description: "Patient care and allied medical services.", 
      difficulty: "intermediate", 
      duration: "3-4 years", 
      avgSalary: "$40k - $90k", 
      coreSkills: ["Care","Monitoring","Soft Skills"],
      careerInfo: {
        whatIs: "Nursing & Allied Health focuses on patient care, medical assistance, and supporting healthcare delivery through various specialized roles.",
        whyStudy: "High demand for healthcare professionals, rewarding career helping others, diverse opportunities, and job stability.",
        whoIsFor: "Compassionate individuals, good communicators, those who enjoy working with people and can handle stressful situations.",
        benefits: "Job security, diverse work environments, opportunity to specialize, and the satisfaction of making a difference in patient care."
      }
    },
    { 
      id: 8, 
      name: "Pharmacy & Biotechnology", 
      icon: "fa-flask", 
      category: "medical", 
      description: "Pharma research, drug design and biotech.", 
      difficulty: "advanced", 
      duration: "3-5 years", 
      avgSalary: "$60k - $140k", 
      coreSkills: ["Biology","Lab Skills"],
      careerInfo: {
        whatIs: "Pharmacy & Biotechnology involves drug discovery, development, testing, and manufacturing, as well as biological research and applications.",
        whyStudy: "Cutting-edge field, opportunity to develop life-saving treatments, growing pharmaceutical industry, and diverse career paths.",
        whoIsFor: "Science enthusiasts, detail-oriented individuals, researchers who enjoy laboratory work and scientific discovery.",
        benefits: "Contribution to healthcare advancement, research opportunities, stable career with good compensation, and diverse work settings."
      }
    },
    { 
      id: 9, 
      name: "Business & Management", 
      icon: "fa-chart-line", 
      category: "business", 
      description: "Manage organizations, finance, and marketing.", 
      difficulty: "intermediate", 
      duration: "3-4 years", 
      avgSalary: "$60k - $140k", 
      coreSkills: ["Strategy","Finance","Leadership"],
      careerInfo: {
        whatIs: "Business & Management involves overseeing organizational operations, strategic planning, financial management, and leading teams to achieve goals.",
        whyStudy: "Versatile skills applicable across industries, leadership development, entrepreneurial opportunities, and understanding of business operations.",
        whoIsFor: "Natural leaders, strategic thinkers, good communicators, and individuals interested in organizational dynamics and business strategy.",
        benefits: "Leadership roles, high earning potential, diverse industry options, entrepreneurial opportunities, and transferable skills."
      }
    },
    { 
      id: 10, 
      name: "Creative Arts & Design", 
      icon: "fa-palette", 
      category: "creative", 
      description: "Express ideas through visual and digital media.", 
      difficulty: "intermediate", 
      duration: "3-4 years", 
      avgSalary: "$35k - $100k", 
      coreSkills: ["Creativity","Visual Design"],
      careerInfo: {
        whatIs: "Creative Arts & Design involves visual communication, artistic expression, and creating engaging experiences through various media and platforms.",
        whyStudy: "Creative fulfillment, diverse career opportunities, ability to work in multiple industries, and the power to influence through visual communication.",
        whoIsFor: "Creative individuals, visual thinkers, artists, and those who enjoy expressing ideas through visual mediums and design.",
        benefits: "Creative freedom, diverse project work, freelance opportunities, and the ability to work across multiple industries and media."
      }
    },
    { 
      id: 11, 
      name: "Civil Engineering & Architecture", 
      icon: "fa-building", 
      category: "civil", 
      description: "Design and build physical infrastructure.", 
      difficulty: "intermediate", 
      duration: "4-5 years", 
      avgSalary: "$50k - $120k", 
      coreSkills: ["Structures","Design","CAD"],
      careerInfo: {
        whatIs: "Civil Engineering & Architecture involves designing, planning, and constructing buildings, infrastructure, and physical environments.",
        whyStudy: "Opportunity to shape physical environments, stable career with infrastructure development, creative and technical challenges, and tangible results.",
        whoIsFor: "Creative problem solvers, individuals with spatial awareness, those interested in construction, design, and urban development.",
        benefits: "Tangible results from work, stable career, opportunity to work on large-scale projects, and contribution to community development."
      }
    },
    { 
      id: 12, 
      name: "Government & Public Services", 
      icon: "fa-landmark", 
      category: "govt", 
      description: "Public administration, defense and services.", 
      difficulty: "advanced", 
      duration: "varies", 
      avgSalary: "varies", 
      coreSkills: ["Policy","Administration"],
      careerInfo: {
        whatIs: "Government & Public Services involves working in public administration, policy making, defense, and various civil service roles.",
        whyStudy: "Opportunity to serve the public, job security, diverse roles, pension benefits, and the chance to influence public policy and services.",
        whoIsFor: "Individuals interested in public service, policy enthusiasts, those who value job stability and serving the community.",
        benefits: "Job security, pension benefits, opportunity to serve the public, diverse career paths, and work-life balance."
      }
    },
  ],

  // Each specialization mapped to fieldId with complete details
  specializations: [
    /* ---------------- CSE: CORE ---------------- */
    {
      id: "cse-core",
      fieldId: 1,
      name: "Core Programming & Systems",
      level: "Intermediate",
      overview: "Master procedural and object-oriented programming, memory management and system-level programming.",
      description: "Learn the fundamentals of computer systems, low-level programming, and how software interacts with hardware. Essential for system programmers, embedded developers, and anyone wanting deep technical knowledge.",
      skills: ["C", "C++", "Java", "Operating Systems", "Computer Architecture"],
      languages: ["C", "C++", "Java"],
      roadmap: {
        beginner: [
          "Learn programming basics: variables, control flow, functions (start with Python or C).",
          "Understand basic data types and I/O in your chosen language.",
          "Build small CLI tools (to-do list, calculator)."
        ],
        intermediate: [
          "Study data structures (arrays, linked lists, stacks, queues) and implement them.",
          "Master algorithms: sorting, searching, recursion.",
          "Learn object-oriented programming and design patterns (Java/C++).",
          "Study operating system fundamentals: processes, threads, memory management."
        ],
        advanced: [
          "Delve into systems programming: pointers, memory allocation, concurrency.",
          "Study computer architecture: caches, pipelining, interrupts.",
          "Build a small OS module or a simple interpreter/compiler project.",
          "Contribute to open source system tools or low-level libraries."
        ]
      },
      platforms: [
        { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org" },
        { name: "HackerRank", url: "https://www.hackerrank.com" },
        { name: "Coursera (Systems)", url: "https://www.coursera.org" }
      ]
    },

    /* --------------- CSE: DATA ANALYTICS --------------- */
    {
      id: "cse-data-analytics",
      fieldId: 1,
      name: "Data Analytics & BI",
      level: "Intermediate",
      overview: "Collect, clean, analyze, and visualize data to extract actionable insights.",
      description: "Transform raw data into meaningful insights that drive business decisions. Learn data manipulation, statistical analysis, and visualization techniques used across industries.",
      skills: ["SQL", "Pandas", "Data Visualization", "Statistics"],
      languages: ["SQL", "Python", "R"],
      roadmap: {
        beginner: [
          "Learn Excel basics and functions.",
          "Learn SQL: SELECT, WHERE, JOIN, GROUP BY.",
          "Introduction to Python and Pandas for data manipulation."
        ],
        intermediate: [
          "Data cleaning techniques and exploratory data analysis (EDA).",
          "Learn visualization tools: Matplotlib, Seaborn, Tableau or PowerBI.",
          "Build dashboards and reporting pipelines."
        ],
        advanced: [
          "Learn ETL concepts and data pipeline orchestration.",
          "Time series analysis, forecasting, and advanced statistics.",
          "Deploy analytics pipelines and implement monitoring for data quality."
        ]
      },
      platforms: [
        { name: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
        { name: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
        { name: "Coursera (Data Analytics)", url: "https://www.coursera.org" }
      ]
    },

    /* --------------- CSE: WEB --------------- */
    {
      id: "cse-web",
      fieldId: 4,
      name: "Web Development",
      level: "Beginner to Intermediate",
      overview: "Front-end and back-end development for modern web applications.",
      description: "Build interactive, responsive websites and web applications. Learn both client-side and server-side development to create full-stack web solutions.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      languages: ["JavaScript", "TypeScript", "SQL"],
      roadmap: {
        beginner: [
          "HTML structure, semantic tags, accessibility basics.",
          "CSS: layout, Flexbox, Grid, responsive design.",
          "JavaScript fundamentals: DOM, events, fetch, async/await.",
          "Build static responsive pages and small interactive components."
        ],
        intermediate: [
          "Learn SPA frameworks: React (components, hooks, state, router).",
          "Build REST APIs using Node.js + Express.",
          "Databases: SQL basics and NoSQL (MongoDB).",
          "Authentication, authorization and session management."
        ],
        advanced: [
          "Progressive Web Apps (PWA), server-side rendering (Next.js).",
          "Performance optimization, caching strategies, CDN usage.",
          "Microservices, containerization and CI/CD pipelines."
        ]
      },
      platforms: [
        { name: "FreeCodeCamp", url: "https://www.freecodecamp.org" },
        { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
        { name: "Frontend Masters", url: "https://frontendmasters.com" }
      ]
    },

    /* --------------- CSE: MOBILE / APP --------------- */
    {
      id: "cse-mobile",
      fieldId: 4,
      name: "Mobile App Development",
      level: "Intermediate",
      overview: "Create mobile experiences across Android and iOS using native and cross-platform frameworks.",
      description: "Develop applications for smartphones and tablets. Learn platform-specific development or use cross-platform frameworks to reach multiple platforms with single codebase.",
      skills: ["Kotlin", "Swift", "React Native", "APIs"],
      languages: ["Kotlin", "Swift", "JavaScript"],
      roadmap: {
        beginner: [
          "Understand mobile platform basics and UI/UX guidelines.",
          "Build simple apps: to-do, calculator on Android or iOS.",
          "Learn about app lifecycle, navigation and state management."
        ],
        intermediate: [
          "Work with local storage and offline-first patterns.",
          "Integrate REST APIs and authentication.",
          "Use cross-platform tools like React Native or Flutter."
        ],
        advanced: [
          "Optimize performance, memory, and battery usage.",
          "Implement CI/CD for mobile, code signing and app store release.",
          "Monetization models and analytics integration."
        ]
      },
      platforms: [
        { name: "RayWenderlich", url: "https://www.raywenderlich.com" },
        { name: "Udacity (Mobile)", url: "https://www.udacity.com" }
      ]
    },

    /* --------------- CSE: IOT --------------- */
    {
      id: "cse-iot",
      fieldId: 1,
      name: "IoT & Embedded Systems",
      level: "Advanced",
      overview: "Design connected devices: hardware + firmware + cloud interactions.",
      description: "Create smart connected devices that interact with the physical world. Learn hardware design, embedded programming, and cloud integration for IoT solutions.",
      skills: ["Microcontrollers", "Sensors", "Networking", "RTOS"],
      languages: ["C", "C++", "Python"],
      roadmap: {
        beginner: [
          "Electronics basics: voltage, current, sensors, breadboarding.",
          "Start with Arduino: read sensors and drive actuators.",
          "Build simple data-logging projects."
        ],
        intermediate: [
          "Understand communication protocols: I2C, SPI, UART, MQTT.",
          "Use microcontrollers (ESP32) and real-time OS basics.",
          "Connect devices to cloud platforms and send telemetry."
        ],
        advanced: [
          "Security in IoT: secure boot, encryption, OTA updates.",
          "Design for low power and constrained environments.",
          "Deploy solutions at scale and integrate edge analytics."
        ]
      },
      platforms: [
        { name: "Arduino", url: "https://www.arduino.cc" },
        { name: "Coursera (IoT)", url: "https://www.coursera.org" }
      ]
    },

    /* --------------- CSE: E-COMMERCE --------------- */
    {
      id: "cse-ecom",
      fieldId: 1,
      name: "E-commerce Engineering",
      level: "Intermediate",
      overview: "Build and scale e-commerce platforms with a focus on search, checkout, and payments.",
      description: "Develop robust e-commerce systems handling product catalogs, shopping carts, payments, and order management at scale.",
      skills: ["Web Development", "Payments", "Search", "Scaling"],
      languages: ["JavaScript", "Python", "SQL"],
      roadmap: {
        beginner: [
          "Understand e-commerce basics: product model, cart workflows.",
          "Build simple product listing and cart pages.",
          "Learn about taxes, shipping and basic SEO."
        ],
        intermediate: [
          "Integrate payment gateways and order management.",
          "Implement search & personalization (Elasticsearch, simple recommenders).",
          "Focus on security & compliance (PCI-DSS basics)."
        ],
        advanced: [
          "Scale systems: caching, queues, eventual consistency.",
          "Fraud detection, analytics and experimentation platforms.",
          "Globalization, multi-currency and complex tax systems."
        ]
      },
      platforms: [
        { name: "Shopify Dev", url: "https://shopify.dev" },
        { name: "Coursera (eCommerce)", url: "https://www.coursera.org" }
      ]
    },

    /* --------------- CSE: COMPETITIVE & DSA --------------- */
    {
      id: "cse-dsa",
      fieldId: 1,
      name: "Competitive Programming & DSA",
      level: "Advanced",
      overview: "Master algorithms and data structures for problem solving and interviews.",
      description: "Develop strong problem-solving skills through algorithmic challenges and data structure mastery. Essential for technical interviews and programming competitions.",
      skills: ["Algorithms", "Data Structures", "Problem Solving"],
      languages: ["C++", "Java", "Python"],
      roadmap: {
        beginner: [
          "Basic data structures and simple problems (arrays, strings).",
          "Practice easy problems on platforms like LeetCode and HackerRank."
        ],
        intermediate: [
          "Graphs, trees, dynamic programming and greedy algorithms.",
          "Participate in timed contests and upsolve."
        ],
        advanced: [
          "Advanced graph algorithms, computational geometry, number theory.",
          "Regular participation in contests and mentor others."
        ]
      },
      platforms: [
        { name: "LeetCode", url: "https://leetcode.com" },
        { name: "Codeforces", url: "https://codeforces.com" },
        { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org" }
      ]
    },

    /* --------------- CSE: CLOUD & DEVOPS --------------- */
    {
      id: "cse-cloud",
      fieldId: 1,
      name: "Cloud & DevOps",
      level: "Advanced",
      overview: "Build resilient infrastructure, automate delivery and deploy systems at scale.",
      description: "Master cloud computing, infrastructure automation, and continuous delivery to deploy and maintain scalable, reliable systems.",
      skills: ["Containers", "Kubernetes", "CI/CD", "Infrastructure as Code"],
      languages: ["YAML", "Bash", "Python"],
      roadmap: {
        beginner: [
          "Understand cloud fundamentals (AWS/GCP/Azure).",
          "Learn Docker and container basics.",
          "Create simple CI pipelines (GitHub Actions)."
        ],
        intermediate: [
          "Master Kubernetes basics and deployments.",
          "Learn IaC: Terraform and cloud-native provisioning.",
          "Implement monitoring and logging stacks."
        ],
        advanced: [
          "SRE practices, error budgets, scalability patterns.",
          "Advanced deployment strategies: canary, blue-green.",
          "Cost optimization and multi-cloud strategies."
        ]
      },
      platforms: [
        { name: "AWS Training", url: "https://aws.amazon.com/training" },
        { name: "Kubernetes Docs", url: "https://kubernetes.io/docs/home/" }
      ]
    },

    /* --------------- CSE: DATABASES --------------- */
    {
      id: "cse-database",
      fieldId: 1,
      name: "Databases (SQL & NoSQL)",
      level: "Beginner to Intermediate",
      overview: "Design reliable data storage, tuning, replication and sharding.",
      description: "Master database design, optimization, and management for both relational and non-relational data storage systems.",
      skills: ["SQL", "Indexes", "Transactions", "NoSQL"],
      languages: ["SQL", "MongoDB Query"],
      roadmap: {
        beginner: [
          "Relational fundamentals and basic SQL queries.",
          "Normalization and simple schema design."
        ],
        intermediate: [
          "Indexes, transactions, isolation levels and query optimization.",
          "Learn a NoSQL datastore and when to use it (MongoDB, Redis)."
        ],
        advanced: [
          "Sharding, replication, distributed transactions and data warehousing.",
          "Real-time streaming with Kafka and data lakes."
        ]
      },
      platforms: [
        { name: "SQLBolt", url: "https://sqlbolt.com" },
        { name: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/" }
      ]
    },

    /* --------------- CSE: SOFTWARE TESTING --------------- */
    {
      id: "cse-testing",
      fieldId: 1,
      name: "Software Testing & QA",
      level: "Intermediate",
      overview: "Ensure software quality through systematic testing methodologies and automation.",
      description: "Develop expertise in testing strategies, automation frameworks, and quality assurance processes to deliver reliable software products.",
      skills: ["Test Automation", "QA Processes", "Performance Testing", "Security Testing"],
      languages: ["Java", "Python", "JavaScript"],
      roadmap: {
        beginner: [
          "Learn manual testing techniques and test case design.",
          "Understand different testing types: unit, integration, system.",
          "Basic test automation with Selenium or similar tools."
        ],
        intermediate: [
          "Master test automation frameworks and CI/CD integration.",
          "Performance and load testing with tools like JMeter.",
          "API testing and security testing basics."
        ],
        advanced: [
          "Test strategy design for large-scale systems.",
          "Advanced automation and test infrastructure.",
          "Quality metrics and process improvement."
        ]
      },
      platforms: [
        { name: "Selenium", url: "https://www.selenium.dev" },
        { name: "Test Automation University", url: "https://testautomationu.applitools.com" }
      ]
    },

    /* ---------------- AI / DATA SCIENCE EXPANDED ---------------- */
    {
      id: "ai-ml",
      fieldId: 2,
      name: "Machine Learning & AI",
      level: "Advanced",
      overview: "Model building, evaluation and productionization of ML systems.",
      description: "Create intelligent systems that can learn from data and make predictions. Master the complete ML pipeline from data preparation to model deployment.",
      skills: ["Python", "Statistics", "Deep Learning", "MLOps"],
      languages: ["Python", "R"],
      roadmap: {
        beginner: [
          "Python basics and linear algebra refresher.",
          "Intro to probability, statistics and hypothesis testing.",
          "Basic supervised learning: linear/logistic regression."
        ],
        intermediate: [
          "Tree-based models, feature engineering, model validation.",
          "Neural networks fundamentals and frameworks (TensorFlow/PyTorch).",
          "Beginner Kaggle competitions and real datasets."
        ],
        advanced: [
          "Deep learning specializations (NLP, CV), transfer learning.",
          "MLOps: model deployment, monitoring, data drift handling.",
          "Scalable training on GPUs and distributed systems."
        ]
      },
      platforms: [
        { name: "Kaggle", url: "https://www.kaggle.com" },
        { name: "Coursera (Andrew Ng)", url: "https://www.coursera.org" },
        { name: "Fast.ai", url: "https://www.fast.ai" }
      ]
    },

    {
      id: "ai-cv",
      fieldId: 2,
      name: "Computer Vision",
      level: "Advanced",
      overview: "Process and analyze visual data from images and videos.",
      description: "Enable computers to interpret and understand visual information from the world. Applications include facial recognition, medical imaging, and autonomous vehicles.",
      skills: ["OpenCV", "CNN", "Image Processing", "Object Detection"],
      languages: ["Python", "C++"],
      roadmap: {
        beginner: [
          "Learn image processing basics with OpenCV.",
          "Understand color spaces, filtering, and transformations.",
          "Build simple image classification models."
        ],
        intermediate: [
          "Study convolutional neural networks (CNNs) and architectures.",
          "Implement object detection models (YOLO, Faster R-CNN).",
          "Work with image segmentation and instance segmentation."
        ],
        advanced: [
          "Advanced topics: GANs, style transfer, 3D vision.",
          "Real-time video processing and deployment.",
          "Research in medical imaging or autonomous vehicles."
        ]
      },
      platforms: [
        { name: "OpenCV", url: "https://opencv.org" },
        { name: "PyImageSearch", url: "https://pyimagesearch.com" }
      ]
    },

    {
      id: "ai-nlp",
      fieldId: 2,
      name: "Natural Language Processing",
      level: "Advanced",
      overview: "Process and understand human language using AI techniques.",
      description: "Bridge human communication and computer understanding. Build systems that can read, interpret, and generate human language for applications like chatbots and translation.",
      skills: ["NLP", "Transformers", "Text Processing", "Sentiment Analysis"],
      languages: ["Python"],
      roadmap: {
        beginner: [
          "Text preprocessing: tokenization, stemming, lemmatization.",
          "Basic text classification with traditional ML.",
          "Introduction to word embeddings (Word2Vec, GloVe)."
        ],
        intermediate: [
          "Sequence models: RNNs, LSTMs, GRUs.",
          "Transformer architectures and attention mechanisms.",
          "Build chatbots and text generation systems."
        ],
        advanced: [
          "Large language models (BERT, GPT) fine-tuning.",
          "Multilingual NLP and cross-lingual transfer.",
          "Advanced applications: summarization, translation, QA systems."
        ]
      },
      platforms: [
        { name: "Hugging Face", url: "https://huggingface.co" },
        { name: "NLTK", url: "https://www.nltk.org" }
      ]
    },

    {
      id: "ai-reinforcement",
      fieldId: 2,
      name: "Reinforcement Learning",
      level: "Advanced",
      overview: "Train agents to make sequential decisions through trial and error.",
      description: "Master algorithms that learn optimal behaviors through interaction with environments. Applications in robotics, gaming, and autonomous systems.",
      skills: ["RL Algorithms", "Q-Learning", "Policy Gradients", "Multi-agent Systems"],
      languages: ["Python"],
      roadmap: {
        beginner: [
          "Understand Markov Decision Processes and basic RL concepts.",
          "Implement Q-learning and value iteration algorithms.",
          "Simple grid world problems and basic game AI."
        ],
        intermediate: [
          "Deep Q-networks and policy gradient methods.",
          "Actor-critic algorithms and experience replay.",
          "More complex environments and reward shaping."
        ],
        advanced: [
          "Multi-agent reinforcement learning.",
          "Hierarchical RL and meta-learning.",
          "Real-world applications and research frontiers."
        ]
      },
      platforms: [
        { name: "OpenAI Gym", url: "https://gym.openai.com" },
        { name: "DeepMind", url: "https://deepmind.com" }
      ]
    },

    /* ---------------- CYBERSECURITY EXPANDED ---------------- */
    {
      id: "cyber-ops",
      fieldId: 3,
      name: "Cybersecurity & PenTesting",
      level: "Advanced",
      overview: "Offensive and defensive security for systems and networks.",
      description: "Master both attack and defense strategies to protect digital assets. Learn ethical hacking, vulnerability assessment, and security monitoring.",
      skills: ["Networking", "Linux", "Forensics", "Exploit Dev"],
      languages: ["Python", "Bash"],
      roadmap: {
        beginner: [
          "Computer networking fundamentals and TCP/IP.",
          "Linux basics and shell scripting.",
          "Understand common vulnerabilities and web security basics (OWASP Top 10)."
        ],
        intermediate: [
          "Hands-on: CTF problems, web exploitation, buffer overflows.",
          "Learn forensics and incident response practices.",
          "Deploy and analyze honeypots and intrusion detection."
        ],
        advanced: [
          "Exploit development and binary analysis.",
          "Red teaming/blue teaming methodologies and threat hunting.",
          "Design secure architectures and perform risk assessments."
        ]
      },
      platforms: [
        { name: "Hack The Box", url: "https://www.hackthebox.com" },
        { name: "TryHackMe", url: "https://tryhackme.com" }
      ]
    },

    {
      id: "cyber-forensics",
      fieldId: 3,
      name: "Digital Forensics",
      level: "Advanced",
      overview: "Investigate digital crimes and recover electronic evidence.",
      description: "Master techniques for collecting, preserving, and analyzing digital evidence from various devices and systems for legal proceedings.",
      skills: ["Evidence Collection", "Data Recovery", "Memory Analysis", "Legal Procedures"],
      languages: ["Python", "Bash"],
      roadmap: {
        beginner: [
          "Understand legal framework and evidence handling.",
          "Basic disk imaging and data recovery techniques.",
          "File system analysis and timeline creation."
        ],
        intermediate: [
          "Memory forensics and volatile data analysis.",
          "Network forensics and log analysis.",
          "Mobile device forensics basics."
        ],
        advanced: [
          "Advanced data carving and anti-forensics techniques.",
          "Malware analysis and reverse engineering.",
          "Expert witness testimony preparation."
        ]
      },
      platforms: [
        { name: "SANS Forensics", url: "https://www.sans.org/digital-forensics-incident-response" },
        { name: "Forensics Wiki", url: "https://forensicswiki.xyz" }
      ]
    },

    {
      id: "cyber-cloud",
      fieldId: 3,
      name: "Cloud Security",
      level: "Advanced",
      overview: "Secure cloud infrastructure and applications across multiple platforms.",
      description: "Specialize in protecting cloud-based systems, ensuring compliance, and implementing security best practices for cloud environments.",
      skills: ["Cloud Platforms", "Identity Management", "Container Security", "Compliance"],
      languages: ["Python", "YAML", "Terraform"],
      roadmap: {
        beginner: [
          "Understand shared responsibility model in cloud.",
          "Basic cloud security concepts and services.",
          "Identity and access management fundamentals."
        ],
        intermediate: [
          "Cloud security posture management.",
          "Container and Kubernetes security.",
          "Network security in cloud environments."
        ],
        advanced: [
          "Cloud security architecture design.",
          "Multi-cloud security strategies.",
          "Advanced threat detection and compliance automation."
        ]
      },
      platforms: [
        { name: "Cloud Security Alliance", url: "https://cloudsecurityalliance.org" },
        { name: "AWS Security", url: "https://aws.amazon.com/security" }
      ]
    },

    /* ---------------- GAME DEV EXPANDED ---------------- */
    {
      id: "game-dev",
      fieldId: 5,
      name: "Game Development",
      level: "Intermediate",
      overview: "Game mechanics, realtime systems, and rendering pipelines.",
      description: "Create engaging interactive experiences across various platforms. Master game design, programming, and production workflows.",
      skills: ["C++/C#", "Unity", "Unreal", "3D Math"],
      languages: ["C++", "C#"],
      roadmap: {
        beginner: [
          "Pick an engine (Unity or Unreal) and build small games.",
          "Learn 2D/3D basics, sprites, animation."
        ],
        intermediate: [
          "Physics, AI for games, animation blending and shaders.",
          "Multiplayer basics and networking in games."
        ],
        advanced: [
          "Optimization, memory management, engine tooling.",
          "Large-scale pipelines and AAA workflows."
        ]
      },
      platforms: [
        { name: "Unity Learn", url: "https://learn.unity.com" },
        { name: "GameDev.tv", url: "https://www.gamedev.tv" }
      ]
    },

    {
      id: "game-vr",
      fieldId: 5,
      name: "VR/AR Development",
      level: "Advanced",
      overview: "Create immersive virtual and augmented reality experiences.",
      description: "Master spatial computing, 3D interaction design, and performance optimization for virtual and augmented reality platforms.",
      skills: ["3D Interaction", "Spatial Computing", "Performance Optimization", "Hardware Integration"],
      languages: ["C#", "C++"],
      roadmap: {
        beginner: [
          "Understand VR/AR hardware and platforms.",
          "Basic 3D interaction and user interface design.",
          "Simple VR experiences with popular engines."
        ],
        intermediate: [
          "Advanced interaction techniques and locomotion.",
          "Performance optimization for VR/AR.",
          "Multi-user experiences and networking."
        ],
        advanced: [
          "Custom shaders and visual effects.",
          "Hardware integration and custom controllers.",
          "Enterprise AR applications and research."
        ]
      },
      platforms: [
        { name: "Oculus Developer", url: "https://developer.oculus.com" },
        { name: "Unity XR", url: "https://unity.com/unity/features/xr" }
      ]
    },

    /* ---------------- MEDICAL EXPANDED ---------------- */
    {
      id: "med-general",
      fieldId: 6,
      name: "General Medicine (MBBS Path)",
      level: "Expert",
      overview: "Foundations of clinical medicine leading to specialization.",
      description: "Comprehensive medical education covering all aspects of human health, disease diagnosis, treatment, and patient care. Foundation for all medical specialties.",
      skills: ["Clinical Skills", "Anatomy", "Pharmacology", "Clinical Reasoning"],
      languages: [],
      roadmap: {
        beginner: [
          "Pre-med foundations: biology, chemistry, physics.",
          "Crack medical entrance (NEET) and basic lab techniques."
        ],
        intermediate: [
          "MBBS coursework: system-wise clinical knowledge and hospital rotations.",
          "Hands-on bedside skills and supervised patient care."
        ],
        advanced: [
          "Postgraduate specialization (MD/MS), fellowship training.",
          "Research, evidence-based practice and practice management."
        ]
      },
      platforms: [
        { name: "PrepLadder", url: "https://www.prepladder.com" },
        { name: "Marrow", url: "https://www.marrow.com" }
      ]
    },

    {
      id: "med-surgery",
      fieldId: 6,
      name: "Surgery",
      level: "Expert",
      overview: "Surgical procedures and operative techniques for various medical conditions.",
      description: "Master the art and science of surgical intervention. Learn to perform operations to treat diseases, injuries, and deformities through manual and instrumental techniques.",
      skills: ["Surgical Techniques", "Anatomy", "Patient Management", "Emergency Care"],
      languages: [],
      roadmap: {
        beginner: [
          "Basic surgical principles and aseptic techniques.",
          "Anatomy and physiology of surgical regions.",
          "Assisting in minor surgical procedures."
        ],
        intermediate: [
          "Master common surgical procedures and techniques.",
          "Develop decision-making skills for surgical interventions.",
          "Manage pre-operative and post-operative care."
        ],
        advanced: [
          "Specialized surgical training in chosen field.",
          "Complex procedure mastery and surgical innovation.",
          "Teaching and research in surgical sciences."
        ]
      },
      platforms: [
        { name: "Surgical Council", url: "https://www.nbe.edu.in" },
        { name: "Medical Journals", url: "https://www.ncbi.nlm.nih.gov" }
      ]
    },

    {
      id: "med-pediatrics",
      fieldId: 6,
      name: "Pediatrics",
      level: "Advanced",
      overview: "Medical care for infants, children, and adolescents.",
      description: "Specialize in the physical, emotional, and social health of children from birth through adolescence. Focus on preventive healthcare and treatment of childhood diseases.",
      skills: ["Child Development", "Vaccination", "Growth Monitoring", "Parent Education"],
      languages: [],
      roadmap: {
        beginner: [
          "Child growth and development fundamentals.",
          "Common childhood illnesses and their management.",
          "Preventive pediatrics and immunization schedules."
        ],
        intermediate: [
          "Advanced pediatric diagnostics and treatment.",
          "Special needs children and chronic disease management.",
          "Pediatric emergency care and critical care."
        ],
        advanced: [
          "Pediatric subspecialty training (cardiology, neurology, etc.).",
          "Research in childhood diseases and treatments.",
          "Academic pediatrics and teaching roles."
        ]
      },
      platforms: [
        { name: "IAP", url: "https://www.iapindia.org" },
        { name: "Pediatric Resources", url: "https://www.aap.org" }
      ]
    },

    {
      id: "med-ortho",
      fieldId: 6,
      name: "Orthopedics",
      level: "Expert",
      overview: "Diagnosis and treatment of musculoskeletal system disorders.",
      description: "Specialize in bones, joints, ligaments, tendons, and muscles. Treat fractures, sports injuries, arthritis, and congenital disorders through both surgical and non-surgical methods.",
      skills: ["Fracture Management", "Joint Replacement", "Sports Medicine", "Rehabilitation"],
      languages: [],
      roadmap: {
        beginner: [
          "Musculoskeletal anatomy and biomechanics.",
          "Basic fracture management and casting techniques.",
          "Introduction to orthopedic examination."
        ],
        intermediate: [
          "Advanced fracture fixation techniques.",
          "Joint replacement and arthroscopic surgery.",
          "Sports injury management and rehabilitation."
        ],
        advanced: [
          "Complex trauma and reconstructive surgery.",
          "Pediatric orthopedics and deformity correction.",
          "Research in orthopedic biomaterials and techniques."
        ]
      },
      platforms: [
        { name: "AAOS", url: "https://www.aaos.org" },
        { name: "OrthoBullets", url: "https://www.orthobullets.com" }
      ]
    },

    {
      id: "med-neuro",
      fieldId: 6,
      name: "Neurology",
      level: "Expert",
      overview: "Diagnosis and treatment of nervous system disorders.",
      description: "Specialize in the brain, spinal cord, nerves, and muscles. Treat conditions like epilepsy, stroke, multiple sclerosis, Parkinson's disease, and headaches.",
      skills: ["Neurological Examination", "EEG Interpretation", "Neuroimaging", "Cognitive Assessment"],
      languages: [],
      roadmap: {
        beginner: [
          "Neuroanatomy and neurophysiology fundamentals.",
          "Basic neurological examination techniques.",
          "Common neurological disorders overview."
        ],
        intermediate: [
          "Advanced diagnostic techniques (EEG, EMG, imaging).",
          "Management of stroke and epilepsy.",
          "Neurocritical care basics."
        ],
        advanced: [
          "Subspecialty training (stroke, epilepsy, movement disorders).",
          "Interventional neurology procedures.",
          "Research in neurodegenerative diseases."
        ]
      },
      platforms: [
        { name: "AAN", url: "https://www.aan.com" },
        { name: "Neurology Journals", url: "https://n.neurology.org" }
      ]
    },

    /* ---------------- NURSING EXPANDED ---------------- */
    {
      id: "nursing",
      fieldId: 7,
      name: "Nursing",
      level: "Intermediate",
      overview: "Patient care, clinical support and specialty nursing tracks.",
      description: "Provide comprehensive patient care across various healthcare settings. Develop clinical skills, patient education, and healthcare coordination abilities.",
      skills: ["Care Delivery", "Emergency Care", "Communication"],
      roadmap: {
        beginner: [
          "Nursing foundations, patient hygiene and bedside manners.",
          "Essential clinical skills and vitals monitoring."
        ],
        intermediate: [
          "Ward rotations, emergency and critical care nursing.",
          "Specialisms: pediatric, ICU, oncology nursing pathways."
        ],
        advanced: [
          "Nurse leadership, research and nurse practitioner roles.",
          "Advanced clinical certifications and policy involvement."
        ]
      },
      platforms: [
        { name: "Nursing World", url: "https://www.nursingworld.org" }
      ]
    },

    {
      id: "nursing-critical",
      fieldId: 7,
      name: "Critical Care Nursing",
      level: "Advanced",
      overview: "Specialized care for critically ill patients in ICU settings.",
      description: "Master advanced monitoring, life support systems, and complex patient management for critically ill individuals in intensive care units.",
      skills: ["Ventilator Management", "Hemodynamic Monitoring", "Emergency Response", "Family Support"],
      languages: [],
      roadmap: {
        beginner: [
          "Basic critical care concepts and equipment.",
          "Vital signs monitoring and basic life support.",
          "ICU protocols and infection control."
        ],
        intermediate: [
          "Advanced monitoring and ventilator management.",
          "Critical care pharmacology and emergency response.",
          "Multisystem organ failure management."
        ],
        advanced: [
          "Advanced cardiac life support and trauma care.",
          "Critical care research and evidence-based practice.",
          "Leadership in critical care settings."
        ]
      },
      platforms: [
        { name: "AACN", url: "https://www.aacn.org" },
        { name: "Critical Care Nursing Resources", url: "https://www.ccrn.org" }
      ]
    },

    /* ---------------- BUSINESS EXPANDED ---------------- */
    {
      id: "biz-mba",
      fieldId: 9,
      name: "MBA & Management",
      level: "Advanced",
      overview: "Strategy, operations and leadership for business careers.",
      description: "Develop comprehensive business knowledge, strategic thinking, and leadership skills for management roles across various industries.",
      skills: ["Strategy", "Finance", "Leadership"],
      roadmap: {
        beginner: [
          "Business fundamentals: accounting, micro/macro economics basics.",
          "Excel for business and basic data analysis."
        ],
        intermediate: [
          "Specialize: marketing, finance, operations, HR.",
          "Case studies, internships, and practical projects."
        ],
        advanced: [
          "Leadership, entrepreneurship, consultancy tracks.",
          "Networking, campus placements and higher management roles."
        ]
      },
      platforms: [
        { name: "Coursera", url: "https://www.coursera.org" },
        { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning" }
      ]
    },

    {
      id: "biz-dig-marketing",
      fieldId: 9,
      name: "Digital Marketing",
      level: "Intermediate",
      overview: "SEO, analytics, paid media and growth strategies.",
      description: "Master online marketing strategies including search engine optimization, social media marketing, content strategy, and data-driven campaign optimization.",
      skills: ["SEO", "Analytics", "Ads", "Content Strategy"],
      roadmap: {
        beginner: [
          "Marketing basics: 4 Ps, buyer personas, content creation.",
          "Learn Google Analytics basics and social media fundamentals."
        ],
        intermediate: [
          "SEO & SEM, paid ads campaigns across platforms.",
          "Performance marketing, attribution and growth hacking."
        ],
        advanced: [
          "Advanced analytics, marketing automation and CRO.",
          "Leadership in marketing and data-driven strategy."
        ]
      },
      platforms: [
        { name: "HubSpot Academy", url: "https://academy.hubspot.com" },
        { name: "Google Skillshop", url: "https://skillshop.withgoogle.com" }
      ]
    },

    {
      id: "biz-finance",
      fieldId: 9,
      name: "Finance & Investment Banking",
      level: "Advanced",
      overview: "Financial analysis, investment strategies, and corporate finance.",
      description: "Master financial modeling, valuation techniques, investment analysis, and corporate financial management for careers in banking and finance.",
      skills: ["Financial Modeling", "Valuation", "Risk Management", "Investment Analysis"],
      languages: [],
      roadmap: {
        beginner: [
          "Accounting fundamentals and financial statements.",
          "Basic Excel skills and financial mathematics.",
          "Introduction to financial markets."
        ],
        intermediate: [
          "Financial modeling and valuation techniques.",
          "Corporate finance and capital budgeting.",
          "Investment analysis and portfolio management."
        ],
        advanced: [
          "Advanced derivatives and risk management.",
          "Mergers and acquisitions strategies.",
          "International finance and regulatory frameworks."
        ]
      },
      platforms: [
        { name: "CFA Institute", url: "https://www.cfainstitute.org" },
        { name: "Wall Street Prep", url: "https://www.wallstreetprep.com" }
      ]
    },

    /* ---------------- ARTS & CREATIVE EXPANDED ---------------- */
    {
      id: "art-graphic",
      fieldId: 10,
      name: "Graphic Design",
      level: "Beginner to Intermediate",
      overview: "Branding, visual communication and digital design tools.",
      description: "Create compelling visual communications through typography, imagery, color, and layout. Master design principles and digital tools for various media.",
      skills: ["Photoshop", "Illustrator", "Typography", "Figma"],
      roadmap: {
        beginner: [
          "Design fundamentals: color theory, typography, composition.",
          "Learn Figma and basic prototyping, build a portfolio."
        ],
        intermediate: [
          "Brand identity, motion graphics basics and advanced tools.",
          "Client work simulation and freelance basics."
        ],
        advanced: [
          "Design systems, team leadership and design operations.",
          "Specialize in product design, UX or motion design tracks."
        ]
      },
      platforms: [
        { name: "Figma Community", url: "https://www.figma.com/community" },
        { name: "Adobe Learn", url: "https://helpx.adobe.com/learn.html" }
      ]
    },

    {
      id: "art-animation",
      fieldId: 10,
      name: "Animation & Motion Graphics",
      level: "Advanced",
      overview: "2D/3D animation workflows, rigging and VFX pipelines.",
      description: "Master the art of bringing characters and objects to life through various animation techniques and visual effects for film, games, and digital media.",
      skills: ["Blender", "After Effects", "Rigging", "Compositing"],
      roadmap: {
        beginner: [
          "Principles of animation and keyframing basics.",
          "Learn 2D animation and basic After Effects workflows."
        ],
        intermediate: [
          "3D modelling basics (Blender), rigging and animation cycles.",
          "Motion graphics + compositing and pipeline tools."
        ],
        advanced: [
          "VFX, particle systems, and production-grade R&D.",
          "Portfolio production and studio workflows."
        ]
      },
      platforms: [
        { name: "Blender", url: "https://www.blender.org" },
        { name: "Animation Mentor", url: "https://www.animationmentor.com" }
      ]
    },

    {
      id: "art-ux",
      fieldId: 10,
      name: "UX/UI Design",
      level: "Intermediate",
      overview: "User-centered design for digital products and experiences.",
      description: "Create intuitive, accessible, and engaging user interfaces through research, prototyping, and testing methodologies focused on user needs and behaviors.",
      skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      languages: [],
      roadmap: {
        beginner: [
          "Design thinking and user-centered design principles.",
          "Basic wireframing and prototyping tools.",
          "Introduction to user research methods."
        ],
        intermediate: [
          "Advanced prototyping and interaction design.",
          "User testing and analytics interpretation.",
          "Design system creation and management."
        ],
        advanced: [
          "Strategic UX leadership and product management.",
          "Accessibility and inclusive design expertise.",
          "Cross-functional team leadership."
        ]
      },
      platforms: [
        { name: "Nielsen Norman Group", url: "https://www.nngroup.com" },
        { name: "UX Collective", url: "https://uxdesign.cc" }
      ]
    },

    /* ---------------- CIVIL EXPANDED ---------------- */
    {
      id: "civil-structural",
      fieldId: 11,
      name: "Structural Engineering",
      level: "Intermediate",
      overview: "Design and analysis of building and bridge structures.",
      description: "Master the principles of structural analysis and design to create safe, efficient, and sustainable buildings, bridges, and infrastructure projects.",
      skills: ["Structural Analysis", "Design Codes", "ETABS/STAAD"],
      roadmap: {
        beginner: [
          "Statics, strength of materials and building materials basics.",
          "Learn CAD and basic structural drafting."
        ],
        intermediate: [
          "Design of reinforced concrete and steel structures (limit state method).",
          "Use tools like ETABS, STAAD Pro, SAFE for analysis."
        ],
        advanced: [
          "Seismic design, advanced structural dynamics and retrofitting.",
          "Large infrastructure project design and management."
        ]
      },
      platforms: [
        { name: "NPTEL Civil", url: "https://nptel.ac.in" }
      ]
    },

    {
      id: "civil-railway",
      fieldId: 11,
      name: "Railway Engineering",
      level: "Intermediate",
      overview: "Railway track design, signaling and operations.",
      description: "Specialize in railway infrastructure design, track geometry, signaling systems, and railway operations management for passenger and freight transport.",
      skills: ["Track design", "Signalling", "Operations"],
      roadmap: {
        beginner: [
          "Basics of railway alignment, track geometry and components.",
          "Understand rolling stock and track maintenance fundamentals."
        ],
        intermediate: [
          "Signal systems, interlocking and electrical systems.",
          "Operational planning and capacity enhancement."
        ],
        advanced: [
          "High-speed rail principles and network-level optimization.",
          "Signalling modernization, ETCS and CBTC systems."
        ]
      },
      platforms: [
        { name: "IRF / NPTEL", url: "https://nptel.ac.in" }
      ]
    },

    {
      id: "civil-electrical",
      fieldId: 11,
      name: "Electrical & Power (Civil context)",
      level: "Intermediate",
      overview: "Power systems for infrastructure, distribution and renewables.",
      description: "Design and maintain electrical systems for buildings and infrastructure, including power distribution, lighting, and renewable energy integration.",
      skills: ["Power Systems", "Distribution", "Protection"],
      roadmap: {
        beginner: [
          "Electric circuits, machines and power basics.",
          "Understand distribution network layout and components."
        ],
        intermediate: [
          "Protection relays, substations and grid operations.",
          "Integration of renewables and microgrids basics."
        ],
        advanced: [
          "Smart grid concepts, power system stability and planning.",
          "Grid automation and advanced protection schemes."
        ]
      },
      platforms: [
        { name: "NPTEL (EE)", url: "https://nptel.ac.in" }
      ]
    },

    {
      id: "civil-agri",
      fieldId: 11,
      name: "Agricultural & Irrigation Engineering",
      level: "Intermediate",
      overview: "Design of irrigation systems, water resources and agri infrastructure.",
      description: "Develop sustainable agricultural infrastructure including irrigation systems, water management, soil conservation, and farm structure design.",
      skills: ["Hydrology", "Irrigation Design", "Soil Mechanics"],
      roadmap: {
        beginner: [
          "Hydrology, water balance and crop water requirements.",
          "Basic irrigation methods and canal design concepts."
        ],
        intermediate: [
          "Design of surface and pressurized irrigation systems.",
          "Water management and planning at catchment scale."
        ],
        advanced: [
          "Large irrigation project design, modern automation and sensors.",
          "Sustainable agriculture infrastructure and policy."
        ]
      },
      platforms: [
        { name: "NPTEL (Civil/Agriculture)", url: "https://nptel.ac.in" }
      ]
    },

    {
      id: "civil-transport",
      fieldId: 11,
      name: "Transportation Engineering",
      level: "Intermediate",
      overview: "Road, highway and traffic engineering with planning.",
      description: "Design and manage transportation systems including roads, highways, traffic flow, and urban mobility solutions for efficient and safe transportation.",
      skills: ["Pavement Design", "Traffic Modeling", "Road Safety"],
      roadmap: {
        beginner: [
          "Transportation systems overview and highway materials.",
          "Basic traffic flow theory and safety concepts."
        ],
        intermediate: [
          "Pavement design, geometric design and traffic studies.",
          "Software tools for traffic modeling and corridor planning."
        ],
        advanced: [
          "Intelligent transport systems (ITS), multimodal planning.",
          "Policy and large infrastructure implementation."
        ]
      },
      platforms: [
        { name: "NPTEL (Transportation)", url: "https://nptel.ac.in" }
      ]
    },

    {
      id: "civil-construction",
      fieldId: 11,
      name: "Construction Management",
      level: "Intermediate",
      overview: "Project scheduling, contracts, quality and site management.",
      description: "Master project management techniques for construction projects including planning, budgeting, scheduling, quality control, and stakeholder management.",
      skills: ["Project Management", "Scheduling (MS Project)", "Quality Control"],
      roadmap: {
        beginner: [
          "Construction methods and materials overview.",
          "Site safety and basic project documentation."
        ],
        intermediate: [
          "Cost estimation, project scheduling and contracts.",
          "Quality assurance and site supervision techniques."
        ],
        advanced: [
          "Risk management for mega projects and contract law.",
          "Digital construction (BIM) and integrated project delivery."
        ]
      },
      platforms: [
        { name: "Coursera (Construction)", url: "https://www.coursera.org" }
      ]
    },

    {
      id: "civil-environmental",
      fieldId: 11,
      name: "Environmental Engineering",
      level: "Intermediate",
      overview: "Water treatment, waste management and environmental protection.",
      description: "Design systems for water purification, wastewater treatment, solid waste management, and air pollution control to protect public health and the environment.",
      skills: ["Water Treatment", "Waste Management", "Environmental Impact", "Sustainability"],
      roadmap: {
        beginner: [
          "Environmental chemistry and microbiology basics.",
          "Water quality parameters and treatment principles.",
          "Basic waste management concepts."
        ],
        intermediate: [
          "Water and wastewater treatment plant design.",
          "Solid waste management and recycling systems.",
          "Environmental impact assessment methods."
        ],
        advanced: [
          "Advanced treatment technologies and resource recovery.",
          "Climate change adaptation and mitigation strategies.",
          "Environmental policy and regulatory compliance."
        ]
      },
      platforms: [
        { name: "NPTEL Environmental", url: "https://nptel.ac.in" },
        { name: "AWWA", url: "https://www.awwa.org" }
      ]
    },

    /* ---------------- GOVERNMENT EXPANDED ---------------- */
    {
      id: "gov-upsc",
      fieldId: 12,
      name: "Civil Services (UPSC)",
      level: "Advanced",
      overview: "Preparation for national civil services examinations and administrative careers.",
      description: "Prepare for prestigious civil service examinations to serve in various administrative roles in government departments and public service organizations.",
      skills: ["Current Affairs", "Essay & Answer Writing", "Optional Subjects"],
      roadmap: {
        beginner: [
          "Understand exam structure (Prelims/Mains/Interview) and syllabus.",
          "Begin daily current affairs and basic NCERT readings."
        ],
        intermediate: [
          "Choose optional subject, practice answer writing and mock tests.",
          "Take test series and analyze performance."
        ],
        advanced: [
          "Interview preparation, personality development and ethics.",
          "Understand policy formulation and administrative case studies."
        ]
      },
      platforms: [
        { name: "ClearIAS", url: "https://www.clearias.com" },
        { name: "Unacademy (UPSC)", url: "https://unacademy.com" }
      ]
    },

    {
      id: "gov-ssc",
      fieldId: 12,
      name: "SSC & State Exams",
      level: "Intermediate",
      overview: "Preparation for staff selection and state-level government exams.",
      description: "Prepare for various staff selection commission exams and state-level government job examinations for positions in different government departments.",
      skills: ["Aptitude", "Reasoning", "General Knowledge"],
      roadmap: {
        beginner: [
          "Learn basic quantitative aptitude and reasoning techniques.",
          "Build speed with mock tests and time management."
        ],
        intermediate: [
          "Clear subject-specific bits and practice previous years.",
          "Improve accuracy and sectional strategy."
        ],
        advanced: [
          "Interview / skill tests preparation if applicable.",
          "Focus on revision and negative marking strategies."
        ]
      },
      platforms: [
        { name: "Testbook", url: "https://testbook.com" },
        { name: "PrepInsta", url: "https://prepinsta.com" }
      ]
    },

    {
      id: "gov-army",
      fieldId: 12,
      name: "Defence (Army/Navy/Air Force)",
      level: "Advanced",
      overview: "Training and career paths to join defense services and technical roles.",
      description: "Prepare for careers in armed forces through various entry schemes including NDA, CDS, technical entries, and other defense service examinations.",
      skills: ["Physical Fitness", "Leadership", "Technical Knowledge"],
      roadmap: {
        beginner: [
          "Understand selection pathways (NDA, CDS, AFCAT, Service Academies).",
          "Start physical training and basic academics."
        ],
        intermediate: [
          "Clear written exams with subject focus and rigorous PT.",
          "Attend SSB / interviews and prepare presentation skills."
        ],
        advanced: [
          "Specialized training at academies and technical corps training.",
          "Career specialty training and leadership roles."
        ]
      },
      platforms: [
        { name: "Join Indian Army", url: "https://joinindianarmy.nic.in" }
      ]
    },

    {
      id: "gov-teacher",
      fieldId: 12,
      name: "Teaching (Govt & Private)",
      level: "Intermediate",
      overview: "Pathways for school and higher education teaching roles.",
      description: "Prepare for teaching careers in government and private educational institutions through various teaching eligibility tests and certification programs.",
      skills: ["Pedagogy", "Subject Mastery", "Classroom Management"],
      roadmap: {
        beginner: [
          "Obtain subject degree, build teaching fundamentals.",
          "Learn classroom techniques and assessment strategies."
        ],
        intermediate: [
          "Prepare for certification exams (CTET, state exams).",
          "Gain teaching experience and create a portfolio."
        ],
        advanced: [
          "Leadership in education, higher education roles and research.",
          "Acquire advanced degrees and take administrative positions."
        ]
      },
      platforms: [
        { name: "CTET", url: "https://ctet.nic.in" },
        { name: "EdX / Coursera (Pedagogy)", url: "https://www.coursera.org" }
      ]
    },

    {
      id: "gov-banking",
      fieldId: 12,
      name: "Banking & Financial Services",
      level: "Intermediate",
      overview: "Careers in public sector banks and financial institutions.",
      description: "Prepare for careers in banking sector through various banking examinations for positions like probationary officers, clerks, and specialist officers.",
      skills: ["Quantitative Aptitude", "Financial Awareness", "Reasoning", "English Language"],
      roadmap: {
        beginner: [
          "Understand banking exam pattern and syllabus.",
          "Build foundation in quantitative aptitude and reasoning.",
          "Start reading financial newspapers and current affairs."
        ],
        intermediate: [
          "Practice mock tests and previous year papers.",
          "Develop speed and accuracy in problem solving.",
          "Master banking and financial concepts."
        ],
        advanced: [
          "Advanced preparation for interview rounds.",
          "Professional knowledge for specialist positions.",
          "Career planning and growth strategies in banking."
        ]
      },
      platforms: [
        { name: "Bankersadda", url: "https://www.bankersadda.com" },
        { name: "Gradeup", url: "https://gradeup.co" }
      ]
    }

  ], // end specializations

  // Enhanced Questionnaire for better recommendations
  questionnaire: [
    {
      id: 1,
      question: "What do you prefer doing in your free time?",
      options: [
        { id: "tech", text: "Solving puzzles & coding", icon: "fa-code", weight: { tech: 5, gaming: 2 } },
        { id: "med", text: "Reading science & biology", icon: "fa-microscope", weight: { medical: 5 } },
        { id: "art", text: "Drawing or designing", icon: "fa-paint-brush", weight: { creative: 5 } },
        { id: "bus", text: "Organizing events / leading teams", icon: "fa-users", weight: { business: 5, govt: 2 } }
      ]
    },
    {
      id: 2,
      question: "Which subject did you enjoy in school?",
      options: [
        { id: "math", text: "Maths & Physics", icon: "fa-calculator", weight: { tech: 4, civil: 3, gaming: 2 } },
        { id: "bio", text: "Biology & Chemistry", icon: "fa-flask", weight: { medical: 5 } },
        { id: "art", text: "Art & Literature", icon: "fa-pen-nib", weight: { creative: 5 } },
        { id: "soc", text: "History / Civics", icon: "fa-landmark", weight: { govt: 4, business: 3 } }
      ]
    },
    {
      id: 3,
      question: "What work environment do you prefer?",
      options: [
        { id: "remote", text: "Remote / Flexible", icon: "fa-house-laptop", weight: { tech: 4, creative: 3 } },
        { id: "hospital", text: "Hospital / Lab", icon: "fa-hospital", weight: { medical: 5 } },
        { id: "office", text: "Corporate Office", icon: "fa-building", weight: { business: 5, tech: 2 } },
        { id: "outdoor", text: "Field / Outdoor", icon: "fa-hard-hat", weight: { civil: 4, govt: 3 } }
      ]
    },
    {
      id: 4,
      question: "What type of problems do you enjoy solving?",
      options: [
        { id: "logical", text: "Logical & technical problems", icon: "fa-cogs", weight: { tech: 5, gaming: 3 } },
        { id: "human", text: "Human & health-related issues", icon: "fa-heart", weight: { medical: 5 } },
        { id: "creative", text: "Creative & design challenges", icon: "fa-lightbulb", weight: { creative: 5 } },
        { id: "organizational", text: "Organizational & business problems", icon: "fa-chart-bar", weight: { business: 5, govt: 3 } }
      ]
    },
    {
      id: 5,
      question: "What's your preferred learning style?",
      options: [
        { id: "hands-on", text: "Hands-on practical work", icon: "fa-tools", weight: { tech: 4, civil: 4, medical: 3 } },
        { id: "theoretical", text: "Theoretical & conceptual study", icon: "fa-book", weight: { tech: 3, medical: 4, govt: 3 } },
        { id: "creative", text: "Creative expression & projects", icon: "fa-palette", weight: { creative: 5, gaming: 3 } },
        { id: "social", text: "Collaborative & team-based", icon: "fa-comments", weight: { business: 4, govt: 3, medical: 2 } }
      ]
    }
  ]
};

// ==============================
// 2. STATE MANAGEMENT
// ==============================
let currentQuestionIndex = 0;
let userAnswers = [];
let categoryScores = { tech: 0, medical: 0, business: 0, creative: 0, civil: 0, gaming: 0, govt: 0 };

// ==============================
// 3. DOM LOAD
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  loadFields();
  setupEventListeners();
  loadSavedTheme();
  observeSectionsForNav();
});

// ==============================
// 4. THEME, NAV & LISTENERS
// ==============================
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  const icon = document.querySelector("#themeToggle i");
  if (icon) icon.className = newTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

function loadSavedTheme() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  const icon = document.querySelector("#themeToggle i");
  if (icon) icon.className = saved === "dark" ? "fas fa-sun" : "fas fa-moon";
}

function setupEventListeners() {
  // Theme
  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);

  // Smooth scroll and mobile close
  document.querySelectorAll('a[href^="#"], .nav-link').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href") || this.dataset.href;
      if (!href) return;
      if (href.charAt(0) !== "#") return;
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      }
      document.getElementById("mobileMenu")?.classList.remove("active");
    });
  });

  // Mobile menu
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger?.addEventListener("click", () => mobileMenu.classList.toggle("active"));

  // Buttons
  document.getElementById("getStartedBtn")?.addEventListener("click", () => document.getElementById("branchSelection").scrollIntoView({ behavior: "smooth" }));
  document.getElementById("exploreBtn")?.addEventListener("click", () => {
    document.getElementById("fields").scrollIntoView({ behavior: "smooth" });
    // Update active nav
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector('[data-target="fields"]').classList.add('active');
  });
  
  document.getElementById("yesCard")?.addEventListener("click", () => {
    document.getElementById("fields").scrollIntoView({ behavior: "smooth" });
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector('[data-target="fields"]').classList.add('active');
  });
  
  document.getElementById("noCard")?.addEventListener("click", startQuestionnaire);

  // Search & filters
  document.getElementById("searchInput")?.addEventListener("input", filterFields);
  document.querySelectorAll(".filter-btn").forEach(btn => btn.addEventListener("click", (e) => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    e.currentTarget.classList.add("active");
    filterFields();
  }));

  // Modal controls
  document.getElementById("closeModal")?.addEventListener("click", () => closeModal("specializationModal"));
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal("specializationModal"); });
  window.addEventListener("click", (e) => {
    if (e.target.classList?.contains("modal")) { 
      e.target.classList.remove("active"); 
      document.body.classList.remove("modal-open"); 
    }
  });

  // Quiz nav
  document.getElementById("nextBtn")?.addEventListener("click", onNextQuiz);
  document.getElementById("prevBtn")?.addEventListener("click", onPrevQuiz);
  document.getElementById("retakeQuizBtn")?.addEventListener("click", startQuestionnaire);
}

// IntersectionObserver to update nav active link while scrolling
function observeSectionsForNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const options = { root: null, rootMargin: "0px", threshold: 0.55 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => { 
          a.classList.toggle("active", a.getAttribute("data-target") === id); 
        });
      }
    });
  }, options);

  sections.forEach(sec => observer.observe(sec));
}

// ==============================
// 5. LOAD FIELDS / RENDER
// ==============================
function loadFields(filter = "all", searchTerm = "") {
  const grid = document.getElementById("fieldsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  let fields = [...mockData.fields];
  if (filter && filter !== "all") fields = fields.filter(f => f.category === filter);

  if (searchTerm) {
    const s = searchTerm.toLowerCase();
    fields = fields.filter(f => 
      f.name.toLowerCase().includes(s) || 
      f.description.toLowerCase().includes(s) ||
      mockData.specializations.some(sp => sp.fieldId === f.id && sp.name.toLowerCase().includes(s))
    );
  }

  if (fields.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-secondary);padding:3rem;">No fields found matching your search.</div>`;
    return;
  }

  fields.forEach(field => {
    const card = document.createElement("div");
    card.className = "field-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="field-icon"><i class="fas ${field.icon}"></i></div>
      <h3>${field.name}</h3>
      <p>${field.description}</p>
      <div style="margin-top:auto;display:flex;gap:0.5rem;align-items:center;">
        <span class="field-badge">${field.duration}</span>
        <span class="field-badge">${field.difficulty}</span>
        <span class="field-badge">${field.avgSalary}</span>
      </div>
    `;

    card.addEventListener("click", () => showFieldDetailsById(field.id));
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") showFieldDetailsById(field.id); });

    grid.appendChild(card);
  });
}

function filterFields() {
  const search = document.getElementById("searchInput")?.value || "";
  const filter = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
  loadFields(filter, search);
}

// ==============================
// 6. MODAL / SPECIALIZATION UI
// ==============================
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("active");
  document.body.classList.add("modal-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
  modal.setAttribute("aria-hidden", "true");
}

function showFieldDetailsById(fieldId) {
  const field = mockData.fields.find(f => f.id === fieldId);
  if (!field) return;
  showFieldDetails(field);
}

function showFieldDetails(field) {
  const specs = mockData.specializations.filter(s => s.fieldId === field.id);
  const modalBody = document.getElementById("modalBody");
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-header">
      <h2>${field.name}</h2>
      <p style="color:var(--text-secondary);">${field.description}</p>
    </div>

    <div class="tabs" role="tablist">
      <button class="tab-btn active" onclick="switchTab('overview', this)">Overview</button>
      <button class="tab-btn" onclick="switchTab('career-info', this)">Career Info</button>
      <button class="tab-btn" onclick="switchTab('specs', this)">Specializations (${specs.length})</button>
    </div>

    <div id="overview" class="tab-content active">
      <h3>Career Highlights</h3>
      <ul style="list-style:none;margin-top:1rem;padding-left:0;">
        <li><strong>💰 Average Salary:</strong> ${field.avgSalary}</li>
        <li><strong>⏱️ Typical Duration:</strong> ${field.duration}</li>
        <li><strong>🧠 Core Skills:</strong> ${field.coreSkills.join(", ")}</li>
        <li><strong>📊 Difficulty Level:</strong> ${field.difficulty}</li>
      </ul>
    </div>

    <div id="career-info" class="tab-content">
      <div class="career-details">
        <div class="detail-section">
          <h4>What is ${field.name}?</h4>
          <p>${field.careerInfo.whatIs}</p>
        </div>
        
        <div class="detail-section">
          <h4>Why Study This Field?</h4>
          <p>${field.careerInfo.whyStudy}</p>
        </div>
        
        <div class="detail-section">
          <h4>Who is This For?</h4>
          <p>${field.careerInfo.whoIsFor}</p>
        </div>
        
        <div class="detail-section">
          <h4>Career Benefits</h4>
          <p>${field.careerInfo.benefits}</p>
        </div>
      </div>
    </div>

    <div id="specs" class="tab-content">
      ${specs.length > 0 ? specs.map(s => `
        <div class="result-card" style="margin-bottom:0.9rem;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div style="flex:1">
              <h3 style="margin:0">${s.name}</h3>
              <p style="color:var(--text-secondary);margin:0.5rem 0">${s.overview}</p>
              <p style="margin:0.35rem 0;color:var(--text-secondary);font-size:0.95rem">
                <strong>Description:</strong> ${s.description || "Comprehensive learning path in this specialization."}
              </p>
              <p style="margin:0.35rem 0;color:var(--text-secondary);font-size:0.95rem">
                <strong>Languages / Tools:</strong> ${s.languages && s.languages.length ? s.languages.join(", ") : "Varies per sub-track"}
              </p>
            </div>
            <span class="match-score" style="font-size:0.8rem">${s.level}</span>
          </div>
          <div style="display:flex;gap:0.5rem;margin-top:0.75rem;flex-wrap:wrap;">
            <button class="btn-secondary" onclick='showRoadmap("${s.id}")'>View Roadmap</button>
            <button class="btn-primary" onclick='openResources("${s.id}")'>Practice Platforms <i class="fas fa-external-link-alt" style="margin-left:0.5rem"></i></button>
          </div>
        </div>
      `).join('') : '<p style="text-align:center;color:var(--text-secondary);padding:2rem;">No specializations available yet for this field.</p>'}
    </div>
  `;

  openModal("specializationModal");
}

// switchTab avoids global event
window.switchTab = (tabId, btn) => {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId)?.classList.add('active');
  if (btn) btn.classList.add('active');
};

window.showRoadmap = (specId) => {
  const spec = mockData.specializations.find(s => s.id === specId);
  if (!spec) return;
  const modalBody = document.getElementById("modalBody");
  if (!modalBody) return;

  const field = mockData.fields.find(f => f.id === spec.fieldId);

  modalBody.innerHTML = `
    <button class="btn-secondary" style="margin-bottom:1rem;" onclick='showFieldDetailsById(${field.id})'>
      <i class="fas fa-arrow-left"></i> Back to Field
    </button>

    <div class="modal-header">
      <h2>${spec.name} Roadmap</h2>
      <p style="color:var(--text-secondary);">Step-by-step guide (Beginner → Intermediate → Advanced)</p>
    </div>

    <div style="margin-top:0.5rem;">
      <p><strong>Overview:</strong> ${spec.overview}</p>
      <p><strong>Description:</strong> ${spec.description}</p>
      <p><strong>Languages / Tools:</strong> ${spec.languages && spec.languages.length ? spec.languages.join(", ") : "Varies"}</p>
      <p><strong>Key Skills:</strong> ${spec.skills ? spec.skills.join(", ") : "Varies"}</p>
    </div>

    <div class="roadmap-timeline" style="margin-top:1rem;">
      <h3>Beginner Level</h3>
      ${spec.roadmap && spec.roadmap.beginner ? spec.roadmap.beginner.map((i, idx) => `<div class="roadmap-item"><h4>Step ${idx+1}</h4><p>${i}</p></div>`).join('') : ''}
      
      <h3 style="margin-top:2rem;">Intermediate Level</h3>
      ${spec.roadmap && spec.roadmap.intermediate ? spec.roadmap.intermediate.map((i, idx) => `<div class="roadmap-item"><h4>Step ${idx+1}</h4><p>${i}</p></div>`).join('') : ''}
      
      <h3 style="margin-top:2rem;">Advanced Level</h3>
      ${spec.roadmap && spec.roadmap.advanced ? spec.roadmap.advanced.map((i, idx) => `<div class="roadmap-item"><h4>Step ${idx+1}</h4><p>${i}</p></div>`).join('') : ''}
    </div>

    <h3 style="margin-top:1.2rem">Practice Platforms & Resources</h3>
    <div class="resource-list">
      ${spec.platforms && spec.platforms.length ? spec.platforms.map(p => `
        <a class="resource-item" href="${p.url}" target="_blank" rel="noopener noreferrer">
          <div class="resource-icon"><i class="fas fa-external-link-alt"></i></div>
          <div><strong>${p.name}</strong><div style="color:var(--text-secondary);font-size:0.9rem">${p.url}</div></div>
        </a>
      `).join('') : '<p style="color:var(--text-secondary);text-align:center;">No platforms listed for this specialization.</p>'}
    </div>
  `;

  // keep modal open
  openModal("specializationModal");
};

window.openResources = (specId) => {
  const spec = mockData.specializations.find(s => s.id === specId);
  if (!spec) return;
  const modalBody = document.getElementById("modalBody");
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-header">
      <h2>${spec.name} — Practice Platforms</h2>
      <p style="color:var(--text-secondary);">Click to open and begin practice.</p>
    </div>

    <div class="resource-list">
      ${spec.platforms && spec.platforms.length ? spec.platforms.map(p => `
        <a class="resource-item" href="${p.url}" target="_blank" rel="noopener noreferrer">
          <div class="resource-icon"><i class="fas fa-external-link-alt"></i></div>
          <div><h4 style="margin:0">${p.name}</h4><p style="margin:0;color:var(--text-secondary)">${p.url}</p></div>
        </a>
      `).join('') : '<p style="color:var(--text-secondary);text-align:center;">No platforms listed for this specialization.</p>'}
    </div>
  `;

  openModal("specializationModal");
};

// ==============================
// 7. QUESTIONNAIRE LOGIC
// ==============================
function startQuestionnaire() {
  currentQuestionIndex = 0;
  userAnswers = [];
  categoryScores = { tech: 0, medical: 0, business: 0, creative: 0, civil: 0, gaming: 0, govt: 0 };

  // Show questionnaire and hide other sections
  document.getElementById("recommend").style.display = "block";
  document.getElementById("results").style.display = "none";
  
  // Update navigation
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  document.querySelector('[data-target="recommend"]').classList.add('active');
  
  document.getElementById("recommend").scrollIntoView({ behavior: "smooth" });
  loadQuestion();
}

function loadQuestion() {
  const q = mockData.questionnaire[currentQuestionIndex];
  const card = document.getElementById("questionCard");
  if (!q || !card) return;
  
  const progress = Math.round(((currentQuestionIndex + 1) / mockData.questionnaire.length) * 100);
  document.getElementById("progressFill").style.width = `${progress}%`;
  document.getElementById("prevBtn").disabled = currentQuestionIndex === 0;
  document.getElementById("nextBtn").innerHTML = currentQuestionIndex === mockData.questionnaire.length - 1 ? 'See Results <i class="fas fa-chart-bar"></i>' : 'Next <i class="fas fa-arrow-right"></i>';

  card.innerHTML = `
    <h3>Question ${currentQuestionIndex + 1} of ${mockData.questionnaire.length}</h3>
    <h2 style="margin-top:0.6rem">${q.question}</h2>
    <div class="options-grid" style="display:grid; gap:1rem; margin-top:1rem;">
      ${q.options.map(opt => `
        <div class="option-card" role="button" tabindex="0" onclick="selectOption('${opt.id}', this)" onkeydown="if(event.key==='Enter') selectOption('${opt.id}', this)">
          <div class="option-icon"><i class="fas ${opt.icon}"></i></div>
          <div>${opt.text}</div>
        </div>
      `).join('')}
    </div>
  `;

  // restore selection if exists
  const prev = userAnswers[currentQuestionIndex];
  if (prev) {
    const cards = Array.from(document.querySelectorAll(".option-card"));
    cards.forEach(c => { 
      if (c.textContent && c.textContent.trim().startsWith(getOptionTextById(currentQuestionIndex, prev))) 
        c.classList.add("selected"); 
    });
  }
}

function getOptionTextById(qIndex, optId) {
  const q = mockData.questionnaire[qIndex];
  const o = q.options.find(x => x.id === optId);
  return o ? o.text : "";
}

window.selectOption = (optId, el) => {
  document.querySelectorAll(".option-card").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  userAnswers[currentQuestionIndex] = optId;
};

function onNextQuiz() {
  if (!userAnswers[currentQuestionIndex]) { 
    alert("Please select an option before proceeding!"); 
    return; 
  }

  // add weights to category scores
  const q = mockData.questionnaire[currentQuestionIndex];
  const sel = q.options.find(o => o.id === userAnswers[currentQuestionIndex]);
  if (sel && sel.weight) {
    Object.entries(sel.weight).forEach(([cat, w]) => {
      if (!(cat in categoryScores)) categoryScores[cat] = 0;
      categoryScores[cat] += w;
    });
  }

  if (currentQuestionIndex < mockData.questionnaire.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showResults();
  }
}

function onPrevQuiz() {
  if (currentQuestionIndex > 0) {
    // subtract previous answer weights
    const prevIdx = currentQuestionIndex - 1;
    const prevSelId = userAnswers[prevIdx];
    if (prevSelId) {
      const prevOpt = mockData.questionnaire[prevIdx].options.find(o => o.id === prevSelId);
      if (prevOpt && prevOpt.weight) {
        Object.entries(prevOpt.weight).forEach(([cat, w]) => {
          categoryScores[cat] -= w;
        });
      }
    }
    currentQuestionIndex--;
    loadQuestion();
  }
}

function showResults() {
  // ensure last answer counted
  const lastSelId = userAnswers[currentQuestionIndex];
  if (lastSelId) {
    const lastOpt = mockData.questionnaire[currentQuestionIndex].options.find(o => o.id === lastSelId);
    if (lastOpt && lastOpt.weight) {
      Object.entries(lastOpt.weight).forEach(([cat, w]) => { 
        categoryScores[cat] += w; 
      });
    }
  }

  // Hide quiz, show results
  document.getElementById("recommend").style.display = "none";
  const resultsEl = document.getElementById("results");
  const resultsGrid = document.getElementById("resultsGrid");
  resultsGrid.innerHTML = "";

  // Calculate top categories
  const maxScore = Math.max(...Object.values(categoryScores));
  const winners = Object.keys(categoryScores).filter(k => categoryScores[k] === maxScore);

  // Get matching fields
  let recommended = mockData.fields.filter(f => winners.includes(f.category));
  
  // If no matches, show top fields
  if (!recommended.length) {
    // Sort categories by score and get top 2
    const topCategories = Object.entries(categoryScores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(([cat]) => cat);
    
    recommended = mockData.fields.filter(f => topCategories.includes(f.category));
  }

  // Limit to 4 recommendations
  recommended = recommended.slice(0, 4);

  resultsGrid.innerHTML = recommended.map(f => `
    <div class="result-card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <h3 style="margin:0">${f.name}</h3>
        <span class="match-score">${winners.length > 1 ? "Top Match" : "Best Match"}</span>
      </div>
      <p style="color:var(--text-secondary);margin:0.4rem 0">${f.description}</p>
      <div style="display:flex;gap:0.6rem;margin-top:0.75rem;flex-wrap:wrap;">
        <button class="btn-primary" onclick='showFieldDetailsById(${f.id})'>Explore Path</button>
        <button class="btn-secondary" onclick='openFieldSpecializations(${f.id})'>Specializations</button>
      </div>
    </div>
  `).join('');

  resultsEl.style.display = "block";
  resultsEl.scrollIntoView({ behavior: "smooth" });
}

function openFieldSpecializations(fieldId) {
  const field = mockData.fields.find(f => f.id === fieldId);
  if (!field) return;
  showFieldDetails(field);
}

// ==============================
// 8. UTILITIES & SAFETY
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  // ensure fields loaded even if called twice
  loadFields();
});