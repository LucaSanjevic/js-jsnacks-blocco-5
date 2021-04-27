var zucchine = [
    {varieta: "varieta1", peso: 10, lunghezza: "21"},
    {varieta: "varieta2", peso: 5, lunghezza: "13"},
    {varieta: "varieta3", peso: 20, lunghezza: "30"},
    {varieta: "varieta4", peso: 7, lunghezza: "12"},
    {varieta: "varieta5", peso: 16, lunghezza: "34"},
    {varieta: "varieta6", peso: 18, lunghezza: "27"},
    {varieta: "varieta7", peso: 4, lunghezza: "23"},
    {varieta: "varieta8", peso: 11, lunghezza: "13"},
    {varieta: "varieta9", peso: 9, lunghezza: "10"},
    {varieta: "varieta10", peso: 45, lunghezza: "60"}
];

var somma = 0;

for (var i = 0; i < zucchine.length; i++) {
    somma += zucchine[i].peso
}

console.log(somma);

var zucchineLunghe = []
var zucchineCorte = []

var gruppozucchine = [
    {peso: 4, lunghezza: 4},
    {peso: 6, lunghezza: 12},
    {peso: 9, lunghezza: 11},
    {peso: 11, lunghezza: 35},
    {peso: 15, lunghezza: 40},
    {peso: 17, lunghezza: 43},
    {peso: 13, lunghezza: 39},
    {peso: 10, lunghezza: 26},
    {peso: 7, lunghezza: 5},
    {peso: 1, lunghezza: 2}
];

for(var i = 0; i < gruppozucchine.length; i++) {
    if(gruppozucchine[i].lunghezza < 15) {
        zucchineCorte.push(gruppozucchine[i])
    }
    else if (gruppozucchine[i].lunghezza > 15) {
        zucchineLunghe.push(gruppozucchine[i])
    }
}

var sommeZucchineLunghe = 0;
var sommeZucchinecorte = 0;

for (var i = 0; i < zucchineLunghe.length; i++) {
    sommeZucchineLunghe += zucchineLunghe[i].peso
}

for (var i = 0; i < zucchineCorte.length; i++) {
    sommeZucchinecorte += zucchineCorte[i].peso
}

console.log(sommeZucchineLunghe);
console.log(sommeZucchineCorte);