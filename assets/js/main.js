var planeSeats = [
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
];

var busySeat = 0;

function coloringSeats (array) {
	var containerSeats = document.getElementById("seats");
	for(var i=0; i < array.length; i++) {
		var seat = document.createElement("div");
		seat.className = "seats";

		if(i<4) {
			seat.style.background = "#67C78D";
		} else {
			seat.style.background = "#843299"
		}
		containerSeats.appendChild(seat);
	}
};

function reserve() {
	var btn = document.getElementById("btn");
	btn.addEventListener("click", pickZone);
};
function pickZone() {
	var choice = prompt ("Indique la clase en la que quiere su asiento \n 1. Primera CLase \n 2. Clase Económica");

	if (choice == 1) {
		checkFirstClassZone();
	}
	else if (choice == 2) {
		checkEconomicZone();
	}
	else {
		alert("Por favor selecciona un asiento válido");
	}	
};

function checkFirstClassZone () {
		var zone = "Primera Clase";
		for (var i = 0; i < 4; i++) {
			if (planeSeats[i] == false) {
				planeSeats[i] = true;
				reserveSeat(i);
				boardingTicket(i, zone);
				busySeat++;
				break;
			}
			else if (i == 3 && planeSeats[i] == true) {
				reasignSeatToEconomicClass();
			}
		}
	}

function checkEconomicZone () {
	var zone = "Clase Economica";
	for (var i = 4; i < 10; i++) {
		if (planeSeats[i] == false) {
			planeSeats[i] = true;
			reserveSeat(i);
			boardingTicket(i, zone);
			busySeat++;
			break;
		}
		else if (i == 9 && planeSeats[i] == true) {
			reasignSeatToFirstClass();
		}
	}
}

function reserveSeat (iColoringSeats) {
	var seat = document.getElementsByClassName("seats");
	seat[iColoringSeats].textContent = "Ocupado";
}

function reasignSeatToEconomicClass (zone) {
	if (busySeat == 10) {
	alert("El avión está lleno. \n El próximo vuelo sale en 3 horas, disculpe las molestias");
	}
	else {
		var reasing = confirm("Esta zona ya no tiene asientos disponibles \n Quieres cambiar tu zona de reserva");
		if (reasing == true) {
			checkEconomicZone();
		}
		else {
			nextFlight();
		}
	}
}

function reasignSeatToFirstClass (zone) {
	if (busySeat == 10) {
	alert("El avión está lleno. \n El próximo vuelo sale en 3 horas, disculpe las molestias");
	}
	else {
		var reasing = confirm("Esta zona ya no tiene asientos disponibles \n Quieres cambiar tu zona de reserva");
		if (reasing == true) {
		checkFirstClassZone();
		}
		else {
			nextFlight();
		}

	}
	
}

function nextFlight () {
	alert("El próximo vuelo sale en 3 horas");
}

function boardingTicket(i, zone) {
	var contTicket = document.getElementById("tickets");
	var ticket = document.createElement("div");
	ticket.className = "place";
	var title = document.createElement("p");
	var reservedSeat = document.createElement("p");
	var classZone = document.createElement("p");
	title.textContent = "Boarding Pass";
	reservedSeat.textContent = "N Asiento: " + (i+1);
	classZone.textContent = zone;
	ticket.appendChild(title);
	ticket.appendChild(reservedSeat);
	ticket.appendChild(classZone);
	contTicket.appendChild(ticket);
}

coloringSeats(planeSeats);
reserve();