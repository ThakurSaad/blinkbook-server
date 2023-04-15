import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getFeedPosts); // not checked

router.get("/:userId/posts", verifyToken, getUserPosts); // not checked

router.patch("/:id/like", verifyToken, likePost); // not checked

export default router;
