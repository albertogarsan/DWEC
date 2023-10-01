/**
 * MANERA DECLARATIVA DE FER UNA QUADRICULA 5X5
 */
const quadricula = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

/**
 * MANERA AMB DOBLE FOR
 */
const canvas = []

for (let row=0; row<5; row++){
    //Li afegim a l'array canvas un array dins -> a cada iteració del for generarà una fila valor de qual és un array més
    canvas.push([])
    for (let col = 0; col < 5; col++){
        //Per a cada iteració del for, afegim a eixa fila el valor de 0
        canvas[row].push(0)
        //canvas[row][col] = 0
    }
}

console.table(canvas)


/**
 * MANERA AMB L'OBJECTE Array.from(iterable, function)
 */
//Array és un objecte estàtic global com si fora Math
//From és un mètode de Array que admet dos paràmetres
//El primer paràmetre ha de ser un iterable, per tant l'únic que li interessa és la longitud d'un array, numero, caràcters d'un "string"... etc.
//El segon paràmetre admet una funció arrow que s'executa tantes vegades com elements té el primer paràmetre i que el seu return és el valor de cadascun dels elements de l'array.
const tablero = Array.from({length:5},()=>[0,0,0,0,0])

console.log(tablero)