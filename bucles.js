'use strict'

// Cuanto corro
const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
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

// Pelea entre Goku y Superman jeje
let vidaGoku = 100
let vidaSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0
const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER)) + MIN_POWER
const gokuSigueVivo = () => vidaGoku > 0
let round = 0

while(ambosSiguenVivos()) {
	round++
	console.log(`Round ${round}`)
	const golpeGoku = calcularGolpe()
	const golpeSuperman = calcularGolpe()

	if(golpeGoku > golpeSuperman) {
		// ataca Goku
		console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`)
		vidaSuperman -= golpeGoku
		console.log(`Superman queda en ${vidaSuperman} de vida`)
	} else {
		console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`)
		vidaGoku -= golpeSuperman
		console.log(`Goku queda en ${vidaGoku} de vida`)
	}
}

if(gokuSigueVivo()) {
	console.log(`Goku ganó la pelea. Su vida es de: ${vidaGoku}`)
} else {
	console.log(`Superman ganó la pelea. Su vida es de: ${vidaSuperman}`)
}
