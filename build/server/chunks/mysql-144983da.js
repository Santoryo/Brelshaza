import mysql from 'mysql2/promise';

const CLIENT_ID = "nrck54ly32aagvx4v3wff7ft6vqu3w";
const CLIENT_SECRET = "mrc4rtft6z9k58vcijopd0zudtjbcd";
const GRANT_TYPE = "client_credentials";
const MYSQL_HOST = "brelshaza.com";
const MYSQL_USER = "dekkergg";
const MYSQL_PASS = "69zE@8fCX-kqdp7V";
const MYSQL_DB = "vykas";
const mysqlconn = await mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DB
});

export { CLIENT_ID as C, GRANT_TYPE as G, CLIENT_SECRET as a, mysqlconn as m };
//# sourceMappingURL=mysql-144983da.js.map
