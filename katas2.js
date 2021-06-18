function add(soma1,soma2){
    return soma1+soma2;
    }
 console.assert(add(3, 5) === 8,'A função add não está funcionando como esperado');
function multiply(multiplicado,multiplicador){
    let total=0;
    for(let cont=0;cont<multiplicador;cont++){
    if(cont===1){
    total=(add(multiplicado,multiplicado));
        
}else{
        total =add(total,multiplicado);
    }
}   
    
    
   return total;
  }
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

  function power(valor,potencia){
    let total=valor;   
    for(cont=0;cont<potencia-1;cont++){
    total= multiply(total,valor);
    }
    if(potencia===0){
        total=1;
    }
    return total;
}
  
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

function fatorial(fato){
    let valor=1;
    for(let cont =1;cont<=fato;cont++){
        valor=multiply(valor,cont)
    }
    return valor;
  }
    
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

function fibonacci(fbo) {
let cont;
let arr = [];
for (cont = 0; cont < fbo; cont++) {
if (cont === 0) {
arr[cont] = cont;
} else if (cont === 1) {
arr[cont] = cont;
} else {
arr[cont] = add(arr[cont - 2], arr[cont - 1]);
}
}
return arr[fbo-1];
}

console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
