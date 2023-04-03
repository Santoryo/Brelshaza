import mysql from 'mysql2/promise';
import {MYSQL_DB, MYSQL_USER, MYSQL_HOST, MYSQL_PASS} from '$env/static/private'

export const mysqlconn = await mysql.createConnection({ 
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: MYSQL_DB
});