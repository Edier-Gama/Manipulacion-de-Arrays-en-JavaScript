// Si todos los elementos del array cumplen con la condicion, entonces every
// retornará true

const numbers = [1,45,23,45,32,47,80,80]

const rta = numbers.every(item => item > 100) 
console.log(rta);
// si TODOS son mayor a 100, retorna true si no, retorna false


const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 13,
    },
];

const admitidos = team.every(miembros => miembros.age < 15)

console.log(admitidos);