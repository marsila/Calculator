const output = document.querySelector("#output");
//output.value="start";

const calcNumbers = document.querySelector(".calc-numbers");
console.log(calcNumbers);

const calcOperators = document.querySelector(".calc-operators");
console.log(calcOperators);

calcNumbers.addEventListener('click',(e)=> {
    if(e.target.className === "calc-item"){
        
        output.value += e.target.textContent;
        if (e.target.id ==='clear-all'){
            output.value = '';
            console.log(`output = ${output.value}`);
            
        } 
        if(e.target.id === 'clear-last'){
            output.value = output.value.slice(0,output.value.length-2);
        }
        console.log(`id = ${e.target.id} value = ${e.target.textContent}`);
    }
})


