var container = document.getElementById
("grid-container");
const clearButton = document.getElementById("clear");
const randomColorButton = document.getElementById("randColor");
const defaultColorButton = document.getElementById("default");
const gradualDarkButton = document.getElementById("gradualDark");
const sizeInput = document.getElementById("size")
var squares;
var color = "default";
var effect = "";
var gradualDarkness = 0.0; 

function createDivs(chosenSize){
    for (i = 0; i < chosenSize*chosenSize; i++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "square");
        newDiv.addEventListener("mouseenter", colorChooser);
        container.style.gridTemplateColumns = `repeat(${chosenSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${chosenSize}, 1fr)`;
        container.appendChild(newDiv);
    }
};
window.onload = function() {
    this.createDivs(16);
};

function clear() {
    container.querySelectorAll("div").forEach(square => {square.style.backgroundColor = "#c3edf3"
    square.style.opacity = 1.0;
});
}

function newGrid(){
    container.innerHTML="";
    const chosenSize = document.getElementById("size").value; 
    createDivs(chosenSize)
}

function rainbowPencil(){
    return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}

function colorChooser(){
    switch(color){
        case 'rainbow':
            this.style.backgroundColor = rainbowPencil();
            break;
        case 'default':
            this.style.backgroundColor = "#426fc1";
            break;
    }
    switch (effect){
        case 'gradualDark':
            this.style.backgroundColor = color;
            this.style.opacity = gradualDarkness;
            gradualDarkness += 0.005;
            break;
    }   
}


clearButton.addEventListener("click", clear);
sizeInput.addEventListener("keyup", function(event){
    if (event.keyCode === 13 && sizeInput.value <=100){
        // Cancel the default action, if needed
        event.preventDefault();
        newGrid();
    }
});
defaultColorButton.addEventListener("click", () =>{
    color = "default";
    
})
gradualDarkButton.addEventListener("click",() => {
    gradualDarkness = 0.0;
    effect = "gradualDark";
})
randomColorButton.addEventListener("click", () =>{
    color = "rainbow";
})

  


