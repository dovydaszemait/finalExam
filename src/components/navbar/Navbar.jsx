import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import * as S from "./Navbar.styles";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);

  const toHome = () => {
    let path = `/home`;
    navigate(path);
  };
  let navigate = useNavigate();
  const link1 = () => {
    let path = `/home`;
    navigate(path);
  };
  const link2 = () => {
    let path = `/cart`;
    navigate(path);
  };
  const link3 = () => {
    let path = `/products/:category`;
    navigate(path);
  };

  return (
    <S.Cointainer>
      <S.Wrapper>
        <S.Left>
          <S.List>
            <S.ListItem onClick={link1}>Home</S.ListItem>
            <S.ListItem onClick={link2}>Cart</S.ListItem>
            <S.ListItem onClick={link3}>Bikes</S.ListItem>
            <S.ListItem onClick={link3}>Accessories</S.ListItem>
          </S.List>
        </S.Left>
        <S.Center>
          <S.Logo onClick={toHome}>natural.</S.Logo>
        </S.Center>
        <S.Right>
          <S.SearchCointainer>
            <S.Input />
            <Search style={{ color: "gray, fontSize: 16" }} />
          </S.SearchCointainer>
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
