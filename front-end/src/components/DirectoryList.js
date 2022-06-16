import { DirectoryItem } from "./DirectoryItem";
import "./style.css";

export const DirectoryList = ({ list, fullDirectoryName }) => {
  return (
    <>
      <h1>list directory from: {fullDirectoryName}</h1>
      <div>
        {list.map((directory) => {
          return (
            <DirectoryItem
              key={directory.name}
              directoryObj={directory}
              fullDirectoryName={fullDirectoryName}
            />
          );
        })}
      </div>
    </>
  );
};
