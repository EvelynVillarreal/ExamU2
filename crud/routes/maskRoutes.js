const express = require("express");
const router = express.Router();
const { maskLogic } = require("../../buisnessLogic");

const {
    getAllMasks,
    getMaskById,
    createMask,
    updateMask,
    deleteMask,
    calculateTotalUnits,
} = maskLogic;

router.get("/", async (req, res) => {
    try {
        const masks = await getAllMasks();
        res.json(masks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/total-units", async (req, res) => {
    try {
        const total = await calculateTotalUnits();
        res.json({ totalUnits: total });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const mask = await getMaskById(req.params.id);
        if (!mask) return res.status(404).json({ message: "Mask not found" });
        res.json(mask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const mask = await createMask(req.body);
        res.status(201).json(mask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const mask = await updateMask(req.params.id, req.body);
        if (!mask) return res.status(404).json({ message: "Mask not found" });
        res.json(mask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const mask = await deleteMask(req.params.id);
        if (!mask) return res.status(404).json({ message: "Mask not found" });
        res.json({ message: "Mask deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
