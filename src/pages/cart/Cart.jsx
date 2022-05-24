import { Add, Remove } from "@mui/icons-material";
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
                  <S.ProductColor color="black" />
                  <S.ProductSize>
                    <b>Weight:</b>600g
                  </S.ProductSize>
                </S.Details>
              </S.ProductDetail>
              <S.PriceDetail>
                <S.ProductAmountContainer>
                  <Add />
                  <S.ProductAmount>2</S.ProductAmount>
                  <Remove />
                </S.ProductAmountContainer>
                <S.ProductPrice>$ 30</S.ProductPrice>
              </S.PriceDetail>
            </S.Product>
            <S.Hr />
            <S.Product>
              <S.ProductDetail>
                <S.Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <S.Details>
                  <S.ProductName>
                    <b>Product:</b>BURGEER
                  </S.ProductName>
                  <S.ProductId>
                    <b>ID:</b>2332323445
                  </S.ProductId>
                  <S.ProductColor color="red" />
                  <S.ProductSize>
                    <b>Weight:</b>12600g
                  </S.ProductSize>
                </S.Details>
              </S.ProductDetail>
              <S.PriceDetail>
                <S.ProductAmountContainer>
                  <Add />
                  <S.ProductAmount>2</S.ProductAmount>
                  <Remove />
                </S.ProductAmountContainer>
                <S.ProductPrice>$ 30</S.ProductPrice>
              </S.PriceDetail>
            </S.Product>
          </S.Info>
          <S.Summary>
            <S.SummaryTitle>ORDER SUMMARY</S.SummaryTitle>
            <S.SummaryItem>
              <S.SummaryItemText>Subtotal</S.SummaryItemText>
              <S.SummaryItemText>$ 80</S.SummaryItemText>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryItemText>Estimated shipping</S.SummaryItemText>
              <S.SummaryItemText>$ 5.90</S.SummaryItemText>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryItemText>Shipping Discount</S.SummaryItemText>
              <S.SummaryItemText>$ 5.90 </S.SummaryItemText>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryItemText type="total">Total</S.SummaryItemText>
              <S.SummaryItemText>$ 80</S.SummaryItemText>
            </S.SummaryItem>
            <S.Button>Checkuot</S.Button>
          </S.Summary>
        </S.Bottom>
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
}
