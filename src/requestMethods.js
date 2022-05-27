import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGY2NDAxN2ZjZjdmMWM4NmMzMTY4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzU2NTg3NSwiZXhwIjoxNjUzODI1MDc1fQ.ExcKJb7ilDavKLlc4hV6Txxez2o1BJcegPXCkzEqMKo";
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//   .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
