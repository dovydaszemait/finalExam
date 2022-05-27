import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import * as S from "./Navbar.styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
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
          <Link to="/cart">
            <S.MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </S.MenuItem>
          </Link>
        </S.Right>
      </S.Wrapper>
    </S.Cointainer>
  );
}
