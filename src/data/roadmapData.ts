import { WeekData, KnowledgeArea } from '../types';

export const weeksData: WeekData[] = [
  {
    id: 1,
    title: "Frontend Foundation - Next.js Fundamentals",
    description: "Master Next.js routing, SSR, and modern React patterns",
    topics: ["Next.js App Router", "Server-Side Rendering", "Static Generation", "File-based Routing"],
    resources: [
      {
        type: 'video',
        title: 'Next.js 14 Complete Course',
        url: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
        duration: '3 hours'
      },
      {
        type: 'documentation',
        title: 'Next.js Official Documentation',
        url: 'https://nextjs.org/docs'
      },
      {
        type: 'github',
        title: 'Next.js Examples Repository',
        url: 'https://github.com/vercel/next.js/tree/canary/examples'
      }
    ],
    checklist: [
      { id: 'w1-setup', task: 'Set up Next.js 14 project with TypeScript', completed: false },
      { id: 'w1-routing', task: 'Create pages using App Router', completed: false },
      { id: 'w1-ssr', task: 'Implement Server-Side Rendering', completed: false },
      { id: 'w1-ssg', task: 'Create static pages with generateStaticParams', completed: false },
      { id: 'w1-layouts', task: 'Design nested layouts and templates', completed: false }
    ],
    project: {
      title: "Personal Portfolio with Next.js",
      description: "Build a responsive portfolio website using Next.js 14",
      requirements: ["Multiple pages with routing", "SSR for blog posts", "Responsive design", "SEO optimization"],
      deliverables: ["Deployed portfolio site", "Clean URL structure", "Fast loading times"]
    }
  },
  {
    id: 2,
    title: "Advanced Next.js & Performance",
    description: "Deep dive into Next.js optimization and advanced features",
    topics: ["Image Optimization", "Code Splitting", "Middleware", "API Routes"],
    resources: [
      {
        type: 'video',
        title: 'Next.js Performance Optimization',
        url: 'https://www.youtube.com/watch?v=CWjKXfJLdXw',
        duration: '2 hours'
      },
      {
        type: 'article',
        title: 'Next.js Image Optimization Guide',
        url: 'https://nextjs.org/docs/basic-features/image-optimization'
      },
      {
        type: 'github',
        title: 'Next.js Performance Best Practices',
        url: 'https://github.com/vercel/next.js/discussions/15341'
      }
    ],
    checklist: [
      { id: 'w2-images', task: 'Optimize images with Next.js Image component', completed: false },
      { id: 'w2-middleware', task: 'Implement authentication middleware', completed: false },
      { id: 'w2-api', task: 'Create API routes for data fetching', completed: false },
      { id: 'w2-performance', task: 'Analyze and optimize Core Web Vitals', completed: false },
      { id: 'w2-deployment', task: 'Deploy to Vercel with environment variables', completed: false }
    ],
    project: {
      title: "Blog Platform with CMS",
      description: "Create a blog platform with dynamic content management",
      requirements: ["Dynamic routing for posts", "Image optimization", "SEO meta tags", "Search functionality"],
      deliverables: ["Functional blog platform", "Admin interface", "Performance score >90"]
    }
  },
  {
    id: 3,
    title: "Data Fetching with React Query",
    description: "Master modern data fetching patterns and state management",
    topics: ["TanStack Query", "Caching Strategies", "Optimistic Updates", "Error Boundaries"],
    resources: [
      {
        type: 'video',
        title: 'React Query Complete Guide',
        url: 'https://www.youtube.com/watch?v=novnyCaa7To',
        duration: '4 hours'
      },
      {
        type: 'documentation',
        title: 'TanStack Query Documentation',
        url: 'https://tanstack.com/query/latest'
      },
      {
        type: 'github',
        title: 'React Query Examples',
        url: 'https://github.com/tannerlinsley/react-query/tree/master/examples'
      }
    ],
    checklist: [
      { id: 'w3-setup', task: 'Set up React Query with Next.js', completed: false },
      { id: 'w3-queries', task: 'Implement data fetching with useQuery', completed: false },
      { id: 'w3-mutations', task: 'Handle form submissions with useMutation', completed: false },
      { id: 'w3-caching', task: 'Configure cache policies and invalidation', completed: false },
      { id: 'w3-offline', task: 'Implement offline support and background sync', completed: false }
    ],
    project: {
      title: "Task Management App",
      description: "Build a real-time task management application",
      requirements: ["CRUD operations", "Real-time updates", "Offline support", "Optimistic updates"],
      deliverables: ["Working task app", "Smooth UX", "Error handling"]
    }
  },
  {
    id: 4,
    title: "Advanced React Patterns & Error Handling",
    description: "Implement robust error handling and advanced React patterns",
    topics: ["Error Boundaries", "Suspense", "Custom Hooks", "Context Optimization"],
    resources: [
      {
        type: 'video',
        title: 'Advanced React Patterns',
        url: 'https://www.youtube.com/watch?v=3XaXKiXtNjw',
        duration: '3 hours'
      },
      {
        type: 'article',
        title: 'Error Boundaries in React',
        url: 'https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary'
      },
      {
        type: 'github',
        title: 'React Error Boundary Examples',
        url: 'https://github.com/bvaughn/react-error-boundary'
      }
    ],
    checklist: [
      { id: 'w4-boundaries', task: 'Implement error boundaries for components', completed: false },
      { id: 'w4-suspense', task: 'Use Suspense for data fetching', completed: false },
      { id: 'w4-hooks', task: 'Create custom hooks for business logic', completed: false },
      { id: 'w4-context', task: 'Optimize Context to prevent re-renders', completed: false },
      { id: 'w4-testing', task: 'Write unit tests for error scenarios', completed: false }
    ],
    project: {
      title: "E-commerce Product Catalog",
      description: "Create a robust product catalog with error handling",
      requirements: ["Error boundaries", "Loading states", "Search and filters", "Responsive design"],
      deliverables: ["Production-ready catalog", "Comprehensive error handling", "Test coverage"]
    }
  },
  {
    id: 5,
    title: "Backend Fundamentals - Express.js",
    description: "Build scalable backend APIs with Express.js and TypeScript",
    topics: ["Express.js Setup", "Middleware", "Routing", "Request Validation"],
    resources: [
      {
        type: 'video',
        title: 'Node.js Express.js Course',
        url: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
        duration: '8 hours'
      },
      {
        type: 'documentation',
        title: 'Express.js Documentation',
        url: 'https://expressjs.com/'
      },
      {
        type: 'github',
        title: 'Express.js TypeScript Starter',
        url: 'https://github.com/microsoft/TypeScript-Node-Starter'
      }
    ],
    checklist: [
      { id: 'w5-setup', task: 'Set up Express.js with TypeScript', completed: false },
      { id: 'w5-middleware', task: 'Implement custom middleware functions', completed: false },
      { id: 'w5-routing', task: 'Create RESTful API routes', completed: false },
      { id: 'w5-validation', task: 'Add request validation with Joi/Zod', completed: false },
      { id: 'w5-testing', task: 'Write API tests with Jest/Supertest', completed: false }
    ],
    project: {
      title: "RESTful API for Blog",
      description: "Create a complete backend API for blog management",
      requirements: ["CRUD operations", "Input validation", "Error handling", "API documentation"],
      deliverables: ["Working API", "Postman collection", "API documentation"]
    }
  },
  {
    id: 6,
    title: "Service-Controller Pattern & Architecture",
    description: "Implement clean architecture patterns for maintainable code",
    topics: ["MVC Pattern", "Service Layer", "Repository Pattern", "Dependency Injection"],
    resources: [
      {
        type: 'video',
        title: 'Clean Architecture in Node.js',
        url: 'https://www.youtube.com/watch?v=CnailTcJV_U',
        duration: '2 hours'
      },
      {
        type: 'article',
        title: 'Node.js Clean Architecture Guide',
        url: 'https://dev.to/dev_emeka/implementing-clean-architecture-in-nodejs-4d'
      },
      {
        type: 'github',
        title: 'Clean Architecture Node.js Example',
        url: 'https://github.com/jbuget/nodejs-clean-architecture-app'
      }
    ],
    checklist: [
      { id: 'w6-controllers', task: 'Separate controllers from business logic', completed: false },
      { id: 'w6-services', task: 'Create service layer for business logic', completed: false },
      { id: 'w6-repository', task: 'Implement repository pattern for data access', completed: false },
      { id: 'w6-di', task: 'Set up dependency injection container', completed: false },
      { id: 'w6-refactor', task: 'Refactor existing code to clean architecture', completed: false }
    ],
    project: {
      title: "User Management System",
      description: "Build a complete user management system with clean architecture",
      requirements: ["Clean separation of concerns", "Testable code", "SOLID principles", "Authentication"],
      deliverables: ["Well-structured API", "Unit tests", "Integration tests"]
    }
  },
  {
    id: 7,
    title: "API Robustness & Validation",
    description: "Build bulletproof APIs with comprehensive validation and error handling",
    topics: ["Input Validation", "Error Handling", "Rate Limiting", "API Security"],
    resources: [
      {
        type: 'video',
        title: 'Building Secure APIs',
        url: 'https://www.youtube.com/watch?v=f2EqECiTBL8',
        duration: '3 hours'
      },
      {
        type: 'article',
        title: 'API Security Best Practices',
        url: 'https://owasp.org/www-project-api-security/'
      },
      {
        type: 'github',
        title: 'Express Security Middleware',
        url: 'https://github.com/helmetjs/helmet'
      }
    ],
    checklist: [
      { id: 'w7-validation', task: 'Implement comprehensive input validation', completed: false },
      { id: 'w7-errors', task: 'Create global error handling middleware', completed: false },
      { id: 'w7-rate-limit', task: 'Add rate limiting to protect APIs', completed: false },
      { id: 'w7-security', task: 'Implement security headers and CORS', completed: false },
      { id: 'w7-logging', task: 'Add structured logging with Winston', completed: false }
    ],
    project: {
      title: "Secure E-commerce API",
      description: "Create a production-ready e-commerce API with security measures",
      requirements: ["Input validation", "Rate limiting", "Secure authentication", "Audit logging"],
      deliverables: ["Secure API", "Security documentation", "Performance tests"]
    }
  },
  {
    id: 8,
    title: "Database Design & MongoDB",
    description: "Master database design with MongoDB and advanced querying",
    topics: ["MongoDB Schema Design", "Indexing", "Aggregation Pipeline", "Transactions"],
    resources: [
      {
        type: 'video',
        title: 'MongoDB Complete Course',
        url: 'https://www.youtube.com/watch?v=J6mDkcqU_ZE',
        duration: '4 hours'
      },
      {
        type: 'documentation',
        title: 'MongoDB Documentation',
        url: 'https://docs.mongodb.com/'
      },
      {
        type: 'github',
        title: 'MongoDB Schema Design Patterns',
        url: 'https://github.com/mongodb-developer/mongodb-schema-design-patterns'
      }
    ],
    checklist: [
      { id: 'w8-schema', task: 'Design optimal MongoDB schemas', completed: false },
      { id: 'w8-indexes', task: 'Create compound indexes for performance', completed: false },
      { id: 'w8-aggregation', task: 'Build complex aggregation pipelines', completed: false },
      { id: 'w8-transactions', task: 'Implement multi-document transactions', completed: false },
      { id: 'w8-mongoose', task: 'Use Mongoose for schema validation', completed: false }
    ],
    project: {
      title: "Analytics Dashboard Backend",
      description: "Build a backend for analytics with complex data operations",
      requirements: ["Optimized queries", "Data aggregation", "Real-time updates", "Performance monitoring"],
      deliverables: ["High-performance API", "Database optimization", "Query performance metrics"]
    }
  },
  {
    id: 9,
    title: "DevOps Fundamentals - Docker",
    description: "Containerize applications and set up development environments",
    topics: ["Docker Basics", "Multi-stage Builds", "Docker Compose", "Container Orchestration"],
    resources: [
      {
        type: 'video',
        title: 'Docker Complete Course',
        url: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
        duration: '5 hours'
      },
      {
        type: 'documentation',
        title: 'Docker Documentation',
        url: 'https://docs.docker.com/'
      },
      {
        type: 'github',
        title: 'Docker Examples',
        url: 'https://github.com/docker/awesome-compose'
      }
    ],
    checklist: [
      { id: 'w9-dockerfile', task: 'Create optimized Dockerfiles', completed: false },
      { id: 'w9-multistage', task: 'Implement multi-stage builds', completed: false },
      { id: 'w9-compose', task: 'Set up docker-compose for development', completed: false },
      { id: 'w9-volumes', task: 'Configure volumes and environment variables', completed: false },
      { id: 'w9-networks', task: 'Set up container networking', completed: false }
    ],
    project: {
      title: "Dockerized Full-Stack App",
      description: "Containerize a complete application with database",
      requirements: ["Frontend container", "Backend container", "Database container", "Development setup"],
      deliverables: ["Docker setup", "docker-compose.yml", "Development guide"]
    }
  },
  {
    id: 10,
    title: "CI/CD with GitHub Actions",
    description: "Automate testing, building, and deployment processes",
    topics: ["GitHub Actions", "Automated Testing", "Build Pipeline", "Deployment Strategies"],
    resources: [
      {
        type: 'video',
        title: 'GitHub Actions Tutorial',
        url: 'https://www.youtube.com/watch?v=R8_veQiYBjI',
        duration: '3 hours'
      },
      {
        type: 'documentation',
        title: 'GitHub Actions Documentation',
        url: 'https://docs.github.com/en/actions'
      },
      {
        type: 'github',
        title: 'GitHub Actions Examples',
        url: 'https://github.com/actions/starter-workflows'
      }
    ],
    checklist: [
      { id: 'w10-workflow', task: 'Create GitHub Actions workflow', completed: false },
      { id: 'w10-testing', task: 'Set up automated testing pipeline', completed: false },
      { id: 'w10-lint', task: 'Add linting and code quality checks', completed: false },
      { id: 'w10-deploy', task: 'Implement automated deployment', completed: false },
      { id: 'w10-notifications', task: 'Set up build notifications', completed: false }
    ],
    project: {
      title: "Complete CI/CD Pipeline",
      description: "Set up end-to-end automation for a full-stack application",
      requirements: ["Test automation", "Build automation", "Deployment automation", "Monitoring"],
      deliverables: ["Working CI/CD pipeline", "Deployment documentation", "Monitoring setup"]
    }
  },
  {
    id: 11,
    title: "System Design Fundamentals",
    description: "Learn to design scalable and maintainable systems",
    topics: ["System Architecture", "Load Balancing", "Database Scaling", "Microservices"],
    resources: [
      {
        type: 'video',
        title: 'System Design Course',
        url: 'https://www.youtube.com/watch?v=bUHFg8CZFws',
        duration: '4 hours'
      },
      {
        type: 'article',
        title: 'System Design Primer',
        url: 'https://github.com/donnemartin/system-design-primer'
      },
      {
        type: 'github',
        title: 'System Design Interview',
        url: 'https://github.com/checkcheckzz/system-design-interview'
      }
    ],
    checklist: [
      { id: 'w11-architecture', task: 'Design system architecture diagrams', completed: false },
      { id: 'w11-scaling', task: 'Plan horizontal and vertical scaling', completed: false },
      { id: 'w11-database', task: 'Design database scaling strategy', completed: false },
      { id: 'w11-microservices', task: 'Evaluate microservices vs monolith', completed: false },
      { id: 'w11-api-design', task: 'Design API-first architecture', completed: false }
    ],
    project: {
      title: "System Design Document",
      description: "Create a comprehensive system design for a social media platform",
      requirements: ["Architecture diagrams", "Scaling strategy", "Database design", "API design"],
      deliverables: ["System design document", "Architecture diagrams", "Technical specifications"]
    }
  },
  {
    id: 12,
    title: "Advanced Topics & Production Readiness",
    description: "Master caching, monitoring, and production deployment strategies",
    topics: ["Redis Caching", "Monitoring & Logging", "Error Tracking", "Performance Optimization"],
    resources: [
      {
        type: 'video',
        title: 'Production-Ready Node.js',
        url: 'https://www.youtube.com/watch?v=4_mXjapIJw4',
        duration: '3 hours'
      },
      {
        type: 'article',
        title: 'Node.js Production Best Practices',
        url: 'https://nodejs.org/en/docs/guides/nodejs-docker-webapp/'
      },
      {
        type: 'github',
        title: 'Production Ready Checklist',
        url: 'https://github.com/goldbergyoni/nodebestpractices'
      }
    ],
    checklist: [
      { id: 'w12-caching', task: 'Implement Redis caching strategy', completed: false },
      { id: 'w12-monitoring', task: 'Set up application monitoring', completed: false },
      { id: 'w12-logging', task: 'Implement structured logging', completed: false },
      { id: 'w12-health', task: 'Create health check endpoints', completed: false },
      { id: 'w12-performance', task: 'Optimize application performance', completed: false }
    ],
    project: {
      title: "Production Deployment",
      description: "Deploy a complete full-stack application to production",
      requirements: ["Production environment", "Monitoring setup", "Error tracking", "Performance optimization"],
      deliverables: ["Live application", "Monitoring dashboard", "Deployment documentation"]
    }
  }
];

