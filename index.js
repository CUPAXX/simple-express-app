const express = require("express");
const db = require("./helpers/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    greeting: `Hello this is a simple express app running on port ${port}`,
    timestamp: new Date().toISOString(),
  });
});

//comment out database route for now
// app.get("/counter", async (req, res) => {
//   try {
//     await db.query("UPDATE counter SET value = value + 1 WHERE id = 1");

//     const result = await db.query("SELECT value FROM counter WHERE id = 1");

//     res.json({ count: result.rows[0].value });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Database error");
//   }
// });

app.listen(port, () => {
  console.log(`Simple express apps listening on port ${port}`);
});
