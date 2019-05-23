// EXERCISE 1

var data = JSON.parse (['{"menu":{"id":"file","value":"File","popup":[{"value":"New","onclick":"CreateNewDoc()"},{"value":"Open","onclick":"OpenDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}}']);

// Add a new entry to the popup array inside of the JSON string, specifying a new menu item for Save that has the onclick key equal to SaveDoc(). After doing this, re-convert the string into a javascript object and ensure that your object has the new entry in the array.

var data = JSON.parse (['{"menu":{"id":"file","value":"File","popup":[{"value":"New","onclick":"CreateNewDoc()"},{"value":"Open","onclick":"OpenDoc()"},{"value":"Close","onclick":"CloseDoc()"},{"value": "Save", "onclick":"SaveDoc()"}]}}']);

// EXERCISE 2

var data2 = {
    counts: [150, 12, 4, 37],
    start: '5:00',
    end: '8:00'
  };

var body = JSON.stringify(data);
console.log(body);

//  EXERCISE 3

// Using your knowlege of the JSON format, build a json object by hand inside of a string that follows this format:

// The json object contains a key of students that maps to a value of an array.
// The array contains a single value, a string of your name!
// The json object contains another key of instructor that maps to a value of Ryan
// The json object contains one final key of moduleNumber that maps to the value 5
// To check your work, try using the browser json parsing function to see if your json can be properly decded. If not, you will get an error.

// Optional next steps
// Add a student to the students array in the JSON named John "Jacob Jingleheimer" Schmidt.
// Change every student entry in the students array from a string to an object with two keys in it:
// first, a name key, that maps to the existing student's name
// second, a favoriteTeacherName key that maps to a string equal to the name of the student's favorite teacher.

var data = JSON.parse (['{"students": [{"name": "Kaitlyn", "favoriteTeacherName":"Ryan"},{"name":"John Jacob \'Jingle Heimer\' Schmidt", "favoriteTeacherName":"Jeff"}], "instructors": "Ryan", "module number": "5"}']);


// EXERCISE 4

var five = fetch('http://module5.tk/json', {method: 'GET'});
five.then(function(response){
	console.log(response.status);
    
    var five2 = response.text();
        five2.then(function(text){
            console.log(text);
        });
});

// EXERCISE 5

// Make a GET request to the server's /number-list endpoint using fetch. Write a program to extract the array of numbers from the response (the response is encoded as json) and sum them all up. Use console.log to print out the result to the console.


var numbers = fetch('http://module5.tk/number-list', {method: 'GET'});
	numbers.then(function(response){
	console.log(response.status);
var print = response.text();
	print.then(function(text){
		console.log(text);
var numArr = JSON.parse(text)
  console.log(numArr);

  var total = 0;
  for (let i = 0; i <= numArr.numbers.length - 1; i ++) {
    total += numArr.numbers[i];
    console.log(i)
  }
  console.log(total);
  });
});

// prints an array of numbers
// Sum all values in the array.