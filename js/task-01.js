// 1
const liItems = document.querySelectorAll(".item");
console.log(liItems.length);
 
// 2




console.log(`Number of categories: ${liItems.length}`);


liItems.forEach(function (liItems) {

   const elementsList = liItems.querySelector("ul")
    const elName = liItems.querySelector("h2");
    const elNumber = elementsList.querySelectorAll("li")

    console.log(`Category: ${elName.textContent}`)
    console.log(`Elements:${elNumber.length}`)
   

})
