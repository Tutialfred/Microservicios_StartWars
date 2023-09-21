const { Router } = require("express");
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router();

router.get("/", controllers.getFilms);
router.get("/films", controllers.getJson);
router.post("/", middlewares.filmsValidation ,controllers.postFilms)

module.exports = router;
