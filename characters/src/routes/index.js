const { Router } = require("express");
const characters = require("../data/characters.json")

const router = Router();

router.get("/", (req, res) => res.status(200).send("Hello World - Characters"));
router.get("/characters", (req, res) => res.status(200).json(characters));

module.exports = router;
