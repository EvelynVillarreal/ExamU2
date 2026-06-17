const Mask = require("../../crud/models/mask");

const getAllMasks = async () => await Mask.find();
const getMaskById = async (id) => await Mask.findById(id);
const createMask = async (data) => await Mask.create(data);
const updateMask = async (id, data) => await Mask.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const deleteMask = async (id) => await Mask.findByIdAndDelete(id);

const calculateTotalUnits = async () => {
    const masks = await Mask.find();
    const total = masks.reduce((sum, mask) => sum + (mask.units || 0), 0);
    return total;
};

module.exports = {
    getAllMasks,
    getMaskById,
    createMask,
    updateMask,
    deleteMask,
    calculateTotalUnits,
};
