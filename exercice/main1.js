

function trierChiffres(n) {
    // Convertir le nombre en chaîne de caractères
    let chiffres = n.toString().split('');
    
    // Trier les chiffres du plus grand au plus petit
    let nombre1 = parseInt(chiffres.sort((a, b) => b - a).join(''));
    
    // Trier les chiffres du plus petit au plus grand
    let nombre2 = parseInt(chiffres.sort((a, b) => a - b).join(''));
    
    return [nombre1, nombre2];
}

function soustraire(nombre1, nombre2) {
    return nombre1 - nombre2;
}

function operation(n) {
    let result = n;
    let iteration = 1;
    
    while (result !== 0) {
        let [n1, n2] = trierChiffres(result);
        result = soustraire(n1, n2);
        
        console.log(`Iteration ${iteration}: ${n1} - ${n2} = ${result}`);
        
        if (result === 0 || result === n) {
            break;
        }
        
        iteration++;
    }
}

let nombre = parseInt(prompt("Entrez un nombre :"));
operation(nombre);

