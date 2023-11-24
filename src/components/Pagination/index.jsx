import React from 'react'
import ReactPaginate from 'react-paginate'
import style from './pagination.module.scss'

function Pagination({currentPage, onChangePage}) {
  return (
    <ReactPaginate
    className={style.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={currentPage - 1}
  />
  );

}

export default Pagination