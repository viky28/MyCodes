var array1 = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

function uniqueArray(array){
  var hasmap = {};
  var unique = [];
  for(var i=0;i<array.length;i++){
    if(!hasmap.hasOwnProperty(array[i])){
      hasmap[array[i]]=1;
      unique.push(array[i])
    }
  }
  return unique;
}
uniqueArray(array1);
console.log(uniqueArray(array1))
