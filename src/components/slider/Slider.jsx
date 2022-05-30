import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import * as S from "./Slider.styles";
import { sliderItems } from "../../data/data";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  let navigate = useNavigate();
  const toShop = () => {
    let path = `/products/:category`;
    navigate(path);
  };

  return (
    <S.Cointainer>
      <S.Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </S.Arrow>
      <S.Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <S.Slide bg={item.bg} key={item.id}>
            <S.ImgContainer>
              <S.Image src={item.img} />
            </S.ImgContainer>
            <S.InfoContainer>
              <S.Title>{item.title}</S.Title>
              <S.Desc>{item.desc}</S.Desc>
              <S.Button onClick={toShop}>SHOP NOW</S.Button>
            </S.InfoContainer>
          </S.Slide>
        ))}
      </S.Wrapper>
      <S.Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </S.Arrow>
    </S.Cointainer>
  );
};

export default Slider;
