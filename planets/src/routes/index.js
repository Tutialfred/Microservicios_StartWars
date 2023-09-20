const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")
const router = Router();

router.get("/", controllers.getPlanets);

router.get("/planets", controllers.getJSON);


router.post("/", middlewares.planetsValidations, controllers.postPlanets)

module.exports = router;