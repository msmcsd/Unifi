import ReducerAction from "../constants/ReducerAction";

export const restReducer = (state, action) => {
	switch (action.type) {
		// Logs
		case ReducerAction.AddLog:
			return { ...state, logs: [...state.logs, action.payload] };
		case ReducerAction.ClearLogs:
			return { ...state, logs: [] };

		// UI Settings
		case ReducerAction.UpdateConfig:
			return {
				...state,
				uiSetting: {
					getconfig: action.payload.config,
					gettoken: action.payload.token,
				},
			};
		case ReducerAction.UpdateDebug:
			return { ...state, uiSetting: { compilemode: action.payload } };
		case ReducerAction.UpdateInstallFolder:
			return { ...state, uiSetting: { cylancedesktopfolder: action.payload } };
		case ReducerAction.UpdateProduct:
			return { ...state, uiSetting: { product: action.payload } };
		case ReducerAction.UpdateInstallInstallerType:
			return { ...state, uiSetting: { installinstallertype: action.payload } };
		case ReducerAction.UpdateInstallAs:
			return { ...state, uiSetting: { installas: action.payload } };
		case ReducerAction.UpdateInstallMode:
			return { ...state, uiSetting: { installmode: action.payload } };
		case ReducerAction.UpdateJenkins:
			return { ...state, uiSetting: { jenkins: action.payload } };
		case ReducerAction.UpdateDownloadInstallerType:
			return { ...state, uiSetting: { downloadinstallertype: action.payload } };

		// Report
		case ReducerAction.Report:
			return { ...state, reports: JSON.parse(action.payload) };
		case ReducerAction.ClearReport:
			return { ...state, reports: [] };
		default:
	}
};
