import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { userRequest } from "../../requestMethods";
import * as S from "./Cart.styles";

const KEY = process.env.REACT_APP_STRIPE;

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(
    (cart) => {
      const makeRequest = async () => {
        try {
          const res = await userRequest.post("/checkout/payment", {
            tokenId: stripeToken.id,
            amount: 500,
          });
          navigate.push("/success", {
            stripeData: res.data,
            products: cart,
          });
        } catch {}
      };
      stripeToken && makeRequest();
    },
    [stripeToken, cart.total, navigate]
  );
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
            {cart.products.map((product) => (
              <S.Product>
                <S.ProductDetail>
                  <S.Image src={product.img} />
                  <S.Details>
                    <S.ProductName>
                      <b>Product:</b>
                      {product.title}
                    </S.ProductName>
                    <S.ProductId>
                      <b>ID:</b>
                      {product._id}
                    </S.ProductId>
                    <S.ProductColor color={product.color} />
                    <S.ProductSize>
                      <b>Weight:</b>
                      {product.size}
                    </S.ProductSize>
                  </S.Details>
                </S.ProductDetail>
                <S.PriceDetail>
                  <S.ProductAmountContainer>
                    <Add />
                    <S.ProductAmount>{product.quantity}</S.ProductAmount>
                    <Remove />
                  </S.ProductAmountContainer>
                  <S.ProductPrice>
                    $ {product.price * product.quantity}
                  </S.ProductPrice>
                </S.PriceDetail>
              </S.Product>
            ))}
          </S.Info>
          <S.Hr />
          <S.Summary>
            <S.SummaryTitle>ORDER SUMMARY</S.SummaryTitle>
            <S.SummaryItem>
              <S.SummaryItemText>Subtotal</S.SummaryItemText>
              <S.SummaryItemText>$ {cart.total}</S.SummaryItemText>
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
              <S.SummaryItemText>$ {cart.total}</S.SummaryItemText>
            </S.SummaryItem>
            <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <S.Button>Checkuot</S.Button>
            </StripeCheckout>
          </S.Summary>
        </S.Bottom>
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
}
