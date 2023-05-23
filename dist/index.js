// let x: number = 6; 
// let y: number = 3;
// const sum: number= x + y;
// const res: string = "The sum of x and y is the sum";
// console.log(res);
var counter = 0;
// const body: 
console.log("counter: " + counter);
//Add a function to changs the color
function changecolor() {
    console.log("changeColor");
    var asd = document.querySelector("#changeColor");
    asd.innerHTML = "this is not a pretty number :(";
    asd.style.color = "white";
    asd.style.background = "red";
}
function hideButton() {
    console.log("hiding the button now");
    var buttonToHide = document.querySelector(".clickedButtons1");
    console.log(buttonToHide);
    buttonToHide.style.visibility = "hidden";
}
function disableButton() {
    console.log("Disabling the button!");
    // const buttonToDisable: HTMLInputElement = document.querySelector("#disable") as HTMLButtonElement;
    // buttonToDisable.disabled = true;
    var button = document.querySelector("#disable");
    console.log(button);
    button.disabled = true;
}
