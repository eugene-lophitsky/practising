import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-reducer";
import {logger} from "./middleware/logger";
import {counter} from "./middleware/counter";
import favoritesReducer from "./reducers/favorites-reducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer,
    },
    middleware : [
        logger,
        counter,
    ],
});
