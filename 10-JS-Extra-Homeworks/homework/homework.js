// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = []
  for (var i in objeto) {
    matriz.push([i,objeto[i]])
  }
  return matriz
  
  // otra opción:

  // return Object.entries(objeto)

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {}
  for (i = 0; i < string.length; i++) {
    var found = false
    for (j in objeto) {
      if (string[i] === j) {
        objeto[j]++
        found = true
        break
      }
      // otra opción en lugar del for del objeto: if(objeto.hasOwnProperty(string[i]))
    }
    if (!found) {
      objeto[string[i]] = 1
    }
  }
  return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var strLow = ""
  var strUpp = ""
  for (i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      strUpp = strUpp + s[i]
    } else {
      strLow = strLow + s[i]
    }
  }
  return strUpp + strLow

  // si hubiese usado arrays en vez de strings: strUpp.concat(strLow).join("")

}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var newstr = ""
  var init = 0
  for (i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      for (j = i - 1; j >= init; j--) {
        newstr = newstr + str[j]
      }
      newstr = newstr + " "
      init = i + 1
    }
    if (i === str.length - 1) {
      for (j = i; j >= init; j--) {
        newstr = newstr + str[j]
      }
    }
  }
  return newstr

  // otra opción:
  
  // return str.split(" ").map(function(palabra) {
  //   return palabra.split("").reverse().join("")
  // }).join(" ")

  // escrito con función flecha:

  // 
  // return str.split(" ").map((palabra) => palabra.split("").reverse().join("")).join(" ")
} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numstr = numero.toString()
  for (i = 0; i < numstr.length; i++) {
    if (numstr[i] !== numstr[numstr.length - 1 - i]) {
      return "No es capicua"
    }
  }
  return "Es capicua"

  // otra opcion:

  // var numero = numero.toString()

  // numero2 = numero.split("").reverse().join("")
  // if (numero === numero2) return "Es capicua"
  // return "No es capicua"
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newstr = ""
  for (i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      newstr = newstr + cadena[i]
    }
  }
  return newstr
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var minind = 0
  for (i = 0; i < arr.length; i++) {
    minind = i
    for (j = i; j < arr.length; j++) {
      if (arr[j].length < arr[minind].length) {
        minind = j
      }
    }
    arr.splice(i,0,arr[minind])
    arr.splice(minind + 1,1)
  }
  return arr

  // otra opción:

  // var newarr = arr.sort(function(a,b) {
  //   return a.length - b.length
  // })
  // return newarr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  newarr = []
  for (i = 0; i < arreglo1.length; i++) {
    for (j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        newarr.push(arreglo1[i])
        break
      }
    }
  }
  return newarr
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

