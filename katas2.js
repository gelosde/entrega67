function oneThroughTwenty() {
  let cont;
  let numeroarr = [];
  let valor = 1;
  for(cont =0; cont< 20;cont++){
  numeroarr[cont] = valor;
  valor++

}
return numeroarr;
}
console.log(oneThroughTwenty());

//call function oneThroughTwenty

function evensToTwenty() {
  let vetor = [];
  let cont;
  let nun1= 1;
  let retorno = [];
  
  for(cont = 0; cont<20;cont++){
     vetor[cont]= nun1;
     nun1++;
   } 

   for(cont = 0;cont<20; cont++){
     if((vetor[cont]%2)===0)
     {
       retorno[cont] = vetor[cont];
     }
   }

   return retorno;
}
console.log(evensToTwenty())
//call function evensToTwenty

function oddsToTwenty() {
    
let vetor2=[];
let cont;
let vetorimpar=[];
let insere =1 ;
for(cont= 0; cont<20;cont ++){
vetor2[cont] =insere;
insere++;
}
for(cont=0;cont<20;cont++){
  if((vetor2[cont]%2)!==0)
  {
   vetorimpar[cont/2] = vetor2[cont];
  }
}
return vetorimpar;
}
console.log(oddsToTwenty())

//call function oddsToTwenty

function multiplesOfFive() {
  let cont;
  let todosmult=[];
  let outrocont= 1;
  for(cont =0;cont<20; cont++){
    todosmult[cont]=(5*outrocont);
    outrocont++

  }
 return todosmult;
}
console.log(multiplesOfFive())
//call function multiplesOfFive

function squareNumbers() {
 let cont;
 let teste;
 let result =[] ;
 for(cont=0;;cont++){
  if (cont > 0){
    teste = cont*cont;
    if(teste<=100){
      result[cont]= teste;
    }else{
      return result;
    }
    
  }

 }
}
  console.log(squareNumbers())
//call function squareNumbers

function countingBackwards() {
    
  let cont;
  let numeroarr2 = [];
  let valor2 = 20;
  for(cont =0; cont< 20;cont++){
  numeroarr2[cont] = valor2;
  valor2--
  }
  return numeroarr2;
}
console.log(countingBackwards())
//call function countingBackwards

function evenNumbersBackwards() {
    
  let vetor = [];
  let cont;
  let nun1= 1;
  let retorno=[];
  
  
  
  for(cont = 0; cont<20;cont++){
     vetor[cont]= nun1;
     nun1++;
   } 

   for(cont =0; cont <20; cont++){
     if((vetor[cont]%2)===0)
     {
       retorno[cont] = vetor[cont];
     }
   }
   retorno.reverse();
   return retorno;
}
console.log(evenNumbersBackwards())
//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
  let vetor2=[];
  let cont;
  let vetorimpar=[];
  let insere =1 ;
  for(cont= 0; cont<20;cont ++){
  vetor2[cont] =insere;
  insere++;
  }
  for(cont=0;cont<20;cont++){
    if((vetor2[cont]%2)!==0)
    {
     vetorimpar[cont] = vetor2[cont];
    }
  }
  vetorimpar.reverse();
  return vetorimpar;
}
console.log(oddNumbersBackwards())
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
  let cont;
  let todosmult=[];
  let outrocont= 1;
  for(cont =0;cont<20; cont++){
    todosmult[cont]=(5*outrocont);
    outrocont++

  }
  todosmult.reverse()
  return todosmult;
}
console.log(multiplesOfFiveBackwards())
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
  let cont;
  let teste;
  let result =[] ;
  for(cont=0;;cont++){
   if (cont > 0){
     teste = cont*cont;
     if(teste<=100){
       result[cont]= teste;
     }else{
       result.reverse()
       return result;
     }
     
   }
 
  }
}
console.log(squareNumbersBackwards())

//call function squareNumbersBackwards
