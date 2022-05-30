import styled from "styled-components";

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba (0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const Container = styled.div`
  //xflex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  background-color: white;
  box-shadow: 0.2px 0.2px rgba(0, 0, 0, 0.2);
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
export const Image = styled.img`
  height: 75%;
  width: 90%;
  z-index: 2;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #abdbe3;
    transform: scale(1.1);
  }
`;

export const Span = styled.div`
  display: flex;
  flex-direction: column;
  height: 1vh;
  align-items: center;
  justify-content: center;
  padding-top: 1vh;
  padding-bottom: 1vh;
  font-weight: 700;
  text-decoration: none;
`;
