import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import * as S from "./Navbar.styles";

export default function Navbar() {
  return (
    <S.Cointainer>
      <S.Wrapper>
        <S.Left>
          <S.Language>EN</S.Language>
          <S.SearchCointainer>
            <S.Input />
            <Search style={{ color: "gray, fontSize: 16" }} />
          </S.SearchCointainer>
        </S.Left>
        <S.Center>
          <S.Logo>natural.</S.Logo>
        </S.Center>
        <S.Right>
          <S.MenuItem>Register</S.MenuItem>
          <S.MenuItem>Sign in</S.MenuItem>
          <S.MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </S.MenuItem>
        </S.Right>
      </S.Wrapper>
    </S.Cointainer>
  );
}
