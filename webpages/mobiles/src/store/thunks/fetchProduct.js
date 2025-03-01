import {createAsyncThunk} from "@reduxjs/toolkit";

// Это асинхронное действие, вместо реального запроса на бэкенд
// мы будем использовать таймаут
export const fetchProduct = createAsyncThunk(
    "cart/fetchProduct",
    (productId) => {
        return new Promise((resolve) => {
            console.log(`get info from backend: ${productId}`);
            setTimeout(() => {
                // Представим, что бэкенд через три секунды
                // вернул нам вот эту информацию
                resolve({id: productId, name: "IPhone 13 Pro"});
            }, 3000);
        });
    });
