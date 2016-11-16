const http = require('http');
const hostname = '127.0.0.1';
const port = 2337;


var array = [1,2,3,4,5,6,7,8,9,10,100,112,123];
var newarray = [];


for (var i = 0; i < array.length; i++) {
        if (! (array[i] % 2)) {
            newarray.push(array[i]);
        }
    }
/*	
function processArray(array, index, callback) {	
    if (! (array[index] % 2)) {
            newarray.push(array[index]);		
        }		
        processArray(array, index, callback);   
};
*/

const app = http.createServer((req, res) => {
	
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('the result is :' + newarray);
}
);
app.listen(port, hostname, () => {
	console.log(`app is listening to http://${hostname}:${port}/`);
	//processArray(array, 0, function(){
    //console.log("done");
//});
});