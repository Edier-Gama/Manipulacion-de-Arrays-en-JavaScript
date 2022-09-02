/* Join es un método que nos separa los elementos de un array 
mediante algun separador y nos lo duevuelve en forma de string*/

const nombre = ['Edier', 'Santiago', 'Gama', 'Cusguen']
const nombreString = nombre.join('-')
console.log(nombreString);

// Edier-Santiago-Gama-Cusguen


/* El método split de strings, es lo contrario que el método join, consiste en separar un string en substrings, indicando un valor a separar. Este método retornará un array de los elementos separados.

Este método recibe dos argumentos:

El separador que especifica el conjunto de caracteres a separar en substrings.
El límite de elementos separados a retornar. */

const nombreArray = nombreString.split('-')
console.log(nombreArray);

//[ 'Edier', 'Santiago', 'Gama', 'Cusguen' ]