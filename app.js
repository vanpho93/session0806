const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.listen(3000, () => console.log('Server started!'));

app.get('/muave', (req, res) => {
    res.cookie('daMuaVe', 'true');
    res.send('Ban da mua ve');
});

app.get('/vaorap', (req, res) => {
    if (req.cookies.daMuaVe === 'true') return res.send('Welcome!');
    res.send('Ban phai mua ve');
});
