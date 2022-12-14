// Map es un método que nos permite copiar los elementos de un array en 
// otro array sin extendernos son ciclos for, y tambien nos permite extraer datos de arrays

const letters = ['a', 'b', 'c']

const newArray = letters.map(item => item + 'arreglos')

console.log(letters);
console.log(newArray);


// Ejercicio práctico para modificar elementos/objetos en un array

array = [

    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },

]

// map tambien nos permite extraer datos de arrays

precios = array.map(precio => precio.price)
console.log(precios);

// También nos permite copiar objetos sin shallow copy


function solution(array) {
	const newArray = array.map((item) => {
		return {
            // usando spreed operator podemos hacer una copia sin modificar el anterior
            ...item,
            taxes: item.price * 19 / 100,
        }    
	})
    console.log(newArray);

}; 

solution(array);
