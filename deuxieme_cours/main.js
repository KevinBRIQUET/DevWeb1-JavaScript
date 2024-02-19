// // Comparer x et y dans la console

// let x = parseInt(prompt("Saisir la valeur de x"))
// let y = parseInt(prompt("Saisir la valeur de y"))
// if ( x < y ) {
//     console.log ( "x est inférieur à y" )
// }
// else
// {
//     if (x > y ){
//         console.log ( "x est superieur à y" )
//     }
//     else {
//         console.log ( "x est = à y" )
//     }
// }

// //

// if ( x < y ) {
//     console.log ("x est inférieur à y")
// } else if ( x > y ) {
//     console.log ("x est superieur à y")
// } else {
//     console.log ("x est = à y")

// }

// if ( x > 0 && x <30 )

// {
//     console.log("x est compris entre 0 et 30")
// }

function  mafonction(nombre)
{
    let somme = 0
    for(i = 0 ; i <= 10 ; i++){
        console.log(i*nombre)
        somme += i*nombre
    }
    console.log(uneVariableGlobale)

    return somme
}

let uneVariableGlobale = "je suis globale"
let resultat = mafonction(5)
console.log(somme)




// let vitesse = parseInt(prompt("saisir votre vitesse"))

// switch(vitesse){
//     case 90:
//         console.log("sur une national c'est pas mal")
//         break
//     case 110:
//         console.log("J'espère que vous êtes sur une voie rapie")
//         break
//     case 130:
//         console.log("vive l'A31 ...")
//         break
//     case 150:
//         console.log("gutten tag")
//         break
//     default : 
//         console.log("Je ne connais pas  cette limite")
//     }


