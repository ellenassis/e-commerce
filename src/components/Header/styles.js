import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div `
  border: 0.5px solid lightgray;  
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Language = styled.span `
    font-size: 16px;
    cursor: pointer;
    text-transform: uppercase;
`;

export const Input = styled.input `
  &:focus {
    outline: none;
  }
  
  border: none;
  background: transparent;
`;

export const Center = styled.div`
  flex: 1;
`;

export const Logo = styled.h1 `
  font-weight: bold;
  text-align: center;
  
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-transform: uppercase;
`;

export const MenuItem = styled.div `
  font-size: 16px;
  cursor: pointer;
  margin-left: 14px;
`;



