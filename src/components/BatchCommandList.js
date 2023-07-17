import {
	Button,
	Divider,
	FormControl,
	Grid,
	InputLabel,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	MenuItem,
	Select,
	useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import BaseBox from "./BaseBox";
import ListHeader from "./ListHeader";

const BatchCommandList = ({ tasks }) => {
	console.log("tasks[0]?.Name", tasks[0].Name);
	const [selectedTask, setSelectedTask] = useState('');
	const [commands, setCommands] = useState(null);
	const theme = useTheme();

	const handleChange = (e) => {
		const task = tasks.find((t) => t.Name === e.target.value);
		if (task !== null) {
			setSelectedTask(task.Name);
			setCommands(task.Commands);
		}
	};

	const populateTasks = () => {
		return (
			tasks &&
			tasks.map((t, index) => (
				<MenuItem
					value={t.Name}
					key={index}
					sx={{ m: 0, fontSize: `${theme.typography.fontSize}` }}
				>
					{t.Name}
				</MenuItem>
			))
		);
	};

	const populateCommands = () => {
		return commands && commands.map((c, index) => (
			<ListItem disablePadding key={index}>
				<ListItemButton
					sx={{ height: 16 }}
					onContextMenu={(e) => e.preventDefault()}
					// onMouseUp={handleClick}
				>
					<ListItemText
						primaryTypographyProps={{
							fontSize: `${theme.typography.listItem.fontSize}`,
						}}
						primary={c.DisplayText}
					/>
				</ListItemButton>
			</ListItem>
		));
	};

	return (
		<BaseBox
			sx={{
				flex: "column",
			}}
		>
			<ListHeader name="Batch Commands" />
			<Divider />
			{/* <FormControl fullWidth> */}
			{/* <InputLabel id="demo-simple-select-label" sx={{mt: 1}}>Batch Commands</InputLabel> */}
			<Grid container sx={{ mt: 1 }}>
				<Grid item xs={8}>
					<FormControl fullWidth fontSize={theme.typography.listItem.fontSize}>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={selectedTask}
							// label="Age"
							onChange={(e) => handleChange(e)}
							sx={{ mt: 0, height: 25 }}
						>
							{populateTasks()}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={4}>
					<Button variant="contained" color="primary">
						Run
					</Button>
				</Grid>
			</Grid>
			{/* </FormControl> */}
			<Divider sx={{ mt: 1 }} />
			<List disablePadding dense={true} sx={{ mt: 1, mb: 1 }}>
				{populateCommands()}
			</List>
		</BaseBox>
	);
};

export default BatchCommandList;
