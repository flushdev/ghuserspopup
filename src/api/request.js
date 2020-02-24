import axios from "axios";

const request = (method, url, schema) => {
  return new Promise((resolve, reject) => {
    return axios({
      method: method,
      url: url,
      data: schema,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })
      .then(({ data }) => resolve(data))
      .catch(error => reject(error.message));
  });
};

export default request;