export const knowledgeAreas: KnowledgeArea[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    color: 'bg-blue-500',
    icon: 'Monitor',
    items: [
      { id: 'frontend-1', task: 'Next.js App Router and file-based routing', completed: false },
      { id: 'frontend-2', task: 'Server-Side Rendering (SSR) and Static Generation', completed: false },
      { id: 'frontend-3', task: 'React Query setup and caching strategies', completed: false },
      { id: 'frontend-4', task: 'API error handling and loading states', completed: false },
      { id: 'frontend-5', task: 'Responsive UI design with Tailwind CSS', completed: false },
      { id: 'frontend-6', task: 'Web accessibility (WCAG) compliance', completed: false },
      { id: 'frontend-7', task: 'Performance optimization and Core Web Vitals', completed: false },
      { id: 'frontend-8', task: 'Progressive Web App (PWA) features', completed: false }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    color: 'bg-green-500',
    icon: 'Server',
    items: [
      { id: 'backend-1', task: 'Express.js with service/controller pattern', completed: false },
      { id: 'backend-2', task: 'RESTful API design and implementation', completed: false },
      { id: 'backend-3', task: 'API error handling middleware', completed: false },
      { id: 'backend-4', task: 'Request validation with Joi/Zod', completed: false },
      { id: 'backend-5', task: 'MongoDB schema design and indexing', completed: false },
      { id: 'backend-6', task: 'Authentication and JWT handling', completed: false },
      { id: 'backend-7', task: 'Database transactions and error handling', completed: false },
      { id: 'backend-8', task: 'API rate limiting and security', completed: false }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    color: 'bg-orange-500',
    icon: 'Cloud',
    items: [
      { id: 'devops-1', task: 'Docker multistage build setup', completed: false },
      { id: 'devops-2', task: 'docker-compose with volumes and environment variables', completed: false },
      { id: 'devops-3', task: 'CI/CD pipeline with GitHub Actions', completed: false },
      { id: 'devops-4', task: 'Automated testing and deployment', completed: false },
      { id: 'devops-5', task: 'Environment configuration management', completed: false },
      { id: 'devops-6', task: 'Logging with winston/pino', completed: false },
      { id: 'devops-7', task: 'Health checks and monitoring', completed: false },
      { id: 'devops-8', task: 'Container orchestration basics', completed: false }
    ]
  },
  {
    id: 'system-design',
    title: 'System Design & Architecture',
    color: 'bg-purple-500',
    icon: 'Network',
    items: [
      { id: 'system-1', task: 'API-first design methodology', completed: false },
      { id: 'system-2', task: 'Rate limiting and caching strategies', completed: false },
      { id: 'system-3', task: 'Redis implementation for caching', completed: false },
      { id: 'system-4', task: 'Graceful failure handling', completed: false },
      { id: 'system-5', task: 'Microservices vs monolith decision making', completed: false },
      { id: 'system-6', task: 'Database scaling strategies', completed: false },
      { id: 'system-7', task: 'Load balancing and high availability', completed: false },
      { id: 'system-8', task: 'Performance monitoring and optimization', completed: false }
    ]
  }
];

// Debug verification
console.log('roadmapData.ts - knowledgeAreas:', knowledgeAreas);
console.log('roadmapData.ts - knowledgeAreas length:', knowledgeAreas.length);
console.log('roadmapData.ts - First area items:', knowledgeAreas[0]?.items);