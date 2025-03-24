import User from "../models/user.js";

// Create a new user
export const createUser = async (req, res, next) => {
    try {
        const { name, age, email } = req.body;
        const newUser = await User.create({ name, email, age });

        res.json({
            message: "User created successfully",
            user: newUser._id,
        });
    } catch (error) {
        next(error);
    }
};

// Get all students
export const getAllStudents = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json({
            message: "All students",
            users: users,
        });
    } catch (error) {
        next(error);
    }
};

// Get a single student by ID
export const getStudentById = async (req, res, next) => {
    try {
        const { id } = req.query;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            message: "Student",
            user: user,
        });
    } catch (error) {
        next(error);
    }
};

// Update a student by ID
export const updateStudent = async (req, res, next) => {
    try {
        const { id } = req.query;
        const { name, email, age } = req.body;

        const user = await User.findByIdAndUpdate(
            id,
            { name, email, age },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            message: "User updated successfully",
            user: user,
        });
    } catch (error) {
        next(error);
    }
};

// Delete a student by ID
export const deleteStudent = async (req, res, next) => {
    try {
        const { id } = req.query;
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            message: "User deleted successfully",
            user: user,
        });
    } catch (error) {
        next(error);
    }
};
