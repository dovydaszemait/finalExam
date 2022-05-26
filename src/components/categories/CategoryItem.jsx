import React from "react";
import { Link } from "react-router-dom";
import * as S from "./CategoryItem.styles";

export default function CategoryItem({ item }) {
  return (
    <S.Container>
      <Link to={`/products/${item.cat}`}>
        <S.Image src={item.img} />
        <S.Info>
          <S.Title>{item.title}</S.Title>
          <S.Button>SHOP NOW</S.Button>
        </S.Info>
      </Link>
    </S.Container>
  );
}
