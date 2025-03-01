export const logger = store => next => action => {
    console.log("action", action);

    // Функция next применяет действие к хранилищу
    // и возвращает новое состояние хранилища
    let result = next(action);

    // Выводим в консоль новое состояние
    console.log("next state", store.getState());

    console.log('Количество обработанных действий: ', store.getState().cart.counter);

    return result;
};


