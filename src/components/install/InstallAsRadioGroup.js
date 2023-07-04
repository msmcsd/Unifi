import { useContext, useState } from "react";
import ReducerAction from "../../constants/ReducerAction";
import { CommandsContext } from "../../contexts/CommandsContext";
import { populateRadioButtonGroupWithBox } from "../../shared/populateRadioGroup";

const installerAs = ["Admin", "User"];

const InstallAsRadioGroup = () => {
	const {
		state: { uiSettings },
		dispatch,
	} = useContext(CommandsContext);

	const [installAs, setInstallAs] = useState(uiSettings.installas);

	const handleInstallAsChange = (e) => {
		// console.log("product=", e.target.value);
		setInstallAs(e.target.value);

		dispatch({
			type: ReducerAction.UpdateInstallAs,
			payload: {
				installas: `${e.target.value}`,
			},
		});
	};

	return populateRadioButtonGroupWithBox(
		installerAs,
		installAs,
		handleInstallAsChange
	);
};

export default InstallAsRadioGroup;
