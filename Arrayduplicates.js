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
const arr = [12,14,20,21,28,12,23,14,21];

let unique1 = arr.filter((res,index)=>{
  return arr.indexOf(res) === index;
})
console.log(unique1)
// method 1------

const unique = [...new Set(arr)]
console.log(unique)

// method 2-------
function removeDuplicates(array){
  const result = [];
  const obj = {};
  for(let i=0;i<array.length;i++){
    if(obj[array[i]]){
      console.log(obj)
      continue;
    } else {
      result.push(array[i])
      obj[array[i]] = true;
      console.log(obj)
    }
  }
  return result
}
console.log(removeDuplicates(arr))

