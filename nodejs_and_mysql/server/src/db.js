import mysql from "mysql";

let connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'kitchen',
    }
)

export default function establishConnection () {

    connection.connect(error => {
        if(error) {
            console.log('Ошибка соединения', error);
            return;
        }
    })
    connection.query('SELECT * FROM food', (error, result)=>{
        if(error) {
            console.error('Ошибка соединения', error);
            return;
        }
        let responseData = result.map(item=>{
            return item.name;
        })
        console.log(responseData)
    })
  
}

