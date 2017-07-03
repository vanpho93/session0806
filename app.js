const express = require('express');
const session = require('express-session');

const app = express();
app.use(session({
    secret: 'dkuhs178yefy83uef',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 10000 }
}));
app.listen(3000, () => console.log('Server started!'));

app.get('/muave', (req, res) => {
    req.session.daMuaVe = true;
    res.send('Ban da mua ve');
});

app.get('/vaorap', (req, res) => {
    if (!req.session.daMuaVe) return res.send('Ban phai mua ve!');
    res.send('Welcome!');
});
