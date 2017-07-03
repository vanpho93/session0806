const jwt = require('jsonwebtoken');

const SECRET_KEY = '238ih8gwbuydg182ddy28';

// object <-> token

jwt.sign({ email: 'vanpho01@gmail.com' }, SECRET_KEY, (err, token) => {
    console.log(token);
});

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbnBobzAxQGdtYWlsLmNvbSIsImlhdCI6MTQ5OTA1MTM3NX0.3hqEYPzm8wcfhdSWwbXMXaHLCnx2s1GYLv-Q-M8BR2o'

jwt.verify(token, SECRET_KEY, (err, obj) => {
    console.log(err.toString());
});
