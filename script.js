let operator;
let firstNumber;
let secoundNumber;
let displayedValue="";

function getButton(e){
    let variable= e.target;
    let spr =e.target.closest('div').getAttribute('id');
    if(variable.textContent=="clr" ){ 
        firstNumber=undefined;
        operator = undefined;
        secoundNumber=undefined;
    } 
    if(variable.textContent=="=" ){ 
        firstNumber=operate(firstNumber,operator,secoundNumber)
        operator = undefined;
        secoundNumber=undefined;
    } 
    if(spr == "operators" &&spr!="=" ) 
    {
        if(operator!==undefined && secoundNumber!==undefined){
            firstNumber=operate(firstNumber,operator,secoundNumber)
            operator = undefined;
            secoundNumber=undefined;
            //operator=variable.textContent;
        }
        // else if(operator!==undefined){
            // secoundNumber=firstNumber;
            // firstNumber=operate(firstNumber,operator,secoundNumber)
            // operator = undefined;
            // secoundNumber=undefined;
            //operator=variable.textContent;

        // }
        operator=variable.textContent;
        
    }
    if(spr=="numbers" &&  operator!==undefined)
    {
        if(secoundNumber==undefined) {secoundNumber= variable.textContent;}
        else {secoundNumber+=variable.textContent;}
        
    }
    if(spr=="numbers" && operator===undefined)
    {
        if(firstNumber==undefined){ firstNumber= variable.textContent}
        else {firstNumber+=variable.textContent;}
        
    }
    if(operator !==undefined && spr!="operators") displayedValue=secoundNumber;
    else displayedValue=firstNumber;
    document.getElementById("display").textContent=displayedValue;
}



const buttons=document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener("click",getButton))

function add(firstNum,secoundNum){
    return parseInt(firstNum) + parseInt(secoundNum);
}

function subtract(firstNum,secoundNum){
    return firstNum - secoundNum;
}

function multiply(firstNum,secoundNum){
    return firstNum * secoundNum;
}

function divide(firstNum,secoundNum){
    if(secoundNum==0){
        alert("You can't divide with 0");
        return;
    }
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
 

    return wynik;


}