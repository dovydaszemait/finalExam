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
      <S.Image src={item.img} />
      <S.Info>
        <S.Icon>
          <ShoppingCartOutlined />
        </S.Icon>
        <S.Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </S.Icon>
        <S.Icon>
          <FavoriteBorderOutlined />
        </S.Icon>
      </S.Info>
    </S.Container>
  );
}
