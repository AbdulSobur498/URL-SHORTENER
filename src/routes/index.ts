import { Router } from "express";
import { postUrl , getUrl }  from "./urlRoutes.js";


const router = Router();

router.use("/api", postUrl);
router.use("/api", getUrl)


export default router;