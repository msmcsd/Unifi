import React, { createContext, useReducer } from "react";
import { restReducer } from "../reducers/restReducer";

const initialState = {
	logs: [],
	uiSettings: {
		getconfig: "r01",
		compilemode: "",
		cylancedesktopfolder: "C:\\Program Files\\123",
		gettoken: "DSDDE1OVnh1KK7k6D0Ibgm8U",
		product: "Protect",
		installinstallertype: "MSI",
		installas: "Admin",
		installmode: "Quiet",
		jenkins: "Me",
		downloadinstallertype: "MSI",
	},
	reports: [],
};

export const CommandsContext = createContext(initialState);

const CommandsContextProvider = (props) => {
	const [state, dispatch] = useReducer(restReducer, initialState);

	return (
		<CommandsContext.Provider value={{ state, dispatch }}>
			{props.children}
		</CommandsContext.Provider>
	);
};

export default CommandsContextProvider;
