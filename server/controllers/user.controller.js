const User = require('../models/User');
const userController = {};


userController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userController.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({
        status: 'User created'
    });  
}

userController.updateUser = async (req, res) => {
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

userController.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({
        status: 'User deleted'
    });
}

userController.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userController.userLogin = async (req, res) => {
    const users = await User.find({password:req.body.password})
    res.json(users);
}

module.exports = userController;