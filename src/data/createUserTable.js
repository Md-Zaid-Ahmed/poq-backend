import pool from "../config/db.js"

const createUserTable = async () => {
    const query = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
    );`

    try {
        await pool.query(query);
        console.log("User table created")
    }
    catch(err)
    {
        console.log("User table creation failed ! ")
        console.log(err)
    }
};

export default createUserTable;
