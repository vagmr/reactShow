import express from "express";
import { login, register } from "../controller/controllerApi.js";
const router = express.Router();
//注册
router.post('/register', register);
//登录
router.post("/login", login)
export default router;