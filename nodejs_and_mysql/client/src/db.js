const mysql = require('mysql');


let connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'kitchen',
    }
)

function establishConnection () {

    connection.connect(error => {
        if(error) {
            console.log('Ошибка соединения', error);
            return;
        }
    })
    connection.query('SELECT * FROM food', (error, fields, result)=>{
        if(error) {
            console.error('Ошибка соединения', error);
            return;
        }
        console.log(fields);
    })
  
}

module.exports = establishConnection;
