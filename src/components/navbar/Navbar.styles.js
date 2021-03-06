import styled from "styled-components";

export const Cointainer = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const SearchCointainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-content: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
`;

export const Center = styled.div`
  flex: 1;
`;
export const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  cursor: pointer;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export const List = styled.ul`
  margin: 5px;
  padding: 5px;
  list-style: none;
  gap: 30px;
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
