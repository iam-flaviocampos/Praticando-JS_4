/*
04) Crie uma função que irá receber dois valores,
o dividendo e o divisor. A função deverá imprimir 
o resultado e o resto da divisão destes dois valores.
*/

function resto (dividendo, divisor){
    let calculoDiv = dividendo / divisor
    let calculoRes = dividendo % divisor
    
    console.log('Resultado: ' + calculoDiv)
    console.log('Resto: ' + calculoRes)
}

resto(10, 4)


//Outra maneira que pode ser feita, usando chaves no return

function resto(dividendo, divisor) {
    return {
      resultado: dividendo / divisor,
      resto: dividendo % divisor
    };
  }
  
  console.log(resto(10, 4));  