// Concat nos permite fusionar dos arrays sin mutar el original


// Sin concat

elements = [1,2,3,4,5]
other_elements = [6,7,8,9,10]

newArray = [...elements]

for (let index = 0; index < other_elements.length; index++) {
    const element = other_elements[index];
    newArray.push(element)
}

console.log(newArray);


// Usando concat:

elements2 = [1,2,3,4,5]

newArray2 = elements2.concat(other_elements)
console.log(newArray2);

// Otras maneras de copiar con spreed operator

newArray3 = [...elements, ...other_elements]
console.log(newArray3);