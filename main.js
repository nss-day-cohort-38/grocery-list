console.log("Hello, World!");

const theVariableFour = 2 + 2;
console.log(theVariableFour);

const groceriesArticle = document.querySelector("#groceries");
groceriesArticle.classList.add("red-text");

const groceriesHeader = document.querySelector(".groceries__header");
groceriesHeader.classList.remove("groceries__header");

// Get all the list items in the grocery list
const groceryList = document.querySelectorAll("#grocery-list li");

/*
 Loop over each list item and add the groceries__header class to it
*/
for (let i = 0; i < groceryList.length; i++) {
    if (i === 1) {
        groceryList[i].classList.add("groceries__header");
    }
}
