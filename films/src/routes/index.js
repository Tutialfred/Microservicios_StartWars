const { Router } = require("express");
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router();

router.get("/menuFilms", controllers.getFilms);
router.get("/films", controllers.getJson);
router.post("/postFilms", middlewares.filmsValidation ,controllers.postFilms)

module.exports = router;
