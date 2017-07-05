const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'NODE0806',
    password: 'khoapham',
    user: 'postgres',
    max: 10,
    idleTimeoutMillis: 1000
});

// function queryDB(sql, arrayData, cb) {
//     pool.connect((err, client) => {
//         if (err) return cb(err);
//         client.query(sql, arrayData, cb);
//     });
// }

// module.exports = queryDB;

function queryDB(sql, arrayData) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client) => {
            if (err) return reject(err);
            client.query(sql, arrayData, (errQuery, result) => {
                if (errQuery) return reject(errQuery);
                resolve(result); 
            })
        });
    });
}

queryDB('SELECT * FROM "Product"', [])
.then(result => console.log(result.rows))
.catch(err => console.log(err));
