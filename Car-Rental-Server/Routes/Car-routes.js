const express = require('express');
const router = express.Router();
const carsController = require("../Controllers/Car-controller");


router.get("/", carsController.getAllCars);
router.get("/:id", carsController.getById);
router.post("/", carsController.addCar);
router.put("/:id", carsController.updateCar);
router.delete("/:id", carsController.deleteCar);

module.exports = router;
