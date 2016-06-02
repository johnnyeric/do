const sanitize = require('../utils/sanitize');
const Board = require('../models/Board');

exports.create = function (req, res, next) {
    const userId = req.user.id;
    const boardProps = sanitize(req.body);

    return Board.create(userId, boardProps)
        .then(board => {
            res.status(201).json({ result: board });
        }, next);
};

exports.findAllByUser = function (req, res, next) {
    const userId  = req.user.id;

    return Board.findAllByUser(userId)
        .then(boards => {
            res.status(200).json({ result: boards });
        }, next);
};

exports.findById = function (req, res, next) {
    const id = req.params.id;

    return Board.findById(id)
        .then(board => {
            res.status(200).json({ result: board });
        }, next);
};

exports.update = function (req, res, next) {
    const userId = req.user.id;
    const boardId = req.params.id;
    const props = sanitize(req.body);
    const activityAction = req.query.activityAction;

    return Board.update(userId, boardId, props, activityAction)
        .then(board => {
            res.status(200).json({ result: board });
        }, next);
};

exports.drop = function (req, res, next) {
    const id = req.params.id;

    return Board.drop(id)
        .then(result => {
            res.status(200).json({ result });
        }, next);
};

exports.createList = function (req, res, next) {
    const userId = req.user.id;
    const boardId = req.params.id;
    const listProps = sanitize(req.body);

    return Board.createList(userId, boardId, listProps)
        .then(list => {
            res.status(201).json({ result: list });
        }, next);
};
