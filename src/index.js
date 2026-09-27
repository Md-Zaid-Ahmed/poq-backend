import express from "express";
import cors from "cors"
import dotenv from "dotenv"

import pool from "./config/db.js";

import userRoutes from "./routes/userRoutes.js"
import errorHandler from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5002;

app.use(express.json());
app.use(cors());

//Routes
app.use("/api",userRoutes);

//Error Handling MiddleWare
app.use(errorHandler);


//creating user table

createUserTable();

//TESTING DB

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT current_database()");
    res.send(`The db name is: ${result.rows[0].current_database}`);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send("Failed to connect to DB");
  }
});

//Server Running

app.listen(port,() => {
    console.log('Server is running on port : '+ port);
})
