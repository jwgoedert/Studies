//countString takes a number and target and returns the amount of time that target appears in the number
//this first iteration uses filter to return an array of passing values then counts the array, a wee bit clunky

//a healthy one-liner using filter

var num = 234523452363423;
var countString = (strNum, target) => 
  strNum.toString().split('').filter((val) => +val === target).length;
console.log(countString(num, 5));
//thinking there's a better way to swing this using something like reduce(most definitely better using recursion)
//nonworking reduce attempt

var nums = 12323452345231;
nums = nums.toString().split('');

//the block below is working...
var numCount = nums.reduce((mem, el)=>{
 // console.log(mem);
 if(+el === 2) mem++;
  return mem;
},0);
console.log(numCount);

//this one...not so much
// var numCount2 = (nums, target) =>
// nums.reduce((mem, el) => if(+el === target) mem++;,0);

// console.log(numCount2(nums, 2));
var numCount =(num, target)=>
num.reduce((mem, el)=> if(+el === 2)(mem++;), 0);

console.log(numCount(nums, 2));
