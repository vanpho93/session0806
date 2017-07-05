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

