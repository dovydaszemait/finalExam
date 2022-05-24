import React from "react";
import * as S from "./Products.styles";
import { popularProducts } from "../../data/data";
import Product from "./Product";

export default function Products() {
  return (
    <S.Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </S.Container>
  );
}
