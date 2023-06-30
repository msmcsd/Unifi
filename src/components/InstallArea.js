import {
	Divider,
	FormControlLabel,
	TextField,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import ReducerAction from "../constants/ReducerAction";
import { CommandsContext } from "../contexts/CommandsContext";
import HorizontalDivider from "./shared/HorizontalDivider";
import ListHeader from "./ListHeader";

import ConfigRadioGroup from "./radiogroups/install/ConfigRadioGroup";
import ProductRadioGroup from "./radiogroups/install/ProductRadioGroup";
import InstallerRadioGroup from "./radiogroups/install/InstallerRadioGroup";
import InstallAsRadioGroup from "./radiogroups/install/InstallAsRadioGroup";
import InstallModeRadioGroup from "./radiogroups/install/InstallModeRadioGroup";

const InstallArea = ({ variables }) => {
	const {
		state: { uiSettings },
		dispatch,
	} = useContext(CommandsContext);

	const [isDebug, setIsDebug] = useState(uiSettings.compilemode === "Debug");

	const handleInstallFolderChange = (e) => {
		dispatch({
			type: ReducerAction.UpdateInstallFolder,
			payload: e.target.value,
		});
	};

	const handleIsDebugChange = (e) => {
		setIsDebug(e.target.checked);
		dispatch({
			type: ReducerAction.UpdateDebug,
			debug: e.target.checked ? "Debug" : "",
		});
	};

	return (
		<Box
			sx={{
				m: 1,
				// width: 220,
				borderRadius: 1,
				border: "1px solid grey",
			}}
			flex="column"
		>
			<ListHeader name="INSTALL" />
			<Divider />
			<Box display="flex" flexDirection="column">
				<FormControlLabel
					sx={{ ml: 1, mt: 2 }}
					control={<Typography />}
					label={<Box>Install Folder:</Box>}
				/>
				<TextField
					multiline
					value={uiSettings.cylancedesktopfolder}
					// inputProps={{ style: { fontSize: 12 } }}
					onChange={(e) => handleInstallFolderChange(e)}
				/>
			</Box>
			<HorizontalDivider text="Product" topPadding bottomPadding />
			<ProductRadioGroup />
			<HorizontalDivider text="Config" topPadding bottomPadding />
			<ConfigRadioGroup variables={variables} />
			<HorizontalDivider text="Installer" topPadding bottomPadding />
			<InstallerRadioGroup />
			<HorizontalDivider text="Install As" topPadding bottomPadding />
			<InstallAsRadioGroup />
			<HorizontalDivider text="Mode" topPadding bottomPadding />
			<InstallModeRadioGroup />
			<Divider />
		</Box>
	);
};

export default InstallArea;
