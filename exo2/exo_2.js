
let user = '5'
let user2 = '5'

for ( let i = 0; i <= user; i++) {
    let line = ''
    for (let x = 0; x <= user2; x++) {
        if (i % 2 !==0) {
        line += '⬜ ⬛ ','\t'
    } else {
        line += '⬛ ⬜ ','\t'
    }
}
    console.log(line);
}