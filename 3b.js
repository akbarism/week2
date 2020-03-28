//mencari hasil mean, median, modus
function haft() {
    let acak = [20, 50, 40, 30, 40, 60, 10, 50]
    let hasil = 0
    for (i = 0; i < acak.length; i++) {
        hasil += acak[i]
        hasilbaru = Math.floor(hasil / acak.length)
    }
    console.log(acak);
    console.log(`nilai mean dari data tersebut adalah : ${hasilbaru}`);

    let cok = acak.length
    let med = 0
    acak.sort()
    if (cok % 2 == 0) {
        med = (acak[cok / 2 - 1] + acak[cok / 2]) / 2

    } else {

        med = acak[(cok + 1) / 2 - 1]
    }
    console.log(`median dari data tersebut adalah : ${med}`);

    let blok = 0
    for (i = 0; i < acak.length; i++) {


    }
}
haft()