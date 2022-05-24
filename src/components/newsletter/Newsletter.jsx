import { Send } from "@mui/icons-material";
import React from "react";
import * as S from "./Newsletter.styles";

export default function Newsletter() {
  return (
    <S.Container>
      <S.Title>Newsletter</S.Title>
      <S.Desc>Get timely updates from your favorite products.</S.Desc>
      <S.InputContainer>
        <S.Input placeholder="Your email" />
        <S.Button>
          <Send />
        </S.Button>
      </S.InputContainer>
    </S.Container>
  );
}
