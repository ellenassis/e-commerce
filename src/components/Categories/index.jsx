import React from 'react'
import { CategoryItem } from '../CategoryItem';
import { categories } from '../../data';


import { Container } from './styles';

export const Categories = () => {
  return (
    <Container>
        {categories.map((item, key) => (
          <CategoryItem item={item} key={item.id} />
        ))}
    </Container>
  )
}
