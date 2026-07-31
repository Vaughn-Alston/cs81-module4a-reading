// Weekly reading log whihc is an array of objects holding a Day and a Book
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log / Helper function
//This will allow you to add a new entry to the array

//When entering new data you will take in a Day - String 
                                            //Book - String
                                            //Minutes - int

function addReadBook(day, book, minutes) {

  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week
//This will return a int
const totalReadingMinutes = (log)  => {

  let total = 0;
  //My updated changes loop down the array adding the length helps show
  //future developers that this is an array im looping down alot easier
  for (let arrayIndex = 0; arrayIndex < log.length; arrayIndex++) {
    //loop through the array log and for every entry in log add the total minutes to the toal
    total += log[arrayIndex].minutes;

    console.log(log.minutes)
  }
  return total;
};

const add = (a, b) => {
  const result = a + b;
  return result; 
};








// Returns the book read most frequently
function mostReadBook(log) {
  //take an array of objects
  //creating a empty array key to tracking more frequent value
  const bookCounts = {};

  //for every entry in the array log
  for (let entry of log) {



    //if the book entry is not ! not in bookCounts[entry.book] 
    if (!bookCounts[entry.book]) {

      

      //then add the value to the array and then push a key of 1 to it
      bookCounts[entry.book] = 1;
    } 
    else {
      //we will increment the value of book
      
      bookCounts[entry.book]++;
    }

//in summary this book of code will 

//first we will create an empty array of objects

//2nd loop through the array logs 

//3rd  for every value of log we want to track the .book value

// if that book valiue isnt in the empty array then push the value and assign a key of 1

//1 indicating its a new value

//else we want to itterate the one value to the next time it is seen
}
  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  //this line of code will loop through teh new object of array that we have
  // for each 
  return maxBook;
}


// Prints a summary of minutes read per day
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
addReadBook("Sunday", "Percy Jackson", 2000);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));



