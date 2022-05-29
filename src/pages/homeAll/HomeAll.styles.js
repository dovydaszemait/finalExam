import styled from "styled-components";

export const Cointainer = styled.div`
  width: 100vw;
  height: 60vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://trek.scene7.com/is/image/TrekBicycleProducts/TK21_WEB_B300_MTB_Marquee_SLIM?$responsive-pjpg$&cache=on,on&wid=1920")
      center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 2px;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  padding: 0;
  margin: 0;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 20px;
  margin: 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
