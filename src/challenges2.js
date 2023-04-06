// Desafio 11 - Crie a função generatePhoneNumber
// function generatePhoneNumber(numbers) {
//   let telephoneNumber = '(12) 34567-8910';
//   if (numbers.length !== 11) {
//     return 'Array com tamanho incorreto.'
//   }
//   for (let index = 0; index  < numbers.length; index += 1) {
//     if (numbers[index] > 9 || numbers[index] < 0) {
//       return 'não é possível gerar um número de telefone com esses valores';
//     }
//     telephoneNumber = telephoneNumber.replace('1', numbers[index]);
//   }
//   return telephoneNumber;
// }
function generatePhoneNumber (array) {
  let r = 0;
  let a = 0;
  let cont = 0;
  let l = 3;
  for (let i = 0; i < array.length; i += 1) {
    a = array[i];
    r = 0;
    if (r < l) {
      for (let i2 = 0; i2 < array.length; i2 += 1) {
        co = array[i2];
        if (a === co) {r +=1;} 
      }
    } if (r >= l) {return "não é possível gerar um número de telefone com esses valores";} 
      }
        if (array.length != 11) {
          return "Array com tamanho incorreto.";
        }
        for (i = 0; i < array.length; i += 1) {
          if (array[i] < 0 || array[i] > 9) {return "não é possível gerar um número de telefone com esses valores";}
        }
        let contador = 0;
        let phoneNumber;
        phoneNumber = ( '('+ array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] +
                             array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10]);
return phoneNumber;}
      


// Desafio 12 -  Crie a função triangleCheck
function triangleCheck(lA, lB, lC) {
  let triangleform = false;
  if (lA < lB + lC && lA > Math.abs(lB) - Math.abs(lC)) {
    if (lB < lA + lC && lB > Math.abs(lA) - Math.abs(lC)) {
      if (lC < lA + lB && lC > Math.abs(lA) - Math.abs(lB)) {
        triangleform = true;
      }
    }
  }
  return triangleform
}
// Desafio 13 - Crie a função hydrate
const hydrate = (liquido) => {
  meuLiquido = liquido;
  find = /\d+/g;
  arrayNumero = (meuLiquido).match(find);
  numeroTotal = 0 
  for (i = 0; i < arrayNumero.length; i +=1) {
    numeroTotal += (arrayNumero[i]*1);
  }
  if (numeroTotal == 1) {
    return(numeroTotal + ' ' + 'copo de água');
  } else {
    return (numeroTotal + ' ' + 'copos de água')
  }
}
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
