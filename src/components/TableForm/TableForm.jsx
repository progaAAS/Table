import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTable, setCol, setSortCondition } from '../../redux/table';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import s from './tableForm.module.css';

const TableForm = React.memo(function({setText, text}) {
	const {col, condition, currentPage} = useSelector(state => state.table);
	const dispatch = useDispatch();

	function handleColChange(e) {
		dispatch(setCol(e.target.value))
	}
	function handleConditionChange(e) {
		dispatch(setSortCondition(e.target.value))
	}

	function onClearFilter() {
		dispatch(setCol(null))
		dispatch(setSortCondition(null))
		setText("");
	}

	function handleSubmit(e) {		
		e.preventDefault();
		dispatch(getTable(col, condition, text, currentPage))	
	}
   

	return (
		<form className={s.form}>
			<select name="name"onChange={handleColChange} required>
				<option value="">Поле...</option>
				<option value="name">Название</option>
				<option value="count">Количество</option>
				<option value="distance">Расстояние</option>
			</select>
			<select name="law" onChange={handleConditionChange} required>
				<option value="">Условие...</option>
				<option value="">Равно</option>
				<option value="_like">Содержит</option>
				<option value="_gte">Больше</option>
				<option value="_lte">Меньше</option>
			</select>
			<MyInput onChange={(e) => setText(e.target.value)} value={text} label="Поиск"/>
			<MyButton disabled={!col ? (!col ? true : true) : (!condition ? true : false)} onClick={handleSubmit}>Поиск</MyButton>
			<MyButton onClick={onClearFilter}>Сброс</MyButton>			
		</form>
	);
})

export default TableForm;