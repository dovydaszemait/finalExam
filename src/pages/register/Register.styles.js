import styled from "styled-components";

export const Cointainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://trek.scene7.com/is/image/TrekBicycleProducts/Roads_Buyer_Guide_Marquee_B?$responsive-pjpg$&cache=on,on&wid=1920")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
export const Inputs = styled.input`
  margin-right: 10px;
`;
export const Agreement = styled.span`
  display: flex;
  font-size: 12px;
  margin: 20px 0px;
`;
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    background-color: teal;
    opacity: 0.7;
  }
`;
