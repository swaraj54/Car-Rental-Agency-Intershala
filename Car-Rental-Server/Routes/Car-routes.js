const express = require('express');
const router = express.Router();
const carsController = require("../Controllers/Car-controller");


router.get("/", carsController.getAllCars);
router.get("/:id", carsController.getById);
router.post("/", carsController.addCar);

module.exports = router;
