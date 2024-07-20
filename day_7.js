
// Tasks/Activities:
// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console. 
const books = {
    title : "Fundamental of Computer",
    auther : "Rahul Gupta",
    year : "2024"
    }
console.log(books, typeof(books))
// • Task 2: Access and log the title and author properties of the book object.
console.log("Books Name : " + books.title, "Auther Name : " + books.auther)

// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
const book = {
    title : "Fundamental of Computer",
    auther : "Rahul Gupta",
    year : "2024",
    description :function() {
       return `${this.title} by ${this.auther}`
    }
    }
    
    console.log(book.description())

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
const bookY = {
    title : "Fundamental of Computer",
    auther : "Rahul Gupta",
    year : 2024,
    updateYear : function(y){
        return this.year = y;
    }
}
bookY.updateYear(2025)
console.log(bookY)

// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "My library",
    Books : [
      {
        title : "Fundamental of Comupter",
        author : "Rahul Gupta"
      },
      {
        title : "Advance Comupter",
        author : "Rahul Gupta"
      },
      {
        title : "Fundamental of Math",
        author : "Rahul Gupta"
      },
      {
        title : "Advance Math",
        author : "Rahul Gupta"
      }
      ]
  }
  console.log(library)

// • Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Library Name : " + library.name)
const list = library.Books.map((e) => e.title)
console.log(list)

// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
// • Task 7: Add a method to the book object that uses the this keyword to return a 
// string with the book's title and year, and log the result of calling this method.
const library = {
  name: "My library",
  Books : [
    {
      title : "Fundamental of Comupter",
      author : "Rahul Gupta",
      year : 2024
    },
    {
      title : "Advance Comupter",
      author : "Rahul Gupta",
      year : 2023
    },
    {
      title : "Fundamental of Math",
      author : "Rahul Gupta",
      year : 2022
    },
    {
      title : "Advance Math",
      author : "Rahul Gupta",
      year : 2021
    }
    ],
  keyword : function(){
    this.Books.map((e) => console.log(`Title Name : ${e.title} and Published Year : ${e.year} `))
  }
  // keyword : function(){
  //   this.Books.forEach((e) => console.log(`Title Name : ${e.title} and Published Year : ${e.year} `))
  // }
}
library.keyword()
// Activity 5: Object Iteration
// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
const library = {
  name: "My library",
  Books: [
    {
      title: "Fundamental of Comupter",
      author: "Rahul Gupta",
      year: 2024
    },
    {
      title: "Advance Comupter",
      author: "Rahul Gupta",
      year: 2023
    },
    {
      title: "Fundamental of Math",
      author: "Rahul Gupta",
      year: 2022
    },
    {
      title: "Advance Math",
      author: "Rahul Gupta",
      year: 2021
    }
  ],
  keyword: function() {
    this.Books.forEach((book) => {
      console.log("Book properties:");
      for (const property in book) {
        console.log(`  ${property}: ${book[property]}`);
      }
    });
  }
}

library.keyword();

// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
const library = {
  name: "My library",
  Books: [
    {
      title: "Fundamental of Comupter",
      author: "Rahul Gupta",
      year: 2024
    },
    {
      title: "Advance Comupter",
      author: "Rahul Gupta",
      year: 2023
    },
    {
      title: "Fundamental of Math",
      author: "Rahul Gupta",
      year: 2022
    },
    {
      title: "Advance Math",
      author: "Rahul Gupta",
      year: 2021
    }
  ],
  keyword: function() {
    this.Books.forEach((book) => {
      console.log("Book keys:");
      console.log(Object.keys(book));
      console.log("Book values:");
      console.log(Object.values(book));
    });
  }
}

library.keyword();