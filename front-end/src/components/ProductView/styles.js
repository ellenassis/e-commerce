import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 5vh;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 90vh;

  @media (max-width: 650px) {
    height: 50vh;
    margin-bottom: 20px;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Desc = styled.p`
  margin: 20px 0;

  @media (max-width: 650px) {
    margin: 20px 0 50px 0;
  }
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1150px) {
    width: 70%;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1150px) {
    width: 70%;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

export const Amount = styled.input`
  margin: 0px 5px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid var(--principal);
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 15px;
  border: 2px solid var(--principal);
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;
