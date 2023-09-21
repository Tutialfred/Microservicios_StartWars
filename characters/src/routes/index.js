const { Router } = require("express");
const characters = require("../data/characters.json")
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router();

router.get("/", controllers.getCharacters);
router.get("/json", controllers.allCharacters)
router.post("/", middlewares.charactersValidation, controllers.postCharacters)

module.exports = router;
