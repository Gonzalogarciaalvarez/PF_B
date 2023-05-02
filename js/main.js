const ofertas = {
	dos: [
		{nombre: "Cubo de 24 nuggets", precio: 16, descripcion: "Gran cubo con deliciosos nuggets"},
		{nombre: "Nachos con salsas picantes", precio: 10, descripcion: "Crujientes nachos con sus deliciosas salsas picantes"},
		{nombre: "Lenguado de 2 kg", precio: 18, descripcion: "Un delicioso y fresco lenguado de 2 kg"},
        {nombre: "Combo Durum", precio: 14, descripcion: "Un pack de dos durums con refresco y una racion de patatas"},
		{nombre: "Combo Kebab", precio: 14, descripcion: "Un pack de dos kebabs con refresco y una racion de patatas"},
		{nombre: "Carne a pedra", precio: 18, descripcion: "Prepara a la piedra y a tu gusto, en la misma mesa, un corte delicioso de carne"},
        {nombre: "Cocido gallego", precio: 16, descripcion: "Dos servicios de rico cocido gallego del dia"},
		{nombre: "Paella", precio: 16, descripcion: "Deliciosa paella de marisco fresco"},
		{nombre: "Churrasco", precio: 17, descripcion: "Una ristra de churrasco de cerdo o ternera hecho a gusto"}
	],
	cinco: [
		{nombre: "Super Combo Durum", precio: 27, descripcion: "Un pack de cinco durums con refresco y una racion de patatas"},
		{nombre: "Super Combo Kebab", precio: 27, descripcion: "Un pack de cinco kebabs con refresco y una racion de patatas"},
		{nombre: "Carne a pedra", precio: 60, descripcion: "Prepara a la piedra y a tu gusto, en la misma mesa, un corte delicioso de carne"},
        {nombre: "Cocido gallego", precio: 60, descripcion: "Cinco servicios de rico cocido gallego del dia"},
		{nombre: "Paella", precio: 65, descripcion: "Deliciosa paella de marisco fresco"},
		{nombre: "Churrasco", precio: 60, descripcion: "Varias ristras de churrasco de cerdo o ternera hecho a gusto"}
	],
	diez: [
		{nombre: "Cocido gallego", precio: 120, descripcion: "Diez servicios de rico cocido gallego del dia"},
		{nombre: "Paella", precio: 150, descripcion: "Deliciosa paella de marisco fresco"},
		{nombre: "Churrasco", precio: 135, descripcion: "Muchas ristras de churrasco de cerdo o ternera hecho a gusto"}
	]
};

const selectSize = document.getElementById("size");
const divOfertas = document.getElementById("ofertas");

selectSize.addEventListener("change", mostrarOfertas);

function mostrarOfertas() {
	const size = selectSize.value;
	const listaOfertas = ofertas[size];
	let html = "";
	
	for (let i = 0; i < listaOfertas.length; i++) {
		html += `<p>${listaOfertas[i].nombre}: ${listaOfertas[i].precio} €  ${listaOfertas[i].descripcion}</p>`;
	}
	
	divOfertas.innerHTML = html;
}


mostrarOfertas();