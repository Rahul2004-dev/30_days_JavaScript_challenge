// ﻿

// Day 11: Promises and Async/Await
// Tasks/Activities:
// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Success !")
}, 2000)
})

// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error: Something went wrong!');
    }, 2000);
  });
  
  promiseA.catch((error) => {
    console.error(error); // Output: Error: Something went wrong!
  });

// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// Simulate fetching data from a server
function fetchData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Data fetched from ${url}`);
      }, 1000);
    });
  }
  
  // Chain the promises to log messages in a specific order
  fetchData('https://api.example.com/users')
   .then((data) => {
      console.log('Users data:', data);
      return fetchData('https://api.example.com/products');
    })
   .then((data) => {
      console.log('Products data:', data);
      return fetchData('https://api.example.com/orders');
    })
   .then((data) => {
      console.log('Orders data:', data);
      console.log('All data fetched successfully!');
    })
   .catch((error) => {
      console.error('Error fetching data:', error);
    });

// Activity 3: Using Async/Await
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function logResolvedValue(promise) {
    try {
      const result = await promise;
      console.log(`Promise resolved with value: ${result}`);
    } catch (error) {
      console.error(`Promise rejected with error: ${error}`);
    }
  }
  
  const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 2000);
  });
  
  logResolvedValue(promise);

// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function logResolvedValue(promise) {
    try {
      const result = await promise;
      console.log(`Promise resolved with value: ${result}`);
    } catch (error) {
      console.error(`Promise rejected with error: ${error}`);
    }
  }
  
  const promi = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 2000);
  });
  
  logResolvedValue(promise);

// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    // Check if the response was successful
    if (response.ok) {
      // Return the JSON data from the response
      return response.json();
    } else {
      // Throw an error if the response was not successful
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  })
  .then(data => {
    // Log the response data to the console
    console.log(data);
  })
  .catch(error => {
    // Log any errors to the console
    console.error(error);
  });

// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await. 
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      } else {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
          }
  } catch (error) {
    console.error(error);
  }
}

// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promiseD = fetch("https://jsonplaceholder.typicode.com/posts");
const promiseB = fetch("https://jsonplaceholder.typicode.com/comments");
const promiseC = fetch("https://jsonplaceholder.typicode.com/albums");

Promise.all([promiseB, promiseC, promiseD])
  .then(([responseB, responseC, responseD]) => {
    return Promise.all([responseB.json(), responseC.json(), responseD.json()]);
  })
  .then(([dataB, dataC, dataD]) => {
    console.log(dataB, dataC, dataD);
  })
  .catch(error => console.error(error));

// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promise1 = fetch('https://jsonplaceholder.typicode.com/posts');
const promise2 = fetch('https://jsonplaceholder.typicode.com/comments');
const promise3 = fetch('https://jsonplaceholder.typicode.com/albums');

Promise.race([promise1, promise2, promise3])
  .then(value => console.log(value))
  .catch(error => console.error(error));