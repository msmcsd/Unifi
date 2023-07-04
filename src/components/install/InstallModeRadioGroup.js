import { useContext, useState } from "react";
import ReducerAction from "../../constants/ReducerAction";
import { CommandsContext } from "../../contexts/CommandsContext";
import { populateRadioButtonGroupWithBox } from "../../shared/populateRadioGroup";

const installModes = ["Quiet", "With UI"];

const InstallModeRadioGroup = () => {
	const {
		state: { uiSettings },
		dispatch,
	} = useContext(CommandsContext);

	const [installMode, setInstallMode] = useState(uiSettings.installmode);

	const handleInstallModeChange = (e) => {
		// console.log("product=", e.target.value);
		setInstallMode(e.target.value);

		dispatch({
			type: ReducerAction.UpdateInstallMode,
			payload: {
				installmode: `${e.target.value}`,
			},
		});
	};

	return populateRadioButtonGroupWithBox(
		installModes,
		installMode,
		handleInstallModeChange
	);
};

export default InstallModeRadioGroup;
