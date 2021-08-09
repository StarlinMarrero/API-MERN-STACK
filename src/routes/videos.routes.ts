import {Router} from 'express';
import * as videoCtrl from './videos.controller'
const router = Router();



router.get("/videos", videoCtrl.getVideos);
router.get("/video/:id", videoCtrl.getVideo);
router.post("/videos", videoCtrl.createVideos);
router.delete("/video/:id", videoCtrl.deleteVideo);
router.put("/videos/:id", videoCtrl.updateVideos);

export default router;
