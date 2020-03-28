// const nilai = 10;
// if(nilai>9){
//     console.log('ini benar')
// } else if(nila >5)

let text = ''
let i =1;
while (i<10){
    text += "the number is " + i +"\n";
    i++;
}
console.log(text)


// let siswa = ['budi', 'andi', 'feby'];

// // siswa.forEach(function(e){
// //     console.log('ini adalah' +e);
// // })

// siswa.map(function(e))

let siswa = ['budi', 'andi', 'codot'];
let umur = [30, 50, 100];

let databaru = siswa.map(function(item){
    return item +2;
})
let umurFilter = umur.filter((e)=>{
    return e.umur>30
})
console.log(umurni