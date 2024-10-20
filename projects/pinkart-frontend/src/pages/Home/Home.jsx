import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ItemsDisplay from '../../components/ItemsDisplay/ItemsDisplay'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <ItemsDisplay category={category}/>
    </>
  )
}

export default Home