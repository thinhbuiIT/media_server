import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/*============================= READ DATA =============================*/
router.get("/",verifyToken, getFeedPosts);
router.get("/:userId/posts",verifyToken, getUserPosts);

/*============================= UPDATE DATA =============================*/
router.patch("/:id/like", verifyToken, likePost);

export default router;
