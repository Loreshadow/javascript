for (let i = 1; i <= 100; i++) {
    let output = i;
    // divisible 3 et 5
    if (i % 3 === 0 && i % 5 === 0) {
        output = `${i} foobar`;
    } 
    // divisible par 3
    else if (i % 3 === 0) {
        output = `${i} foo`;
    } 
    // divisible par 5
    else if (i % 5 === 0) {
        output = `${i} bar`;
    }
    console.log(output);  
}