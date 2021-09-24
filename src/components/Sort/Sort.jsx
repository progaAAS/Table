import React from 'react';
 import s from './sort.module.css';

let Sort = ({activeSortType, items, toggleVisiblePopup, visiblePopup, onSelectItem, activeLabel}) =>{

    return <div className={s.list_sort}>
        <div className={s.list_sort_label}>
            <p>Сортировка по: </p>
            <span className={s.list_sort} onClick={toggleVisiblePopup}>выбрать</span>
        </div>
        {visiblePopup && <div className={s.list_sort_popap}>
            <ul>
                {items && items.map((obj, index)=>(
                    <li 
                        onClick={()=>onSelectItem(obj.type)}
                        className={activeSortType === obj.type ? s.active : ""}
                        key={`${obj.type}_${index}`}>
                            {obj.name}</li>
                ))}
            </ul>
        </div>}
    </div>
}

export default Sort;