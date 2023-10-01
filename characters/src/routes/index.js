const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/a", (req, res) =>{
    res.status(200).send("This is the 8001 working... Are you okay?")
})

router.get("/menuCharacters", controllers.getCharacters);
router.get("/characters", controllers.allCharacters);
router.post("/postCharacters", middlewares.charactersValidation, controllers.postCharacters);

module.exports = router;
