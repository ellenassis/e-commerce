import React from 'react'

import { Container, Image, Info, Title, Button } from './styles';

export const CategoryItem = ({ item }) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop now</Button>
        </Info>
        
    </Container>
  )
}
