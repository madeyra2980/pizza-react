import React from 'react'
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { useEffect, useState } from "react";

function Home({searchValue}) {
  const [items, setItems] = useState([])

  const pizzas = items.filter(obj => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false
  }).map((obj, key) => (<PizzaBlock key={obj.id} {...obj} />))
  const skeleton = [...new Array(6)].map((_, key) => <Skeleton key={key} />)
  const [isLoading, setIsLoading] = useState(true)
  const [CategoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "raiting"
  });


  useEffect(() => {
    setIsLoading(true);
    const order = sortType.sortProperty.includes("-") ? 'asc' : 'desc'
    const sortBy = sortType.sortProperty.replace("-", " ")
    const category = CategoryId > 0 ? `category=${CategoryId}` : ''
    const search = searchValue?`&search=${searchValue}`:" ";
    fetch(`https://65343efce1b6f4c59046a5a2.mockapi.io/items/test?${category}&sortby=${sortBy}
    &order=${order}${search}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {

        setItems(arr)
        setIsLoading(false)
      })

    window.scrollTo(0, 0);
  }, [CategoryId, sortType, searchValue])
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={CategoryId} clickCategory={(i) => setCategoryId(i)} />
          <Sort sortValue={sortType} onClickSort={(i) => setSortType(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            isLoading ? skeleton : pizzas}
        </div>
      </div>
    </>
  )
}

export default Home