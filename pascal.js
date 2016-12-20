//const http = require('http');
//const hostname = '127.0.0.1';
//const port = 2337;

//Code challenge on 11/16/16
/*var array = [1,2,3,4,5,6,7,8,9,10,100,112,123,200,341];
array = array.filter(function(value) {  
            return (value % 2 == 0);       
    });
console.log('The resultant array is ' + array);
*/


//Code challenge on 11/17/16

function pascalsTriangle(pascalSize) {

  // Start with 0th row
  var triangle = [[1]];
  //console.log(triangle);
  for (var n = 0; n < pascalSize-1; n++) {
    col = [1];    
    //console.log(triangle[n].length);
    for (var k = 1; k < triangle[n].length; k++) {
      col[k] = triangle[n][k] + triangle[n][k-1];
      //console.log('triangle['+n+']['+k+'] : ' + triangle[n][k] + ' , triangle[n][k-1] : ' + triangle[n][k-1]  + ' = ' + col[k]);
      
    }
    col.push(1);
    //console.log(col);
    triangle.push(col);
  }
  return triangle;
}

var triangle = pascalsTriangle(8);
console.log(triangle);
