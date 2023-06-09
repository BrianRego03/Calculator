let input1="";
let input2;
let operator;
let inputKey=0;
let inputArray=['',''];


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
    if(num2===0)
        {
            errorReset();
            return;
        }
    return num1/num2;
}
function remainder(num1,num2){
    if(num2===0)
        {
            errorReset();
            return;
        }  

    return num1%num2;
}

function operate(firstNum,secondNum,operation){
    if(operation==='+'){
        inputArray[0]=addition(+firstNum,+secondNum);
        operandReset()
    }
    else if(operation==='-'){
        inputArray[0]=subtraction(+firstNum,+secondNum);
        operandReset()
    }
    else if(operation==='*'){
        inputArray[0]=product(+firstNum,+secondNum);
        operandReset()
    }
    else if(operation==='/'){
        inputArray[0]=divide(+firstNum,+secondNum);
        operandReset()
    }
    else if(operation==='%'){
        inputArray[0]=remainder(+firstNum,+secondNum);
        operandReset()
    }
    
}

function disableNumbers(){
    if(display.textContent.length>10)
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

function disableSign(){
    
    sign.forEach((clickButton)=>
    {
        clickButton.disabled=true;
    })

}

function enableSign(){
    
    sign.forEach((clickButton)=>{
        clickButton.disabled=false;
            })
}

function disableEqual(){
    
    equals.disabled=true;

}

function enableEqual(){
    
    equals.disabled=false;
}

function errorReset(){
    alert('ERROR');
    inputArray=['',''];
    display.textContent='0';
    inputKey=0;
    operator='';
    enableNumbers();
    enableSign();
    enableEqual();
}

function operandReset(){
    inputArray[1]='';
    inputKey=0;
       
}
const acButton=document.querySelector(".specialButton");
acButton.addEventListener('click',()=>{
    inputArray=['',''];
    display.textContent='0';
    inputKey=0;
    operator='';
    enableNumbers();
    enableSign();
    enableEqual();
}
);

const cButton=document.querySelector(".clearButton");
cButton.addEventListener('click',()=>{
    if(inputArray[1]!==''){
        
        
        enableEqual();
    }
    if((operator!=='')&&(inputArray[1]===''))
    {
        operator='';
        enableSign();
        enableEqual();
        inputKey=0;

    }
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
        if(inputArray[inputKey]==='0')
            inputArray[inputKey]='';
        inputArray[inputKey]+=clickButton.textContent;
       
        display.textContent=inputArray[inputKey];
        
        disableNumbers();
        enableSign();
        enableEqual();
        
        
    })
})

const sign=document.querySelectorAll(".operateButton");

sign.forEach((clickButton)=>{
    clickButton.addEventListener('click',()=>{
        disableSign();
        disableEqual();
        if(inputArray[inputKey]==='')
            inputArray[inputKey]=0;
        operate(inputArray[0],inputArray[1],operator);
        display.textContent=inputArray[0];
        operator=clickButton.textContent;
        inputKey=1;
        
        
        enableNumbers();
        
        
    })
})

const equals=document.querySelector("#equalButton");

equals.addEventListener('click',()=>{
    operate(inputArray[0],inputArray[1],operator);
    
    inputKey=0;
    if(inputArray[0]==='')
    {
        return;
    }
    display.textContent=inputArray[inputKey];
    operator='';
    
    enableNumbers();
        
        
    });


const negative=document.querySelector("#signButton");

negative.addEventListener('click',()=>{

        let tempArray=inputArray[inputKey].toString().split('');   
        console.log(inputArray[inputKey]);
        console.log(tempArray[0]);
        
        
        if(inputArray[inputKey].length>15)
            return;
        else if(tempArray[0]==='-')
            inputArray[inputKey]=inputArray[inputKey].slice(1);
        else
            inputArray[inputKey]='-' + inputArray[inputKey];
         
        console.log(inputArray[inputKey]);   
        display.textContent=inputArray[inputKey];
        console.log(inputArray[inputKey]);    
        
        
        
    });


const decimal=document.querySelector("#decimalButton");

decimal.addEventListener('click',()=>{
    let tempArray=inputArray[inputKey].split('');
    for(i=0;i<inputArray[inputKey].length;i++){
        if(tempArray[i]==='.')
            return;              
    }
    if(inputArray[inputKey]===''){
        inputArray[inputKey]=inputArray[inputKey] + '0.';
        display.textContent=inputArray[inputKey];
        return;
    }
    inputArray[inputKey]=inputArray[inputKey] + '.';
    display.textContent=inputArray[inputKey];



        
    });    



