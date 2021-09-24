import React from 'react';
import { useDispatch } from 'react-redux';
import useToggle from 'react-use-toggle';
import { setCol } from '../../redux/filter';
import Sort from '../Sort/Sort';


 const SortCol = React.memo(function SortCol({activeSortType, items}){

    let [visiblePopup, toggleVisiblePopup] = useToggle(false);

     const dispatch = useDispatch();

    const onSelectItem = (name) => {
      
         dispatch(setCol(name));
         toggleVisiblePopup(false);
      };
    
    return <Sort activeSortType={activeSortType} items={items} toggleVisiblePopup={toggleVisiblePopup} visiblePopup={visiblePopup} onSelectItem={onSelectItem}/>
})

export default SortCol;