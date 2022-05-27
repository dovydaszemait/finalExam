import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./Login.styles";
import { login } from "../../redux/apiCalls";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <S.Cointainer>
      <S.Wrapper>
        <S.Title>Sign in</S.Title>
        <S.Form>
          <S.Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <S.Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </S.Button>
          {error && <S.Error>Something went wrong...</S.Error>}
          <S.Link>Forgot your password?</S.Link>
          <S.Link>Create a new account</S.Link>
        </S.Form>
      </S.Wrapper>
    </S.Cointainer>
  );
}
