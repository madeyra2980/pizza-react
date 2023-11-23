import React from 'react'
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import {useDispatch, useSelector} from 'react-redux'
import PizzaBlock from "../components/PizzaBlock";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { useEffect, useState, useContext } from "react";
import Pagination from '../components/Pagination';
import { appContext } from '../App';
import {insertCategoryId} from '../redux/slices/filterSlice'
function Home() {

  const CategoryId = useSelector((state) => state.filter.CategoryId)
  const dispatch = useDispatch()
  const {searchValue} = useContext(appContext)
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)

  const pizzas = items.filter(obj => {

    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  }).map((obj, key) => (<PizzaBlock key={obj.id} {...obj} />))


  const skeleton = [...new Array(6)].map((_, key) => <Skeleton key={key} />)
  const [isLoading, setIsLoading] = useState(true)
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "raiting"
  });

  const сlickCategory = (id) => {
    dispatch(insertCategoryId(id))
  }
  useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes("-") ? 'asc' : 'desc'
    const sortBy = sortType.sortProperty.replace("-", " ")
    const category = CategoryId > 0 ? `category=${CategoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : " ";

    fetch(`https://65343efce1b6f4c59046a5a2.mockapi.io/items/test?page=${page}&limit=4&${category}&sortby=${sortBy}
    &order=${order}${search}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {

        setItems(arr)
        setIsLoading(false)
      })

    window.scrollTo(0, 0);
  }, [CategoryId, sortType, searchValue, page])
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={CategoryId} сlickCategory={(i) =>сlickCategory(i)} />
          <Sort sortValue={sortType} onClickSort={(i) => setSortType(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            isLoading ? skeleton : pizzas
          }
        </div>
        <Pagination PageChange={(number) => setPage(number)} pageCount={page} />
      </div>
    </>
  )
}

export default Home