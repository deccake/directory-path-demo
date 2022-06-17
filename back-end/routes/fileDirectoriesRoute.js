import express from "express";

import {
  getDirectoryInfo,
  getDirectoryList,
  addFilePath,
} from "../controller/fileDirectoriesController";

const router = express.Router();

router.post("/get-directory-info", getDirectoryInfo);

router.post("/directory-path", addFilePath);

router.post("/get-directory-list", getDirectoryList);

export default router;
