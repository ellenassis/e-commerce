import React from 'react'
import { Announcement } from '../components/Announcement'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Categories } from '../components/Categories'
import { Product } from '../components/Product'
import { NewsLetter } from '../components/NewsLetter'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Product />
    </div>
  )
}
