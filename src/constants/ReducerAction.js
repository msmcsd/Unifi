const ReducerAction = {
  AddLog: "ADD_LOG",                            // Add a line of log to StatusGrid
  ClearLogs: "REMOVE_LOGS",                     // Clear all logs in StatusGrid
  UpdateConfig: "UPDATE_CONFIG",                // Update config selection change on UI
  UpdateDebug: "UPDATE_DEBUG",                  // Update Debug change on UI
  UpdateInstallFolder: "UPDATE_INSTALL_FOLDER", // Update Install Folder change on UI
  Report: "REPORT",
  ClearReport: "CLEAR_REPORT"
}

export default ReducerAction;