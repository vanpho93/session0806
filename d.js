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
        }, 500);
    });
}

// add(4, 5)
// .then(tong => mul(tong, 6))
// .then(kq => console.log(kq))
// .then(x => console.log(x));

//

// add(4, 5)
// .then(tong => console.log(tong));

// mul(4, 5)
// .then(tich => console.log(tich));

// Promise.all([add(4, '5'), mul(4, 5)])
// .then(x => console.log(x))
// .catch(err => console.log(err.toString()))

// Promise.all([add(4, '5'), mul(4, 5)])
// .then(x => console.log(x))
// .catch(err => console.log(err.toString()));

// cung lay du lieu thoi tiet -> 2 nha cung cap
Promise.race([add(4, 5), mul(4, '5')])
.then(x => console.log(x));