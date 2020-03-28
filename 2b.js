//mencetak huruf yang nilainya true

let huruf = ['a', 'b', 'q', 'e', 'd', 'k', 'v', 'l', 'p', 's'];
let perintah = [true, false, true, true, false, false, true, false, true, true];
let hasil = ''
for (i = 0; i < perintah.length; i++) {
    
    if (perintah[i] === true) {
       //hasil = huruf[i].split([''])
        console.log(huruf[i].join(' '));
        //hasil = huruf[i]    
        //console.log(hasil);
    }
}