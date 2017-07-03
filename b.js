// Promise <value>
// const a = '5';
// const b = 4;

// const aPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             return reject(new Error('Loi kieu du lieu'))
//         }
//         resolve(a + b);
//     }, 1000);
// });


// aPromise
// .then(x => console.log(x))
// .catch(err => console.log(err.toString()));
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

add(4, 5)
.then(total => console.log(total))
.catch(err => console.log(err.toString()));
