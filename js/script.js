var result = document.querySelector(".result");

alert("Assalomu alaykum pul almashtirish shohobchasiga hush kelibsiz!");
var client = prompt("Qaysi valyuta turiga almashtirasiz? (dollar,euro,rubl)");
var sum = +prompt("Necha sumingiz bor?");

//Kurs valuyta
var dollar = 11333.55;
var euro = 11860.67;
var rubl = 179.57;

//Sumga valyutani bo'lish
var dollar = sum / dollar;
var euro = sum / euro;
var rubl = sum / rubl;

var dollarKurs = `Sizda ${dollar} Dollar bo'lar ekan.`;
var euroKurs = `Sizda ${euro} Euro bo'lar ekan.`;
var rublKurs = `Sizda ${rubl} Rubl bo'lar ekan.`;

// const banknot = [dollar, euro, rubl];

//Natija
if (client === "dollar") {
  result.textContent = dollarKurs;
} else if (client === "euro") {
  result.textContent = euroKurs;
} else if (client === "rubl") {
  result.textContent = rublKurs;
} else {
  ("Siz notugri malumot kiritdingiz.");
}

// console.log(euroS);
// resultDollar.textContent = `Sizda ${dollar} Dollar bo'lar ekan.`;
// resultEuro.textContent = `Sizda ${euro} Euro bo'lar ekan.`;
// resultRubl.textContent = `Sizda ${rubl} Rubl bo'lar ekan.`;
