const errorhandler = (err, req, res, next) => {
    console.error("Caught an error.", err);
    res.status(500).json({error: err.message});
};

module.exports = errorhandler;