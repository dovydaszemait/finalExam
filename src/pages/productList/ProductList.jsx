import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import Products from "../../components/products/Products";
import * as S from "./ProductList.styles";

export default function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <S.Cointainer>
      <Navbar />
      <Announcement />
      <S.Title>Bikes</S.Title>
      <S.FilterContainer>
        <S.Filter>
          <S.FilterText>Filter products:</S.FilterText>
          <S.Select name="color" onChange={handleFilters}>
            <S.Option disabled>Color</S.Option>
            <S.Option>white</S.Option>
            <S.Option>black</S.Option>
            <S.Option>red</S.Option>
            <S.Option>blue</S.Option>
            <S.Option>green</S.Option>
          </S.Select>
          <S.Select name="size" onChange={handleFilters}>
            <S.Option disabled>Size</S.Option>
            <S.Option>XS</S.Option>
            <S.Option>S</S.Option>
            <S.Option>M</S.Option>
            <S.Option>L</S.Option>
            <S.Option>XL</S.Option>
          </S.Select>
        </S.Filter>
        <S.Filter>
          <S.FilterText>Sort products:</S.FilterText>
          <S.Select onChange={(e) => setSort(e.target.value)}>
            <S.Option value="newest">Newest</S.Option>
            <S.Option value="asc">Price (asc)</S.Option>
            <S.Option value="desc">Price (desc)</S.Option>
          </S.Select>
        </S.Filter>
      </S.FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </S.Cointainer>
  );
}
