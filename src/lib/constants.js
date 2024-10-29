const initialGroups = [
  {
    groupId: 1,
    groupName: "Personal",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Read a book", completed: false },
      { id: 3, text: "Practice coding", completed: true },
    ],
  },
  {
    groupId: 2,
    groupName: "Household Chores",
    tasks: [
      { id: 4, text: "Clean the house", completed: false },
      { id: 5, text: "Do laundry", completed: true },
      { id: 6, text: "Wash dishes", completed: false },
    ],
  },
  {
    groupId: 3,
    groupName: "Fitness",
    tasks: [
      { id: 7, text: "Go to the gym", completed: true },
      { id: 8, text: "Take a walk", completed: false },
      { id: 9, text: "Do yoga", completed: false },
    ],
  },
  {
    groupId: 4,
    groupName: "Social",
    tasks: [
      { id: 10, text: "Call a friend", completed: false },
      { id: 11, text: "Plan a get-together", completed: false },
      { id: 12, text: "Send birthday wishes", completed: true },
    ],
  },
];

export default initialGroups;
