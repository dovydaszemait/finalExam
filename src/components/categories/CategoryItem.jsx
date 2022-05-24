import React from "react";
import * as S from "./CategoryItem.styles";

export default function CategoryItem({ item }) {
  return (
    <S.Container>
      <S.Image src={item.img} />
      <S.Info>
        <S.Title>{item.title}</S.Title>
        <S.Button>SHOP NOW</S.Button>
      </S.Info>
    </S.Container>
  );
}
