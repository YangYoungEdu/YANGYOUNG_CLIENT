import axios from "axios";

const server = process.env.REACT_APP_DEV_URL;
const local = process.env.REACT_APP_LOCAL_URL;

// 로그인 API
export const signInAPI = async (id, password) => {
  console.log("id:", id, "password:", password);
  const data = {
    username: id,
    password: password,
  };

  try {
    const response = await axios.post(`${local}appUser/sign-in`, data);
    console.log(response);
    alert("로그인 성공");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
