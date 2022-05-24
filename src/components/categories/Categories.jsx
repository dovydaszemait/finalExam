import React from "react";
import * as S from "./Categories.styles";
import { categories } from "../../data/data";
import CategoryItem from "./CategoryItem";

export default function Categories() {
  return (
    <S.Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </S.Container>
  );
}
