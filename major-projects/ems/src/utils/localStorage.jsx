

const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Compile and submit the financial report for October.",
        taskDate: "2024-12-24",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Organize and lead the weekly team meeting.",
        taskDate: "2024-12-26",
        category: "Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Budget Analysis",
        taskDescription: "Review the budget and highlight discrepancies.",
        taskDate: "2024-12-27",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Client Presentation",
        taskDescription: "Prepare slides for the upcoming client pitch.",
        taskDate: "2024-12-28",
        category: "Sales",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "CRM Update",
        taskDescription: "Ensure customer interactions are properly logged.",
        taskDate: "2024-12-25",
        category: "CRM",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Sales Strategy Meeting",
        taskDescription: "Discuss next quarter's sales goals.",
        taskDate: "2024-12-30",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Pipeline Review",
        taskDescription: "Review current sales pipeline and prioritize leads.",
        taskDate: "2024-12-29",
        category: "Sales",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Debug Login Feature",
        taskDescription: "Fix the login timeout issue in the application.",
        taskDate: "2024-12-23",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "API Integration",
        taskDescription: "Integrate the payment API for the new app.",
        taskDate: "2024-12-29",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review the codebase for performance optimizations.",
        taskDate: "2024-12-27",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Test Cases",
        taskDescription: "Write unit tests for the new features.",
        taskDate: "2024-12-25",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Social Media Strategy",
        taskDescription: "Plan campaigns for January 2025.",
        taskDate: "2024-12-25",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Ad Performance Analysis",
        taskDescription: "Evaluate the performance of recent ad campaigns.",
        taskDate: "2024-12-26",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Product Launch Coordination",
        taskDescription: "Work with the team for the upcoming product launch.",
        taskDate: "2024-12-31",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Inventory Audit",
        taskDescription: "Check stock levels and update the system.",
        taskDate: "2024-12-22",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Vendor Payment Follow-Up",
        taskDescription: "Ensure all pending vendor payments are processed.",
        taskDate: "2024-12-30",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Equipment Maintenance",
        taskDescription: "Schedule maintenance for warehouse equipment.",
        taskDate: "2024-12-28",
        category: "Operations",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
]
export const setLocalStorage = () =>{
  localStorage.setItem('employees', JSON.stringify(employees))
  // console.log(employees)
  localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return {employees , admin}
}