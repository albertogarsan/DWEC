//E1 Fes un programa que demane la nota d’un alumne i et responga la qualificació que ha obtés (insufi- cient, suficient, bé, notable, excel·lent). També ha de donar un avís en cas que la nota introduida no siga vàlida.
/*const qualificacio = ["insuficient", "suficient", "bé", "notable", "excel·lent"]
let reiniciar = "Y"

while (reiniciar.toLowerCase() === "y") {
    const notaAlum = prompt("Nota de l'alumne: ")

    if (notaAlum < 5){
        alert(qualificacio[0])
    } else if (notaAlum >= 5 &&  notaAlum <= 6) {
        alert(qualificacio[1])
    } else if (notaAlum >= 6 &&  notaAlum <= 7) {
        alert(qualificacio[2])
    } else if (notaAlum >= 7 &&  notaAlum <= 9) {
        alert(qualificacio[3])
    } else if (notaAlum >= 9 &&  notaAlum <= 10) {
        alert(qualificacio[4])
    } else {
        alert("Nota introduïda no vàlida")
    }
    
    reiniciar = prompt("Afegir més qualificacions? (Respon: Y per a Sí o N per a no) ")
}*/


//E2 Fes un programa que et mostre el valor mínim i màxim d’un vector de 15 números sencers, sense utilitzar cap funció específica.
const nums = [5,1,10,3,0,-1,90,43,211,23,123,212,32,45,43]

let menor = Infinity
let major = -Infinity

nums.forEach(num => {
    if (num < menor) {
        menor = num;
    }
    if (num > major) {
        major = num
    }
})

console.log(menor, major)


//E3 Fes un programa que et demane l’alçada i el pes i et responga quin és l’estat del pacient segons el seu IMC. No cal fer formulari, pots assignar directament valor a les variables o utilitzar un prompt. Fòrmula i taula d’estats;

/* const altura = prompt("Introdueix l'alçada(m): ")
const pes = prompt("Introdueix el pes(kg): ")

const imc = pes / (altura ** 2)

if (imc <= 18.5) {
    alert("Estàs massa prim")
} else if (imc <= 25){
    alert("Estàs bé")
} else if (imc <= 30) {
    alert("Tens sobrepés")
} else if (imc >30) {
    alert("Estàs obés")
} else {
    alert("Resposta no vàlida.")
} */

//E4 Ordena un vector de 15 nombres sencers.
console.log(nums.sort((a,b) => a-b))

//E5 
/* const operacio = prompt ("Tria si sumar, restar, multiplicar, dividir o eixir: ")

let operand1 = +prompt("Introduix un operand: ")
let operand2 = +prompt("Introduix un operand: ")

function sumar(a,b) {
    return a+b
}
function restar(a,b) {
    return a-b
}
function multiplicar(a,b) {
    return a*b
}
function dividir(a,b) {
    return a/b
}

if (operacio.toLowerCase() == "sumar"){
    console.log(sumar(operand1, operand2))
}
else if (operacio.toLowerCase() == "restar"){
    console.log(restar(operand1, operand2))
}
else if (operacio.toLowerCase() == "multiplicar"){
    console.log(multiplicar(operand1, operand2))
}
else if (operacio.toLowerCase() == "sumar"){
    console.log(dividir(operand1, operand2))
} 
else if (operacio.toLowerCase() === "eixir") {
    console.log("Adéu")
} else {
    console.log("Resposta no vàlida")
} */


//E5 Fes un programa que vaja sumant els números que anem introduint fins que arribe a 1000. Quan arribe a 1000 o superio el programa informarà a l’usuari i acabarà.
/* const numero = 0

while (numero < 1000) {
    numero += numero
    const numero = +prompt("Introdueix un numero: ")
}

console.log("Has superat la suma de 1000") */

//E6 Fes una quadrícula de 5x5 i ubica 10 bombes dins. En programa demanarà que introduisques la coordenadaXi laYi indicarà si hi ha bomba o no.

//Generem una quadricula de 5x5
const quadricula = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

//Generem un random i la fem funció per a reutilitzar-la en altres parts del programari
let random = () => Math.floor(Math.random()*5)

for (let i = 0; i < 10; i++){
    //Generem una coordenada X
    let xRandom = random()
    //Generem una coordenada Y
    let yRandom = random()
    
    //Comprovem que si el valor de la coordenada Y i X és diferent a 0, és a dir, que hi ha una bomba, que torne a generar una coordenada en cada eix
    while (quadricula[yRandom][xRandom] !== 0) {
        xRandom = random()
        yRandom = random()
    }

    //I si no, al valor per a eixes coordenades li assignem 1, que és el valor de bomba
    quadricula[yRandom][xRandom] = 1
}

console.table(quadricula)
//const userX = prompt("Introdueix la coordenada X: ")
const userX = 3
const userY = 4

//Comprovem que els valors introduïts per l'usuari que corresponen a les posicions de la quadricula, el seu valor siga 1, és a dir, que hi ha bomba, si no, no hi ha bomba!
if (quadricula[userY][userX] === 1) {
    console.log("Hi ha bomba!")
} else {
    console.log("No hi ha bomba!")
}





//E7 Genera 6 números aleatoris que simularan la primitiva. Seran números sencers entre 1 i 49. Demana que introduisca 6 números o utilitza 6 variables, i indica el número d’encerts. 

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;}
//userNums és l'array de números que imputaria l'usuari i posteriorment l'ordenem de manera ascendents
const userNums = [10,6,20,48,25,33].sort((a,b) => a - b)
//Primitiva és un array fent ús de l'objecte Array el qual posteriorment l'ordenem de manera ascendent els números
const primitiva = Array.from({length:6}, ()=>getRandomInt(1, 49)).sort((a,b) => a - b)
// Filter retorna un array amb els valors. Però fem ús de la propietat length perquè ens interessa la longitud per a saber la quantitat d'encerts
const encerts = userNums.filter((valor)=>primitiva.includes(valor)).length

console.log(primitiva)
console.log(encerts)


