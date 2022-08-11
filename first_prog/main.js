const express = require('express');
const app = express();

// Home route / base route
app.get('/', (req, res) => {
    res.send('Hello World! - it is a GET request');
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});