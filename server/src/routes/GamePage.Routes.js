const express = require("express");

const router = express.Router();

const {
    GameBeforeStart, GameMain, NewGame, Personal
} = require("../controllers/gameController");

router.get("/:userId", GameBeforeStart);

router.get("/:userId/attempt/:gameId", GameMain);

router.get('/:userId/personal', Personal)

router.post('/new', NewGame)



module.exports = router;
