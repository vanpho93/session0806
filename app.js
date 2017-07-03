const express = require('express');

const app = express();
app.listen(3000, () => console.log('Server started!'));

app.get('/muave', (req, res) => {
    res.send('Ban da mua ve');
});

app.get('/vaorap', (req, res) => {
    res.send('Welcome!');
});
