import { Add, Remove } from "@mui/icons-material";
import React from "react";

import {
  Container,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  ShoppingContainer,
  ProductContainer,
  Product,
  Hr,
  Image,
  ProductInfo,
  ProductTitle,
  Id,
  Color,
  Size,
  ProductPrice,
  AmountContainer,
  Icon,
  Amount,
  Price,
  SummaryContainer,
  SummaryTitle,
  SummaryItem,
  SubTotal,
  SubTotalPrice,
  Shipping,
  ShippingPrice,
  Discount,
  DiscountPrice,
  Total,
  TotalPrice,
  Button,
} from "./styles";

export const Cart = () => {
  return (
    <Container>
      <Title>Sua sacola</Title>
      <Top>
        <TopButton>Continue comprando</TopButton>
        <TopTexts>
          <TopText>sacola de compras(2)</TopText>
          <TopText>Sua lista de desejos(0)</TopText>
        </TopTexts>
        <TopButton type="filled">Comprar agora</TopButton>
      </Top>
      <ShoppingContainer>
        <ProductContainer>
          <Product>
            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
            <ProductInfo>
              <ProductTitle>
                <b>Produto: </b> Tênis Esportivo
              </ProductTitle>
              <Id>
                <b>ID:</b> 464615
              </Id>
              <Color color="black" />
              <Size>
                <b>Tamanho: </b> 36
              </Size>
            </ProductInfo>
            <ProductPrice>
              <AmountContainer>
                <Icon>
                  <Add />
                </Icon>
                <Amount>1</Amount>
                <Icon>
                  <Remove />
                </Icon>
              </AmountContainer>
              <Price>R$ 150,00</Price>
            </ProductPrice>
          </Product>
          <Hr />
          <Product>
            <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
            <ProductInfo>
              <ProductTitle>
                <b>Produto: </b> Camiseta Hakura
              </ProductTitle>
              <Id>
                <b>ID:</b> 589652
              </Id>
              <Color color="gray" />
              <Size>
                <b>Tamanho: </b> M
              </Size>
            </ProductInfo>
            <ProductPrice>
              <AmountContainer>
                <Icon>
                  <Add />
                </Icon>
                <Amount>2</Amount>
                <Icon>
                  <Remove />
                </Icon>
              </AmountContainer>
              <Price>R$ 50,00</Price>
            </ProductPrice>
          </Product>
        </ProductContainer>
        <SummaryContainer>
          <SummaryTitle>Finalizar a compra</SummaryTitle>
          <SummaryItem>
            <SubTotal>Subtotal</SubTotal>
            <SubTotalPrice>R$ 215,00</SubTotalPrice>
          </SummaryItem>
          <SummaryItem>
            <Shipping>Frete estimado</Shipping>
            <ShippingPrice>R$ 15,00</ShippingPrice>
          </SummaryItem>
          <SummaryItem>
            <Discount>Desconto de Frete</Discount>
            <DiscountPrice>R$ -15,00</DiscountPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <Total>Total</Total>
            <TotalPrice>R$ 200,00</TotalPrice>
          </SummaryItem>
          <Button>Comprar agora</Button>
        </SummaryContainer>
      </ShoppingContainer>
    </Container>
  );
};
