// ============================================================
// Bridge Technology — Static seed data for all site sections
// ============================================================

export const COMPANY = {
  name: "Bridge Technology",
  tagline: "Bridging Skills to Success",
  description:
    "India's leading tech education startup empowering students and professionals with industry-relevant skills in software development, data science, AI, and more.",
  email: "bridgetechtechnologies@gmail.com",
  phones: ["72046 18076", "6360675218"],
  address: "Bengaluru, Karnataka, India",
  founded: "2023",
  website: "https://bridgetechnology.in",
  socialLinks: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "5000+", label: "Students Enrolled" },
  { value: "30+", label: "Courses Available" },
  { value: "50+", label: "Expert Instructors" },
  { value: "95%", label: "Placement Rate" },
];

export interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  modules: string[];
  badge: string;
  featured?: boolean;
}

export const COURSES: Course[] = [
  {
    id: "full-stack-web",
    title: "Full Stack Web Development",
    category: "Web Development",
    duration: "6 Months",
    level: "Beginner",
    description:
      "Master HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB to build complete web applications from scratch.",
    modules: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript & ES6+",
      "React.js & Next.js",
      "Node.js & Express",
      "MongoDB & REST APIs",
      "Deployment & DevOps Basics",
    ],
    badge: "Most Popular",
    featured: true,
  },
  {
    id: "data-science",
    title: "Data Science & Machine Learning",
    category: "Data Science",
    duration: "5 Months",
    level: "Intermediate",
    description:
      "Learn Python, data analysis, machine learning algorithms, and build real-world ML models using scikit-learn and TensorFlow.",
    modules: [
      "Python for Data Science",
      "Statistics & Probability",
      "Data Analysis with Pandas",
      "Machine Learning Algorithms",
      "Deep Learning with TensorFlow",
      "Capstone Projects",
    ],
    badge: "Trending",
    featured: true,
  },
  {
    id: "ai-genai",
    title: "Generative AI & Prompt Engineering",
    category: "Artificial Intelligence",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Understand LLMs, ChatGPT, Gemini, and build AI-powered applications with prompt engineering and API integrations.",
    modules: [
      "Introduction to GenAI",
      "Prompt Engineering Techniques",
      "LLM APIs & OpenAI",
      "Building AI Applications",
      "LangChain & RAG",
      "Real-world Projects",
    ],
    badge: "New",
    featured: true,
  },
  {
    id: "devops",
    title: "DevOps & Cloud Engineering",
    category: "Cloud & DevOps",
    duration: "4 Months",
    level: "Intermediate",
    description:
      "Learn Docker, Kubernetes, CI/CD pipelines, AWS, and everything you need to become a DevOps engineer.",
    modules: [
      "Linux & Bash Scripting",
      "Docker & Containerization",
      "Kubernetes Orchestration",
      "CI/CD with GitHub Actions",
      "AWS & Cloud Fundamentals",
      "Infrastructure as Code",
    ],
    badge: "High Demand",
    featured: true,
  },
  {
    id: "mobile-dev",
    title: "React Native Mobile Development",
    category: "Mobile Development",
    duration: "4 Months",
    level: "Intermediate",
    description:
      "Build cross-platform mobile apps for iOS and Android using React Native, Expo, and modern mobile patterns.",
    modules: [
      "React Native Fundamentals",
      "Navigation & Routing",
      "State Management",
      "Native Device APIs",
      "Backend Integration",
      "App Store Deployment",
    ],
    badge: "Popular",
    featured: false,
  },
  {
    id: "java-backend",
    title: "Java Backend Development",
    category: "Backend Development",
    duration: "5 Months",
    level: "Beginner",
    description:
      "Master Core Java, Spring Boot, Hibernate, and microservices architecture to build scalable enterprise applications.",
    modules: [
      "Core Java Concepts",
      "OOP & Design Patterns",
      "Spring Boot Framework",
      "Hibernate & JPA",
      "Microservices Architecture",
      "Testing & Deployment",
    ],
    badge: "",
    featured: false,
  },
  {
    id: "python-programming",
    title: "Python Programming Masterclass",
    category: "Programming",
    duration: "2 Months",
    level: "Beginner",
    description:
      "Start from zero and master Python — the world's most versatile programming language used in web, data, and AI.",
    modules: [
      "Python Basics & Syntax",
      "Data Structures",
      "OOP with Python",
      "File I/O & Modules",
      "Web Scraping",
      "Mini Projects",
    ],
    badge: "Best for Beginners",
    featured: false,
  },
  {
    id: "ui-ux",
    title: "UI/UX Design with Figma",
    category: "Design",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Learn user experience principles, wireframing, prototyping, and modern design systems using Figma.",
    modules: [
      "UX Research & Principles",
      "Wireframing & Prototyping",
      "Figma Advanced Tools",
      "Design Systems",
      "User Testing",
      "Portfolio Projects",
    ],
    badge: "",
    featured: false,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Fundamentals",
    category: "Security",
    duration: "4 Months",
    level: "Intermediate",
    description:
      "Understand ethical hacking, network security, penetration testing, and prepare for industry certifications.",
    modules: [
      "Security Fundamentals",
      "Network & Web Security",
      "Ethical Hacking",
      "Penetration Testing",
      "Incident Response",
      "Certification Prep",
    ],
    badge: "",
    featured: false,
  },
];

