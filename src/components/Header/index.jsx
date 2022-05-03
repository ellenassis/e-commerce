import React from "react";


import { Container, Wrapper, Left, Center, Right, Language } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>ENG</Language>
        </Left>
        <Center>TUDO BEM</Center>
        <Right>TCHAU</Right>
      </Wrapper>
    </Container>
  );
};
