//menghitung jumlah indomi yang di beli si dede


function dapet(uang, hargami, promo) {
    let dapat = uang / hargami;
    let bonus = dapat / promo;
    let dapetpromo = bonus + dapat;
    console.log(`anda mendapa mi sejumlah ${dapetpromo} bungkus`);
}
dapet(50000, 2500, 4);
