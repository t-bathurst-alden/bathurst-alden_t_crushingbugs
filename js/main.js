console.log("JavaScript File is linked");

const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;
//add variable for reset button
//add variable for label-box

//functions 
function dragStart() {
    console.log("Started Dragging");
    //whatever the user is dragging, store it in currentDraggedElement
    currentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
    console.log("Drag Over Called");
}

function dropped(e) {
    e.preventDefault();
    console.log("Dropped");

    //prevent double drops here
    if(this.children.length>=1) {
        return;
    }

    //Drop it in!
    this.appendChild(currentDraggedElement);

    //reset the reference
    currentDraggedElement = null;
}

//function reset
//Collect all the labels and put them back. Check or loop through them, see IF dropzone contains a piece. If yes, 
//label-box.appendChild()


function resetBtn () {

}


//Event listeners

labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
})

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener ("drop", dropped);
})

//add event listener for reset button
//listen for click event, call a reset function

