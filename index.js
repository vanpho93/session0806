const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const SECRET_KEY = '2her8192ej';
const app = express();
const parser = require('body-parser').urlencoded({ extended: false });
const User = require('./models/User');

app.use(cookieParser());
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
        jwt.sign({ name }, SECRET_KEY, { expiresIn: 30 }, (err, token) => {
            res.cookie('token', token);
            res.send('DANG_NHAP_THANH_CONG');
        });
    });
});

app.get('/private', (req, res) => {
    //Neu dang nhap roi, hien thi ra 'Hello + name';
    //redirect toi signIn
    const { token } = req.cookies;
    if (!token) return res.redirect('/signIn');
    jwt.verify(token, SECRET_KEY, (err, object) => {
        if (err) return res.redirect('/signIn');
        res.send('Welcome ' + object.name);
    });
});

app.listen(3000, () => console.log('server started!'))