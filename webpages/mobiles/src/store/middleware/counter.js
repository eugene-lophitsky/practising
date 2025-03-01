import {incrementCounter} from "../reducers/cart-reducer";

export const counter = store => next => action =>{
    next(incrementCounter());

    return next(action);
};
