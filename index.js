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

app.listen(3000, () => console.log('server started!'))