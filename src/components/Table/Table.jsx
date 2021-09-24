import React from 'react';
import { useSelector } from 'react-redux';
import s from './table.module.css';

function Table({ data,  }) {

    const items = useSelector(state => state.table.items); 

	return (
		<table className={s.table}>
			<thead className={s.table__head}>
				<tr className={s.table__row}>
					<th className={s.table__hight}>Дата</th>
					<th className={s.table__hight}>
						Имя
					</th>
					<th
						className={s.table__hight}
					
					>
						Количество
					</th>
					<th
						className={s.table__hight}
						
					>
						Расстояние
					</th>
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
}

export default Table;