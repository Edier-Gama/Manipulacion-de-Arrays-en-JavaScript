// Some valida si los o algun elemento de un array cumple con ciertas condiciones

array = [1,2,3,4,5,6,7,8,9,10]

// Saber si en el array hay algun número par sin el método some 

let rta = false
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 === 0) {
        rta = true
        break
    }
}
console.log(rta);

// Usando el método some

const rta2 = array.some(item => item % 2 === 0)
console.log(rta2);



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

let rta3 = array.some(item => item.stock < 20)
console.log(rta3);

