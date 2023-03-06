const express = require('express');

const router = express.Router();

const { GameBeforeStart } = require('../controllers/gameController');

router.get('/:userId', GameBeforeStart);

// router.get("/:userId/attempt/:gameId", GameMain);

// router.post('/new', CreateNewGame);

// router.post('/answer', AnswerOnQuestion);

// router.post("/reviews/new", NewReview);
//
// router.delete("/review", ReviewDelete);

module.exports = router;
