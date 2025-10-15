const output = document.querySelector("#output");


const calcNumbers = document.querySelector(".calc-numbers");
console.log(calcNumbers);

const calcOperators = document.querySelector(".calc-operators");
console.log(calcOperators);

calcNumbers.addEventListener('click',(e)=> {
    if(e.target.className === "calc-item"){        
        output.value += e.target.textContent;
        console.log(`id = ${e.target.id} value = ${e.target.textContent}`);
        if (e.target.id ==='clear-all'){
            output.value = '';
            console.log(`output = ${output.value}`);            
        } 

        if(e.target.id === 'clear-last'){
            //TODO 1: Need to change here because of the white space!
            output.value = output.value.slice(0,output.value.length-2);
        }

        if(e.target.id === 'negative'){
            // TODO 2: Need to handle negative values better than now.
            const newOutput =output.value.slice(0,output.value.length-3);
            if(newOutput[0]==='-'){
                output.value = newOutput.slice(1, newOutput.length);
            }else {output.value = `-${newOutput}`;}
        }

        if(e.target.id === 'mod'){
            const newOutput = output.value.slice(0, output.value.length-1);            
            output.value = (Number(newOutput) / 100 );
        }
        
    }
})

calcOperators.addEventListener('click', (e) => {
    console.log(`output in the fun2 = ${output.value}`);
    if(e.target.id ==='equal'){
        const result =calculateResult(output.value);
        console.log(`result = ${result}`);
        output.value = result;
    }else if(e.target.className === 'calc-operator'){
        output.value += ` ${e.target.textContent} `;
    }
    
    
})

function calculateResult(expression) {
   const stackNums = [];
   const stackOpers = [];
    const tokens = expression.split(' ');
    console.log(`token = ${tokens}`);
    for (const token of tokens){
        if(!isNaN(token)){
            console.log(`notNan: ${token}`);
            stackNums.push(parseFloat(token));
            console.log(stackNums);
            
            
            
        }else {
            stackOpers.push(token);
            console.log(stackOpers);
            console.log(`nan : ${token}`);
            console.log(typeof(token));
        }        
    } 
    let result;
    console.log(stackNums,stackOpers);
    while (stackNums.length>1){
        const num1 = stackNums.shift();
        const num2 = stackNums.shift();
        console.log(`num1=${num1}, num2= ${num2}`);
        const opr = stackOpers.shift();
        console.log(`opr = ${opr}`);
        console.log(stackNums,stackOpers);
        switch (opr) {
            case '+':
                result = num1+num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1*num2;
                break;
            case '/' :
                if(num2 === 0)
                    throw new Error("Deviding by zero");
                result = num1 / num2; 
                break;   
            default:
                throw new Error("Somthing went wrong!");
                
        }
        stackNums.unshift(result);
        console.log(`after push reult = ${stackNums}`);
        
    }
    console.log(`out of while result = ${stackNums}`);
    return stackNums.pop();    
}
   



