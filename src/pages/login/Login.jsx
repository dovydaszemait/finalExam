import React from "react";
import * as S from "./Login.styles";

export default function Login() {
  return (
    <S.Cointainer>
      <S.Wrapper>
        <S.Title>Sign in</S.Title>
        <S.Form>
          <S.Input placeholder="Username" />
          <S.Input placeholder="Password" />
          <S.Button>LOGIN</S.Button>
          <S.Link>Forgot your password?</S.Link>
          <S.Link>Create a new account</S.Link>
        </S.Form>
      </S.Wrapper>
    </S.Cointainer>
  );
}
