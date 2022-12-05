import ReducerAction from "../constants/ReducerAction";

export const restReducer = (state, action) => {
    switch (action.type) {
        case ReducerAction.AddLog:
            //return state;
            // console.log(state, action.payload);
            return [...state, action.payload];
            // return [...state, {
            //     id: state.length + 1,
            //     type: action.log.type,
            //     log: action.log.log
            // }]
        case ReducerAction.ClearLogs:
            return [];
        default:
    }

}