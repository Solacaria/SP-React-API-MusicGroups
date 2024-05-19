import React from 'react'

export function PaginatorList(props) {

  //effective way to create an array with [0,1,2,3,4...]
  let nrP = (props.nrPaginatorDigits !== undefined) ? Number(props.nrPaginatorDigits) : 0;
  const pages = [...Array(nrP)?.keys()];

  const onPageChange = (e) => 
  {
    const curPage = e.target.dataset.pagenr;
    props.setCurrentPage(curPage);
    props.onPageChange({currentPage: curPage});
  }

  const onPageNext = (e) => 
  {
    const curPage = Number(props.currentPage);
    if (curPage < props.maxNrPages)
    {
        props.setCurrentPage(curPage + 1);
        props.onPageChange({currentPage: curPage + 1});
      }
  }

  const onPagePrev = (e) => 
  {
    const curPage = Number(props.currentPage);
    if (curPage > 0)
    {
        props.setCurrentPage(curPage - 1);
        props.onPageChange({currentPage: curPage - 1});
      }
  }

  return (
    <nav aria-label="List pagination">
    <ul className="pagination">
      <li className="page-item">
        <button className="page-link" aria-label="Previous" onClick={onPagePrev}>
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      {
        pages?.map ((i, idx) =>
        <li className="page-item" key={idx}><button className="page-link" data-pagenr={i} onClick={onPageChange}>{i}</button></li>
      )}
      <li className="page-item">
        <button className="page-link" aria-label="Next" onClick={onPageNext}>
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>
  )
}