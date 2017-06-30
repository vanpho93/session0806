const { hash, compare } = require('bcrypt');
const queryDB = require('../db');

class User {
    constructor(email, password, name, phone) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.phone = phone;
    }

    signUp(cb) {
        hash(this.password, 8, (err, encrypted) => {
            if (err) return cb(err);
            //encrypted
            const signUpSql = `
                INSERT INTO public."User"(
                email, password, phone, name)
                VALUES ($1, $2, $3, $4);
            `;
            queryDB(signUpSql, [this.email, this.password, this.phone, this.email], cb);
        });
    }

    signIn(cb) {
        const sql = `SELECT * FROM "User" WHERE email = '${this.email}'`;
        queryDB(sql, (err, result) => {
            if (err) return cb(err);
            if (result.rows.length === 0) return cb(new Error('Email khong ton ta'));
            const encrypted = result.rows[0].password; 
            compare(this.password, encrypted, (errCompare, same) => {
                if (errCompare) return cb(errCompare);
                if (!same) return cb(new Error('Sai mat khau'));
                cb(null);
            });
        });
    }
}

const user = new User('vanpho01@gmail.com', '12a3');
// user.signUp(err => console.log(err));
user.signIn(err => console.log(err));
