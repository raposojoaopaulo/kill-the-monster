import axios from "axios";

export const getMonsterImage = async (url: string) => {
  return await axios.get(url);
}