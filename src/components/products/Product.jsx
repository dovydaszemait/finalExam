import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
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
          <SearchOutlined />
        </S.Icon>
        <S.Icon>
          <FavoriteBorderOutlined />
        </S.Icon>
      </S.Info>
    </S.Container>
  );
}
