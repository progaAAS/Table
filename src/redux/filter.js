
let initialState = {
    condition: null,
    col: null
}
 
 const filterReduser = (state = initialState, action) => {
     switch(action.type) {
         case "SET_SORT_CONDITION":{
             return{
                ...state,
                condition: action.payload
            };
        }
        case "SET_COL":{
            return{
               ...state,
               col: action.payload
           };
        }
         default:
             return state;
     }
 }

 
 export const setSortCondition = (condition) => 
 ({type: "SET_SORT_CONDITION", payload: condition})

export const setCol = (col) => 
 ({type: "SET_COL", payload: col})
 
 
 export default filterReduser;