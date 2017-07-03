// a, b, h
// (a + b) * h / 2

function add(a, b, cb) {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return cb(new Error('Type error'));
        }
        cb(null, a + b);
    }, 1000);
}

function mul(a, b, cb) {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return cb(new Error('Type error'));
        }
        cb(null, a * b);
    }, 1000);
}

function div(a, b, cb) {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return cb(new Error('Type error'));
        }
        if (b === 0) return cb(new Error('Chia cho 0'));
        cb(null, a / b);
    }, 1000);
}

function tinhDienTichHinhThang(a, b, h, cb) {
    add(a, b, (errAdd, total) => {
        if (errAdd) return cb(errAdd);
        mul(total, h, (errMul, mulResult) => {
            if (errMul) return cb(errMul);
            div(mulResult, 2, (errDiv, square) => {
                if (errDiv) return cb(errDiv);
                cb(null, square);
            });
        }); 
    });
}

tinhDienTichHinhThang(4, 5, 6, (err, square) => {
    console.log(square);
});
