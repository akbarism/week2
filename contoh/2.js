// let i = ['budi','badi'];
// console.log(i[0])

// let biodata = {
//     username : 'risano',
//     email : 'muhammad@gmail.com'
// }
// console.log(biodata.email)
let arr = [123, 9, 27]
function arrayOfNumber(arr) {
    while (arr.length > 1) {
        let storage = 0
        arr.forEach(function (a) {
            storage = storage + a
            //console.log(storage);
        })
        arr = `${storage}`.split('').map(Number)
        console.log(arr);
        
    }
}
arrayOfNumber(arr)