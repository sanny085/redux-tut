import { ADD_TO_CART, REMOVE_TO_CART } from '../constants'
const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    
    switch (action.type) {
        case ADD_TO_CART:
           console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.payload}
            ]
        case REMOVE_TO_CART:
                console.warn("Remove reducer",action);
                console.warn("Remove reducer action payload",action.payload)
                console.log("Remove state",state);
               // state.pop();  
               return  state.map((e) =>  e.cardData?.value.filter(({id}) => id !== action.payload.id)) 
              
        default:
            return state
    }
}