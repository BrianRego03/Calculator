let input1="";
let input2;
let operator;
let inputKey=0;
let inputArray=[''];


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
        inputArray[inputKey]=addition(+firstNum,+secondNum);
    }
    else if(operation==='-'){
        inputArray[inputKey]=subtraction(+firstNum,+secondNum);
    }
    else if(operation==='*'){
        inputArray[inputKey]=product(+firstNum,+secondNum);
    }
    else if(operation==='/'){
        inputArray[inputKey]=divide(+firstNum,+secondNum);
    }
    else if(operation==='%'){
        inputArray[inputKey]=remainder(+firstNum,+secondNum);
    }
    return input1;
}

function disableNumbers(){
    if(display.textContent.length>15)
            button.forEach((clickButton)=>
            {
                clickButton.disabled=true;
            })

}
function enableNumbers(){
    
    button.forEach((clickButton)=>{
        clickButton.disabled=false;
            })
}
const acButton=document.querySelector(".specialButton");
acButton.addEventListener('click',()=>{
    inputArray[inputKey]='';
    display.textContent='0';
    enableNumbers();
}
);

const cButton=document.querySelector(".clearButton");
cButton.addEventListener('click',()=>{
    let y=display.textContent;
    let x=(y.length)-1;
    let z=y.slice(0,x);
    inputArray[inputKey]=z;
    display.textContent=z;
    if(display.textContent==='')
        display.textContent='0';
    });


const button=document.querySelectorAll(".numButton");
const display=document.querySelector(".LCD");
button.forEach((clickButton)=>{
    clickButton.addEventListener('click',()=>{
        inputArray[inputKey]+=clickButton.textContent;
        console.log(display.textContent.length);
        display.textContent=inputArray[inputKey];
        disableNumbers();
        
        
    })
})



