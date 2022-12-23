import ReducerAction from "../constants/ReducerAction";

export const restReducer = (state, action) => {
    switch (action.type) {
        // Logs
        case ReducerAction.AddLog:
            return [...state, action.payload];
        case ReducerAction.ClearLogs:
            return [];
        
        // UI Settings
        case ReducerAction.UpdateConfig:
            return {...state, getconfig: action.payload.config, gettoken: action.payload.token};
        case ReducerAction.UpdateDebug:
            return {...state, compilemode: action.payload};
        case ReducerAction.UpdateInstallFolder:
            return {...state, cylancedesktopfolder: action.payload};
        
        // Report
        case ReducerAction.Report:
            return JSON.parse(action.payload);
        case ReducerAction.ClearReport:
            return [];
        default:
    }

}