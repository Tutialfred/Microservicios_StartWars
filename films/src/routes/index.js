const { Router } = require("express");
const films = require("../data/films.json")

const router = Router();

router.get("/", (req, res) => res.status(200).send("Hello World - Films"));
router.get("/films", (req, res) => res.status(200).json(films));

module.exports = router;
