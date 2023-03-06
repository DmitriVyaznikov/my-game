const express = require("express");

const _ = require('lodash');

const {Game, Question, Theme, Score, User, sequelize} = require("../../db/models");

exports.GameBeforeStart = async (req, res) => {  // получаем инфу по последней игре игрока, который сейчас начинает игру
    try {
        const userid = req.session?.user?.id;
        const username = req.session?.user?.name;
        const {userId} = req.params;

        const newGame = await Game.create({userId});

        const userLastGame = await Game.findAll({where: {userId}, order: [["createdAt", "DESC"]], limit: 1})


        res.json({newGame, userLastGame});
    } catch (e) {
        console.error(e);
    }
};

exports.GameMain = async (req, res) => {   // адская ручка, где получаем список вопросов (4 рандомных вопроса по каждой из тем
                                           // в виде двумерного массива - в каждом подмассиве элементы, в которых вопрос и ответ, статус ответа, тема, айдишники
    try {
        const userid = req.session?.user?.id;
        const username = req.session?.user?.name;
        const {userId, gameId} = req.params;

        const questions = await Question.findAll({
            include: [{model: Score}, {model: Theme}],
            order: [['theme_id', 'ASC']], nest: true, raw: true
        })


        const groupedQuestions = questions.reduce((acc, curr) => {
            const {Theme, Scores, ...questions} = curr;

            const correctQuestion = Scores.correctQuestion
            const lastTheme = acc[acc.length - 1];


            if (!lastTheme || lastTheme[0]?.themeName !== Theme?.name) {
                acc.push([{...questions, correctQuestion, themeName: Theme.name}]);
            } else {
                lastTheme.push({...questions, correctQuestion, themeName: Theme.name});
            }

            return acc;
        }, []);

        const randomQuestions = groupedQuestions.map((questions) => {
            const pointsMap = _.groupBy(questions, 'points');
            const selectedQuestions = Object.values(pointsMap).map((pointQuestions) => {
                return _.sampleSize(pointQuestions, 1)[0];
            });
            return _.sampleSize(selectedQuestions, 4);
        });


        res.json(randomQuestions);
    } catch (e) {
        console.error(e);
    }
};

exports.NewGame = async (req, res, next) => {  // создаем новую игру после нажатия на кнопку Начать игру
    try {
        const {userId} = req.body
        const game = await Game.create({
            userId
        });

        res.json({gameId: game.id})
    } catch (e) {
        console.error(e)
    }
}

exports.Personal = async (req, res, next) => { // личный кабинет
    // // в итоге получаем массив со статой по всем игрокам в виде [
    //     //    [ { username: 'John Doe', gamesPlayed: 1, totalPoints: 6600 },
    //     //     { username: 'Ilya', gamesPlayed: 0, totalPoints: 0 } ]
    try {
        const {userId} = req.params

        const users = await User.findAll({
            include: [
                {
                    model: Score,
                    include: [
                        {model: Question}
                    ]
                },

            ],
            raw: true,
            nest: true
        });

        const getUsersStats = async () => {
            const users = await User.findAll({
                include: [{
                    model: Score,
                    include: Question
                }]
            });

            const stats = {};

            users.forEach(user => {
                const userId = user.id;
                stats[userId] = {
                    username: user.login,
                    gamesPlayed: 0,
                    totalPoints: 0
                };

                const gamesPlayed = [];

                user.Scores.forEach(score => {
                    const gameId = score.gameId;
                    const points = score.Question.points;

                    if (!gamesPlayed.includes(gameId)) {
                        stats[userId].gamesPlayed++;
                        gamesPlayed.push(gameId);
                    }

                    if (score.correctQuestion) {
                        stats[userId].totalPoints += points;
                    }
                });
            });


            return Object.values(stats);
        };
        const result = await getUsersStats()


        res.json(result)


    } catch (e) {
        console.error(e)
    }
}



