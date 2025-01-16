const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Hello World"));

app.get('/student', (req, res) => res.send("Nishant"));

app.get('/student/university', (req, res) => res.send("r.k University"));

app.listen(port, () => console.log(`Server running on port ${port}`));
