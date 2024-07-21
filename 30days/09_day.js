// day 9 : dom manipulation 
// activity 1 : selecting and manipulating elements 

// task 1 :
let heading = document.getElementById('heading');
heading.innerHTML="welcome to world of DOM";

// task 2 :
let para = document.querySelector('.para');
para.style.backgroundColor = "red";

// activity 2 : creating and appending elements 

// task 3 :
let div=document.createElement("div");
let addText = document.createTextNode("Adding Text");
div.appendChild(addText);
document.body.appendChild(div)

// task 4 :
function addCars(carName){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(carName));
    document.querySelector('.cars').appendChild(li);
}
addCars("hyndai");
addCars("toyota");

// activity 3 : removing elements

// task 5:
let removeElement = document.querySelector("div");
removeElement.remove();

// task 6:
let removeLastChild = document.querySelector("li:last-child");
removeLastChild.remove();

// activity 7 : modifying attributes and classes

// task 7 :
let imgSource = document.querySelector("img");
imgSource.style.width="400px";
imgSource.style.height="300px";
imgSource.src="https://imgs.search.brave.com/o6d3pOEkN9umrH3UR7E_Z-cuS0DVaUMHaI4OvxzNmqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9yZXRyby1jYXIt/d2l0aC1zbWlsZXkt/ZmFjZS1yb29mLXN0/cmVldF8xMDE1OTgw/LTYxNjc4Ny5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw"

// task 8 :
let element = document.querySelector(".myElement");
element.classList.add("secondElement");

element.classList.remove("myElement");

// task 9:
let button = document.querySelector("button");
let textPara = document.querySelector(".textPara");
let flag=0;
let originalText = textPara.innerHTML;
function clickMe(){
    button.addEventListener("click",() =>{
        if (flag === 0) {
      textPara.innerHTML = "this is new para using onclick event listener";
      button.innerHTML = "change to new para";
      flag = 1;
    } else {
      textPara.innerHTML = originalText;
      button.innerHTML = "change to old para";
      flag = 0;
    }
 });
}

clickMe();

// task 10 :
button.addEventListener('mouseover',() => {
    button.style.borderColor='green';
});

button.addEventListener('mouseout', () =>{
    button.style.borderColor='#eee';
});
    
