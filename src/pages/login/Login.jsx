import React, { useContext, useState } from "react";
import * as S from "./Login.styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  let navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      // window.location = "/";
      navigate("/home");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const toReg = () => {
    let path = `/register`;
    navigate(path);
  };
  return (
    <S.Cointainer>
      <S.Wrapper>
        <S.Title>Sign in</S.Title>
        {isError && <S.ErrorMsg>Incorrect email or password</S.ErrorMsg>}
        {errorMsg.length > 0 ? (
          <S.ErrorMsg>Please check the form!</S.ErrorMsg>
        ) : (
          ""
        )}
        <S.Form onSubmit={submitHandler}>
          <S.Input
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
            value={data.username}
          />
          <S.Input
            name="password"
            type="password"
            placeholder="Enter here"
            onChange={handleChange}
            value={data.password}
          />
          <S.Button type="submit">LOGIN</S.Button>
          {/* {error && <S.Error>Something went wrong...</S.Error>} */}
          <S.Link onClick={toReg}>Forgot your password?</S.Link>
          <S.Link onClick={toReg}>Create a new account</S.Link>
        </S.Form>
      </S.Wrapper>
    </S.Cointainer>
  );
}
