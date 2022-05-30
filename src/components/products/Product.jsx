import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Product.styles";

export default function Product({ item }) {
  return (
    <S.Container>
      <S.Circle />
      <S.Span>{item.title}</S.Span>
      <S.Image src={item.img} />
      <S.Span>Price: $ {item.price}</S.Span>
      <S.Info>
        <S.Icon>
          <Link to={`/product/${item._id}`}>
            <ShoppingCartOutlined />
          </Link>
        </S.Icon>
        <S.Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </S.Icon>
        <S.Icon>
          <Link to={`/product/${item._id}`}>
            <FavoriteBorderOutlined />
          </Link>
        </S.Icon>
      </S.Info>
    </S.Container>
  );
}
