import ReducerAction from "../constants/ReducerAction";

export const restReducer = (state, action) => {
    switch (action.type) {
        case ReducerAction.AddLog:
            return [...state, action.payload];
        case ReducerAction.ClearLogs:
            return [];
        case ReducerAction.UpdateConfig:
            return {...state, getconfig: action.payload};
        case ReducerAction.UpdateDebug:
            return {...state, compilemode: action.payload};
        case ReducerAction.UpdateInstallFolder:
            return {...state, cylancedesktopfolder: action.payload};
        case ReducerAction.Report:
            return JSON.parse(action.payload);
        case ReducerAction.ClearReport:
            return [];
        default:
    }

}