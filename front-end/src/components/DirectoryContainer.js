import { DirectoryList } from "./DirectoryList";
import { InputDirectoryPath } from "./InputDirectoryPath";
import DirectoryService from "../services/DirectoryService";
import { useEffect, useState } from "react";

export const DirectoryContainer = () => {
  const [list, setList] = useState([]);
  const [directoryName, setDirectoryName] = useState("");
  const [originalDirectoryName, setOriginalDirectoryName] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setDirectoryName(event.target.value);
  };

  useEffect(() => {
    const getInfo = async () => {
      const res = await DirectoryService.sendDirectoryName(
        originalDirectoryName
      );
      setList(res.data);
    };
    getInfo();

    const interval = setInterval(() => getInfo(), 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const validDirectoryPath = () => {
    const regex = /(?:[^\\/:*?"<>|\r\n]+\\)* /;
    return regex.test(directoryName);
  };

  const handleSubmit = async () => {
    try {
      if (!directoryName) return;
      if (!validDirectoryPath()) {
        setError("Invalid directory path");
        setDirectoryName("");
        return;
      }
      const res = await DirectoryService.sendDirectoryName(directoryName);
      setList(res.data);
      setOriginalDirectoryName(directoryName);
      setDirectoryName("");
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <InputDirectoryPath
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        directoryName={directoryName}
      />
      <div>{error}</div>
      <DirectoryList list={list} fullDirectoryName={originalDirectoryName} />
    </>
  );
};
