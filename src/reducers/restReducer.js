import ReducerAction from "../constants/ReducerAction";

export const restReducer = (state, action) => {
    switch (action.type) {
        case ReducerAction.AddLog:
            return [...state, action.payload];
        case ReducerAction.ClearLogs:
            return [];
        default:
    }

}