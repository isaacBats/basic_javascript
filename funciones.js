// Operaciones y como se muestra en consola la informacion en JavaScript
console.log('El área de un triángulo de base 5 y altura 7 es: ' + 5*7/2);

// Otra forma de escribir Javascript
console.log(`El área de un triángulo de base 5 y altura 7 es: ${5 * 7 / 2}`);

// Definicion de variables y como se usan
let base = 5
let height = 7
console.log(`El área de un triángulo de base ${base} y altura ${height} es: ${base * height / 2}`);


// Definicion de funcion y como se usa.
function trinagleArea(base, height)
{
	return base * height / 2;
}
console.log(`El área de un triángulo de base 
	${base} y altura ${height} es: ${trinagleArea(base, height)}`);

// Arrow function
let trinagleArea = (base, height) => base * height / 2;
console.log(`El área de un triángulo de base 
	${base} y altura ${height} es: ${trinagleArea(base, height)}`);inagleArea = (base, height) => base * height / 2;
console.log(`El área de un triángulo de base 
	${base} y altura ${height} es: ${trinagleArea(base, height)}`);

const trinagleArea = (base, height) => base * height / 2;
console.log(`El área de un triángulo de base 
	${base} y altura ${height} es: ${trinagleArea(base, height)}`);


const circleArea = (r) => Math.PI * Math.pow(r, 2);
const rectangleArea = (base, height) => base * height;