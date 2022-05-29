import React from "react";
import { useNavigate } from "react-router-dom";
import Announcement from "../../components/announcement/Announcement";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NavbarUn from "../../components/navbarUn/NavbarUn";
import Newsletter from "../../components/newsletter/Newsletter";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";
import Register from "../register/Register";
import * as S from "./HomeAll.styles";

export default function HomeAll() {
  let navigate = useNavigate();
  const toSignin = () => {
    let path = `/login`;
    navigate(path);
  };
  const toRegister = () => {
    let path = `/register`;
    navigate(path);
  };

  return (
    <div>
      <Announcement />
      <NavbarUn />
      <S.Cointainer>
        <S.Wrapper>
          <S.Title> Sign in or register to shop </S.Title>
        </S.Wrapper>

        <S.Wrapper>
          <S.Button onClick={toSignin}>Sign in</S.Button>
          <S.Button onClick={toRegister}>Register</S.Button>
        </S.Wrapper>
      </S.Cointainer>
      <Slider />
      <Newsletter />
      <Footer />
    </div>
  );
}
