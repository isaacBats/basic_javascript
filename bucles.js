'use strict'

const dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
const name = 'Isaac'

function correr() {
	const min = 5
	const max = 15
	return Math.round(Math.random() * (max - min)) + min
}

let totalKms = 0;

// mostrando los días
const length = dias.length
for (let i = 0; i < length; i++) {
	const kms = correr()
	totalKms += kms
	console.log(`El día ${dias[i]} ${name} corrio ${kms}kms`)
}

const promedioKms = totalKms / length
console.log(`En promedio, ${name} corrió ${promedioKms.toFixed(2)}kms`)