function add(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error('Loi kieu du lieu'))
            }
            resolve(a + b);
        }, 1000);
    });
}

function mul(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error('Loi kieu du lieu'))
            }
            resolve(a * b);
        }, 1000);
    });
}

function div(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error('Loi kieu du lieu'))
            }
            if (b === 0) return reject(new Error('Chia cho 0'))
            resolve(a / b);
        }, 1000);
    });
}

//4, 5, 6

// add(4, 5)
// .then(tong => mul(tong, 6))
// .then(tich => div(tich, 2))
// .then(dienTich => console.log(dienTich))
// .catch(err => console.log(err.toString()));

function tinhDienTich(a, b, h) {
    return add(a, b)
    .then(tong => mul(tong, h))
    .then(tich => div(tich, 2))
}

tinhDienTich(4, 5, 6)
.then(dienTich => console.log(dienTich))
.catch(err => console.log(err));
