 // Q1
var a = {};
console.log(a);

// Q2
var person = {
    name: "Sajee",
    age: 24,
    introduceYou: function() {
      console.log("Hello, my name is " + this.name );
    }
  };

  person.introduceYou();


 //Q3

function greenStudent(student) {
    console.log("Hello " + student.name + ", welcome to the Coding School");
  }
  
  var student1 = {
    name: "Sajee",
  };
  
  greenStudent(student1);

//Q4
var person_b = {
    firstName: "Sajeepan",
    lastName: "Paramasivam",
    age: 30
  };
  
  console.log("First Name: " + person_b.firstName);
  console.log("Last Name: " + person_b.lastName);
  console.log("Age: " + person_b.age);
  
  console.log("First Name: " + person_b["firstName"]);
  console.log("Last Name: " + person_b["lastName"]);
  console.log("Age: " + person_b["age"]);
  
// Q5
  var person_a = {
    name: "sajee",
    age: 23,
  };
  person_a.email = "john@example.com";
  console.log(person_a);


//   Q6
const myObject = {
    name: "Sajee",
    age: 30,
    city: "Jaffna"
  };
  console.log(myObject);
  delete myObject.city;
  console.log(myObject);

//Q7

// Sample object
const person = {
    name: "John",
    age: 30,
    job: "Developer",
  };
  
  // Method 1: Using hasOwnProperty()
  const propertyName1 = "age";
  if (person.hasOwnProperty(propertyName1)) {
    console.log(`The property "${propertyName1}" exists in the object.`);
  } else {
    console.log(`The property "${propertyName1}" does not exist in the object.`);
  }
  
  // Method 2: Using the 'in' operator
  const propertyName2 = "location";
  if (propertyName2 in person) {
    console.log(`The property "${propertyName2}" exists in the object.`);
  } else {
    console.log(`The property "${propertyName2}" does not exist in the object.`);
  }
  
// Q8
const student = {
    name: "Alice",
    age: 20,
    studentID: "12345",
  };
  
  const course = {
    courseName: "Mathematics",
    courseCode: "MATH101",
    instructor: "Professor Smith",
  };
  
  const studentCourse = { ...student, ...course };
  
  console.log(studentCourse);

Q9
const person_c = {
    name: "John",
    age: 30,
    job: "Developer",
  };
  
  // Method 1: Using hasOwnProperty()
  if (person_c.hasOwnProperty("address")) {
    console.log("address is there");
  } else {
    console.log("address not found");
  }
  
  // Method 2: Using the 'in' operator
  if ("address" in person_c) {
    console.log("address is there");
  } else {
    console.log("address not found");
  }

  //Q10 
  const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  };
  
  // Convert the object to a JSON string
  const bookJSON = JSON.stringify(book);
  
  console.log(bookJSON);

  Q11
  const students = [
    {
      name: "ram",
      age: 20,
      gpa: 3.5,
    },
    {
      name: "beem",
      age: 22,
      gpa: 3.8,
    },
    {
      name: "cheem",
      age: 19,
      gpa: 3.2,
    },
  ];
    console.log(students[0].name);  
  console.log(students[1].age);   
  console.log(students[2].gpa);   
