const databaseConfig = {
    db:process.env.DB,
    userName: process.env.USER2,
    password:process.env.PASSWORD,
    host:process.env.HOST,
    port:3306,
    dialect:'mysql',
}

module.exports = databaseConfig;