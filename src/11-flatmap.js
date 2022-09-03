// Flatmap es un método que nos permite hacer un map y un flat en uno solo


// Buscar y hacer flat de propieades en un array de objetos sin flatmap

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
]

const atributos = users.map(item => item.attributes).flat()
console.log(atributos); // [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

// Usando flatMap

const rta = users.flatMap(user => user.attributes)
console.log(rta);  // [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]