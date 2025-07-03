const express = require("express");
const app = express();
const port = 3000;

// route
app.get('/', (req, res) => {
    res.send("Hello, World!");
});

// create and start http server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});