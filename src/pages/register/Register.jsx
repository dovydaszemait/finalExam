import React from "react";
import * as S from "./Register.styles";

export default function Register() {
  return (
    <S.Cointainer>
      <S.Wrapper>
        <S.Title>Create an account</S.Title>
        <S.Form>
          <S.Input placeholder="Name" />
          <S.Input placeholder="Last name" />
          <S.Input placeholder="Username" />
          <S.Input placeholder="Email" />
          <S.Input placeholder="Password" />
          <S.Input placeholder="Confirm password" />
          <S.Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </S.Agreement>
          <S.Button>CREATE</S.Button>
        </S.Form>
      </S.Wrapper>
    </S.Cointainer>
  );
}
