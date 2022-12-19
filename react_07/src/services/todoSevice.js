import axios from "axios";

const API = `https://61498bf2035b3600175ba32f.mockapi.io/todo`;
const controller = new AbortController();

export const getTodo = () =>
  axios(API, {
    signal: controller.signal,
  }).then(({ data }) => data);

// Response => Response.json()
// {data: ...}

export const changeItem = (id, obj) =>
  axios
    .put(API + `/${id}`, JSON.stringify(obj), {
      headers: {
        "Content-type": "application/json",
      },
      signal: controller.signal
    })
    .then(({ data }) => data);

// axios.put(url, data, {headers: {}})

export const abortAxios = () => controller.abort();
