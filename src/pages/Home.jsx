import React from 'react'
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { useEffect, useState } from "react";

function Home() {
    const [items, setItems] = useState([])

    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
      fetch('https://65343efce1b6f4c59046a5a2.mockapi.io/items/test')
      .then((res)=>{
        return res.json()
      })
      .then((arr)=>{
        setTimeout(() => {
          setItems(arr)
          setIsLoading(false)      
        }, 1000);
      })
    }, [])
  return (

    <>
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
            {
              isLoading?[...new Array(6)].map((_,key)=><Skeleton 
                key={key}
              />):items.map((obj,key) => (
                <PizzaBlock
                  key={obj.id}
                  {...obj}
                />
              ))
            }
            </div>
          </div>
    </>
  )
}

export default Home