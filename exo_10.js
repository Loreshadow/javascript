for (let i = 1; i <= 100; i++) {
    let output = i;
    
    // Vérification divisible 3 et 5
    if (i % 3 === 0 && i % 5 === 0) {
        output = `${i} foobar`;
    } 
    // Vérification divisible par 3
    else if (i % 3 === 0) {
        output = `${i} foo`;
    } 
    // Vérification divisible par 5
    else if (i % 5 === 0) {
        output = `${i} bar`;
    }
    
    console.log(output);  
}