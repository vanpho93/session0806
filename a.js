const { hash, compare } = require('bcrypt');

const pass = '123';

hash(pass, 8, (err, encrypted) => {
    console.log(encrypted);
});

// compare('1234', '$2a$08$gpHzUYPmEvfTCI06p9i40ulFyT10W.XAMEnolV25bghiFkW/yW9dK', (err, same) => {
//     console.log(same);
// });
