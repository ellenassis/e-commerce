import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;

  @media (max-width: 650px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  min-width: 10%;
`;

export const TopTexts = styled.div`
  display: flex;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

export const ShoppingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

export const ProductContainer = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Hr = styled.hr`
  border: 1px solid #eee;
`;

export const Image = styled.img`
  width: 200px;
`;

export const ProductInfo = styled.div`
  padding: 20px;
`;

export const ProductTitle = styled.h3`
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 15px;

  b {
    text-transform: none;
  }
`;

export const Id = styled.span``;

export const Color = styled.div`
  margin-top: 15px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: ${(props) => props.color};
`;

export const Size = styled.p`
  margin-top: 15px;
`;

export const ProductPrice = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AmountContainer = styled.div`
  display: flex;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Icon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Amount = styled.p`
  margin: 0 10px;
`;

export const Price = styled.p`
  font-size: 25px;
  font-weight: 300;
`;

export const SummaryContainer = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  height: 50vh;
  padding: 20px;

  @media (max-width: 650px) {
    margin-top: 15px;
  }
`;

export const SummaryTitle = styled.h3`
  font-weight: 200;
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 50px;
`;

export const SummaryItem = styled.div`
  margin-top: ${(props) => (props.type === "total" ? "50px" : "20px")};
  font-size: ${(props) => (props.type === "total" ? "20px" : "16px")};
  font-weight: ${(props) => (props.type === "total" ? "600" : "400")};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubTotal = styled.span``;

export const SubTotalPrice = styled.span``;

export const Shipping = styled.span``;

export const ShippingPrice = styled.span``;

export const Discount = styled.span``;

export const DiscountPrice = styled.span``;

export const Total = styled.span``;

export const TotalPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  margin-top: 50px;
`;
