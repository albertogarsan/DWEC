//E1 - Crea una matriu de 3 files i 5 columnes. El contingut de les cel·les ha de ser un indicador de la fila i la columna de manera que la primera fila quede f1c1, f1c2, f1c3... Recorre tota la matriu empalmant dos forEach() i mostra el resultat en consola.
const array = [
    ["f1c1","f1c2","f1c3","f1c4","f1c5"],
    ["f2c1","f2c2","f2c3","f2c4","f2c5"],
    ["f3c1","f3c2","f3c3","f3c4","f3c5"]
]

array.forEach(linia => {
    linia.forEach(cela => {
        console.log(`${cela}`)
    })
})

//E2 - Repeteix l’exercici anterior però has de crear la matriu a partir de tres files i afegir‐les una a una fent ús del mètode push().
const arrayMod = []
//Com no tenim ningun array sobre el que aplicar el mètode d'arrays .forEach() utilitzarem for.
for (let i = 0; i < 3; i++){
    arrayMod.push([`f${[i+1]}c1`,`f${[i+1]}c2`,`f${[i+1]}c3`,`f${[i+1]}c4`,`f${[i+1]}c5`])
}

console.table(arrayMod)

//E3 - Genera un array de 100 números aleatoris sencers entre 0 i 9. Conta el número de vegades que apareix cadascun dels dígits i mostra‐ho per consola.
function genRand(max){
    return Math.floor(Math.random()*(max+1))
}

const array2 = []
for (let i = 1; i <= 100; i++){
    //A cada iteració dins del for s'afegix un num random que es genera a la funció superior
    array2.push(genRand(9))
}

// Creem un array de contador amb els 10 possibles posicions (0 a 9) que són els números dels quals volem portar un tracking i cada index de l'array correspon a un numero que anem afegim +1. Per no gastar 10 variables diferents, fem ús de l'array.
let contador = [0,0,0,0,0,0,0,0,0,0]

// Recorrem l'array segons la seua longitud per a passar per cada posició
for (let i = 0; i < array2.length; i++){
    // Amb array[i] obtenim el valor de l'array2 en la posició iteradora i guardarem eixe resultat com a valor i el passarem com a condició al switch
    const valor = array2[i]
    switch (valor){ 
        case 0: 
            // En la posició 0 del contador si en l'array2 posicio 0 té el valor 0 entonces al contador li afegim +1
            contador[0] += 1
            break;
        case 1:
            // Si array2 posicio 1 té el valor 1 entonces al contador li afegim +1 en la posició 1 de contador
            contador[1] += 1
            break;
        case 2:
            contador[2] += 1
            break;
        case 3:
            contador[3] += 1
            break;
        case 4:
            contador[4] += 1
            break;
        case 5:
            contador[5] += 1
            break;
        case 6:
            contador[6] += 1
            break;
        case 7:
            contador[7] += 1
            break;
        case 8:
            contador[8] += 1
            break;
        case 9:
            contador[9] += 1
            break;
    }

}

//Per últim, per cada item del contador guardem el compte i el index i ho mostrem per consola
contador.forEach((compte, i) => {
    console.log(`El número ${i} ha aparegut ${compte.toString().padStart(2)} vegades`)
})

//E4 Genera un array de 25 números aleatoris sencers entre 0 i 100. Cap número es pot repetir. Mostra el resultat per consola.
const array3 = []

for(let i = 0; i < 25; i++){
    const numero = inclouNum(array3)
    array3.push(numero)
}

function inclouNum(array){
    let num = genRand(100)
    //Comprova si es repetix algun número, de ser que sí, torna a cridar-se la funció recursivament fins a trobar un num que no es repetisca i cumplir amb la condició del for <25 sino retorna el num i en el for s'afegix a l'array3
    if (array.includes(num)) {
        return inclouNum(array)
    } else {
        return num
    } 
}

console.log(array3.sort())

//E5 Genera un array de 100 números aleatoris sencers entre 0 i 9. Fes que siguen 0 totes les caselles des de la 25 fins a la 75.
const array4 = []

for (let i = 0; i < 100; i++){
    let num = genRand(9)
    array4.push(num)
}

array4.forEach((_, index) => {
    if (index >= 25 && index <= 75) {
        array4[index] = 0
    } 
}) 

/* for (let i = 0; i < array4.length; i++){
    if (i >= 25 && i <= 75) {
        array4[i] = 0
    } 
} */


console.table(array4)

//E6 Genera un vector amb noms d’animals. Demana per pantalla a l’usuari que introduisca un nom i determina si existeix al vector o no amb includes().
/* const animals = ["Humà", "Lleó", "Pantera", "Colom"]
const resultat = prompt("Introduix el nom d'un animal: ")

if (animals.includes(resultat)){
    alert(`Encerts!! El ${resultat}, és un animal`)
} else {
    alert(`El ${resultat}, no es troba a la nostra en el nostre sistema 😭`)
} */

//E7 A partir d’un vector de paraules genera un string amb totes les paraules unides.
const paraules = ["hola", "món", "com", "va", "tot?"]

console.log(paraules.join(" "))

//E8 Ordena alfabèticament un vector de noms.
const noms = ["Berto", "Antoni", "Sara", "Zacarias"]

console.log(noms.sort())

//E9 Fes un vector de noms. Amb filter() torna un vector que tinga aquells noms amb 6 o més lletres
console.log(noms.filter((word) => word.length > 6))

//E10 Genera una matriu on cada fila serà el nom d’un producte i el seu preu en euros. Posa el preu entre 0 i 100€. Aplica les funcions necessàries per a, a partir d’aquesta matriu, obtindre altra matriu amb aquells productes que el seu preu siga major de 75€ i s’haja aplicat una rebaixa del 10%.

const productes = [
    {article: "yoyó", preu : 2},
    {article: "barbie", preu: 35},
    {article: "raspberry", preu: 99},
    {article: "guitarra", preu: 86},
    {article: "videojoc", preu: 51},
    ]

const productesFiltrats = productes.filter((producte) => {
    return producte.preu > 75
})

const productesFiltratsAmbRebaixa = productesFiltrats.map(producte => {
    return producte.preu -= (producte.preu * 0.10)
})

console.log(productesFiltratsAmbRebaixa)


