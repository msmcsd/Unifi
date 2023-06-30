import { useContext, useState } from "react";
import ReducerAction from "../../../constants/ReducerAction";
import { CommandsContext } from "../../../contexts/CommandsContext";
import { populateRadioButtonGroupWithBox } from "../../../shared/populateRadioGroup";

const installerTypes = ["MSI", "Bootstrapper", "Upgrade"];

const InstallerRadioGroup = () => {
	const {
		state: { uiSettings },
		dispatch,
	} = useContext(CommandsContext);

	const [installerType, setInstallerType] = useState(
		uiSettings.installinstallertype
	);

	const handleInstallerChange = (e) => {
		// console.log("product=", e.target.value);
		setInstallerType(e.target.value);

		dispatch({
			type: ReducerAction.UpdateInstallInstallerType,
			payload: {
				installinstallertype: `${e.target.value}`,
			},
		});
	};

	return populateRadioButtonGroupWithBox(
		installerTypes,
		installerType,
		handleInstallerChange
	);
};

export default InstallerRadioGroup;
