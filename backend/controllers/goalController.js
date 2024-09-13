const asyncHandler = require("express-async-handler")
// @desc Get goals
// @routes GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {


    res.status(200).json({ "message": "get my goals" });

});

// @desc  Set new goals
// @routes POST /api/goals
// @access Private

const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add text field")

    }

    res.status(200).json({ "message": "goal set" });

});

// @desc Update goal
// @routes PUT /api/goals:id
// @access Private

const updateGoals = asyncHandler(async (req, res) => {

    res.status(200).json({ "message": `update the goal ${req.params.id}` });

});

// @desc detete goals
// @routes DELETE /api/goals
// @access Private

const deleteGoals = asyncHandler(async (req, res) => {

    res.status(200).json({ "message": `delted goal ${req.params.id}` });

});

module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}

