import React from "react";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import * as S from "./Cart.styles";

export default function Cart() {
  return (
    <S.Container>
      <Navbar />
      <Announcement />
      <S.Wrapper>
        <S.Title>Your cart</S.Title>
        <S.Top>
          <S.TopButton>Continue shopping</S.TopButton>
          <S.TopTexts>
            <S.TopText>Shopping Bag(2)</S.TopText>
            <S.TopText>Your Wishlist(0)</S.TopText>
          </S.TopTexts>
          <S.TopButton type="filled">Checkout now</S.TopButton>
        </S.Top>
        <S.Bottom>
          <S.Info>
            <S.Product>
              <S.ProductDetail>
                <S.Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <S.Details>
                  <S.ProductName>
                    <b>Product:</b>PROTEIN
                  </S.ProductName>
                  <S.ProductId>
                    <b>ID:</b>65765858595
                  </S.ProductId>
                  <S.ProductColor />
                  <S.ProductSize>
                    <b>Weight:</b>500g
                  </S.ProductSize>
                </S.Details>
              </S.ProductDetail>
              <S.PriceDetail>price</S.PriceDetail>
            </S.Product>
          </S.Info>
          <S.Summary></S.Summary>
        </S.Bottom>
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
}
