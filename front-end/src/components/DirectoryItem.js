import { useState } from "react";
import DirectoryService from "../services/DirectoryService";
import "./style.css";

export const DirectoryItem = (props) => {
  const [info, setInfo] = useState(null);
  const [toggle, setToggle] = useState(false);
  const {
    directoryObj: { name },
    fullDirectoryName,
  } = props;

  const getInfo = async (e) => {
    e.preventDefault();
    const res = await DirectoryService.getDirectoryInfo(
      `${fullDirectoryName}\\${name}`
    );
    setInfo(res.data);
    setToggle(!toggle);
  };

  return (
    <div>
      <a href="" onClick={getInfo}>
        {name}
      </a>

      {toggle && (
        <div>
          <p>CreatedAt: {info.createdAt}</p>
          <p> Size: {info.size}</p>
        </div>
      )}
    </div>
  );
};
