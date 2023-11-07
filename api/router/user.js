import express from "express";
import { getUser } from "../controller/controllerApi.js";
const router = express.Router();

router.get("/", getUser)

export default router;