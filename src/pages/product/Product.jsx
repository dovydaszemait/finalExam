import { Add, Remove } from "@mui/icons-material";
import React from "react";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import * as S from "./Product.styles";

export default function Product() {
  return (
    <S.Container>
      <Navbar />
      <Announcement />
      <S.Wrapper>
        <S.ImgContainer>
          <S.Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </S.ImgContainer>
        <S.InfoContainer>
          <S.Title>Lorem title</S.Title>
          <S.Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quia
            maiores quibusdam numquam, nihil consequuntur. Tenetur, cum et.
            Cumque non nisi fuga facere in aliquam nulla aspernatur labore vel
            expedita?
          </S.Desc>
          <S.Price>$ 20</S.Price>
          <S.FilterContainer>
            <S.Filter>
              <S.FilterTitle>Color</S.FilterTitle>
              <S.FilterColor color="black" />
              <S.FilterColor color="darkblue" />
              <S.FilterColor color="gray" />
            </S.Filter>
            <S.Filter>
              <S.FilterTitle>Size</S.FilterTitle>
              <S.FilterSize>
                <S.FilterSizeOption>XS</S.FilterSizeOption>
                <S.FilterSizeOption>S</S.FilterSizeOption>
                <S.FilterSizeOption>M</S.FilterSizeOption>
                <S.FilterSizeOption>L</S.FilterSizeOption>
                <S.FilterSizeOption>XL</S.FilterSizeOption>
              </S.FilterSize>
            </S.Filter>
          </S.FilterContainer>
          <S.AddContainer>
            <S.AmountContainer>
              <Remove />
              <S.Amount>1</S.Amount>
              <Add />
            </S.AmountContainer>
            <S.Button>ADD TO CART</S.Button>
          </S.AddContainer>
        </S.InfoContainer>
      </S.Wrapper>
      <Newsletter />
      <Footer />
    </S.Container>
  );
}
