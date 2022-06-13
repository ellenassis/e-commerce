import React, { useState } from "react";
import { slideData } from "../../data";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Button,
} from "./styles";

export const Hero = () => {
 const [slideIndex, setSlideIndex] = useState(0);

 const HandleClick = direction => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
 }

  return (
    <Container>
      <Arrow direction="left" onClick={() => HandleClick("left")}>
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideData.map((item, key) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>
                {item.description}
              </Description>
              <Button>{item.button}</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
    <Arrow direction="right" onClick={() => HandleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};
