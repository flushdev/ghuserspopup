import axios from "axios";

const request = (method, url, schema) => {
  return new Promise((resolve, reject) => {
    return axios({
      method: method,
      url: url,
      data: schema,
      headers: {
        Authorization: `Bearer a7d265093ff6a811b52b33b369a713bacdd6bc77`
      }
    })
      .then(({ data }) => resolve(data))
      .catch(error => reject(error.message));
  });
};

export default request;
