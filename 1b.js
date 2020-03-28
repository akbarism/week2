//mengubah data si tatas  dan si pratama awkoakw

let data = [
    {
        name: 'Tatas',
        company: 'Arkademy',
        job: 'Trainer',
        status: 'single',
        city: 'Jogja'
    },
    {
        name: 'Pratama',
        company: 'Emago',
        job: 'Trainer',
        status: 'single',
        city: 'Jakarta'
    }
]


tatass = { ...data[0] }
pratamm = { ...data[1] }
dataBaru = [tatass, pratamm];
tatass.status = 'menikah'
tatass.city = pratamm.city
pratamm.company = tatass.company
pratamm.city = data[0].city
console.log(data);
console.log(dataBaru);