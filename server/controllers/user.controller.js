const User = require('../models/User');
const employeeController = {};


employeeController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

employeeController.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({
        status: 'User created'
    });
}

employeeController.updateUser = function () {
    
}

employeeController.deleteUser = function () {
    
}

employeeController.getUserById = function () {
    
}

module.exports = employeeController;