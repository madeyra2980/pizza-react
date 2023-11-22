import React from 'react'
import ReactPaginate from 'react-paginate'
import style from './pagination.module.scss'

function Pagination({ PageChange }) {
  return (
    <ReactPaginate
    className={style.root}
    breakLabel="..."
    nextLabel=">"
    onPageChange={e=>PageChange(e.selected+1)}
    pageRangeDisplayed={4}
    pageCount={3}
    previousLabel="<"
    renderOnZeroPageCount={null}
  />
  )
}

export default Pagination