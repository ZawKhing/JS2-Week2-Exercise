/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
//---ex1
const allPara = document.querySelectorAll("p")
console.log(allPara)
//---ex2
const firstDiv = document.querySelector("div");
console.log(firstDiv)
//---ex3
const jumbotron = document.querySelector("#jumbotron-text");
console.log(jumbotron)
//---ex3
const allPelementInPrimary = document.querySelectorAll(".primary-content p")
console.log(allPelementInPrimary)
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
// let myButton = document.querySelector("#myButton");
// myButton.addEventListener("click", alertSomething);

// function alertSomething() {
//   alert("Something");
// }

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
// let changeBackgroundColor = document.querySelector("#bgrChangeBtn");//button
// changeBackgroundColor.addEventListener('click', function(){ //function
//     let body = document.querySelector("body")
//     body.style.backgroundColor = "red";
// })



/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
// let addTextButton = document.querySelector("#addTextBtn");//the button
// addTextButton.addEventListener("click", addParagraph);


// function addParagraph(){
//   let paragraph = document.createElement("p"); // create new p paragraph(child)
//   paragraph.innerText = 'Read more below';

//   let parent = document.querySelector("div.jumbotron")//parent element
//   parent.appendChild(paragraph); 
// }

//change the background of all the paragraph items on our page
// let paragraphs = document.querySelectorAll("p");
// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].style.backgroundColor = "blue";
// }



// Task 5
// ======

// When the 'Larger links!' button is clicked, the text of all links on the page should increase.

let updateTitleBtn = document.querySelector("#largerLinksBtn");
updateTitleBtn.addEventListener("click", function () {
  let inputBox = document.querySelector("#titleInput");
  let title = inputBox.value;

  let titleElement = document.querySelector("#lessonTitle");
  titleElement.innerText = title;
  inputBox.value = title;
});
