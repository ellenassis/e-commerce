import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "./styles";
import { Badge } from "@mui/material";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>pt-br</Language>
          <SearchContainer>
            <Input placeholder="Pesquisar" />
            <SearchIcon style={{color: "gray", fontSize: "20px"}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MAGIC.</Logo>
        </Center>
        <Right>
          <MenuItem>Registrar</MenuItem>
          <MenuItem>Entrar</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
             <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
