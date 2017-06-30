const queryDB = require('../db');

class User {
    constructor(email, password, name, phone) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.phone = phone;
    }

    signUp(cb) {
        const signUpSql = `
            INSERT INTO public."User"(
            email, password, phone, name)
            VALUES ('${this.email}', '${this.password}', '${this.phone}', '${this.name}');
        `;
        queryDB(signUpSql, cb);
    }

    signIn() {

    }
}

const user = new User('vanpho01@gmail.com', '123', 'Pho', '0218387218');
user.signUp(err => console.log(err));
