var operator="";
var firstNumber="";
var secondNumber="";

function append(number){
    if(operator===""){
        firstNumber+=number;
        document.getElementById('result').value=firstNumber;
    }
    else{
        secondNumber+=number;
        document.getElementById('result').value=firstNumber+""+operator+""+secondNumber;

    }
}

function setoperator(op){
    operator=op;
    document.getElementById('result').value=firstNumber+""+operator;


}

function showresult(){
    let res=0;
    switch(operator){
        case '+':
            res=parseInt(firstNumber)+parseInt(secondNumber);
            break;
        case '-':
            res=parseInt(firstNumber)-parseInt(secondNumber);
            break;
        case '*':
            res=parseInt(firstNumber)*parseInt(secondNumber);
            break;
        case '/':
            res=parseInt(firstNumber)/parseInt(secondNumber);
            break;
    }
    document.getElementById('result').value=res;
}

function reset(){
    firstNumber="";
    secondNumber="";
    operator="";
    document.getElementById('result').value="";
}

/*const body=document.querySelector('body');*/
const button=document.getElementById('button1');
const color=['red','black','pink','yellow','green','violet','brown'];
/*body.style.backgroundColor='orange';*/
button.addEventListener('clik',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
});
