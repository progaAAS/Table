import axios from "axios";

let initialState = {
    items: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1
}
 
 const tableReduser = (state = initialState, action) => {
     switch(action.type) {
         case "SET_TABLE":{
             return{
                ...state,
                items: action.payload
            };
        }
        case "SET_CURRENT_PAGE":{
            return{
               ...state,
               currentPage: action.payload
           };
       }
       case "SET_TOTAL_USERS_COUNT":{
        return{
           ...state,
           totalCount: action.payload
       };
   }
         default:
             return state;
     }
 }

export const getTable = (col, condition, text, currentPage) => (dispatch) => {
        axios.get(`http://localhost:3005/table?${col != null ? `${col}` : ""}${condition !=null ? `${condition}` : ""}=${text}&_page=${currentPage}&_limit=5`).then((req, res) =>{      
            dispatch(setUsersTotalCountAC(req.headers['x-total-count']))
            dispatch(setTable(req.data));
    })
}

export const setTable = (items) => 
     ({type: "SET_TABLE", payload: items})
 
export const setCurrentPage = (number) =>({type: "SET_CURRENT_PAGE", payload: number})
export const setUsersTotalCountAC = (totalCount) => ({type: "SET_TOTAL_USERS_COUNT", payload: totalCount })
 
 export default tableReduser;