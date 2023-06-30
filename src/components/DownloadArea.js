import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import { populateRadioButtonGroupWithBox } from "../shared/populateRadioGroup";
import HorizontalDivider from "./shared/HorizontalDivider";
import ListHeader from "./ListHeader";
import JenkinsRadioGroup from "./download/JenkinsRadioGroup";
import DownloadInstallerRadioGroup from "./download/DownloadInstallerRadioGroup";

const installerTypes = ["MSI", "Bootstrapper", "Upgrade"];

const populateBuildTypes = () => {
	return (
		<Box display="flex" sx={{ ml: 2 }}>
			<FormControl>
				<RadioGroup
					row
					aria-labelledby="demo-radio-buttons-group-label"
					//value={selectedValue}
					name="radio-buttons-group"
					//onChange={(e) => changeEventHanlder(e)}
				>
					<FormControlLabel
						key="Me"
						value="Me"
						control={
							<Radio
								sx={{
									"& .MuiSvgIcon-root": {
										fontSize: 15,
									},
									pr: 0.5, // Space between radio button circle and its label
									pl: 0,
								}}
							/>
						}
						label={<Box>Me</Box>}
					/>
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

const DownloadArea = () => {
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
			<ListHeader name="DOWNLOAD" />
			<HorizontalDivider text="Jenkins" />
			<JenkinsRadioGroup />
			<HorizontalDivider text="Build" />
			{populateBuildTypes()}
			<HorizontalDivider text="Installer" />
			<DownloadInstallerRadioGroup />
		</Box>
	);
};

export default DownloadArea;
