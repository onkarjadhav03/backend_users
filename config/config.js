require("dotenv").config()

module.exports={
  development: {
    username: process.env.DB_USERS,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port:process.env.DB_PORT,
    dialect: "postgres",
    logging:false
  },

  production: {
    username: process.env.DB_USERS,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port:process.env.DB_PORT,
    dialect: "postgres",
    logging:false
  }
}
