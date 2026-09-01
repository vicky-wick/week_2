const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes); //routes me get use nahi hota, use use hota hai

app.listen(3000, () => console.log('Server running on port 3000'));