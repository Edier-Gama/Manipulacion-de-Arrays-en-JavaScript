/* Flat es un método que nos sirve para crear un solo array de otros arrays
que estén dentro de otro array xD, basicamente deconstruye muchos arrays anidamos
y los une en un solo array final */

const superArray = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15, [16,17,18, [19,20]]]
]

// Como podriamos sin usar recursion y for anidados, hacer solo una array de todo eso?

const arrayEntero = superArray.flat(3) // HASTA 3 NIVELES DE PROFUNDIDAD
console.log(arrayEntero);