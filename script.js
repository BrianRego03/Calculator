let input1="";
let input2;
let operator;


function addition(num1,num2){
    return num1+num2;
}
function subtraction(num1,num2){
    return num1-num2;
}
function product(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function remainder(num1,num2){
    return num1%num2;
}

function operate(firstNum,secondNum,operation){
    if(operation==='+'){
        input1=addition(+firstNum,+secondNum);
    }
    else if(operation==='-'){
        input1=subtraction(+firstNum,+secondNum);
    }
    else if(operation==='*'){
        input1=product(+firstNum,+secondNum);
    }
    else if(operation==='/'){
        input1=divide(+firstNum,+secondNum);
    }
    else if(operation==='%'){
        input1=remainder(+firstNum,+secondNum);
    }
    return input1;
}
const acButton=document.querySelector(".specialButton");
acButton.addEventListener('click',()=>{display.textContent='0';})


const button=document.querySelectorAll(".numButton");
const display=document.querySelector(".LCD");
button.forEach((clickButton)=>{
    clickButton.addEventListener('click',()=>{
        input1+=clickButton.textContent;
        console.log(display.textContent.length);
        display.textContent=input1;
        
        if(display.textContent.length>15)
            button.forEach((clickButton)=>{
                clickButton.disabled=true;
            })
    })
})


