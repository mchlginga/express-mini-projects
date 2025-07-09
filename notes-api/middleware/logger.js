const fs = require("fs/promises");
const {PATHS} = require("../lib/config.js");

const logger = async (req, res, next) => {
    const start = Date.now();

    res.on("finish", async () => {
        const time = new Date().toISOString();
        const duration = Date.now() - start;
        const log = `${time} ${req.method} ${req.url} ${res.statusCode} - ${duration}ms\n`;

        try {
            await fs.appendFile(PATHS.logFile, log);
        } catch (error) {
            console.error("Failed to write log", error);
        }
    });
    next();
};

module.exports = logger;