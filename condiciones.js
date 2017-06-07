const starWars7 = 'Star Wars: El despertar de la Fuerza';
const pgStarWars7 = 13;

const name = 'Daniel'
const age  = 30;
const name2 = 'Isaac'
const age2  = 11;

function canWatchStartWars7 (name, age)
{
	if (age >= pgStarWars7) {
		alert(`${name} puede pasar a ver ${starWars7}`);
	} else {
		alert(`${name} no puede pasar a ver ${starWars7}.
			Tiene ${age} años y necesita tener ${pgStarWars7}`);
	}
}

canWatchStartWars7(name, age)
canWatchStartWars7(name2, age2)