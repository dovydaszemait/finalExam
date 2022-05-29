import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import * as S from "./NavbarUn.styles";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarUn() {
  let navigate = useNavigate();
  const toSignin = () => {
    let path = `/login`;
    navigate(path);
  };
  const toRegister = () => {
    let path = `/register`;
    navigate(path);
  };
  return (
    <S.Cointainer>
      <S.Wrapper>
        <S.Left></S.Left>
        <S.Center>
          <S.Logo> natural.</S.Logo>
        </S.Center>
        <S.Right>
          <S.MenuItem onClick={toSignin}>Register</S.MenuItem>
          <S.MenuItem onClick={toRegister}>Sign in</S.MenuItem>
        </S.Right>
      </S.Wrapper>
    </S.Cointainer>
  );
}
