import URL from '../constants/Url';

export const fetchAllTasks = async () => {
    try {
        const response = await fetch(URL.ALL_COMMANDS);
        const data = await response.json();
        // if (!data.success)
        // {
        //     throw new Error(data.message);
        // }

        console.log("All command size=", data.length);
        return data;
        // setTasks(data);
        // setTasks(data.filter(t => t.commandGroup === 1))

    } catch (error) {
        console.log("fetchAllTasks error: ", error);
        return null;
    }
}

export const runCommand = async (parameters = []) => {
    
}