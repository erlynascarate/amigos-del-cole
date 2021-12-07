let fondo = document.getElementById('background');
let globoYellow = document.getElementsByTagName('globo-yellow')[0];

let colores = [
	'#f90000',
	'#0000f9',
	'#0f0',
	'#4949fc',
	'#1f1fff',
	'#acacb1',
	'#00f',
	'#0000c0',
	'#010195',
	'#ffec2a',
	'#ffe800',
	'#d5c200',
	'#ffca2a',
	'#ffbf00',
	'#d5a000',
	'#6d00ff',
	'#3e0091',
	'#5100bc',
	'#7812ff',
	'#8e3cfc',
	'#fff',
]

//Cambia el fodo de pantalla cuando hacen click
let indice = 0;
fondo.addEventListener('click', (e)=>{
	if (e.target != globoYellow) {
		fondo.style.background = colores[indice];
		fondo.style.color = '#fff';
		indice++;
		if (indice == colores.length) {
			indice = 0;
			fondo.style.color = '#000';
		}
	}
})

//Anima un globo
globoYellow.addEventListener('click', ()=>{
	globoYellow.classList.toggle('g-yellow');
})

//Pone el 'fondo' como al primcipio que carga la pagina
let imgSofia = document.querySelector('.img-sofia');
imgSofia.addEventListener('click', ()=>{
	fondo.style.color = '#000';
	fondo.style.background = '#fff';
})