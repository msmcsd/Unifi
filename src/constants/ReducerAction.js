const ReducerAction = {
	AddLog: "ADD_LOG", // Add a line of log to StatusGrid
	ClearLogs: "REMOVE_LOGS", // Clear all logs in StatusGrid
	UpdateConfig: "UPDATE_CONFIG", // Update config selection change on UI
	UpdateDebug: "UPDATE_DEBUG", // Update Debug change on UI
	UpdateInstallFolder: "UPDATE_INSTALL_FOLDER", // Update Install Folder change on UI
	Report: "REPORT",
	ClearReport: "CLEAR_REPORT",
	UpdateProduct: "UPDATE_PRODUCT",
	UpdateInstallInstallerType: "UPDATE_INSTALL_INSTALLER",
	UpdateInstallAs: "UPDATE_INSTALL_AS",
	UpdateInstallMode: "UPDATE_INSTALL_MODE",
	UpdateJenkins: "UPDATE_JENKINS",
	UpdateDownloadInstallerType: "UPDATE_DOWNLOAD_INSTALLER",
	UpdateBuildType: "UPDATE_BUILD_TYPE",
};

export default ReducerAction;