export const FEATURES = [
  {
    icon: "🎯",
    title: "Industry-Aligned Curriculum",
    description:
      "Our courses are designed with input from top tech companies to ensure you learn exactly what employers need.",
  },
  {
    icon: "👨‍💻",
    title: "Learn by Building",
    description:
      "Every course includes real-world projects, case studies, and a capstone project for your portfolio.",
  },
  {
    icon: "🧑‍🏫",
    title: "Expert Mentors",
    description:
      "Learn from industry professionals with 10+ years of experience at top technology companies.",
  },
  {
    icon: "📜",
    title: "Recognised Certification",
    description:
      "Receive industry-recognised certificates upon completion that you can showcase on LinkedIn and resumes.",
  },
  {
    icon: "💼",
    title: "Placement Support",
    description:
      "Dedicated placement cell with 200+ hiring partners to help you land your dream tech job.",
  },
  {
    icon: "🔄",
    title: "Lifetime Access",
    description:
      "Get lifetime access to course materials, updates, and our alumni community after enrollment.",
  },
];

export const STEPS = [
  {
    step: "01",
    title: "Choose Your Course",
    description:
      "Browse our catalog and select the course that aligns with your career goals and current skill level.",
  },
  {
    step: "02",
    title: "Learn & Build Projects",
    description:
      "Follow structured lessons, attend live sessions, and build real-world projects guided by expert mentors.",
  },
  {
    step: "03",
    title: "Get Certified & Placed",
    description:
      "Earn your certificate, polish your portfolio, and get connected to our hiring partner network.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Full Stack Developer",
    company: "TCS",
    avatar: "PS",
    rating: 5,
    text: "Bridge Technology completely transformed my career. I went from a non-tech background to landing a full-stack developer role at TCS in just 8 months. The mentors are incredibly supportive!",
  },
  {
    name: "Rahul Verma",
    role: "Data Analyst",
    company: "Infosys",
    avatar: "RV",
    rating: 5,
    text: "The Data Science course at Bridge Technology is top-notch. Real projects, great content, and the placement support was phenomenal. Got my first job within 2 months of completing the course.",
  },
  {
    name: "Ananya Krishnan",
    role: "ML Engineer",
    company: "Wipro",
    avatar: "AK",
    rating: 5,
    text: "I had tried multiple online courses but nothing compared to the structured learning at Bridge Technology. The GenAI course was cutting-edge and the instructors were always available.",
  },
  {
    name: "Karan Mehta",
    role: "DevOps Engineer",
    company: "HCL",
    avatar: "KM",
    rating: 5,
    text: "Best investment I have made in my career. The DevOps course covered everything from Docker to Kubernetes and the live projects gave me the confidence to crack interviews.",
  },
  {
    name: "Sneha Nair",
    role: "Frontend Developer",
    company: "Cognizant",
    avatar: "SN",
    rating: 5,
    text: "The Full Stack course is extremely comprehensive. I especially loved the React and Next.js modules. Bridge Technology's placement team helped me get interviews at 10+ companies!",
  },
  {
    name: "Amit Patel",
    role: "Java Developer",
    company: "Accenture",
    avatar: "AP",
    rating: 5,
    text: "From a fresher to a Java developer in 5 months — that is the Bridge Technology effect! The Spring Boot projects in the curriculum were exactly what interviewers asked about.",
  },
];

export const FAQS = [
  {
    q: "Do I need prior coding experience to enroll?",
    a: "Not at all! We have courses designed for complete beginners. Our instructors guide you from the very basics, and you will build real projects from day one.",
  },
  {
    q: "Are the classes live or recorded?",
    a: "We offer both — live interactive sessions with expert instructors AND recorded videos for flexible learning. All live sessions are recorded for future reference.",
  },
  {
    q: "What is the duration of courses?",
    a: "Course duration varies from 2 to 6 months depending on the program. Each course page provides a detailed timeline and weekly commitment required.",
  },
  {
    q: "Will I get placement assistance?",
    a: "Yes! We have a dedicated placement cell with 200+ hiring partners. We provide resume building, mock interviews, and direct referrals to companies.",
  },
  {
    q: "Is the certification recognised by companies?",
    a: "Our certificates are recognised by leading IT companies in India. We continuously update our curriculum in collaboration with industry partners.",
  },
  {
    q: "What happens if I miss a class?",
    a: "All live sessions are recorded and available within 24 hours. You also get lifetime access to all course materials so you can learn at your own pace.",
  },
  {
    q: "Is there an EMI option available?",
    a: "Yes! We offer easy EMI options with 0% interest for 3 and 6 months. Contact our team for personalised payment plans.",
  },
  {
    q: "How do I get support during the course?",
    a: "You get access to a dedicated WhatsApp support group, 1-on-1 mentor sessions, and a community forum where all queries are addressed within 24 hours.",
  },
];

