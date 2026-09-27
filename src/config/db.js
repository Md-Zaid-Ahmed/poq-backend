import pkg from "pg"
import dotenv from "dotenv"
const {Pool} = pkg;

dotenv.config()

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL must be set in .env");
}

//Neon requires SSL; the connection string includes sslmode=require
const pool = new Pool({
    connectionString : process.env.DATABASE_URL,
});

pool.on("connect", () =>{
    console.log("Connection pool established with Neon database...!")
});

export default pool;
