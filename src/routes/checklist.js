const express = require("express");
const router = express.Router();
const Checklist = require("../models/checklist");

router.get("/checklist", async (req, res) => {
    try {
        const check = await Checklist.findAll({orderBy: [{createdAt: 'desc'}]})
        res.json({
            "success": true,
            message: "",
            data: check,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            "success": false,
            "message": "Server fail",
            data: null,
        })
    }
});
router.post("/checklist", async (req, res) => {
    try {
        const check = await Checklist.create(req.body);
        res.json({
            "success": true,
            message: "",
            data: check,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            "success": false,
            "message": "Server fail",
            data: null,
        })
    }
})
router.delete("/checklist/:id", async (req, res) => {
    try {
        await Checklist.destroy({
            where: {id: req.params.id},
        });
        res.json({
            "success": true,
            message: "Checklist deleted",
            data: null,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            "success": false,
            "message": "Server fail",
            data: null,
        })
    }
});


module.exports = router;