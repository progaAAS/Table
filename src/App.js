import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.css';
import Pagination from './components/Pagination/Pagination';
import Table from './components/Table/Table';
import { getTable } from './redux/table';
import TableForm from './components/TableForm/TableForm';

function App() {
  console.log("App")
  const dispatch = useDispatch();
  const {currentPage, col, condition, items} = useSelector(state => state.table);
  const [ text, setText ] = useState('');

  useEffect(() => {
    dispatch(getTable(col, condition, text, currentPage))
  },[currentPage]);

  return (
    <div className={s.App}>
      <h1>Таблица</h1>
      <TableForm setText={setText} text={text}/>
      <Table/>
      <Pagination/>
    </div>
  );
}

export default App;
