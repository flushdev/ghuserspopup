import axios from "axios";

const request = (method, url, schema) => {
  return new Promise((resolve, reject) => {
    return axios({
      method: method,
      url: url,
      data: schema,
      headers: {
        Authorization: `Bearer b0da3dff5a6067975207f25c2e547a46cba7c78f`
      }
    })
      .then(({ data }) => resolve(data))
      .catch(error => reject(error.message));
  });
};

export default request;
