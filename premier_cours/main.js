// Commentaire



let myButton = document.querySelector("#mon_boutton")
function message()
{
    alert("c'est la pause !")
}

/*
let mon_age = 34

*/

myButton.addEventListener('click',message)
/*
console.log(mon_age)
console.log(typeof(mon_age))
let prenom = "Kevin"
console.log(typeof(prenom))


*/

//boucle finie en JS

let resultat = document.querySelector("#resultat")
for(i = 0 ; i < 10 ; i++)
{
    resultat.innerHTML += "<br>" + i 
}


// boucle while

let i = 0
while( i < 10 )
{
    resultat.innerHTML += "<br> while" + i
    i++ 
}

// 

i = 10
do {
    resultat.innerHTML += "<br> while" + i
    i++ 
} while(i < 10 )