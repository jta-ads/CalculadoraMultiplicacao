const n1 = document.getElementById(`inumber1`)
const n2 = document.getElementById(`inumber2`)
const btnCalc = document.querySelector(`#calc`)
const valor = document.querySelector(`div#tabuada > p`)
const divTabuada = document.querySelector(`div#tabuada`)
const pTabuada = document.querySelector(`#p-tabuada`)




btnCalc.addEventListener("click", ()=>{
    const num1 = Number(n1.value)
    const num2 = Number(n2.value)

    divTabuada.style.width = `45vw`;
   
    valor.innerHTML = ``;
    let result = 0

   for(let i = 0; i < num2; i++){
     
        result = num1 * (i+1);
        pTabuada.style.display = `block`
        
        pTabuada.innerHTML +=`<br>${num1} X ${i+1} = ${result}<br>`; 
   }      
})
