const express = require("express");
const controller = require("../controller/pancsController");

const router = express.Router();

router.post("/pancs", controller.createPancs);
router.get("/pancs", controller.findAllPancs);
router.get("/pancs/:id", controller.findPancsById);
//router.get("/pancs/area", controller.findPancsByArea);
//router.get("/pancs/popular", controller.findPancsByPopularName);
router.patch("/pancs/:id", controller.updatePanc);
router.delete("/pancs/:id", controller.deletePancById)

module.exports = router