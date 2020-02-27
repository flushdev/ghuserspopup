import axios from "axios";

const token = "c530313235ebf903d0fa49212f21c7ef2a668c1d";

const request = (method, url, schema) => {
  return new Promise((resolve, reject) => {
    return axios({
      method: method,
      url: url,
      data: schema,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(({ data }) => resolve(data))
      .catch(error => reject(error.message));
  });
};

export default request;
