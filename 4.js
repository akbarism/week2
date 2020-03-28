//mencari nilai terbesar dan terkecil lalu mengurutkanya dari terbesar ke terkecil

const ascending = [6, 22, , 15, 2, 13, 26, 57, 42, 32]
function col(a, b) {
    highest = Math.max.apply(null, ascending);
    console.log(`nilai terbesar dari array ini adalah : ${highest}`);
    lower = Math.min.apply(null, ascending);
    console.log(`nilai terkecil dari array ini adalah ${lower}`);
    ascending.sort(function (a, b) { return a - b })
    console.log(`mengurutkan data array dari kecil ke ter besar : ${ascending}`);
    descending = ascending.sort(function (a, b) { return b - a })
    console.log(`mengurutkan data array dari besar ke terkecil : ${descending}`);

}

col()