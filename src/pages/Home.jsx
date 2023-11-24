import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertCategoryId, setCurrentPage} from '../redux/slices/filterSlice';
import PizzaBlock from '../components/PizzaBlock';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';
import { appContext } from '../App';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import axios from 'axios';


function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const { searchValue } = useContext(appContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const pizzas = items
  .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
  .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  
  const skeleton = [...new Array(6)].map((_, key) => <Skeleton key={key} />);
  
  
  
  const onChangeCategory = (id) => dispatch(insertCategoryId(id))

  const onChangePage = number => dispatch(setCurrentPage(number))
 
   
  useEffect(() => {
    setIsLoading(true);
  
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', ' ');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
  
    axios.get(`https://65343efce1b6f4c59046a5a2.mockapi.io/items/test?page=${currentPage}&limit=4&${category}&sortby=${sortBy}&order=${order}${search}`)
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeleton : pizzas}</div>
        <Pagination  currentPage = {currentPage}  onChangePage={onChangePage} />
      </div>
    </>
  );
}

export default Home;