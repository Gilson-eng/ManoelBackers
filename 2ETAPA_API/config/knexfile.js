
const conn = {
    client: "mysql2", 
    connection: { 
        database: "padaria_poo",
        user: "pooii2022",
        password: "2022pooii",
        host: "mysql746.umbler.com",
        port: 41890,
        timezone: "+03:00"
    },
    pool: { 
        min: 2,
        max: 10,
    },
    migrations: { 
        tableName: "knex_migrations",
        directory: "migrations"
    }
};

module.exports = conn;