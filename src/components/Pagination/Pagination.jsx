import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/table';
import s from './pagination.module.css';
import React from 'react';


const Pagination = React.memo(function Pagination(){
  const {pageSize, totalCount, currentPage} = useSelector(state => state.table); 
  const dispatch = useDispatch();

  let pageCount = Math.ceil(totalCount / pageSize);
  let pages = [];
  for(let i=1; i <= pageCount; i++){
    pages.push(i);
  }

  let onPageChanged = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  }

  return (
    <div className={s.pagination}>
        {pages.map(p=>{
          return <span className={currentPage === p && s.selectedPage} onClick={(e) => { onPageChanged(p); }}>{p}</span>
        })}
    </div>
  );
})

export default Pagination;
