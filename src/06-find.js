// Find es un método que retorna un solo valor si se cumple la condicion 
// que le estamos dando para encontrar ese elemento

// Por ejemplo si queremos saber si un array tiene un cierto tipo de dato
// en especifio, find es una muy buena opción para saberlo

numeros = [100,100,200,300,400,500]

//existe algun 700 en el array?

const rta = numeros.find(item => item === 700)
console.log(rta);

// Para buscar elementos exactos en un array de objetos

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

const rta2 = products.find(item => item.id === '🍔')
console.log(rta2);

// FindIndex devuelve la posición exacta del elemento que le dimos

const rta3 = products.findIndex(item => item.id === '🍔')
console.log(rta3);

// en ambos casos si no encuentra nada retorna undefined

