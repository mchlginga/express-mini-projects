const app = require("./app.js");
const config = require("./config/index.js");

const port = config.port;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});