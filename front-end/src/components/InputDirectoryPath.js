export const InputDirectoryPath = ({
  handleSubmit,
  handleChange,
  directoryName,
}) => {
  return (
    <>
      <div>
        <label>Select Directory Path: </label>
        <input type="text" onChange={handleChange} value={directoryName} />
        <button disabled={!directoryName} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};
