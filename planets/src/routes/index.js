const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")
const router = Router();

router.get("/menuPlanets", controllers.getPlanets);

router.get("/planets", controllers.getJSON);

router.post("/postPlanets", middlewares.planetsValidations, controllers.postPlanets)

module.exports = router;