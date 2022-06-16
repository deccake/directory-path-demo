import axios from "axios";
import { BASE_URL } from "../config/config";

class DirectoryService {
  static async sendDirectoryName(directoryName) {
    const result = await axios.post(`${BASE_URL}/directory-path`, {
      directoryName,
    });
    return result;
  }

  static async getDirectoryInfo(directoryName) {
    const result = await axios.post(`${BASE_URL}/get-directory-info`, {
      directoryName,
    });
    return result;
  }
}

export default DirectoryService;
