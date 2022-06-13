import React from 'react'
import { Products } from '../Products'
import { popularProducts } from '../../data';

import { Container } from './styles';

export const Product = () => {
  return (
    <Container>
      {popularProducts.map((item, key) => (
        <Products item={item} key={item.id} />
      ))}
    </Container>
  )
}
