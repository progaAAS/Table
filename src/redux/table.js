import axios from "axios";

let initialState = {
    items: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    condition: null,
    col: null
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
       case "SORT_FIELD":{           
        return{
           ...state,
           items: state.items.sort((a,b) => {return a[action.payload] > b[action.payload] ? 1 : -1})
       };
    }
         default:
             return state;
     }
 }

export const getTable = (col, condition, text, currentPage) => (dispatch) => {    
    let str;
    if(!col && !condition){        
        str = `_page=${currentPage}&_limit=5`
    }else{        
        str = col + condition + "=" + text + "&" + `_page=${currentPage}&_limit=5`
    }
    axios.get(`http://localhost:3005/table?${str}`).then((req, res) =>{   
        dispatch(setUsersTotalCountAC(req.headers['x-total-count']))
        dispatch(setTable(req.data));
    })
}

export const setTable = (items) => ({type: "SET_TABLE", payload: items}) 
export const setCurrentPage = (number) => ({type: "SET_CURRENT_PAGE", payload: number})
export const setUsersTotalCountAC = (totalCount) => ({type: "SET_TOTAL_USERS_COUNT", payload: totalCount })

export const setSortCondition = (condition) => ({type: "SET_SORT_CONDITION", payload: condition})
export const setCol = (col) => ({type: "SET_COL", payload: col})

export const sortField = (field) => ({type: "SORT_FIELD", payload: field})

export default tableReduser;