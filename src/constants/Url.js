import PORT from "./Port";

const BASE_URL = "http://localhost";
const API_BASE_URL = BASE_URL + ":" + PORT.API + "/Api";
const SOCKET_BASE_URL = BASE_URL + ":" + PORT.SOCKET;

const URL = {
    ALL_COMMANDS: API_BASE_URL + "/Commands",
    RUN_COMMAND: API_BASE_URL + "/Command",
    SHOW_COMMAND: API_BASE_URL + "/Command/Show",
    SOCKET: SOCKET_BASE_URL
}

export default URL;