import  pg  from "pg";
const { Client } = pg;
import 'dotenv/config'


export const client = new Client({
    host: "localhost",
    user: "postgres",
    port: process.env.PORT_DATABASE,
    password: process.env.PASS_DATABASE,
    database: "Tinder H."
})

client.on('connect', client => {
    console.error('<-----------connected to Database------------>')
})

client.on('disconnect', client => {
    console.error('<-----------disconnected to Database------------>')
})

// module.exports = client

