import Navigo from "navigo";

import { getHeader } from "./components/header/Header.js";


const app = document.getElementById("app");

const header = getHeader();

app.append(header);