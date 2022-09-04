// Exercise #2: Editing Employee Array

const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex = employees[1].name;
console.log(alex);
//
let alexHobbies = employees[1].hobbies;
alexHobbies.push("Watching Basketball");
console.log(alexHobbies);
//
let alexAndJamesAge = employees[0].age + employees[1].age;
console.log(alexAndJamesAge);
//
const updateEmployees = employees.push(
  {
    name: "Alicia",
    age: 29,
    hobbies: "Shopping, Reading Novels",
  },
  {
    name: "Kody",
    age: 19,
    hobbies: "Computer games, Wakeboard",
  }
);
console.log(employees);

employees.pop();
console.log(employees);
