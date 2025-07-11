const app = require("./app.js");
const config = require("./config/index.js");
const {connectDB} = require("./lib/database.js");

const port = config.port;
connectDB();

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});