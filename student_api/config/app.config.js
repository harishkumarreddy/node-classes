const appConfig = {
    port: process.env.APP_PORT || 3000,

    dbname: process.env.DB_NAME || 'test',
    dbhost: process.env.DB_HOST || 'localhost',
    dbport: process.env.DB_PORT || '27017',
    dbuser: process.env.DB_USER || '',
    dbpassword: process.env.DB_PWD || '',
}

module.exports = appConfig;