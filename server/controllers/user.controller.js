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

employeeController.updateUser = async (req, res) => {
    const user = {
        name: req.body.name,
        career: req.body.career,
        password: req.body.password
    };
    
    await User.findByIdAndUpdate(req.params.id, {$set: user}, {new: true});
    res.json({
        status: 'User updated'
    });
}

employeeController.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({
        status: 'User deleted'
    });
}

employeeController.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

module.exports = employeeController;