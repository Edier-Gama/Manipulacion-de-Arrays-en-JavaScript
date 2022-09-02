// Reduce es un método que 'reduce' un array a un solo elemento
// es util depende del algoritmo que queramos hacer


// ejemplo de sumar todos los numeros de un array


array = [1,2,3,4,45,5,5,6,6,7,87,8,9]

// Nuevo array = reducir el array1 a una suma de todos sus elemento

const newArray = array.reduce((item, elemento) => item + elemento, 0)

console.log(newArray) // 188


// Reduce reloaded
