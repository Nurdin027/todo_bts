const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.post("/register", async (req, res) => {
    try {
        let isian = req.body
        isian.hashed_password = req.body.password
        const user = await User.create(isian)
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({"message": "Server fail"})
    }
})
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({where: {"username": req.body.username, "hashed_password": req.body.password}})
        if (!user) {
            res.status(401).json({message: "User not found"})
        }
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({"message": "Server fail"})
    }
});

module.exports = router;