//TODO 1 :Implementing negative values

const output = document.querySelector("#output");

const calcNumbers = document.querySelector(".calc-numbers");

const calcOperators = document.querySelector(".calc-operators");

calcNumbers.addEventListener('click',(e)=> {
    if(e.target.className === "calc-item"){ 
        appendToOutput(e.target.textContent);
        
        if (e.target.id ==='clear-all'){
            clearAll();           
        } 

        if(e.target.id === 'clear-last'){
            clearLast(output.value);
        }

        if(e.target.id === 'mod'){
            const newValue = output.value.slice(0, output.value.length-1);                       
            mod(newValue);
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
  try {
    const result = new Function(`return  ${expression}`)();

    if (isNaN(result) || !isFinite(result)) {
            output.value = 'Error';                
    } else {
            // Round to a reasonable number of decimal places to avoid floating point issues
            output.value = parseFloat(result.toFixed(10));
    }
  } catch (error) {
    output.value = 'Error';
  }  
}

function mod(value){     
    output.value = (Number(value) / 100 );
}
   
function clearAll(){
    output.value = '';
}

function clearLast(expression){
    output.value = expression.slice(0, expression.length-1);
}

function appendToOutput(value) {
    return output.value += value; 
}

document.addEventListener('keydown', (e) =>{
    const key = e.key;
    if(key >= 0 && key <= 9){
        appendToOutput(key);
    }else if (key === '+'){
        appendToOutput('+');
    }else if (key === '-'){
        appendToOutput('-');
    }else if (key === '*'){
        appendToOutput('*');
    }else if (key === '/'){
        appendToOutput('/');
    }else if (key === '.'){
        appendToOutput('.');
    }else if (key === '%'){
        mod(output.value);
    }else if (key === ')'){
        appendToOutput(')');
    }else if (key === '('){
        appendToOutput('(');
    }else if(key === '=' || key === 'Enter'){
        e.preventDefault();
        calculateResult(output.value);
    }else if (key === 'Escape'){
        clearAll();
    }else if (key === 'Backspace'){
        //output.value = output.value.slice(0, -1);
        clearLast(output.value)
    }
})
