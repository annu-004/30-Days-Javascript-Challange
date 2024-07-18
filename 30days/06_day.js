// Activity 1 : Array Creation and Access

// Task 1 :
let arr= [1,2,3,4,5];
console.log(arr);

// Task 2 :
console.log(arr[0]);
console.log(arr[4]);

// Activity 2 : Arrays Methods Basics

// task 3 , 4 , 5 , 6 :
let arrMethods = [1,2,3,4,5];
// arrMethods.push(6)
console.log(arrMethods.push(6));
// arrMethods.pop()
console.log(arrMethods.pop());
// arrMethods.shift(
console.log(arrMethods.shift());
// arrMethods.unshift(1)
console.log(arrMethods.unshift(1));

// Activity 3 : Array Methods Intermediate 

// Task 7 :
let mapArray = [10,20,30,40,50];
let mapResult = mapArray.map((e) =>{
    return e*2;
});
console.log(mapResult);

// Task 8 :
let filterArray = [1,2,3,4,5,6,7];
let filterResult = filterArray.filter((e) =>{
    return e%2==0;
});
console.log(filterResult);

// Task 9 :
let reduceArray = [1,2,3,4,5];
let reduceResult = reduceArray.reduce((acc,curr)=>{
    return acc+curr
})
console.log(reduceResult);

// Activity 4 : Array Iteration

// Task 10 :
let arrIteration =[1,2,3,4,5];
let newArr =[];
for(let i=0;i<arrIteration.length;i++){
    newArr.push(arrIteration[i]);
    // console.log(arrIteration);
}
console.log(newArr);

// Task 11 :
let forEachItr = [1,2,3,4,5];
let forEachArr = [];
forEachItr.forEach((e=>{
    forEachArr.push(e);
}));
console.log(forEachArr);

// Activity 5 : Multi-dimensional Array

// Task 12 :
let matrix = [[1,2],[3,4],[5,6]];
console.log(matrix);
console.log(JSON.stringify(matrix));
console.log(JSON.stringify(matrix, null , 2));

// Task 13:
console.log(matrix[1]);
console.log(matrix[1][1]);
console.log(matrix[2][4]);

// Day 6 Completed ...<3
