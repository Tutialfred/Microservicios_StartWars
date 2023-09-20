const { Router } = require("express");
const controllers = require("../controllers");
const planets = require("../data/planets.json");

const router = Router();

router.get("/", controllers.getPlanets);

router.get("/json", (req, res) => {
    res.status(200).json(planets);
  });

router.post("/", controllers.postPlanets)

module.exports = router;