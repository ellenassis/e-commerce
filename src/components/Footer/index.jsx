import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import {
  Container,
  Left,
  Logo,
  Description,
  SocialMedia,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  Payment
} from "./styles";


export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Magic.</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Description>
        <SocialMedia>
          <SocialIcon color="3B5999">
              <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
              <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
              <Instagram  />
          </SocialIcon>
        </SocialMedia>
      </Left>
      <Center>
          <Title>Useful Links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Man Fashion</ListItem>
              <ListItem>Woman Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>
              <LocationOnIcon style={{marginRight: "10px"}} /> 622 Dixie Path, South 9833
          </ContactItem>
          <ContactItem>
              <LocalPhoneIcon style={{marginRight: "10px"}} /> +55 (11) 92222-2221
          </ContactItem>
          <ContactItem>
              <EmailIcon  style={{marginRight: "10px"}} /> magic@contact.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};
