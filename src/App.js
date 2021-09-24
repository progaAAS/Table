import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.css';
import Pagination from './components/Pagination/Pagination';
import SortCol from './components/SortCondition/SortCol';
import SortCondition from './components/SortRow/SortCondition';
import Table from './components/Table/Table';
import { getTable } from './redux/table';

const sortCondition = [
  { name: 'равно', type: '' },
  { name: 'содержит', type: '_like' },
  { name: 'больше', type: '_gte' },
  { name: 'меньше', type: '_lte' }
];

const sortCol = [
  { name: 'Название', type: 'name' },
  { name: 'Количество', type: 'count' },
  { name: 'Расстояние', type: 'distance' },
];

function App() {

  const [text, changeText] = useState(null)

  const dispatch = useDispatch();
  const {condition, col} = useSelector(state => state.filter);
  const {currentPage} = useSelector(state => state.table);


  let handleArgumentChange = (e) =>{
    changeText(e.target.value);
  } 

  let Search = () => {
    dispatch(getTable(col, condition, text, currentPage));
  }

  useEffect(() => {
    dispatch(getTable(col, condition, text, currentPage))
      }, [currentPage]);

  return (
    <div className={s.App}>
      <h1>Таблица</h1>
      <div className={s.header}>
        <SortCol activeSortType={col} items={sortCol}/>
        <SortCondition activeSortType={condition} items={sortCondition}/>
        <input onChange={handleArgumentChange}></input>
        <button onClick={Search}>Поиск</button>
      </div>
      <Table/>
      <Pagination/>
    </div>
  );
}

export default App;
