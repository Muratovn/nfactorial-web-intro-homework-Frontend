// 1 task
const myRestourant = "Yakuza";
let shop = "Magnum";
let myFootballTeam = "Kaysar";

console.log("Название ресторана:", myRestourant);
console.log("Название магазина:", shop);
console.log("Футболная команда:", myFootballTeam);




let restourant = myRestourant;
let capacity = 75;
let openorclose = false;
let country = null;
let city;

console.log("Ресторан:", restourant, "вместимость людей:", capacity, "Открыто:", openorclose, "Страна:", country, "Город:", city);




let football = {
	nameOfTeam: myFootballTeam,
	players: 57,
	leader: "Sultan",
}
console.log(football);

football.deputy = "Sergei";
football["trainer"] = "Victor";
console.log(football);

delete football.deputy;
delete football["players"];
console.log(football);  

// 2 task

let vehicle = {
}
vehicle.brandName = "BMW";
console.log(vehicle);
vehicle.model = "X5";
console.log(vehicle);
vehicle.model = "M1";
console.log(vehicle);
delete vehicle.model;
console.log(vehicle);

// 3 task
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

let sum = 0;
for (let key in salaries) {
    sum = sum + salaries[key];
}

console.log(sum);