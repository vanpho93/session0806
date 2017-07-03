const express = require('express');
const session = require('express-session');

const app = express();
const parser = require('body-parser').urlencoded({ extended: false });
const User = require('./models/User');

app.use(session({
    secret: 'dkuhs178yefy83uef',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 5000 }
}));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/signUp', (req, res) => res.render('signUp'))
app.get('/signIn', (req, res) => res.render('signIn'))

app.post('/signUp', parser, (req, res) => {
    const { name, phone, password, email } = req.body;
    const user = new User(email, password, name, phone);
    user.signUp(err => {
        if (err) return res.send('LOI');
        res.send('THANH CONG');
    });
});

app.post('/signIn', parser, (req, res) => {
    const { password, email } = req.body;
    const user = new User(email, password);
    user.signIn((err, name) => {
        if (err) return res.send('LOI_DANG_NHAP');
        req.session.daDangNhap = true;
        req.session.name = name;
        res.send('DANG_NHAP_THANH_CONG');
    });
});

app.get('/private', (req, res) => {
    //Neu dang nhap roi, hien thi ra 'Hello + name';
    //redirect toi signIn
    if (!req.session.daDangNhap) return res.redirect('/signIn');
    res.send('Welcome ' + req.session.name);
});

app.listen(3000, () => console.log('server started!'))