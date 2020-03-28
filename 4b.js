//mencari data perpustakaan

let perpus = [
    {
        title: 'dilan 1990',
        author: 'pidi baiq',
        status: 'available',
    },
    {
        title: 'ubur-ubur lembur',
        author: 'raditya dika',
        status: 'available',
    },
    {
        title: 'rindu',
        author: 'tere liye',
        status: 'available',
    }]

for (i = 0; i < perpus.length; i++) {
    if (perpus[i].title == 'dilan 1990') {
        console.log(perpus[i].status);
    }
}
for (i = 0; i < perpus.length; i++) {
    if(perpus[i].status == 'available'){
        console.log(perpus[i]);
        
    }
}
