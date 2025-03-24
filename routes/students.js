
import express from "express";
import {
    createUser,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
} from "../controller/user.js";

const router = express.Router();


router.post("/user", createUser);
router.get("/allstudents", getAllStudents);
router.get("/getStudent", getStudentById);
router.put("/updateStudent", updateStudent);
router.delete("/delete", deleteStudent);

export default router;
