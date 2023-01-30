const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
  host: "capstone-database.cqwpxjxkqcuo.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Richjenn014",
  database: "capstone",
});

app.post("/api/signup", (req, res) => {
  const { name, email, password, role } = req.body;
  // Insert the data into the Users table
  connection.query(
    "INSERT INTO Users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, password, role],
    (error, results) => {
      if (error) throw error;
      if (results.affectedRows > 0) {
        res.json({ message: "Sign up successful" });
      } else {
        res.status(400).json({ message: "Sign up failed" });
      }
    }
  );
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  const sql = "INSERT INTO ContactForm (name, email, message) VALUES (?,?,?)";
  connection.query(sql, [name, email, message], (err, results) => {
    if (err) {
      return res.send(err);
    }
    return res.send("Form submitted successfully");
  });
});

app.get(`/api/users/:email`, (req, res) => {
  const email = req.params.email;
  connection.query(
    "SELECT * FROM Users WHERE email = ?",
    [email],
    (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    }
  );
});

app.get("/api/users", (req, res) => {
  connection.query("SELECT * FROM Users", (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(404).json({ message: "No users found" });
    }
  });
});

app.post("/api/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  connection.query(
    "SELECT * FROM Users WHERE email = ? AND password = ?",
    [email, password],
    (error, results) => {
      if (error) {
        console.log(error);
        throw error;
      }
      if (results.length > 0) {
        // Log the user in
        res.json({ message: "Log in successful" });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    }
  );
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
