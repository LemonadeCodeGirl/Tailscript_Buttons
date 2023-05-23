// let x: number = 6; 
// let y: number = 3;

// const sum: number= x + y;

// const res: string = "The sum of x and y is the sum";


// console.log(res);

let counter: number = 0;
// const body: 
console.log("counter: " + counter);

//Add a function to changs the color
function changecolor(): void{
    console.log("changeColor");

    const asd: HTMLElement = document.querySelector("#changeColor") as HTMLElement;

    asd.innerHTML = "this is not a pretty number :("; 

    asd.style.color = "white";
    asd.style.background = "red";

    
}

function hideButton(): void{
    console.log("hiding the button now");

    const buttonToHide: HTMLElement = document.querySelector(".clickedButtons1") as HTMLElement;
    console.log(buttonToHide);
    buttonToHide.style.visibility = "hidden";
}

function disableButton(): void{
    console.log("Disabling the button!");
    // const buttonToDisable: HTMLInputElement = document.querySelector("#disable") as HTMLButtonElement;
    // buttonToDisable.disabled = true;

    const button: HTMLInputElement = document.querySelector("#disable") as HTMLInputElement;

    console.log(button);

    button.disabled = true;
    
}   