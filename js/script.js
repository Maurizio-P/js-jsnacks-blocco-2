const casualNumber = Math.ceil(Math.random() * 100)

console.log(casualNumber)

if (casualNumber % 2 === 0) {
    console.log("Numero pari")
} else {
    console.log("numero dispari")
    console.log(`Il numero successivo è ${casualNumber + 1 }` )
}