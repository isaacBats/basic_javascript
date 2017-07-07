'use strict'

// Cuanto corro
const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
// Fecha de nacimiento
const nacimiento = new Date(1986, 9-1, 15)
const hoy = new Date()

// Diferencia de fechas desde que yo nací
const tiempo = hoy - nacimiento
const tiempoSegundos = tiempo / 1000
const tiempoMin = tiempoSegundos / 60
const tiempoHoras = tiempoMin / 60
const tiempoDias = tiempoHoras / 24

//proximo cumpleaños
 const proximoCumpleanos = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
const meDay = dias[proximoCumpleanos.getDay()]
 console.log(
 	`Nacimiento: ${nacimiento}\n
	 Hoy: ${hoy}\n
	 tiempo en miliseg desde mi llegada a este mundo: ${tiempo}\n
	 en segundos es: ${tiempoSegundos}\n
	 en minutos: ${tiempoMin}\n
	 en horas: ${tiempoHoras}\n
	 en días: ${tiempoDias}
	 Mi cumpleaños en este año es: ${proximoCumpleanos}
	  y cae en ${meDay}
 	`
 );