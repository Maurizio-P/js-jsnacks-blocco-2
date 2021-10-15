
const array1 = [`15`, `2`, `7`]
const array2 = [`5`]

// confrontiamo i 2 array, per poi fare un push fino a quando il più corto non è lungo quanto quello più lungo.

// if (array1 >= array2){
//     console.log("array 1 maggiore del 2, non faccio nulla")
// }   


while (array1 >= array2) {
    array2.push([array1])
}

console.log(array1 + " array2: " + array2)