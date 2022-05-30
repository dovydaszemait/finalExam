import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Footer.styles";

export default function Footer() {
  let navigate = useNavigate();
  const link1 = () => {
    let path = `/home`;
    navigate(path);
  };
  const link2 = () => {
    let path = `/cart`;
    navigate(path);
  };
  const link3 = () => {
    let path = `/products/:category`;
    navigate(path);
  };

  return (
    <S.Container>
      <S.Left>
        <S.Logo>natural.</S.Logo>
        <S.Desc>
          The most authentic cycling shop based in the heart of Vilnius circa
          1987. We sell a wide variety of bikes, do any bike repairs and
          services. We partnership with Giant, Cannondale, Bianchi, Felt, Focus
          and Trek.
        </S.Desc>
        <S.SocialContainer>
          <S.SocialIcon color="3B5999" onClick={link3}>
            <Facebook />
          </S.SocialIcon>
          <S.SocialIcon color="E4405F" onClick={link3}>
            <Instagram />
          </S.SocialIcon>
          <S.SocialIcon color="55ACEE" onClick={link3}>
            <Twitter />
          </S.SocialIcon>
          <S.SocialIcon color="E60023" onClick={link3}>
            <Pinterest />
          </S.SocialIcon>
        </S.SocialContainer>
      </S.Left>
      <S.Center>
        <S.Title>Navigation</S.Title>
        <S.List>
          <S.ListItem onClick={link1}>Home</S.ListItem>
          <S.ListItem onClick={link2}>Cart</S.ListItem>
          <S.ListItem onClick={link3}>Road bikes</S.ListItem>
          <S.ListItem onClick={link3}>Mountain bikes</S.ListItem>
          <S.ListItem onClick={link3}>Accessories</S.ListItem>
          <S.ListItem onClick={link3}>Terms</S.ListItem>
        </S.List>
      </S.Center>
      <S.Right>
        <S.Title>Contact us</S.Title>
        <S.ContactItem>
          <Room style={{ marginRight: "10px" }} /> Konstitucijos pr. 669-26,
          Vilnius, Lithuania LT-78783
        </S.ContactItem>
        <S.ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +370 616 08 245
        </S.ContactItem>
        <S.ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@natural.lt
        </S.ContactItem>
      </S.Right>
    </S.Container>
  );
}
