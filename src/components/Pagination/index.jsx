import React from 'react'
import ReactPaginate from 'react-paginate'
import style from './pagination.module.scss'
function Pagination({ currentPage, onChangePage }) {
  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(selected) => onChangePage(selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}  // Используйте динамическое значение totalPages
      forcePage={currentPage-1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination