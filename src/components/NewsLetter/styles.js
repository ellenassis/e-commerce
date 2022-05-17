import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  background-color: $fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;

  @media (max-width: 650px) {
    font-size: 50px;
  }
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  @media (max-width: 650px) {
    font-size: 20px;
    padding: 0 10px;
    text-align: center;
  }
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;

  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: var(--principal);
  color: white;
  cursor: pointer;
`;
