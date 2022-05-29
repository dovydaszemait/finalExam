import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import { addProduct } from "../../redux/cartRedux";
import { publicRequest } from "../../requestMethods";
import * as S from "./Product.styles";

export default function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        console.log(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  // const addToCart = () => {
  //   dispatch(
  //     addProduct({
  //       ...product,
  //       quantity
  //     }))

  let navigate = useNavigate();
  const toCart = () => {
    let path = `/cart`;
    navigate(path);
  };
  return (
    <S.Container>
      <Navbar />
      <Announcement />
      <S.Wrapper>
        <S.ImgContainer>
          <S.Image src={product.img} />
        </S.ImgContainer>
        <S.InfoContainer>
          <S.Title>{product.title}</S.Title>
          <S.Desc>{product.desc}</S.Desc>
          <S.Price>$ {product.price}</S.Price>
          <S.FilterContainer>
            <S.Filter>
              <S.FilterTitle>Color</S.FilterTitle>
              {product.color?.map((c) => (
                <S.FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </S.Filter>
            <S.Filter>
              <S.FilterTitle>Size</S.FilterTitle>
              <S.FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <S.FilterSizeOption key={s}>{s}</S.FilterSizeOption>
                ))}
              </S.FilterSize>
            </S.Filter>
          </S.FilterContainer>
          <S.AddContainer>
            <S.AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <S.Amount>{quantity}</S.Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </S.AmountContainer>
            <S.Button onClick={handleClick}>ADD TO CART</S.Button>
          </S.AddContainer>
        </S.InfoContainer>
      </S.Wrapper>
      <Newsletter />
      <Footer />
    </S.Container>
  );
}
