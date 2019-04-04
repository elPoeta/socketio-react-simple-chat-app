module.exports = {
    getTest: async (req, res) => {
        res.status(200).json({ msg: "test" });
    }
}