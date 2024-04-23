import axios from "axios";

export const getGoldSerive = async () => {
  try {
    const res = await axios.get("https://www.5huangjin.com/data/jin.js");

    const gds = res.data
      .split(";")
      .find((i: string) => i.includes("hq_str_gds_AUTD="));

    const str = gds
      .replace("var hq_str_gds_AUTD=", "")
      .replaceAll('"', "")
      .split(",");

    const now = str[0];
    const max = str[4];
    const min = str[5];

    return { now, max, min };
  } catch (e) {
    return { now: 0, max: 0, min: 0 };
  }
};
