// Desafio 1 - Crie a função compareTrue
const compareTrue = (matheus, gustavo) => (matheus && gustavo === true) ? true : false;

//    if (girafa === true && elefante === true) {
//     return true;
//    } else {return false;}
//  }

// Desafio 2 - Crie a função splitSentence
const splitSentence = (sentence) => sentence.split(' ');
console.log(splitSentence('Go Trybe'));

// Desafio 3 - Crie a função concatName
 function concatName (array){
   let myArrey = array;
  return `${myArrey[(myArrey.length - 1)]}, ${myArrey[0]}`;
 }
  //  return concat;
  //  }
// const concatName = (array) =>  


// {
//   return ((wins * 3) + (ties))
// }

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 5 - Crie a função highestCount
function highestCount (array){
  let higher = array[0];
  for (let index = 0; index < array.length; index += 1){
    if (array[index] > higher){
      higher = array[index];
    }
  }
  let contador = 0;
  for (let secondIndex = 0; secondIndex < array.length; secondIndex +=1){
    if (higher === array[secondIndex]){
      contador += 1;
    }
  }
  return contador;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea (base, altura){
  return ((base * altura) / 2);
}
function calcRectangleArea (base, altura){
  return (base * altura);
}
function calcAllAreas (base, altura, form){
  if (form === "triângulo") {
    return `O valor da área do ${form} é de: ${calcTriangleArea(base, altura)}`;
  }
  else if (form === "retângulo"){
    return `O valor da área do ${form} é de: ${calcRectangleArea(base, altura)}`;
  }
  else{
    return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
  }
}

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2){
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return "cat1";
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  } 
}

// Desafio 8 - Crie a função fizzBuzz
function fizzBuzz(array){
  let arr = [];
  for (let index = 0; index < array.length; index+= 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0){
      arr.push("fizzBuzz");
    } else if (array[index] % 5 === 0){
      arr.push("buzz"); 
    } else if (array[index] % 3 === 0){
      arr.push("fizz");
    } else {
      arr.push("bug!");
    }
  }
  return arr;
}

// Desafio 9 - Crie a função encode e a função decode
function encode (xablau){
  let barabam = xablau;
  barabam = barabam.split("a").join("1");
  barabam = barabam.split("e").join("2");
  barabam = barabam.split("i").join("3");
  barabam = barabam.split("o").join("4");
  barabam = barabam.split("u").join("5");
  
  // barabam = barabam.replace(/e/g, "2"); poderia usar esse metodo tbm!!!

  return barabam;
}
function decode (xablau){
  let barabam = xablau;
  barabam = barabam.split("1").join("a");
  barabam = barabam.split("2").join("e");
  barabam = barabam.split("3").join("i");
  barabam = barabam.split("4").join("o");
  barabam = barabam.split("5").join("u");

  return barabam; 
}

// Desafio 10 - Crie a função techList
function techList(t, n){
  let arr = [];
  if (t.length === 0){
    return [];
  }
  let tec = t.sort();
  for (let i = 0; i < t.length; i += 1){
    arr.push({
      tech: tec[i],
      name: n,
    });
  }
  return arr;
}

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
