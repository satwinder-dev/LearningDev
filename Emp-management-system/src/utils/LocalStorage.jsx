localStorage.clear()

const employees =[
  {
    "id": 1,
    "firstName": "Satwinder",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Build Login Page",
        "description": "Create a responsive login page with validation",
        "date": "2025-08-20",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Navbar Bug",
        "description": "Resolve alignment issue in the navbar for mobile",
        "date": "2025-08-19",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Write Unit Tests",
        "description": "Add unit tests for authentication flow",
        "date": "2025-08-22",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix API Timeout",
        "description": "Investigate API response delays",
        "date": "2025-08-23",
        "category": "Integration",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },{
        "title": "Fix Navbar Bug",
        "description": "Resolve alignment issue in the navbar for mobile",
        "date": "2025-08-19",
        "category": "Bug Fix",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write Unit Tests",
        "description": "Add unit tests for authentication flow",
        "date": "2025-08-22",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 2,
    "firstName": "Shivam",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      
      {
        "title": "Implement Dark Mode",
        "description": "Add dark mode toggle with persistence",
        "date": "2025-08-21",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "API Integration",
        "description": "Integrate user stats API",
        "date": "2025-08-23",
        "category": "Integration",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Design Dashboard UI",
        "description": "Prepare Figma design for dashboard",
        "date": "2025-08-18",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Implement Dark Mode",
        "description": "Add dark mode toggle with persistence",
        "date": "2025-08-21",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "API Integration",
        "description": "Integrate user stats API",
        "date": "2025-08-23",
        "category": "Integration",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 3,
    "firstName": "Ananya",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Content Writing",
        "description": "Write blog post on UI/UX trends",
        "date": "2025-08-20",
        "category": "Content",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "SEO Optimization",
        "description": "Optimize website for keywords",
        "date": "2025-08-21",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Proofread Docs",
        "description": "Check technical documentation for errors",
        "date": "2025-08-22",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Campaign Analysis",
        "description": "Analyze last week’s ad campaign",
        "date": "2025-08-23",
        "category": "Analytics",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 4,
    "firstName": "Rohan",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Database Backup",
        "description": "Schedule automatic backups",
        "date": "2025-08-19",
        "category": "Database",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Server Monitoring",
        "description": "Set up alerts for downtime",
        "date": "2025-08-20",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Optimize Queries",
        "description": "Improve database performance",
        "date": "2025-08-22",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 5,
    "firstName": "Priya",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Customer Feedback",
        "description": "Collect feedback via survey",
        "date": "2025-08-19",
        "category": "Support",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Bug Report Verification",
        "description": "Validate reported bugs",
        "date": "2025-08-20",
        "category": "QA",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Regression Testing",
        "description": "Run test cases on latest build",
        "date": "2025-08-22",
        "category": "QA",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Support Tickets",
        "description": "Resolve pending customer tickets",
        "date": "2025-08-23",
        "category": "Support",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  
]


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  //   console.log(admin , employees)
  return { employees, admin };
};
