import React from 'react';
import { useDispatch } from 'react-redux';
import useToggle from 'react-use-toggle';
import { setSortCondition } from '../../redux/filter';
import Sort from '../Sort/Sort';

 const SortCondition = React.memo(function SortCondition({activeSortType, items}){
    let [visiblePopup, toggleVisiblePopup] = useToggle(false);

     const dispatch = useDispatch();

    const onSelectItem = (name) => {
      
         dispatch(setSortCondition(name));
         toggleVisiblePopup(false);
      };
    
    return <Sort activeSortType={activeSortType} items={items} toggleVisiblePopup={toggleVisiblePopup} visiblePopup={visiblePopup} onSelectItem={onSelectItem}/>
})

export default SortCondition;