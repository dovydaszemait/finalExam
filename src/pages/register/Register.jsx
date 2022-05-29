import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Register.styles";

// const regUrl = `${process.env.REACT_APP_SERVER_URL}/auth/register `;

const Register = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth/register";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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

  // async function sendRegisterFetch() {
  //   const registerObj = {
  //     username: username,
  //     email: email,
  //     password: password,
  //   };

  //   if (isThereErrors(registerObj)) {
  //     setErrorMsg("All fields are required !");
  //     return;
  //   }

  //   const resp = await fetch("http://localhost:5000/api/auth/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(registerObj),
  //   });

  //   const atsInJs = await resp.json();

  //   if (atsInJs.success) {
  //     navigate("/login");
  //   }
  //   if (atsInJs.success === false) {
  //     setIsError(true);
  //   }
  // }
  // function submitHandler(e) {
  //   e.preventDefault();
  //   sendRegisterFetch();
  // }
  function isThereErrors(dataToCheck) {
    const mustBeKeys = ["username", "email", "password"];
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
        <S.Title>Create an account</S.Title>
        <S.Form onSubmit={submitHandler}>
          <S.Input
            name="username"
            type="username"
            placeholder="username"
            onChange={handleChange}
            value={data.username}
          />
          <S.Input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
            value={data.email}
          />
          <S.Input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            value={data.password}
          />
          <S.Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </S.Agreement>
          <S.Button type="submit">CREATE</S.Button>
        </S.Form>
      </S.Wrapper>
    </S.Cointainer>
  );
};

export default Register;
