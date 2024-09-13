// @desc Get goals
// @routes GET /api/goals
// @access Private

const getGoals = (req, res) => {

    res.status(200).json({ "message": "get my goals" });

};

// @desc  Set new goals
// @routes POST /api/goals
// @access Private

const setGoals = (req, res) => {

    res.status(200).json({ "message": "goal set" });

};

// @desc Update goal
// @routes PUT /api/goals:id
// @access Private

const updateGoals = (req, res) => {

    res.status(200).json({ "message": `update the goal ${req.params.id}` });

};

// @desc detete goals
// @routes DELETE /api/goals
// @access Private

const deleteGoals = (req, res) => {

    res.status(200).json({ "message": `delted goal ${req.params.id}` });

};

module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}

