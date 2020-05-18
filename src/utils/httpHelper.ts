import axios from "axios";
export const get = async (url: any) => {
  try {
    const res = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Accept-Language": "tr",
      },
    });
    if (res.status === 200) {
      return { err: false, data: res.data };
    } else throw new Error();
  } catch {
    return { err: true };
  }
};
