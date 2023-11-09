import express from "express";
import { getComment } from "../controller/controllerApi.js";
const router = express.Router();

router.get("/comment", getComment);
export default router;