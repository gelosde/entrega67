// comece a criar a sua função add na linha abaixo
function add(soma1,soma2){
return soma1+soma2;
}

// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8,'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
        function multiply(multiplicado,multiplicador){
            let total=0;
            for(let cont=1;cont<multiplicador;cont++){
            if(cont===1){
            total=(add(multiplicado,multiplicado));
                
        }else{
                total =add(total,multiplicado);
            }
        }   
            
            
           return total;
          }
          function power(valor,potencia){
            let total=0;   
            for(cont=1;cont<potencia;cont++){
            if(cont===1){
                total= multiply(valor,valor);
            }else{
                total=multiply(total,valor);
            }
            }
          
            return total;
        }

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(fato){
    let cont;
    let valor=1;
    for(cont=1;cont<=fato;cont++){
        valor =valor*cont;
    }
    return valor
}
// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

function fibonacci(fbo){
    let cont ;
    let arr=[];
    for(cont=0;cont<=fbo;cont++){
        if(cont===0){
            arr[cont]=cont;
        }else if(cont===1){
            arr[cont]=cont;
        }
        else{
            
            arr[cont]=arr[cont-2]+arr[cont-1];
        }
    }return arr[fbo-1];

}
// descomente a linha seguinte para testar sua função
console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
