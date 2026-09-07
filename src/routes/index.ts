import { Router } from "express";
import { postUrl , getUrl }  from "./urlRoutes";


const router = Router();

router.use("/api", postUrl);
router.use("/api", getUrl)


export default router;