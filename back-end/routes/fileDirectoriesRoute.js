import express from "express";

import {
  getDirectoryInfo,
  addFilePath,
} from "../controller/fileDirectoriesController";

const router = express.Router();

router.post("/get-directory-info", getDirectoryInfo);

router.post("/directory-path", addFilePath);

export default router;
