const starWars7 = 'Star Wars: El despertar de la Fuerza';
const pgStarWars7 = 13;

const name = 'Daniel'
let age  = 30;
const name2 = 'Isaac'
let age2  = 11;

function canWatchStartWars7 (name, age, isWithAdult = false)
{
	if (age >= pgStarWars7) {
		alert(`${name} puede pasar a ver ${starWars7}`);
	} elseif(isWithAdult) {
		alert(`${name} puede pasar a ver ${starWars7}.
			Aunque su edad es ${age}, se encuentra acompañada/o por un adulto.`);
	} else {
		alert(`${name} no puede pasar a ver ${starWars7}.
			Tiene ${age} años y necesita tener ${pgStarWars7}`);
	}
}

canWatchStartWars7(name, age)
canWatchStartWars7(name2, age2)
canWatchStartWars7(name2, age2, true)

