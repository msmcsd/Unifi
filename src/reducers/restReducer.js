import ReducerAction from "../constants/ReducerAction";

export const restReducer = (state, action) => {
    switch (action.type) {
        case ReducerAction.AddLog:
            return [...state, action.payload];
        case ReducerAction.ClearLogs:
            return [];
        case ReducerAction.UpdateConfig:
            return {...state, config: action.payload};
        case ReducerAction.UpdateDebug:
            return {...state, debug: action.payload};
        case ReducerAction.UpdateInstallFolder:
            return {...state, installFolder: action.payload};
        default:
    }

}