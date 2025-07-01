const express = require("express");
const router = express.Router();
const Items = require("../models/items");

router.get("/checklist/:checklistId/item", async (req, res) => {
    try {
        const item = await Items.findAll({
            where: {checklist_id: req.params.checklistId},
            orderBy: [{createdAt: 'desc'}]
        })
        res.json({
            "success": true,
            message: "",
            data: item,
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
router.post("/checklist/:checklistId/item", async (req, res) => {
    try {
        req.body.checklist_id = req.params.checklistId
        const item = await Items.create(req.body);
        res.json({
            "success": true,
            message: "",
            data: item,
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
router.delete("/checklist/:checklistId/item/:checkItemId", async (req, res) => {
    try {
        await Items.destroy({where: {id: req.params.checkItemId}});
        res.json({
            "success": true,
            message: "Item deleted",
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
router.put("/checklist/:checklistId/item/:checkItemId", async (req, res) => {
    try {
        let item = await Items.update({status: 1}, {where: {id: req.params.checkItemId}});
        res.json({
            "success": true,
            message: "",
            data: item,
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
router.put("/checklist/:checklistId/item/rename/:checkItemId", async (req, res) => {
    try {
        let item = await Items.update({name: req.body.itemName}, {where: {id: req.params.checkItemId}});
        res.json({
            "success": true,
            message: "",
            data: item,
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