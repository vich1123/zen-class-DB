const students = [
    {
      "name": "Alice",
      "tasks": [],
      "attendance": [{ "date": "2020-10-16", "status": "absent" }],
      "codekata_problems_solved": 20
    },
    {
      "name": "Bob",
      "tasks": [],
      "attendance": [{ "date": "2020-10-17", "status": "present" }],
      "codekata_problems_solved": 15
    },
    { 
      "name": "Charlie",
      "tasks": [1, 2],
      "attendance": [{ "date": "2020-10-18", "status": "absent" }],
      "codekata_problems_solved": 30
    }
  ];
  
  // Query: Get names of students who were absent
  const absentStudents = students.filter(student =>
    student.attendance.some(att => att.status === "absent")
  ).map(student => student.name);
  
  console.log("Absent Students:", absentStudents);
  
  // Query: Get students who solved more than 20 problems
  const highScorers = students.filter(student => student.codekata_problems_solved > 20)
    .map(student => student.name);
  
  console.log("High Scorers:", highScorers);

  
  const topics = [
    {
      "topic_name": "JavaScript",
      "date_covered": "2020-10-10",
      "tasks": [{ "task_name": "JS Task 1", "status": "completed" }]
    },
    {
      "topic_name": "Node.js",
      "date_covered": "2020-10-20",
      "tasks": [{ "task_name": "Node Task 1", "status": "pending" }]
    }
  ];
  
  // Query: Get topics with all tasks completed
  const completedTopics = topics.filter(topic =>
    topic.tasks.every(task => task.status === "completed")
  ).map(topic => topic.topic_name);
  
  console.log("Topics with all tasks completed:", completedTopics);

  
  const users = [
    { "user_id": 1, "problems_solved": 20 },
    { "user_id": 2, "problems_solved": 15 }
  ];
  
  // Query: Get users who solved more than 15 problems
  const topUsers = users.filter(user => user.problems_solved > 15)
    .map(user => user.user_id);
  
  console.log("Top Users (solved > 15 problems):", topUsers);

  
  const companies = [
    {
      "company_name": "Google",
      "date": "2020-10-16",
      "appeared_students": [{ "name": "Alice" }, { "name": "Bob" }]
    },
    {
      "company_name": "Amazon",
      "date": "2020-10-25",
      "appeared_students": [{ "name": "Charlie" }]
    }
  ];
  
  // Query: Get all companies where "Alice" appeared
  const aliceCompanies = companies.filter(company =>
    company.appeared_students.some(student => student.name === "Alice")
  ).map(company => company.company_name);
  
  console.log("Companies where Alice appeared:", aliceCompanies);

  
  const mentors = [
    { "mainkandan": "Mentor A", "mentees": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
    { "akbar": "Mentor B", "mentees": [1, 2, 3] }
  ];
  
  // Query: Get mentors with more than 5 mentees
  const mentorsWithManyMentees = mentors.filter(mentor =>
    Object.values(mentor).some(value => Array.isArray(value) && value.length > 5)
  ).map(mentor => Object.values(mentor)[0]);
  
  console.log("Mentors with more than 5 mentees:", mentorsWithManyMentees);

  
  const advancedTopics = [
    { "topic_name": "Tailwind CSS", "date_covered": "2024-10-15", "tasks": [{ "task_name": "No assessment available yet" }] },
    { "topic_name": "Tailwind CSS Advanced", "date_covered": "2024-10-17", "tasks": [{ "task_name": "create CSS landing page", "status": "completed" }] },
    { "topic_name": "Live Practice 2", "date_covered": "2024-10-29", "tasks": [{ "task_name": "Todo App", "status": "completed" }] }
  ];
  
  // Query: Get topics where tasks are completed
  const topicsWithCompletedTasks = advancedTopics.filter(topic =>
    topic.tasks.some(task => task.status === "completed")
  ).map(topic => topic.topic_name);
  
  console.log("Topics with completed tasks:", topicsWithCompletedTasks);

  
