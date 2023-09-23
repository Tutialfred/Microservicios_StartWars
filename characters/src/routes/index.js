const { Router } = require("express");
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router();

router.get("/menuCharacters", controllers.getCharacters);
router.get("/characters", controllers.allCharacters)
router.post("/postCharacters", middlewares.charactersValidation, controllers.postCharacters)

module.exports = router;
