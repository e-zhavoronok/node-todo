const express = require("express")
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

app.post("/todos", (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
})