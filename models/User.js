const { hash } = require('bcrypt');
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
                VALUES ('${this.email}', '${encrypted}', '${this.phone}', '${this.name}');
            `;
            queryDB(signUpSql, cb);
        });
    }

    signIn() {

    }
}

const user = new User('vanpho01@gmail.com', '123', 'Pho', '0218387218');
user.signUp(err => console.log(err));
