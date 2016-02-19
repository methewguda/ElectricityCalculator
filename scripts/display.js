/*
 *   Author: Methew Guda
 *   Author ID: A00381751
 *   Dedsription: Electricity Computation
 *   Date: 12-02-2016
 */

function display(){

	var Voltage = new Number(document.getElementById("Voltage").value);
	var LowResistence = new Number(document.getElementById("LowResistence"). value);
	var HighResistence = new Number(document.getElementById("HighResistence").value);
	var dataTable = document.getElementById("dataTable");
	
	if(LowResistence <= HighResistence){

		dataTable.style.display = "table";
		dataTable.innerHTML = '';
		
		//Create tabke header
		var row = dataTable.insertRow(0);
		var volCell = row.insertCell(0);
		var resCell = row.insertCell(1);
		var powCell = row.insertCell(2);
		
		volCell.innerHTML='Voltage(V)';
		resCell.innerHTML='Resistence(&#8486;)';
		powCell.innerHTML='Power(W)';

		var value = LowResistence;
		var length = (HighResistence - LowResistence) / 100;

		//Create fill table rows with data
		var row = dataTable.insertRow(-1);
		var volCell = row.insertCell(0);
		var resCell = row.insertCell(1);
		var powCell = row.insertCell(2);
		
		volCell.setAttribute("rowspan", length+1);
		volCell.innerHTML = Voltage;
		resCell.innerHTML = value;
		var Power = (Math.pow(Voltage, 2)) / value;
		powCell.innerHTML = Power.toFixed(2);

		value = value + 100;

		while(value <= HighResistence){
			var row = dataTable.insertRow(-1);
			var resCell = row.insertCell(0);
			var powCell = row.insertCell(1);

			resCell.innerHTML = value;
			var Power = (Math.pow(Voltage, 2)) / value;
			powCell.innerHTML = Power.toFixed(2);

			value = value + 100;
		}
	}

	//Display nothing if LowResistence > HighResistence
	if(LowResistence > HighResistence){
		dataTable.style.display = "none";
	}
}


//This function will hide the data table
function toggleTable() {
	document.getElementById("dataTable").style.display = "none";
}