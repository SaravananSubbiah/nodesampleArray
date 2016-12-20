/*var names = ['a', 'b', 'c'];
names.forEach(function(value) {
  console.log(value);  
});
// prints a b c by Saravanan

var items = [ { id: 1 }, { id: 2}, { id: 3}, { id: 4 }];
// only include items with even id's
items = items.filter(function(item){
  return (item.id % 2 == 0);
});
console.log(items);
// prints [ {id: 2 }, { id: 4} ]
*/
/*
var types = ['text/html', 'text/css', 'text/javascript'];
var string = 'text/javascript; encoding=utf-8';
if (types.some(function(value) {
	console.log(string.indexOf(value));
    return string.indexOf(value) > -1;
  })) {
  console.log('The string contains one of the content types.');
}


var array = [1,2,3,4,5,6,7,8,9,10,100,112,123,200,341];
array = array.filter(function(value) {
	
            return (value % 2 == 0);
       
    });
console.log('The resultant array is ' + array);

*/
/*
var a = [ 'a', 'b', 'c' ];
var b = [ 1, 2, 3 ];
console.log( a.concat(['d', 'e', 'f'], b) );
console.log( a.join('! ') );
console.log( a.slice(1, 3) );
console.log( a.reverse() );
console.log( ' --- ');
var c = a.splice(0, 2);
console.log( a, c );
var d = b.splice(1, 1, 'foo', 'bar');
console.log( b, d );

*/
/*
var friends = ['Mike','Sarava','Suresh'];
friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick​
});
*/

// global variable​
var allUserData = [];
// generic logStuff function that prints to console​
function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
		values=[];
		for (x=0; x<10; x++){
			values.push([2**x,2*x**2])
			};
			console.log(values)
	}	
}
//Global variable​
var generalLastName = "Clinton";

// A function that takes two parameters, the last one a callback function​
function getInput (options, callback) {
    allUserData.push (options);
	if (typeof callback === "function")
	{
    callback (options,generalLastName);
	}
	}
	// When we call the getInput function, we pass logStuff as a parameter.​
	// So logStuff will be the function that will called back (or executed) inside the getInput function​
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);//  name: Rich​
// speciality: JavaScript