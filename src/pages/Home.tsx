import Hero from '@/components/common/Hero'
import ProductList from '@/components/product/ProductList'
import { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
        <Hero />
        <ProductList />
    </Fragment>
  )
}

export default Home