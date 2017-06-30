const express = require('express');
const app = express();
const parser = require('body-parser').urlencoded({ extended: false });
const User = require('./models/User');

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
    user.signIn(err => {
        if (err) return res.send('LOI_DANG_NHAP');
        res.send('DANG_NHAP_THANH_CONG');
    });
});

app.listen(3000, () => console.log('server started!'))