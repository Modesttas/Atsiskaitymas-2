/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';


let cars = {};
function data(info){
	const body = document.getElementById("output");
	for(let i = 0; i < info.length; i++){
		const container = document.createElement('div');
		const div = document.createElement('div');
		div.classList.add("div");
		const models = document.createElement('div');
		models.classList.add("models");
		div.innerText = info[i].brand;
		models.innerText = info[i].models;
		container.append(div);
		container.append(models);
		body.append(container);
	}	
}
fetch(ENDPOINT)
    .then(result => result.json())
    .then((output) => {
		cars = output;
		data(cars);
        
}).catch(err => console.error(err));