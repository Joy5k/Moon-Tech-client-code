import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
}

const productReducer = (state = initialState, action) => {
    //If the product is already selected
    const selectedProduct =state.cart.find(product =>product._id === action.payload._id)
    switch(action.type){
        case ADD_TO_CART:
            //If the product is already selected then it will be returned for the functionality
            if (selectedProduct) {
                const newCart = state.cart.filter(product => product._id !== selectedProduct._id)
                selectedProduct.quantity = selectedProduct.quantity + 1;
                return {
                    ...state,
                    cart:[...newCart,selectedProduct]
                };
            }
            return {

                ...state,
                cart:[...state.cart, {...action.payload,quantity:1}]
            };
        case REMOVE_FROM_CART:
            
            return {
                ...state,
                cart:state.cart.filter(product=>product._id !== action.payload._id)
            };

        default:return state;
    }
}
export default productReducer;