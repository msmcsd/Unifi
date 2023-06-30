import { useContext, useState } from "react";
import ReducerAction from "../../constants/ReducerAction";
import { CommandsContext } from "../../contexts/CommandsContext";
import { populateRadioButtonGroupWithBox } from "../../shared/populateRadioGroup";

const jenkinsServers = ["Me", "BC", "Release"];

const JenkinsRadioGroup = () => {
	const {
		state: { uiSettings },
		dispatch,
	} = useContext(CommandsContext);

	const [jenkins, setJenkins] = useState(uiSettings.jenkins);

	const handleJenkinsChange = (e) => {
		// console.log("product=", e.target.value);
		setJenkins(e.target.value);

		dispatch({
			type: ReducerAction.UpdateJenkins,
			payload: { jenkins: `${e.target.value}` },
		});
	};

	return populateRadioButtonGroupWithBox(
		jenkinsServers,
		jenkins,
		handleJenkinsChange
	);
};

export default JenkinsRadioGroup;
