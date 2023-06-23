import {Router} from "express";
import {createPersonalSerie , deletePersonalSerieById, getSerieByUser,editPersonalSerie} from "../controller/serie.controller.js";
const router = Router();


router.post("/:userId/series",createPersonalSerie);
router.get("/:userId/series",getSerieByUser);
router.delete("/:userId/series/:serieId",deletePersonalSerieById);
router.put("/:userId/series/:serieId",editPersonalSerie);

export default router;
