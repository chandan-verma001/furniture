import React from 'react'
import Banner from '../components/home/banner'
import Design from '../components/home/design'
import Trusted from '../components/home/trustedby'
import Product from '../components/home/products'
import Chooseus from '../components/home/chooseus.js'
import Mordern from '../components/home/mordern'
import Review from '../components/home/review'

const Home = () => {
  return (
    <>
    <Banner/>
    <Design/>
    <Trusted/>
    <Product/>
    <Chooseus/>
    <Mordern/>
    <Review/>
    </>
  )
}

export default Home