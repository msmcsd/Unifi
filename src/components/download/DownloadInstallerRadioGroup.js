import { useContext, useState } from "react";
import { CommandsContext } from "../../contexts/CommandsContext";
import ReducerAction from "../../constants/ReducerAction";
import { populateRadioButtonGroupWithBox } from "../../shared/populateRadioGroup";

const installerTypes = ["MSI", "Bootstrapper", "Upgrade"];

const DownloadInstallerRadioGroup = () => {
	const {
		state: { uiSettings },
		dispatch,
	} = useContext(CommandsContext);

	const [installerType, setInstallerType] = useState(
		uiSettings.downloadinstallertype
	);

	const handleInstallerChange = (e) => {
		// console.log("product=", e.target.value);
		setInstallerType(e.target.value);

		dispatch({
			type: ReducerAction.UpdateDownloadInstallerType,
			payload: {
				downloadinstallertype: `${e.target.value}`,
			},
		});
	};

	return populateRadioButtonGroupWithBox(
		installerTypes,
		installerType,
		handleInstallerChange
	);
};

export default DownloadInstallerRadioGroup;
