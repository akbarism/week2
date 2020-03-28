arr = [12, 9, 27];
function hasil(arr) {
    while (arr.length > 1) {
        let storage = 0;
        arr.map(function (a) {
            storage = storage + a;
//console.log(storage);

        });
        arr = `${storage}`.split('').map(Number);
        console.log(arr);

    }
    //console.log(arr[0]);

}
hasil(arr);