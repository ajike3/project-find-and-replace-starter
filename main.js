const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")
const cellElements = document.querySelectorAll(".cell")
for (let i = 0; i < rowElements.length; i++) {
    let cellEllements = getCellElements (rowElements[i])
    console.log(cellElements[0])
}
// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentrowElement) {
    return currentrowElement.querySelectorAll(".cell")
}
// YOUR CODE GOES HERE
replaceAllButton.addEventListener("click", function () {
    let userInput = findInput.value;
    let replacingData = replaceInput.value;
    let sum=0;
    for (let count = 0; count < rowElements.length; count++) {
        let currentElement = rowElements[count];
        let Rowcell = getCellElements(currentElement);
    for (let count1 = 0; count1 < Rowcell.length; count1++) {
        let currentcell = Rowcell[count1];
        let cellcontents = currentcell.innerHTML;
        if (cellcontents.includes(userInput)) {
            currentcell.innerHTML = cellcontents.replace(userInput, replacingData)
            sum=sum+1;
            console.log(sum) 
            }       
        }
    }

})

// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.

