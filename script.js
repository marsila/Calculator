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
            clearAll(output.value);           
        } 

        if(e.target.id === 'clear-last'){
            clearLast(output.value);
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
        calculateResult(output.value);
    }else if(e.target.className === 'calc-operator'){
        output.value += e.target.textContent;
    }
    
    
})

function calculateResult(expression) {
    console.log(`exp = ${expression}`);
    
  try {
    const result = new Function(`return  ${expression}`)();
    console.log(`inside try result = ${result}`);
    if (isNaN(result) || !isFinite(result)) {
                output.value = 'Error';
                console.log(`inside try-if result = ${result}`);
                
    } else {
             // Round to a reasonable number of decimal places to avoid floating point issues
                output.value = parseFloat(result.toFixed(10));
                console.log(`inside try-if-else result = ${result}`);
    }
  } catch (error) {
    output.value = 'Error';
  }  
}
   
function clearAll(expression){
    expression = '';
}

function clearLast(expression){
    expression = expression.slice(0, expression.length-2);
}

