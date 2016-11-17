const http = require('http');
const hostname = '127.0.0.1';
const port = 2337;


var array = [1,2,3,4,5,6,7,8,9,10,100,112,123,200,341];
//var i =0;
//var newarray = [];

/*
for (var i = 0; i < array.length; i++) {
        if (! (array[i] % 2)) {
            newarray.push(array[i]);
        }
    }
*/
function findEvenNosonly(i, array ) {
	console.log('arraylength ' + array.length);
	console.log(array);
	console.log('i is = '+ i+'  ,length = ' + array.length);
    if( i < array.length ) {		
        if( ! (array[i] % 2) ) {
                setTimeout( function() {
					findEvenNosonly( i+1, array ); 
				}, 0 );
        } else {
				array.splice(i,1);
				setTimeout( function() {
					findEvenNosonly( i+1, array ); 
				}, 0 );
        }
    } else {
        console.log('Your Array contains even numbers only / your array is empty');
    }
}
const app = http.createServer((req, res) => {
	
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('The resultant Array is : ' + array);
//res.end('The resultant Array is : ' + newarray);
}
);
app.listen(port, hostname, () => {
	console.log(`app is listening to http://${hostname}:${port}/`);
	findEvenNosonly(0, array);
});
