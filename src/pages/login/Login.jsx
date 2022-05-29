import React, { useContext, useState } from "react";
import * as S from "./Login.styles";
import { useNavigate } from "react-router-dom";
import AuthContext from "../authContext";
import axios from "axios";

export default function Login() {
  const authCtx = useContext(AuthContext);
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

    // if (atsInJs.success) {
    //   localStorage.setItem("token", atsInJs.data);
    //   authCtx.login();
    //   navigate("/");
    // }
    // if (atsInJs.success === false) {
    //   setIsError(true);
    // }
  };
  // async function sendLoginFetch() {
  //   const registerObj = {
  //     email: email,
  //     password: password,
  //   };
  //   if (isThereErrors(registerObj)) {
  //     setErrorMsg("All fields are required !");
  //     return;
  //   }
  //   const resp = await fetch("http://localhost:5000/api/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(registerObj),
  //   });

  // }
  // function submitHandler(e) {
  //   e.preventDefault();
  //   sendLoginFetch();
  // }
  function isThereErrors(dataToCheck) {
    const mustBeKeys = ["username", "password"];
    const values = Object.values(dataToCheck);
    const valuesBool = values
      .map((val) => !!val)
      .filter((val) => val === false);
    const ourKeys = Object.keys(dataToCheck);
    const allKeys = mustBeKeys.filter((mustKey) => !ourKeys.includes(mustKey));
    if (valuesBool.length > 0 || allKeys.length > 0) {
      return true;
    }
    return false;
  }

  return (
    <S.Cointainer>
      <S.Wrapper>
        <S.Title>Sign in</S.Title>
        {isError && (
          <S.ErrorMsg>
            Incorrect email or password send to server ! Please check the data !
          </S.ErrorMsg>
        )}
        {errorMsg.length > 0 ? (
          <S.ErrorMsg>
            Please check the form ! No email or password is entered !
          </S.ErrorMsg>
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
          <S.Link>Forgot your password?</S.Link>
          <S.Link>Create a new account</S.Link>
        </S.Form>
      </S.Wrapper>
    </S.Cointainer>
  );
}
