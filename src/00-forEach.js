// Métodos de los arrays

// ForEach

// ForEach se basa en como podemos ir elemento por elemento es nuestro array
// es lo que hariamos con un bucle for pero un poco mas simple:

const lista = ['Arroz', 'Papa', 'Yuca', 'Aguacate']

lista.forEach(element => console.log(element));

// Arroz
// Papa
// Yuca
// Aguacate

// Es lo mismo que hacer:

for (i of lista) {
    console.log(i)
}


// Ejercicio práctico:

const tasks = [ 
    {nombre: 'Hacer los trastes', hora: '1:00 PM', estado: 'Hecho'},
    {nombre: 'Estudiar en platzi', hora: '6:00 PM', estado: 'Hecho'},
    {nombre: 'Jugar Clash Royale', hora: '11:00 PM', estado: 'Faltante'}
]

const app = document.querySelector('#tasks')

tasks.forEach(tasks => {
    app.innerHTML += `<p>${tasks.nombre} - ${tasks.hora} - estado: ${tasks.estado}<p>`
})

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


function solution(array) {
	const newArray = array.map((item) => {
		return {
            ...item,
            taxes: item.price * 19 / 100,
        }    
	})
    console.log(newArray);

}; 

solution(array);