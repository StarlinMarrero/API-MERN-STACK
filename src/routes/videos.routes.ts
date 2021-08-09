import {Router} from 'express';
import * as videoCtrl from './videos.controller'
const router = Router();



router.get("/videos", videoCtrl.getVideos);
router.get("/video/:id", videoCtrl.getVideo);
router.post("/videos", videoCtrl.createVideos);
router.delete("/videos", videoCtrl.deleteVideo);
router.put("/videos", videoCtrl.updateVideos);

export default router;
