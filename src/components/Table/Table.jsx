import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortField } from '../../redux/table';
import s from './table.module.css';

const Table = React.memo(function () {
    const items = useSelector(state => state.table.items);
	const dispatch = useDispatch();

	const onFieldItem = (field) => {      
		dispatch(sortField(field));
	};
   
	return (
		<table className={s.table}>
			<thead className={s.table__head}>
				<tr className={s.table__row}>
					<th className={s.table__hight}>Дата</th>
					<th className={s.table__hight} onClick={()=>{onFieldItem("name")}}>Имя</th>
					<th	className={s.table__hight} onClick={()=>{onFieldItem("count")}}>Количество</th>
					<th className={s.table__hight} onClick={()=>{onFieldItem("distance")}}>Расстояние</th>
				</tr>
			</thead>
			<tbody className={s.table__body}>
				{items && items.map((user, i) => (
					<tr className={s.table__row} key={i}>
						<td className={s.table__down}>{user.date}</td>
						<td className={s.table__down}>{user.name}</td>
						<td className={s.table__down}>{user.count}</td>
						<td className={s.table__down}>{user.distance}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
})

export default Table;