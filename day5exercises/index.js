
// HEADERS EXERCISES

// -- REQUEST: 
var promise = fetch('http://module5.tk/tokens', {method: 'POST'});
promise.then(function(response){
	console.log(response.status);
});

// -- RESPONSE: Your token was created! It is ff85331ce1fe-43b6-baed-5c92caf2f3c8.

// -- REQUEST:

var promise = fetch('http://module5.tk/protected-resource', {method: 'GET', headers: {'Authorization': 'Bearer ff85331ce1fe-43b6-baed-5c92caf2f3c8',
}});
promise.then(function(response){
	console.log(response.status);
});

// -- RESPONSE: You specified a valid token! Thank you.


// NYTimes FINAL EXERCISE

