const express = require('express');
const app = express();
const cors = require('cors');
const responseData =  require('./responseData.json');
app.use(cors());

app.get('/', (request, response) => {
    response.json(responseData)
})
app.listen(3000);