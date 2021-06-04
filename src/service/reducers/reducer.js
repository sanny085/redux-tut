import { ADD_TO_CART, REMOVE_TO_CART } from '../constants'
const initialState = {
    cardData: []
}
export default function cardItems(state = initialState, action) {
    
    switch (action.type) {
        case ADD_TO_CART:
           console.warn("reducer",action)
           
                return {...state, cardData:[...state.cardData, action.payload] }
          
        case REMOVE_TO_CART: 
                console.warn("Remove reducer action payload",action.payload)
                console.log("Remove state",state.cardData);
               // state.pop();  
              return {...state,
                cardData:state.cardData.filter((subItem) => (
                       subItem.value.id !== action.payload.id
                 ))
        }
              
        default:
            return state;
    }
}