/**
 * Alberto Garcia
 */
function comprovarNum(num){
    return typeof num === "number" 
}

//2.1 Fes un programa que demane una número entre 0 i 50 i retorne el seu quadrat

function exercici1(){
    const number = prompt("Ingresa un num entre 0 i 50")
    
    if (number < 0 || number > 50) {
        alert("Número no vàlid, recarrega la pàgina de nou.")
    } else {
        const result = number ** 2
        alert("El resultat és: " + result)
    }
}

//2.2 Fes un programa que demane un número i comprove si és un número enter
function exercici2(){
    const number = +prompt("Introdueix un nombre")

    if (number % 1 === 0) {
        alert("És un nombre enter")
    } else {
        alert("És un nombre decimal")
    }
}

//2.3 Fes un programa que demane un número, que comprove si realment és un número i redondege a dos xifres decimals
function exercici3(){
    const number = +prompt("Introdueix un nombre")

    //if (isNaN(number))
    if (comprovarNum(number)){
        alert("No és un número")
    } else {
        alert("Sí és un numero")
    }
}

//2.4 Fes un programa que demane un número enter, comprove si ho és i el convertisca en un float
function exercici4(){
    const number = +prompt("Introdueix un nombre")

    if (comprovarNum(number)){
        alert("Número no vàlid, recarrega la pàgina de nou.")
    } else {
        const result = parseFloat(number)
        alert(`El valor es ${result}`)
    }
}

//2.5 Fes un programa que demane el radi, comprove que és un número i si ho és calcule l’àrea de la circunferència fent ús de PI
function exercici5(){
    const radi = +prompt("Introdueix un nombre")

    if(comprovarNum(radi)){
        const result = Math.PI * Math.pow(radi, 2)
        alert(`El resultat és: ${result.toFixed(2)}`)
    } else {
        alert("Número no vàlid, recarrega la pàgina de nou.")
    }
}

//2.6 Fes un programa que demane dos números, comprove quin és el major i el menor, faça la divisió i mostre el resultat total, el de la part entera i el resto.
function exercici6(){
    const num1=+prompt('Introdueix un número: ')
    const num2=+prompt('Introdueix un altre número: ')

    let major
    let menor

    if (num1 > num2) {
        major = num1
        menor = num2
    } else {
        menor = num1
        menor = num2
    }

    const divisio = Math.floor(major / menor)
    const residu = major % menor
    alert(`La part entera: ${divisio} i el residu: ${residu}`)
}