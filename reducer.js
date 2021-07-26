

export const initialState = {
    basket: [],
};

 const reducer = (state = initialState, action) => {
    switch(action.type) {
        //push item into basket array
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                //if item exists in basket, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn("Cannot remove product as it is not in basket.");
            }
            return { ...state, basket: newBasket,};

        default:
            return state;

    }
};

export default reducer;