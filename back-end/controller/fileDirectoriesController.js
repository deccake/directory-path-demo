import { readdir, stat } from "fs";

export const getDirectoryInfo = (req, res) => {
  const { directoryName } = req.body;
  stat(directoryName, (err, data) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Not able to get directory info" });
    const { birthtimeMs, size } = data;
    const info = {
      size,
      createdAt: new Date(birthtimeMs),
    };

    return res.status(200).json(info);
  });
};

export const addFilePath = async (req, res) => {
  const { directoryName } = req.body;
  readdir(directoryName, { withFileTypes: true }, (err, data) => {
    if (err)
      return res.status(500).json({ message: "Not able to read directory" });
    res.status(200).json(data.filter((item) => item.isDirectory()));
  });
};
