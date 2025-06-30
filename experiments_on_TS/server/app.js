const express = require('express');
const app = express();
const responseData =  require('./responseData.json');

app.get('/', (request, response) => {
    response.json(responseData)
})
app.listen(3000);