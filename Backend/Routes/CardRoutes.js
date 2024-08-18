const express = require("express")
const router = express.Router();
const {createCard,getCards,getSingleCards} = require("../Controllers/CardController")

router.post("/cards",createCard)
router.get("/cards",getCards)
router.get("/cards/:title",getSingleCards)

module.exports = router;