mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function input(mat) {
    for (let b = 0; b < mat.length; b++) {
        let kopi = [...mat[b]]
        for (let k = 0; k < mat[b].length; k++) {

            kopi[k] = mat[k][b];

        }
        console.log(kopi);

    }
}
input(mat);
