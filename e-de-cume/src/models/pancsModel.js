const mongoose = require("mongoose");

const PancsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    cientificName: { type: String, required: true, unique: true},
    popularName: { type: String, required: true},
    area: { type: String, required: true},
    edibleParts: { type: String, required: true, unique: true}
});

const pancsCollection = mongoose.model("pancs", PancsSchema);

module.exports = pancsCollection;