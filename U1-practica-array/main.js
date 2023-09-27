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
    array2.push(genRand(9))
}

let contador = [0,0,0,0,0,0,0,0,0,0]
for (let i = 0; i < array2.length; i++){
    const valor = array2[i]
    switch (valor){ 
        case 0: 
            contador[0] += 1
            break;
        case 1:
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
    if (array.includes(num)) {
        return inclouNum(array)
    } else {
        return num
    } 
}

console.log(array3.sort())