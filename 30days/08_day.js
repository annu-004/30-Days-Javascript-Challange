// Day 08 : ES6+ Features
// Activity 1 : template literals

// task 1 :
let age = 20;
let name = "annu" ;
let profession = "web developer"

console.log(`my name is ${name} and i am ${age} year old`);

// task 2 :
console.log(`my name is ${name}`);
console.log(`i am ${age} year old`);
console.log(`i am professional ${profession}`);
console.log(`i have experience of ${2+1} years`);

// Activity 1 : object destructuring

// task 3 :
let arr1 = [1,2,3,4,5];
let [num1,num2] = arr1;

console.log(num1);
console.log(num2);

// task 4 :
let book = {
    title : "harry potter",
    author : "j.k rowling",
    year: 2000
}

let {title,author} = book;
console.log(title);
console.log(author);

// activity : spread and rest operator

// task 5 :
let oldArray = [1,2,3,4,5];
let newArray = [...oldArray, 6,7 ];

console.log(newArray);

// task 6 :
function sum(...theArgs){
    let total = 0;
    for (const arg of theArgs){
        total += arg;
    }
    return `sum of all number :${total}`;
}
console.log(sum(1,2,3,4,5));

// activity 4 : default parameter 

// task 7 :
function product (a,b=1){
    return `product ${a}*${b} : ${a*b}`;
}
console.log(product (7));

// activity 5: enhanced object literals

// task 8 :
let book2 ={
    title : "deep work",
    author : "carl newport",
    year : 2016,
    getDetails : function(){
        return ` title of book : ${this.title} & by author : ${this.author}`;
    }
}
console.log(book);
console.log(book2.getDetails());

// task 9 :
let carBrand = "Brand", carType = "Type", carSeater = "seater"

let car = {
    [carBrand]: "maruti suzuki ciaz",
    [carType]: "sedan",
    [carSeater]: 6
};
console.log(car);
