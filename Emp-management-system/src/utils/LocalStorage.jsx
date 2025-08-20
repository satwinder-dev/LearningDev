localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Satwinder",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Build Login Page",
        description: "Create responsive login page with validation",
        date: "2025-08-20",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in navbar for mobile view",
        date: "2025-08-19",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Write Unit Tests",
        description: "Add unit tests for authentication flow",
        date: "2025-08-22",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 2,
    firstName: "Shivam",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Dashboard UI",
        description: "Prepare Figma design for dashboard analytics",
        date: "2025-08-18",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Implement Dark Mode",
        description: "Add dark mode toggle to dashboard",
        date: "2025-08-21",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "API Integration",
        description: "Integrate user stats API with dashboard cards",
        date: "2025-08-23",
        category: "Integration",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Optimize Images",
        description: "Compress images for faster load speed",
        date: "2025-08-20",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Console Warnings",
        description: "Clean up React console warnings",
        date: "2025-08-22",
        category: "Bug Fix",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Setup Linting",
        description: "Configure ESLint + Prettier",
        date: "2025-08-25",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 4,
    firstName: "Aditya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Update Dependencies",
        description: "Upgrade React to latest stable version",
        date: "2025-08-19",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Footer Links",
        description: "Broken links in footer need fixing",
        date: "2025-08-21",
        category: "Bug Fix",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Research PWA",
        description: "Explore adding offline support with PWA",
        date: "2025-08-26",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 5,
    firstName: "Krishna",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Release Notes",
        description: "Write release notes for upcoming sprint",
        date: "2025-08-19",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix 404 Page",
        description: "Style and improve the 404 error page",
        date: "2025-08-21",
        category: "Bug Fix",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Setup Git Hooks",
        description: "Configure Husky for pre-commit linting",
        date: "2025-08-24",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
];


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
