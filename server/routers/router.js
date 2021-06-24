import express from "express";
import { checkShortUrl, shortenUrl } from "../controllers/controller";
const router = express.Router();

router.post("/checkShortUrl", checkShortUrl);
router.post("/shortenUrl", shortenUrl);
export default router;
