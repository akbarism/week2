//mengkonversi bilangan desimal ke bilangi binary

function konversi(desimal) {
    let biner = ''
    while (desimal > 0) {
        biner = (desimal % 2) + biner
        desimal = Math.floor(desimal / 2)

    }
    return biner
}
console.log(konversi(10))