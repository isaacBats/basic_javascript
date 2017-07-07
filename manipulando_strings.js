// nuevo lenguaje llamado platzom
// Reglas
// Si la palabra terina con "ar", se le quitan esas dos ultimas letras
// 			ejemplo: programar //program
// Si la palabra empieza con "z" se le añade "pe" al final
//			ejemplo: zorro // zorrope
//					 zarpar // zarppe, por la regla 1
// si la palabra traducida tiene 10 o más letras, se debe partir en dos pos la mitad y unir con un guión medio.
//			ejemplo: abecedario //abece-dario
// Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas
//			ejemplo: sometemos SoMeTeMoS

const platzom = (str) => {
	let translation = str;

	//Si la funcion termina en ar se le quitan esos dos caracteres
	if(str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);		
	}

	// Si la palabra inicia con z, se añade "pe" al fina 
	if(str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}

	// Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guin medio

	const length = translation.length;
	if( length >= 10) {
		const firstHalf = translation.slice(0, Math.round(length / 2));
		const secondHalf = translation.slice(Math.round(length / 2));

		translation = `${firstHalf}-${secondHalf}`;
	}

	// si la palabra original es un palindromo
	// ninguna regla anterior cuenta y se devuelve
	// la misma palabra intercalando mayúsculas y minúsculas

	const reverse = (str) => str.split('').reverse().join('');
	
	function minMay(str) {
		const length = str.length
		let translation = ''
		let capitalize = true
		for(let i = 0; i < length; i++) {
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}

		return translation
	}

	if(str == reverse(str)) {
		return minMay(str)
	}

	return translation;
}	