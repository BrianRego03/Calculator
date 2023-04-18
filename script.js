let input1;
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