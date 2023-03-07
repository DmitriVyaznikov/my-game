const express = require("express");

const router = express.Router();

const {
    GameBeforeStart, GameMain, NewGame, Personal, ResultGame, QuestionOne
} = require("../controllers/gameController");

router.get("/:userId", GameBeforeStart);

router.get("/:userId/attempt/:gameId", GameMain);

router.get('/:userId/personal', Personal)

router.get('/question/:questionId', QuestionOne)

router.post('/new', NewGame)

router.post('/result', ResultGame)

module.exports = router;
