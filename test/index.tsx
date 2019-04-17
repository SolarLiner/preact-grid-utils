import { render, h } from "preact";

import { Application } from "./app";

require("preact/debug");

const root = document.querySelector("#app");

render(<Application />, root);
