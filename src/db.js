import mariadb from 'mariadb'

const pool = mariadb.createPool({
    host: 'mariadb', //--> this is based on the service name in docker-compose
    user: 'root',
    password: 'password',
    database: 'food'
})

export default pool