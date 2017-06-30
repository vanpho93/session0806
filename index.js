const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/signUp', (req, res) => res.render('signUp'))
app.get('/signIn', (req, res) => res.render('signIn'))

app.listen(3000, () => console.log('server started!'))