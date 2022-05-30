import styled from "styled-components";

export const Cointainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`;

export const Image = styled.img`
  height: 100%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 60px;
`;

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 22px;
  font-weight: 500px;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 15px;
  font-size: 22px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    background-color: #22272b;
    color: white;
    border: solid 1px grey;
  }
`;
