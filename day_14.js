// ﻿

// Day 14: Classes Tasks/Activities:
// Activity 1: Class Definition
// • Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
    class person{
        constructor(name,age){
            this.name,
            this.age
        }
        greet(){
            console(`Your name${this.name} and age ${this.age}`)
        }
    }

    const personA = new person("Rahul Gupta", 20)
    personA.greet()

// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    updateAge(newAge) {
      /**
       * Updates the age property and logs the updated age.
       */
      this.age = newAge;
      console.log(`Updated age for ${this.name}: ${this.age}`);
    }
  }
  
  // Example usage:
  const person = new Person("John Doe", 30);
  console.log(person.age); // Output: 30
  
  person.updateAge(31);
  console.log(person.age); // Output: 31

// Activity 2: Class Inheritance
// • Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Define the Student class that extends the Person class
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Call the Person constructor
    this.studentId = studentId;
  }

  getStudentId() {
    return this.studentId;
  }
}

// Create an instance of the Student class
const student = new Student("John Doe", 20, "S12345");

// Log the student ID
console.log(`Student ID: ${student.getStudentId()}`);

// Call the sayHello method inherited from the Person class
student.sayHello();

// • Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Define the Student class that extends the Person class
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Call the Person constructor
    this.studentId = studentId;
  }

  getStudentId() {
    return this.studentId;
  }

  // Override the sayHello method to include the student ID
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}.`);
  }
}

// Create an instance of the Student class
const student = new Student("John Doe", 20, "S12345");

// Log the overridden greeting message
student.sayHello();

// Activity 3: Static Methods and Properties
// • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // Add a static method to return a generic greeting message
  static genericGreeting() {
    return "Hello, nice to meet you!";
  }
}

// Define the Student class that extends the Person class
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Call the Person constructor
    this.studentId = studentId;
  }

  getStudentId() {
    return this.studentId;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}.`);
  }
}

// Call the static method without creating an instance of the class
const genericMessage = Person.genericGreeting();

// Log the generic greeting message
console.log(genericMessage);

// • Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  static genericGreeting() {
    return "Hello, nice to meet you!";
  }
}

// Define the Student class that extends the Person class
class Student extends Person {
  static studentCount = 0; // Initialize the static property to 0

  constructor(name, age, studentId) {
    super(name, age); // Call the Person constructor
    this.studentId = studentId;
    Student.studentCount++; // Increment the static property
  }

  getStudentId() {
    return this.studentId;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}.`);
  }
}

// Create instances of the Student class
const student1 = new Student("John Doe", 20, "S12345");
const student2 = new Student("Jane Doe", 21, "S67890");
const student3 = new Student("Bob Smith", 22, "S34567");

// Log the total number of students
console.log(`Total number of students: ${Student.studentCount}`);

// Activity 4: Getters and Setters
// •
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
// Define the Person class
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
  }

  static genericGreeting() {
    return "Hello, nice to meet you!";
  }

  // Add a getter method to return the full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Define the Student class that extends the Person class
class Student extends Person {
  static studentCount = 0;

  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age); // Call the Person constructor
    this.studentId = studentId;
    Student.studentCount++;
  }

  getStudentId() {
    return this.studentId;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old. My student ID is ${this.studentId}.`);
  }
}

// Create an instance of the Person class
const person = new Person("John", "Doe", 30);

// Log the full name using the getter
console.log(person.fullName);

// • Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
// Define the Person class
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
  }

  static genericGreeting() {
    return "Hello, nice to meet you!";
  }

  // Add a getter method to return the full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Add a setter method to update the name properties
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Create an instance of the Person class
const person = new Person("John", "Doe", 30);

// Log the initial full name
console.log(person.fullName); // Output: John Doe

// Update the name using the setter
person.fullName = "Jane Smith";

// Log the updated full name
console.log(person.fullName); // Output: Jane Smith

// Activity 5: Private Fields (Optional)
// • Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
// ⚫ Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

// Feature Request:
// 1. Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.
// 2. Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.
// 3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
// 4. Getters and Setters Script: Create a script that uses getters and setters in a class.
// 5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).
// Achievement:
// By the end of these activities, students will:
// • Define and use classes with properties and methods.
// • Implement inheritance to extend classes.
// • Utilize static methods and properties.
// • Apply getters and setters for encapsulation.
// Understand and use private fields in classes (optional).