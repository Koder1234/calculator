let operator;
let firstNumber;
let secoundNumber;
let displayedValue="";

function getButton(e){
    let variable= e.target.textContent;
    displayedValue+=variable;
    console.log(displayedValue);
    document.getElementById("display").textContent=displayedValue;
    //console.log(displayedValue);
    return variable;
}



const buttons=document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener("click",getButton))

function add(firstNum,secoundNum){
    return firstNum + secoundNum;
}

function subtract(firstNum,secoundNum){
    return firstNum - secoundNum;
}

function multiply(firstNum,secoundNum){
    return firstNum * secoundNum;
}

function divide(firstNum,secoundNum){
    return firstNum / secoundNum;
}


function operate(firstNumber,operator,secoundNumber){
    let wynik;
    switch (operator){
        case "+" :
            wynik=add(firstNumber,secoundNumber)  
            break;
        case "-" :
            wynik=subtract(firstNumber,secoundNumber)  
            break;
        case "*" :
            wynik=multiply(firstNumber,secoundNumber)  
            break;
        case "/" :
            wynik=divide(firstNumber,secoundNumber)  
            break;
    }



}