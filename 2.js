//mengubah bilangan menjadi segitiga siku2

let prima = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
segitiga = ''
function print(angka) {
    if ( angka < 10){
        for (i = 0; i < angka; i++) {
            segitiga += prima[i] + ' ';
            console.log(segitiga);
    
        }
    }else {
        console.log('salah!');
        
    }
}
print(5);