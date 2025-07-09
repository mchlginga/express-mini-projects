const normalizeTitle = (t) => {
    try {
        return t.trim().toLowerCase().replace(/\s+/g, '-');
    } catch (error) {
        console.error("Failed to normalize title", error);
    }
};

module.exports = normalizeTitle;