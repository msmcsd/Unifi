import { useContext, useState } from "react";
import { CommandsContext } from "../../../contexts/CommandsContext";
import { populateRadioButtonGroupWithBox } from "../../../shared/populateRadioGroup";

const configs = ["r01", "r02", "qa2", "qa2N"];

const ConfigRadioGroup = ({ variables }) => {
	const {
		state: { uiSettings },
		dispatch,
	} = useContext(CommandsContext);

	const [config, setConfig] = useState(uiSettings.getconfig);

	const handleConfigChange = (e) => {
		// const token = variables.find(
		// 	(v) => v.variable === e.target.value.toUpperCase() + "Token"
		// ).value;
		// console.log("token=", token);
		console.log("config=", e.target.value);
		setConfig(e.target.value);
		// dispatch({
		// 	type: ReducerAction.UpdateConfig,
		// 	payload: { config: e.target.value, token: `${token}` },
		// });
	};

	return populateRadioButtonGroupWithBox(configs, config, handleConfigChange);
};

export default ConfigRadioGroup;
