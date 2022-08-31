// Map es un método que nos permite copiar los elementos de un array en 
// otro array sin extendernos son ciclos for

const letters = ['a', 'b', 'c']

const newArray = letters.map(item => item + 'arreglos')

console.log(letters);
console.log(newArray);
